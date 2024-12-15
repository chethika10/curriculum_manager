package com.uom.curriculum_manager.user;

import com.uom.curriculum_manager.security.token.Token;
import com.uom.curriculum_manager.security.token.TokenRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepo userRepo;
    private final TokenRepo tokenRepo;

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

    @Override
    public List<User> getAll() {
        return userRepo.getAll();
    }

    @Override
    public User removeUser(int id) {
        //log out the user
        List<Token> tokens=tokenRepo.findAllTokenByUser(id);
        tokenRepo.deleteAll(tokens);

        User user=userRepo.findById(id).orElse(null);
        userRepo.deleteById(id);
        return user;
    }
}
