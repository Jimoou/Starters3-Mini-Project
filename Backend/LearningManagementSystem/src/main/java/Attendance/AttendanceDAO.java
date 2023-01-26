package Attendance;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Mapper
@Repository("attendancedao")
public interface AttendanceDAO {
	public List<AttendanceDTO> attendancelist();
	public List<AttendanceDTO>  userAttendance(String id);
	public List<AttendanceDTO>  userUnAttendance(String id);
}
