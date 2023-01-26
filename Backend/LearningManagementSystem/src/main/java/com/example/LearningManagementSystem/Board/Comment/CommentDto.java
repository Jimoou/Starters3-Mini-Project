package com.example.LearningManagementSystem.Board.Comment;

import com.example.LearningManagementSystem.Board.Board;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
