package com.example.LearningManagementSystem.Grade.Extra;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service("extraservice")
public class ExtraServiceImpl implements ExtraService{
	@Autowired
	@Qualifier("extradao")
	ExtraDAO dao;
	 
	@Override
	public void InsertUserExtra(ExtraDTO dto) {
		dao.InsertUserExtra(dto);
	}

	@Override
	public List<ExtraDTO> getUserExtra(String user_id) {
		return dao.getUserExtra(user_id);
	}

	@Override
	public void UpdateUserExtra(ExtraDTO dto) {
		dao.UpdateUserExtra(dto);
	}
}