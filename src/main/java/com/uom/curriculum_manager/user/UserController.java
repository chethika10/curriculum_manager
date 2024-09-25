package com.uom.curriculum_manager.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserServiceImpl userService;

    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping("/getall")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = null;
        try {
            users = userService.getAllUsers();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }
    @PostMapping("/addorupdate")
    public ResponseEntity<List<String>> addOrUpdate(@RequestBody User user) {
        // System.out.println(user);
        //UserValidation validation=new UserValidation(userService);
        //String validationError=validation.validateUser(user);
        List<String> response = new ArrayList<>();
//        if(!validationError.equals("")){
//
//            response.add("0");
//            response.add(validationError);
//            return new ResponseEntity<List<String>>(response, HttpStatus.OK);
//        }
        //if (user.getId() == 0 &&( user.getRole().equals("ADMIN")||user.getRole().equals("TEACHER"))){
//        if(user.getId()==0) {
        try {
//                user.setEnabled(false);
//                user.setPassword(user.getRowPassword());
            user = userService.addOrUpdateUser(user);
        } catch (Exception e) {
            e.printStackTrace();
        }

        response.add("" + user.getId());
        return new ResponseEntity<List<String>>(response, HttpStatus.OK);
//        }
//        }else if(user.getId() == 0 && user.getRole().equals("STUDENT")){
//
//            try {
//                user.setEnabled(true);
//                user.setPassword(user.getRowPassword());
//                user = userService.addOrUpdateUser(user);
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//            response.add(""+user.getId());
//            return new ResponseEntity<List<String>>(response, HttpStatus.OK);
//        }
//        response.add("0");
//        response.add("No Role Selected");
//        return new ResponseEntity<List<String>>(response, HttpStatus.OK);
    }
}
