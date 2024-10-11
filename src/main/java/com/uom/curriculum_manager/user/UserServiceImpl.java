package com.uom.curriculum_manager.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepo userRepo;

    @Autowired
    public UserServiceImpl(UserRepo userRepo) {
        this.userRepo=userRepo;
    }
    @Override
    public List<Object> getAllUsers() {
        return  userRepo.getAllUsers();
    }
    @Override
    public User addOrUpdateUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User changePassword(String password, String name) {
        User user=userRepo.findUserByUserName(name);
        user.setPassword(password);
        userRepo.save(user);
        return user;
    }
}
