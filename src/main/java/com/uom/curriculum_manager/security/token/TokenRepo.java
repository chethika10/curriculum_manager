package com.uom.curriculum_manager.security.token;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TokenRepo extends JpaRepository<Token, Integer> {

    @Query("SELECT t from Token t inner join User u on t.user.id = :userId and t.loggedOut=false ")
    List<Token> findAllTokenByUser(int userId);

    Optional<Token> findTokenByToken(String token);
}
