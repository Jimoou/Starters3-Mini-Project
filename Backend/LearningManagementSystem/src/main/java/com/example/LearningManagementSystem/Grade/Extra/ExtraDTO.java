package com.example.LearningManagementSystem.Grade.Extra;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Component("extradto")
public class ExtraDTO {
	
	String user_id;		//구성원
	String extra_self;	//인재-자기주도성
	String extra_will;	//인재-배움의지
	String extra_attend;	//인재-수업참여도
	String extra_blog;	//블로그점수
	String extra_udemy;	//유데미
	String extra_task;	//과제점수
	String extra_final;	//최종프로젝트 평가
	String extra_at;	//평가일
	String extra_etc;	//비고
	
	
}
