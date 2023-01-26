package com.example.LearningManagementSystem.Board.Comment;

import com.example.LearningManagementSystem.Board.Board;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Table(name="comments")
public class Comment{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    private Board board; // 게시글 (ID)

    private String userName; // 유저 이름

    @Setter @Column(nullable = false, length = 500) private String content; // 본문

    private LocalDateTime createAt;

    private LocalDateTime modifiedAt;

}
