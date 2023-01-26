package com.example.LearningManagementSystem.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//userImpl
@Service("userservice")
public class UserServiceImpl implements UserService {
	@Autowired
	UserDAO userDao;
	

	@Override
	public List<UserDTO> userList() {
		return userDao.userList();
	}


	@Override
	public UserDTO oneUser(String user_Id) {
		return userDao.oneUser(user_Id);
	}
	
}
