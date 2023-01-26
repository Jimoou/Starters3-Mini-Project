package com.example.LearningManagementSystem.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("boardservice")
public class UserServiceImpl implements UserService {
	@Autowired
	UserDAO dao;
	
	@Override
	public int getTotalBoard() {
		return dao.getTotalBoard();
	}

	@Override
	public List<UserDTO> getBoardList(int limit) {
		return dao.getBoardList(limit);
	}

	@Override
	public int viewUp(UserDTO dto) {
		return dao.viewUp(dto);
	}

	@Override
	public UserDTO oneBoard(int seq) {
		return dao.oneBoard(seq);
	}

	@Override
	public int updateBoard(UserDTO dto) {
		return dao.updateBoard(dto);
	}

	@Override
	public int deleteBoard(int seq) {
		return dao.deleteBoard(seq);
	}

	@Override
	public int insertBoard(UserDTO dto) {
		return dao.insertBoard(dto);
	}

}
