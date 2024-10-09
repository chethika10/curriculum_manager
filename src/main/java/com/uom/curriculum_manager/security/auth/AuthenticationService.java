package com.uom.curriculum_manager.security.auth;

import com.uom.curriculum_manager.security.JwtService;
import com.uom.curriculum_manager.security.token.TokenRepo;
import com.uom.curriculum_manager.user.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepo repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final TokenRepo tokenRepo;

    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUserName(), request.getPassword() )
        );
        var user=repository.findUserByUserName(request.getUserName());
        var jwtToken=jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        removeOldToken(request.getUserName());
        return AuthenticationResponse.builder().token()
    }
    private void removeOldToken(String username){
        var token= tokenRepo.findTokenByUserName(username);
        if(token==null || token.getUsername().isEmpty()){
            return;
        }
        tokenRepo.delete(token);
    }
}
