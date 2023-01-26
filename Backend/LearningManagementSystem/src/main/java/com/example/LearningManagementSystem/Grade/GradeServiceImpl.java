package com.example.LearningManagementSystem.Grade;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;


@Service("gradeservice")
public class GradeServiceImpl implements GradeService{
	@Autowired
	@Qualifier("gradedao")
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
	public void InsertUserGrade(GradeDTO dto) {
		dao.InsertUserGrade(dto);
	}

	@Override
	public void UpdateUserGrade(GradeDTO dto) {
		dao.UpdateUserGrade(dto);
	}

	
}
