package com.uom.curriculum_manager.security.token;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepo extends CrudRepository<Token,String> {
    @Query("SELECT t FROM Token t WHERE t.username = ?1")
    public Token findTokenByUserName(String username);

    // TODO: 2024-10-08 create way to remove not needed tokens from db.  

}