package com.uom.curriculum_manager.security.auth;

import com.uom.curriculum_manager.user.Role;

public class AuthenticationResponse {

    private String token;
    private Role role;

    public AuthenticationResponse(String token, Role role) {
        this.token = token;
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public Role getRole() {
        return role;
    }
}
