package com.example.LearningManagementSystem.Board.Comment;

import com.example.LearningManagementSystem.Board.Board;
import com.example.LearningManagementSystem.Board.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;


@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final BoardRepository boardRepository;

    @Transactional
    public CommentDTO postComment(Long boardId, CommentDTO commentDto){
        Comment comment = new Comment();
        comment.setUserName(commentDto.getUserName());
        comment.setContent(commentDto.getContent());

        Board board = boardRepository.findById(boardId).orElseThrow(() -> {
            return new IllegalArgumentException("Board를 찾을 수 없습니다.");
        });

        comment.setBoard(board);
        comment.setCreateAt(LocalDateTime.now());
        comment.setModifiedAt(null);
        commentRepository.save(comment);

        return CommentDTO.toDto(comment);
    }

    @Transactional
    public CommentDTO deleteComment(Long id){
        Comment comment = commentRepository.findById(id).orElseThrow(()->{
            return new IllegalArgumentException("댓글을 찾을 수 없습니다.");
        });
        commentRepository.delete(comment);
        return CommentDTO.toDto(comment);
    }

    @Transactional
    public CommentDTO updateComment(Long id, CommentDTO commentDto){
        Comment comment = commentRepository.findById(id).orElseThrow(()->{
            return new IllegalArgumentException("댓글을 찾을 수 없습니다.");
        });

        comment.setContent(commentDto.getContent());
        comment.setModifiedAt(commentDto.getModifiedAt());

        return CommentDTO.toDto(comment);
    }
}
