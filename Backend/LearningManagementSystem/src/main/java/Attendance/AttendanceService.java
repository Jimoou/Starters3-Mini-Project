package Attendance;

import java.util.List;

public interface AttendanceService {

	public List<AttendanceDTO> attendancelist();
	public List<AttendanceDTO> userAttendance(String id);
	public List<AttendanceDTO> userUnAttendance(String id);
}
