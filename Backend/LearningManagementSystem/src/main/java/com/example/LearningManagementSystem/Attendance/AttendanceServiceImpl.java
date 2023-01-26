package com.example.LearningManagementSystem.Attendance;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service("attendanceservice")
public class AttendanceServiceImpl implements AttendanceService {

	@Autowired
	@Qualifier("attendancedao")
	AttendanceDAO dao;

	public void setDao(AttendanceDAO dao) {
		this.dao = dao;
	}

	@Override
	public List<AttendanceUserDTO> attendancelist() {
		return dao.attendancelist();
	}

	@Override
	public List<AttendanceUserDTO> userAttendance(String id) {
		return dao.userAttendance(id);
	}

}
