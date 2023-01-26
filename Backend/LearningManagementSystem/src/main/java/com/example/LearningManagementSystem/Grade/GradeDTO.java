package com.example.LearningManagementSystem.Grade;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Component("gradedto")
public class GradeDTO {
	
	int grade_id;	//성적번호
	String user_id;	//구성원id
	int grade_type;	//시험타입
	int grade_score; //점수
	String grade_at; // 시험날짜
	String grade_date; //평가날짜
}
