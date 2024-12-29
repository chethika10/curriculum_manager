package com.uom.curriculum_manager.user;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.TestPropertySource;

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
}
