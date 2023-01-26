package com.example.LearningManagementSystem.Grade;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.LearningManagementSystem.extra.ExtraDTO;
import com.example.LearningManagementSystem.extra.ExtraService;



@RestController
public class GradeController {
	
	@Autowired
	@Qualifier("gradeservice")
	GradeService gradeservice;
	
	@Autowired
	@Qualifier("extraservice")
	ExtraService extraservice;
	
	
//	전체구성원성적 목록
	@GetMapping("/grade")
	public List<Object> getGradelist() {
		List<Object> list = (List<Object>)gradeservice.getGradelist();
		return list;
	}
	
//	개인별성적 상세
	@GetMapping("/grade/{user_id}/{grade_id}")
	public List[] getUserGrade(@PathVariable String user_id) {
		List<GradeDTO> list = gradeservice.getUserGrade(user_id);
		List<ExtraDTO> extralist =extraservice.getUserExtra(user_id);
		List[] result = new List[2];
		result[0] = list;
		result[1] = extralist;
		return result;
	}

//	개인별성적 입력
	@PostMapping("/grade/insert/{user_id}/{grade_type}")
	public void InsertUserGrade(@PathVariable String user_id,GradeDTO dto) {
		int result = gradeservice.InsertUserGrade(dto);
		System.out.println("인서트성공 "+result);
	}

//	개인별성적 수정
	@PostMapping("/grade/update/{user_id}/{grade_type}")
	public void UpdateUserGrade(@PathVariable String user_id,GradeDTO dto) {
		int result = gradeservice.UpdateUserGrade(dto);
		System.out.println("업데이트성공 "+result);
	}
	
}
