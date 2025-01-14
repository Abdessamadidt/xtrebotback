package org.sid.security.web;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import org.sid.security.dtos.AuthRequestDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.security.oauth2.jwt.JwtException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
	
	private JwtEncoder jwtEncoder;
	private JwtDecoder jwtDecoder;
	private AuthenticationManager authenticationManager;
	private UserDetailsService userDetailsService;

	
	
	public AuthController(JwtEncoder jwtEncoder, AuthenticationManager authenticationManager,JwtDecoder jwtDecoder,UserDetailsService userDetailsService) {
		this.jwtEncoder = jwtEncoder;
		this.jwtDecoder = jwtDecoder;
		this.authenticationManager = authenticationManager;
		this.userDetailsService = userDetailsService;
	}



	@PostMapping("/token")
	public ResponseEntity<Map<String, String>> jwtToken(@RequestBody AuthRequestDto authRequestDto){
		String subject=null;
		String scope=null;
		Authentication authentication=null;
		String grantType = authRequestDto.getGrantType();
	    String username = authRequestDto.getUsername();
	    String password = authRequestDto.getPassword();
	    boolean withRefreshToken = authRequestDto.isWithRefreshToken();
	    String refreshToken = authRequestDto.getRefreshToken();
		if(grantType.equals("password")) {
			authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(username, password)
					);	
			subject=authentication.getName();
			scope=authentication.getAuthorities()
					.stream().map(auth -> auth.getAuthority())
					.collect(Collectors.joining(" "));
		} else if(grantType.equals("refreshToken")) {
			if(refreshToken==null) {
				return new ResponseEntity<>(Map.of("errorMessage","Refresh token is required"),HttpStatus.UNAUTHORIZED);
			}
			Jwt decodeJwt = null;
			try {
				decodeJwt = jwtDecoder.decode(refreshToken);
			} catch (JwtException e) {
				return new ResponseEntity<>(Map.of("errorMessage",e.getMessage()),HttpStatus.UNAUTHORIZED);
			}
			subject = decodeJwt.getSubject();
			UserDetails userDetails = userDetailsService.loadUserByUsername(subject);
			Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();
			scope=authorities.stream().map(auth->auth.getAuthority()).collect(Collectors.joining(" "));
		}
		Map<String, String> idToken = new HashMap<>();
		Instant instant = Instant.now();
		JwtClaimsSet jwtClaimsSet = JwtClaimsSet.builder()
				.subject(subject)
				.issuedAt(instant)
				.expiresAt(instant.plus(withRefreshToken?1:5,ChronoUnit.MINUTES))
				.issuer("security-service")
				.claim("scope", scope)
				.build();
		
		String jwtAccessToken = jwtEncoder.encode(JwtEncoderParameters.from(jwtClaimsSet)).getTokenValue();
		idToken.put("accessToken", jwtAccessToken);
		if(withRefreshToken) {
			JwtClaimsSet jwtClaimsSetRefresh = JwtClaimsSet.builder()
					.subject(subject)
					.issuedAt(instant)
					.expiresAt(instant.plus(5,ChronoUnit.MINUTES))
					.issuer("security-service")
					.build();
			
			String jwtRefreshToken = jwtEncoder.encode(JwtEncoderParameters.from(jwtClaimsSetRefresh)).getTokenValue();
			idToken.put("refreshToken", jwtRefreshToken);
		}
		return new ResponseEntity<>(idToken,HttpStatus.OK);
	}
}
