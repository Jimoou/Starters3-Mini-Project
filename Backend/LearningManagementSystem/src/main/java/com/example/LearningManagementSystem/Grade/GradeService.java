package com.example.LearningManagementSystem.Grade;

import java.util.List;

public interface GradeService {

	List<Object> getGradelist();

	List<GradeDTO> getUserGrade(String user_id);

	void InsertUserGrade(GradeDTO dto);

	void UpdateUserGrade(GradeDTO dto);

}
