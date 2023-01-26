package com.example.LearningManagementSystem.User;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "user")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long userNo;

    @Column(nullable = false)
    private String userId;

    @Column(nullable = false)
    private String userPassword;

    @Column(nullable = false)
    private String userName;

    private String userAddr;

    private String userPhone;

    private String userEmail;

    private String Role;

    private LocalDateTime userRegDate;

    private LocalDateTime userBirth;

    private Long userStatus;
}
