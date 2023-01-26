package com.example.LearningManagementSystem.Entity.Board;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "boards")
@Data
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName; // 유저 정보 (ID)

    private String title; // 제목
    private String content; // 본문

    private LocalDateTime createAt;

    private LocalDateTime modifiedAt;

    @ToString.Exclude
    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
    private final Set<Comment> comments = new LinkedHashSet<>();
}
