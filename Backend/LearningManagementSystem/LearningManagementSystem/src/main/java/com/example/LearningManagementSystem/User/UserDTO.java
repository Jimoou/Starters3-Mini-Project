package com.example.LearningManagementSystem.User;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Component("barddto")
public class UserDTO {
	// create table (컬럼 순서와 동일하게)
	int seq;
	String title, contents, writer;
	int viewcount;
	String writingtime;
	
}
