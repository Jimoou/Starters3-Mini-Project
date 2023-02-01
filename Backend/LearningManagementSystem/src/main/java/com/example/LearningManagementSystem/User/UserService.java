package com.example.LearningManagementSystem.User;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public UserDTO updateUserStatus(Long userNo, UserDTO userDTO) {
        User user = userRepository.findByUserNo(userNo).orElseThrow(() -> {
            return new IllegalArgumentException("User을 찾을 수 없습니다.");
        });
        user.setUserStatus(userDTO.getUserStatus());
        return UserDTO.toDto(user);
    }
}
