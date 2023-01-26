package com.example.LearningManagementSystem.Attendance;

import java.util.List;

public interface AttendanceService {

	public List<AttendanceUserDTO> attendancelist();

	public List<AttendanceUserDTO> userAttendance(String id);
}
