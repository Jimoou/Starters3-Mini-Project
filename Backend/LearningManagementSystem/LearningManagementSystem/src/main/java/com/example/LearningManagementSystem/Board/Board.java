package com.example.LearningManagementSystem.Board;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name="board")
@Data
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String userName;

    private String title;

    private String content;

    private String category;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
