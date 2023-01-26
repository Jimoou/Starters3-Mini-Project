package com.example.LearningManagementSystem;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.example.LearningManagementSystem.User"})
@MapperScan(basePackages = {"com.example.LearningManagementSystem.User"})
public class LearningManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearningManagementSystemApplication.class, args);
	}

}
