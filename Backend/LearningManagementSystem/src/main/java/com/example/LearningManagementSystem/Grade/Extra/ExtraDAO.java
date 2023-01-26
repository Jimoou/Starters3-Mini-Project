package com.example.LearningManagementSystem.Grade.Extra;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository("extradao")
public interface ExtraDAO {
	
	public int InsertUserExtra(ExtraDTO dto);

	public List<ExtraDTO> getUserExtra(String user_id);

	public int UpdateUserExtra(ExtraDTO dto);
	
}
