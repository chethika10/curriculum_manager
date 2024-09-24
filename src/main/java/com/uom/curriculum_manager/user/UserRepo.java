package com.uom.curriculum_manager.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends CrudRepository <User, Integer>{

    @Query(value = "SELECT * FROM user",nativeQuery = true)
    public List<User> getAllUsers();
}
