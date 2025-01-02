package com.uom.curriculum_manager.user;

import com.uom.curriculum_manager.security.token.Token;
import com.uom.curriculum_manager.security.token.TokenRepo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    @Mock
    private UserRepo userRepo;
    @Mock
    private TokenRepo tokenRepo;

    @InjectMocks
    private UserServiceImpl userService;

    @Test
    public void userService_changePassword_returnCorrectPassword(){
        User user= User.builder().userName("sahan2").password("1234").role(Role.ADMIN).build();
        User user2= User.builder().userName("sahan3").password("1234").role(Role.ADMIN).build();

        when(userRepo.findUserByUserName(Mockito.any(String.class))).
                thenReturn(user);
        when(userRepo.save(Mockito.any(User.class))).thenReturn(user);

        User user1=userService.changePassword("2345","sahan2");

        Assertions.assertThat(user1).isNotNull();
        Assertions.assertThat(user1.getPassword()).isEqualTo("2345");
    }
    @Test
    public void userService_removeUser_returnUser(){
        User user= User.builder().userName("sahan2").password("1234").role(Role.ADMIN).build();

        Token token=new Token();
        token.setUser(user);
        token.setToken("abc");
        token.setLoggedOut(false);
        List<Token> tokens=List.of(token);

        when(tokenRepo.findAllTokenByUser(Mockito.any(Integer.class))).thenReturn(tokens);

        when(userRepo.findById(Mockito.any(Integer.class))).thenReturn(java.util.Optional.ofNullable(user));

        assertAll(()->userService.removeUser(1));
    }
}
