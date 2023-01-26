package com.example.LearningManagementSystem.Attendance;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AttendanceController {
    @Autowired
    @Qualifier("attendanceservice")
    AttendanceService service;
    
    Map<String, String> staus = Map.of(
        "0", "결석",
        "1", "출석",
        "2", "지각",
        "3", "병결"
    );
    //전체 출석내역 확인
    @GetMapping("/attendance")
    public Object GetAttendnaceList() {

        List<AttendanceUserDTO> attendanceList = service.attendancelist();

        List<Object> attendanceAllList = new ArrayList<>();
        HashSet<String> nameSet = new HashSet<String>();

        for (AttendanceUserDTO attendance : attendanceList) {
            nameSet.add((String) attendance.getUser_Name());
        }
        for(String onename :nameSet) {
            Map<String, Object> attendanceAllMap = new HashMap<>();
            attendanceAllMap.put("User_name", onename);

            Map<String, String> attendance = new HashMap();
            for (AttendanceUserDTO one : attendanceList) {
                if(onename.equals(one.getUser_Name()))
                {
                    String date = one.getAttendance_Date() + " " + one.getAttendance_Time();
                    String AttendanceStatus = staus.get(one.getAttendance_Status());
                    attendance.put(date,AttendanceStatus);
                }
            }
            attendanceAllMap.put("Attendance", attendance);
            attendanceAllList.add(attendanceAllMap);
        }
        return attendanceAllList;
    }

    //유저 하나 출결 정보
    @GetMapping("/attendace/{id}/2")
    public Object GetUserunAttendnace(@PathVariable String id) {
        List<AttendanceUserDTO> unattendance = service.userAttendance(id);
        HashMap<Object,Object> oneUser = new HashMap<Object, Object>();
        HashMap<Object,Object> attendance = new HashMap<Object, Object>();

        for(AttendanceUserDTO one: unattendance)
        {
            String date = one.getAttendance_Date() + " " + one.getAttendance_Time();
            String AttendanceStatus = staus.get(one.getAttendance_Status());
            attendance.put(date,AttendanceStatus);
        }

        oneUser.put("user_Name",unattendance.get(0).getUser_Name());
        oneUser.put("attendance",attendance);
        return oneUser;
    }
}
