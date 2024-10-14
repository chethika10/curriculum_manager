package com.uom.curriculum_manager.security.auth;

import com.uom.curriculum_manager.user.Role;

public class AuthenticationResponse {

    private String accessToken;
    private String refreshToken;
    private Role role;

    public AuthenticationResponse(String accessToken, String refreshToken, Role role) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.role = role;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public Role getRole() {
        return role;
    }

    public String getRefreshToken() {
        return refreshToken;
    }
}
