package com.uom.curriculum_manager.security.auth;

import com.uom.curriculum_manager.security.JwtService;
import com.uom.curriculum_manager.security.token.Token;
import com.uom.curriculum_manager.security.token.TokenRepo;
import com.uom.curriculum_manager.user.User;
import com.uom.curriculum_manager.user.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final TokenRepo tokenRepo;

    public AuthenticationResponse authenticate(User request){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        User user=userRepo.findUserByUserName(request.getUsername());
        String token=jwtService.generateToken(user);

        List<Token> validTokenListByUser=tokenRepo.findAllTokenByUser(user.getId());
        if(!validTokenListByUser.isEmpty()){
            validTokenListByUser.forEach(
                    t->{t.setLoggedOut(true);
                    }
            );
        }
        tokenRepo.saveAll(validTokenListByUser);

        Token token1=new Token();
        token1.setToken(token);
        token1.setLoggedOut(false);
        token1.setUser(user);
        tokenRepo.save(token1);
        return new AuthenticationResponse(token,user.getRole());
    }
}
