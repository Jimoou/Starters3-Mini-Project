package com.example.LearningManagementSystem.extra;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("extraservice")
public class ExtraServiceImpl implements ExtraService{
	@Autowired
	ExtraDAO dao;
	 
	@Override
	public int InsertUserExtra(ExtraDTO dto) {
		return dao.InsertUserExtra(dto);
	}

	@Override
	public List<ExtraDTO> getUserExtra(String user_id) {
		return dao.getUserExtra(user_id);
	}

	@Override
	public int UpdateUserExtra(ExtraDTO dto) {
		return dao.UpdateUserExtra(dto);
	}
}