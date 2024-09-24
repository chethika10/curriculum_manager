package com.uom.curriculum_manager.user;

import java.util.List;

public interface UserService {

    public List<User> getAllUsers();
    public User addOrUpdateUser(User user);
}
