package org.sid.security.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
public class AuthRequestDto {
	private String grantType;
	private String username;
	private String password;
	private boolean withRefreshToken;
	private String refreshToken;
}
