package com.example.LearningManagementSystem.User;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private final UserService userService;

    @ResponseStatus(HttpStatus.OK)
    @PutMapping("/users/update/{userNo}")
    public void updateUserStatus(@PathVariable Long userNo, @RequestBody UserDTO userDTO) {
        userService.updateUserStatus(userNo,userDTO);
    }
}
