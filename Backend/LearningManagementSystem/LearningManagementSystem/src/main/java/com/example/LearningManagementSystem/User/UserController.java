package com.example.LearningManagementSystem.User;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	@Autowired
	@Qualifier("userservice")
	private UserService userService;
	
	@GetMapping("/User")
	public List<Object> user() {
		List<Object> all = new ArrayList<Object>();
		all.add(userService.userList());
		return all;
	}
	
	@GetMapping("/User/{user_Id}")
	public List<Object> oneUser(@PathVariable("user_Id") String user_Id) {
		List<Object> all = new ArrayList<Object>();
		all.add(userService.oneUser(user_Id));
		return all;
	}	
	
	
}