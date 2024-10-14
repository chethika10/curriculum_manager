package com.uom.curriculum_manager.security;

import com.uom.curriculum_manager.security.token.TokenRepo;
import com.uom.curriculum_manager.user.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class JwtService {

    // TODO: 2024-10-14 remove below line
//    private final static String SECRET_KEY="8fcd11e416631faf6fe5f6158630adbc6ff6d733a8683a6ef95de7b631047476";
    private final TokenRepo tokenRepo;

    @Value("${application.security.jwt.secret-key}")
    private String SECRET_KEY;

    @Value("${application.security.jwt.access-token-expiration}")
    private long accessTokenExpiration;
    @Value("${application.security.jwt.refresh-token-expiration}")
    private long refreshTokenExpiration;

    public String generateAccessToken(User user){
        String token= Jwts
                .builder()
                .subject(user.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis()+accessTokenExpiration))
                .signWith(getSignKey())
                .compact();
        return token;
    }
    public String generateRefreshToken(User user){
        String token= Jwts
                .builder()
                .subject(user.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis()+refreshTokenExpiration))
                .signWith(getSignKey())
                .compact();
        return token;
    }
    public <T> T extractClaim(String token, Function<Claims, T> resolver){
        Claims claims=extractAllClaims(token);
        return resolver.apply(claims);
    }
    public String extractUserName(String token){
        return extractClaim(token,Claims::getSubject);
    }

    public boolean isValid(String token, UserDetails user){
        String userName=extractUserName(token);

//        boolean isValidToken = tokenRepo.findTokenByToken(token).map(
//                t->!t.isLoggedOut()
//        ).orElse(false);

        boolean isValidToken =true;
        return userName.equals(user.getUsername()) && !isTokenExpired(token) && isValidToken;
    }

    public boolean isValidRefreshToken(String token, User user) {
        String userName=extractUserName(token);

        boolean isValidToken = tokenRepo.findTokenByToken(token).map(
                t->!t.isLoggedOut()
        ).orElse(false);

        return userName.equals(user.getUsername()) && !isTokenExpired(token) && isValidToken;

    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private SecretKey getSignKey(){
        byte[] keyBytes= Decoders.BASE64URL.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
    private Claims extractAllClaims(String token){
        return Jwts
                .parser()
                .verifyWith(getSignKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}
