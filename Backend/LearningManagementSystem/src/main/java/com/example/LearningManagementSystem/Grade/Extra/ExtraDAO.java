package com.example.LearningManagementSystem.Grade.Extra;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;


@Mapper
@Repository("extradao")
public interface ExtraDAO {
	
	public int InsertUserExtra(ExtraDTO dto);

	public List<ExtraDTO> getUserExtra(String user_id);

	public int UpdateUserExtra(ExtraDTO dto);
	
}
