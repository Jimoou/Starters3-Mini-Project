package Attendance.repository;

import Attendance.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository("attendancerepository")
public interface AttendanceRepository extends JpaRepository<Attendance, Integer> {

    @Query(value = "select * from passport where user_email=:email", nativeQuery = true)
    Attendance findByEmail(@Param("email") String email);

    @Query(value = "select * from passport where passport_num=:passport_num", nativeQuery = true)
    Attendance findById(@Param("passport_num") int passport_num);

}
