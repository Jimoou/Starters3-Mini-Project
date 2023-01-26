package com.example.LearningManagementSystem.User;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository("boarddao")
public interface UserDAO {
	public int getTotalBoard();
	public List<UserDTO> getBoardList(int limit);
	public int viewUp(UserDTO dto);
	public UserDTO oneBoard(int seq);
	public int updateBoard(UserDTO dto); 
	public int deleteBoard(int seq);
	public int insertBoard(UserDTO dto);
}
