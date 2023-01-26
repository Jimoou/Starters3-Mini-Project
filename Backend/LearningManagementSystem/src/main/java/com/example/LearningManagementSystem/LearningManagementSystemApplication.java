package com.example.LearningManagementSystem;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@ComponentScan(basePackages ={"Attendance"})
@MapperScan(basePackages = {"com/example/LearningManagementSystem/Attendance"})
public class LearningManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearningManagementSystemApplication.class, args);
	}

}
