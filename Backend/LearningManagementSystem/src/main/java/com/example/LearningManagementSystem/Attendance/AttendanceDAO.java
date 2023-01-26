package com.example.LearningManagementSystem.Attendance;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Mapper
@Repository("attendancedao")
public interface AttendanceDAO {
	public List<AttendanceUserDTO> attendancelist();

	public List<AttendanceUserDTO> userAttendance(String id);
}
