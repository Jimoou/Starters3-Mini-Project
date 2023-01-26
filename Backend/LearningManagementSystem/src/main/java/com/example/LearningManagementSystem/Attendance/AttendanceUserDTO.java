package com.example.LearningManagementSystem.Attendance;

import org.springframework.stereotype.Component;

@Component
public class AttendanceUserDTO {



    String User_Name;
    String Attendance_Date;
    String Attendance_Time;
    String Attendance_Status;
    String Attendance_etc;

    public String getUser_Name() {
        return User_Name;
    }

    public void setUser_Name(String user_Name) {
        User_Name = user_Name;
    }

    public String getAttendance_Date() {
        return Attendance_Date;
    }

    public void setAttendance_Date(String attendance_Date) {
        Attendance_Date = attendance_Date;
    }

    public String getAttendance_Time() {
        return Attendance_Time;
    }

    public void setAttendance_Time(String attendance_Time) {
        Attendance_Time = attendance_Time;
    }

    public String getAttendance_Status() {
        return Attendance_Status;
    }
    public void setAttendance_Status(String attendance_Status) {
        Attendance_Status = attendance_Status;
    }

    public String getAttendance_etc() {
        return Attendance_etc;
    }

    public void setAttendance_etc(String attendance_etc) {
        Attendance_etc = attendance_etc;
    }
}
