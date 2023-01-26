package Attendance;

import jakarta.servlet.http.HttpServletRequest;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

enum AttendanceStatus {ABSENCE, ATTENDANCE, LATENESS, SICK_LEAVE};

@RestController
public class AttendanceController {

    @Autowired
    @Qualifier("attendanceservice")
    AttendanceService service;

    //전체 출석내역 확인
    @GetMapping("/attendance")
    public List<AttendanceDTO> GetAttendnaceList() {
        ModelAndView model = new ModelAndView();
        List<AttendanceDTO> attendanceList = service.attendancelist();
        return attendanceList;
    }

    // 유저 하나 출결 정보
    @GetMapping("/attendace/{id}/1")
    public List<AttendanceDTO> GetUserAttendnace(@PathVariable String id) {
        List<AttendanceDTO> attendance = service.userAttendance(id);
        return attendance;
    }

    // 미출석 유저 하나 출결 정보
    @GetMapping("/attendace/{id}/2")
    public List<AttendanceDTO> GetUserunAttendnace(@PathVariable String id) {
        System.out.println(id);
        List<AttendanceDTO> unattendance = service.userUnAttendance(id);
        return unattendance;
    }
    //미출석 날짜 출력
//    @GetMapping("/attendance/{UserId}/1")
//    public List<Attendance>(@PathVariable String UserId, HttpServletRequest request) {
//
//        HttpSession session = request.getSession();
//        AttendanceStatus attendance_Status;
//
////        if (session.getAttribute("attendance_Status") == null) {
////          //에러페이지 출력
////        }
//
//        //attendance_Status = (AttendanceStatus) session.getAttribute("attendance_Status");
//
//
//    }

}
