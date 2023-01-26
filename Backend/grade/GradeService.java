package com.example.LearningManagementSystem.grade;

import java.util.List;

public interface GradeService {

	public List<Object> getGradelist();

	public List<GradeDTO> getUserGrade(String user_id);

	public int InsertUserGrade(GradeDTO dto);

	public int UpdateUserGrade(GradeDTO dto);

}
