package Attendance;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.Id;
import java.util.Date;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.stereotype.Component;

@Component
public class AttendanceDTO {

    String Attendance_No;
    String User_id;
    Date Attendance_Date;
    Date Attendance_Time;
    int Attendance_Status;
    String Attendance_etc;

    public String getAttendance_No() {
        return Attendance_No;
    }

    public void setAttendance_No(String attendance_No) {
        Attendance_No = attendance_No;
    }

    public String getUser_id() {
        return User_id;
    }

    public void setUser_id(String user_id) {
        User_id = user_id;
    }

    public Date getAttendance_Date() {
        return Attendance_Date;
    }

    public void setAttendance_Date(Date attendance_Date) {
        Attendance_Date = attendance_Date;
    }

    public Date getAttendance_Time() {
        return Attendance_Time;
    }

    public void setAttendance_Time(Date attendance_Time) {
        Attendance_Time = attendance_Time;
    }

    public int getAttendance_Status() {
        return Attendance_Status;
    }

    public void setAttendance_Status(int attendance_Status) {
        Attendance_Status = attendance_Status;
    }

    public String getAttendance_etc() {
        return Attendance_etc;
    }

    public void setAttendance_etc(String attendance_etc) {
        Attendance_etc = attendance_etc;
    }
}
