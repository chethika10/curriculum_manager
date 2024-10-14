package com.uom.curriculum_manager.security.auth;

import com.uom.curriculum_manager.security.JwtService;
import com.uom.curriculum_manager.security.token.Token;
import com.uom.curriculum_manager.security.token.TokenRepo;
import com.uom.curriculum_manager.user.User;
import com.uom.curriculum_manager.user.UserRepo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
        String accessToken=jwtService.generateAccessToken(user);
        String refreshToken=jwtService.generateRefreshToken(user);

        List<Token> validTokenListByUser=tokenRepo.findAllTokenByUser(user.getId());
        if(!validTokenListByUser.isEmpty()){
            validTokenListByUser.forEach(
                    t->{t.setLoggedOut(true);
                    }
            );
        }
//        tokenRepo.saveAll(validTokenListByUser);
        tokenRepo.deleteAll(validTokenListByUser);
        Token token1=new Token();

        token1.setToken(refreshToken);
        token1.setLoggedOut(false);
        token1.setUser(user);
//        Token token1=new Token();
//        token1.setToken(accessToken);
//        token1.setLoggedOut(false);
//        token1.setUser(user);
        tokenRepo.save(token1);
        return new AuthenticationResponse(accessToken,refreshToken,user.getRole());
    }

    public ResponseEntity<AuthenticationResponse> refreshToken(HttpServletRequest request, HttpServletResponse response) {

        String authHeader=request.getHeader("Authorization");
        //System.out.println(authHeader);
        if(authHeader==null ||!authHeader.startsWith("Bearer ")){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        String token=authHeader.substring(7);
        String username=jwtService.extractUserName(token);
        User user=userRepo.findUserByUserName(username);

        if(jwtService.isValidRefreshToken(token,user)){
            String accessToken=jwtService.generateAccessToken(user);
            return new ResponseEntity<>(new AuthenticationResponse(accessToken,token,user.getRole()),HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);

    }
}
