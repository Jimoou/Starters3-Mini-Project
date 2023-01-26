package com.example.LearningManagementSystem.User;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
// UserDAO
@Mapper
@Repository("userdao")
public interface UserDAO {
	public List<UserDTO> userList();
	public UserDTO oneUser(String user_Id);
	
}
