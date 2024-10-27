package org.sid.security.web;

import java.util.Map;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestRestAPI {
	
	@GetMapping("/testData")
	@PreAuthorize("hasAuthority('SCOPE_USER')")
	public Map<String, Object> testData(Authentication authentication){
		return Map.of(
				"message","Data test",
				"username",authentication.getName(),
				"authorities",authentication.getAuthorities()
				);
	}
	
	@PostMapping("/saveData")
	@PreAuthorize("hasAuthority('SCOPE_ADMIN')")
	public Map<String, String> saveData(String data){
		return Map.of("dataSaved",data);
	}
}
