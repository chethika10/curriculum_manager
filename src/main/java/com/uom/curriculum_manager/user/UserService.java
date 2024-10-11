package com.uom.curriculum_manager.user;

import java.util.List;

public interface UserService {

    public List<Object> getAllUsers();
    public User addOrUpdateUser(User user);

    User changePassword(String password, String name);
}
