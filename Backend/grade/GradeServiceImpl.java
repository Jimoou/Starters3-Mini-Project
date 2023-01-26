package com.example.LearningManagementSystem.grade;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("gradeservice")
public class GradeServiceImpl implements GradeService{
	@Autowired
	GradeDAO dao;

	@Override
	public List<Object> getGradelist() {
		return dao.getGradelist();
	}

	@Override
	public List<GradeDTO> getUserGrade(String user_id) {
		return dao.getUserGrade(user_id);
	}

	@Override
	public int InsertUserGrade(GradeDTO dto) {
		return dao.InsertUserGrade(dto);
	}

	@Override
	public int UpdateUserGrade(GradeDTO dto) {
		return dao.UpdateUserGrade(dto);
	}

	
}
