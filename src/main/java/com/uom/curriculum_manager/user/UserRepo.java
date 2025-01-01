package com.uom.curriculum_manager.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends CrudRepository <User, Integer>{

    @Query(value = "SELECT u.id,u.userName, u.role FROM User u")
    public List<Object> getAllUsers();

    public User findUserByUserName(String userName);

    @Query(value = "SELECT u from User u")
    public List<User> getAll();
}
