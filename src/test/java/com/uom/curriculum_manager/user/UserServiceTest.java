package com.uom.curriculum_manager.user;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    @Mock
    private UserRepo userRepo;

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
}
