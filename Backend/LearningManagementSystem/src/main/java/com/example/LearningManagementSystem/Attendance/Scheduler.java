package com.example.LearningManagementSystem.Attendance;

import lombok.extern.flogger.Flogger;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class Scheduler {
// 월요일 ~ 금요일까지(토,일제외) 00:00분에 실행
// @Scheduled(cron = "0 0 0 ? * MON-FRI", zone = "Asia/Seoul")
    @Scheduled(cron = "0/10 * * * * ?", zone = "Asia/Seoul")
    public void attendanceSetting() {

        //쉬는 날 확인
        //출석 데이터 초기화
        //System.out.println("테스트!");
    }
}
