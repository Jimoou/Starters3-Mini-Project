package com.example.LearningManagementSystem.User;

import java.util.List;

public interface UserService {
	
	public List<UserDTO> userList();
	public UserDTO oneUser(String user_Id);
	
}
