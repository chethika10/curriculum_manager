package com.uom.curriculum_manager.security;

import com.uom.curriculum_manager.security.token.Token;
import com.uom.curriculum_manager.security.token.TokenRepo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CustomLogoutHandler implements LogoutHandler {

    private final TokenRepo tokenRepo;
    @Override
    public void logout(HttpServletRequest request,
                       HttpServletResponse response,
                       Authentication authentication) {

        String authHeader=request.getHeader("Authorization");
        if(authHeader==null ||!authHeader.startsWith("Bearer ")){

            return;
        }
        String token=authHeader.substring(7);
        Token storedToken=tokenRepo.findTokenByToken(token).orElse(null);
        if(storedToken!=null){
            storedToken.setLoggedOut(true);
//            tokenRepo.save(storedToken);
            tokenRepo.delete(storedToken);
        }
    }
}
