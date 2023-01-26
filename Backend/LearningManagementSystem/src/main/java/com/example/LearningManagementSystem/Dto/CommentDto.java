package com.example.LearningManagementSystem.Dto;

import com.example.LearningManagementSystem.Entity.Board.Board;
import com.example.LearningManagementSystem.Entity.Board.Comment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {
    private Long id;
    private Board board;
    private String userName;
    private String content;
    private LocalDateTime createAt;
    private LocalDateTime modifiedAt;

    public static CommentDto toDto(Comment comment) {
        return new CommentDto(
                comment.getId(),
                comment.getBoard(),
                comment.getUserName(),
                comment.getContent(),
                comment.getCreateAt(),
                comment.getModifiedAt()
        );
    }
}
