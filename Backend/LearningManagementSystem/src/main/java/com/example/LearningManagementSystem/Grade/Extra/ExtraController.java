package com.example.LearningManagementSystem.Grade.Extra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ExtraController {
	
	@Autowired
	@Qualifier("extraservice")
	ExtraService extraservice;
	
	//기타성적 입력
	@PostMapping("/extra/insert/{user_id}")
	public void InsertUserExtra(@PathVariable String user_id, ExtraDTO dto) {
		extraservice.InsertUserExtra(dto);
	}
	

//	개인별성적 수정
	@PostMapping("/extra/update/{user_id}")
	public void UpdateUserExtra(@PathVariable String user_id,ExtraDTO dto) {
		extraservice.UpdateUserExtra(dto);
	}
}
