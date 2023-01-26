package board.spring.mybatis;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import mybatis.MemberDTO;

@Mapper
@Repository("boarddao")
public interface BoardDAO {
	public int getTotalBoard();
	public List<BoardDTO> getBoardList(int limit);
	public int viewUp(BoardDTO dto);
	public BoardDTO oneBoard(int seq);
	public int updateBoard(BoardDTO dto); 
	public int deleteBoard(int seq);
	public int insertBoard(BoardDTO dto);
}
