package com.uom.curriculum_manager.user;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userService;
    private final PasswordEncoder passwordEncoder;

//    @Autowired
//    public UserController(UserServiceImpl userService) {
//        this.userService = userService;
//    }

    @GetMapping("/getall")
    public ResponseEntity<List<Object>> getAllUsers() {
        List<Object> users = null;
        try {
            users = userService.getAllUsers();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<List<Object>>(users, HttpStatus.OK);
    }
    @PostMapping("/editpassword")
    public ResponseEntity<User> editPassword(@RequestBody User user, Principal principal){

//        System.out.println(user.getPassword());
        User user1=userService.changePassword(passwordEncoder.encode(user.getPassword()),principal.getName());
        user1.setPassword(null);
        return new ResponseEntity<>(user1,HttpStatus.OK);

    }
    @PostMapping("/addorupdate")
    public ResponseEntity<List<String>> addOrUpdate(@RequestBody User user) {
        List<String> response = new ArrayList<>();
        try {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user = userService.addOrUpdateUser(user);
        } catch (Exception e) {
            e.printStackTrace();
        }

        response.add("" + user.getId());
        return new ResponseEntity<List<String>>(response, HttpStatus.OK);
    }
}
