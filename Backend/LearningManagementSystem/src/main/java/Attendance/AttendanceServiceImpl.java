package Attendance;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

//dao-인터페이스(메서드이름) --- (스프링부트-SQLMAPPER 기능) --- sql.mapping.xml id 동일
/*
 * 이전 방식이 Mapper 설정 파일(xml)에 있는 쿼리문의 ID를 직접 String 형태로 지정해서 사용했다면, 
 * Mapper 인터페이스를 사용한 방식은 인터페이스와 Mapper 설정 파일을 연동해두고 
 * 쿼리문의 ID와 동일한 메소드를 만들어둠으로써 
 * 해당 메소드를 호출하면 자동으로 쿼리문이 실행되도록 해주는 방식입니다
 * */
@Service("attendanceservice")
public class AttendanceServiceImpl implements AttendanceService {

	@Autowired
	@Qualifier("attendancedao")
	AttendanceDAO dao;

	public void setDao(AttendanceDAO dao) {
		this.dao = dao;
	}

	@Override
	public List<AttendanceDTO> attendancelist() {
		return dao.attendancelist();
	}

	@Override
	public List<AttendanceDTO> userAttendance(String id) {
		return dao.userAttendance(id);
	}
	@Override
	public List<AttendanceDTO> userUnAttendance(String id) {
		return dao.userUnAttendance(id);
	}

}
