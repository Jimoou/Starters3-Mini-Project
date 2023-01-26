package com.example.LearningManagementSystem.User;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

//UserDTO
@Getter
@Setter
@Component("userdto")
public class UserDTO {
	String user_Id, user_Pw, user_Name, user_Addr, user_phone, user_Brith, user_Email;
	int user_Admin;
	String user_RegDate;
	int user_Status;
}
