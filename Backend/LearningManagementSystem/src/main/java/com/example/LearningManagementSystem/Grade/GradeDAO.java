package com.example.LearningManagementSystem.Grade;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;



@Mapper
@Repository("gradedao")
public interface GradeDAO {
	
	public List<Object> getGradelist();

	public List<GradeDTO> getUserGrade(String user_id);

	public int InsertUserGrade(GradeDTO dto);

	public int UpdateUserGrade(GradeDTO dto);
	
}

