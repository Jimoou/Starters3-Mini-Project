package com.example.LearningManagementSystem.report;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Component("reportDto")
public class ReportDTO {
	int grade_id;	 //성적번호
	String user_id;	// 구성원id
	String report_name; //파일명
	String report_path; //파일경로
	String report_at; //제출시간
	

}
