package com.example.LearningManagementSystem.Grade;

import com.example.LearningManagementSystem.Grade.Extra.ExtraDTO;
import com.example.LearningManagementSystem.Grade.Extra.ExtraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;






@RestController
@CrossOrigin
@RequestMapping("/api")
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
		return gradeservice.getGradelist();
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
		gradeservice.InsertUserGrade(dto);
	}

//	개인별성적 수정
	@PostMapping("/grade/update/{user_id}/{grade_type}")
	public void UpdateUserGrade(@PathVariable String user_id,GradeDTO dto) {
		gradeservice.UpdateUserGrade(dto);
	}

}
