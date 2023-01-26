package com.example.LearningManagementSystem.extra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.LearningManagementSystem.grade.GradeDTO;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class ExtraController {
	
	@Autowired
	@Qualifier("extraservice")
	ExtraService extraservice;
	
	//기타성적 입력
	@PostMapping("/extra/insert/{user_id}")
	public void InsertUserExtra(@PathVariable String user_id,ExtraDTO dto) {
		int result = extraservice.InsertUserExtra(dto);
		System.out.println("기타성적 인서트성공 "+result);
	}
	

//	개인별성적 수정
	@PostMapping("/extra/update/{user_id}")
	public void UpdateUserExtra(@PathVariable String user_Id,ExtraDTO dto) {
		int result = extraservice.UpdateUserExtra(dto);
		System.out.println("기타성적 업데이트성공 "+result);
	}
	
	
}
