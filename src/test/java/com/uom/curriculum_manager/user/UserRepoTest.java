package com.uom.curriculum_manager.user;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.TestPropertySource;

import java.util.List;

@DataJpaTest
@TestPropertySource("classpath:application-test.properties")
public class UserRepoTest {

    @Autowired
    private UserRepo userRepo;

    @Test
    public void userRepo_saveAll_ReturnSavedUser(){
        User user= User.builder().userName("sahan").password("1234").role(Role.ADMIN).build();


        User savedUser= userRepo.save(user);


        Assertions.assertThat(savedUser).isNotNull();
        Assertions.assertThat(savedUser.getId()).isGreaterThan(0);

    }
    @Test
    public void userRepo_getAllUsers_returnAllUsers() throws JsonProcessingException {
        User user= User.builder().userName("sahan2").password("1234").role(Role.ADMIN).build();
        User user2= User.builder().userName("sahan3").password("1234").role(Role.ADMIN).build();

        User savedUser= userRepo.save(user);
        User savedUser2= userRepo.save(user2);

        List<Object> allUsers=userRepo.getAllUsers();

        Assertions.assertThat(allUsers).isNotNull();

        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String json = ow.writeValueAsString(allUsers);

        System.out.println(json);

    }

    @Test
    public void userRepo_getAll_returnAll() throws JsonProcessingException {
        User user= User.builder().userName("sahan2").password("1234").role(Role.ADMIN).build();
        User user2= User.builder().userName("sahan3").password("1234").role(Role.ADMIN).build();

        User savedUser= userRepo.save(user);
        User savedUser2= userRepo.save(user2);

        List<User> users=userRepo.getAll();

        Assertions.assertThat(users).isNotNull();


        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String json = ow.writeValueAsString(users);

        System.out.println(json);
    }

    @Test
    public void userRepo_findUserByUsername_returnCorrectUser(){
        User user= User.builder().userName("sahan2").password("1234").role(Role.ADMIN).build();
        User user2= User.builder().userName("sahan3").password("1234").role(Role.ADMIN).build();

        User savedUser= userRepo.save(user);
        User savedUser2= userRepo.save(user2);

        User returnedUser= userRepo.findUserByUserName("sahan3");

        Assertions.assertThat(returnedUser).isNotNull();
        Assertions.assertThat(returnedUser.getUsername()).isEqualTo("sahan3");
    }
}
