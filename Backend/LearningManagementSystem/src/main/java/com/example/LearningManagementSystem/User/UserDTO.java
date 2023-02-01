package com.example.LearningManagementSystem.User;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDTO {
    private Long userNo;
    private String userId;
    private String userPassword;
    private String userName;
    private String userAddr;
    private String userPhone;
    private String userEmail;
    private String Role;
    private LocalDateTime userRegDate;
    private LocalDateTime userBirth;
    private String userStatus;

    public static UserDTO toDto(User user) {
        return new UserDTO(
                user.getUserNo(),
                user.getUserId(),
                user.getUserPassword(),
                user.getUserName(),
                user.getUserAddr(),
                user.getUserPhone(),
                user.getUserEmail(),
                user.getRole(),
                user.getUserRegDate(),
                user.getUserBirth(),
                user.getUserStatus()
        );
    }
}
