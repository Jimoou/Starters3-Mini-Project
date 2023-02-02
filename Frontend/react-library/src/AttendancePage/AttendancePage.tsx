import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import AttendanceModel from "../Models/AttendanceModel";
import styles from "../Stylesheet/AttendancePage.module.css";
import { SpinnerLoading } from "../Util/SpinnerLoading";
import { ShowDate } from "./Components/ShowDate";
import { ShowStatus } from "./Components/ShowStatus";

export const AttendancePage = () => {
  const [attendance, setAttendance] = useState<AttendanceModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchAttendance = async () => {
      const baseUrl: string = "http://localhost:8080/api/attendance";

      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("클났다. 문제가있다.");
      }
      const responseJson = await response.json();
      const responseData = responseJson;
      const loadedAttendance: AttendanceModel[] = [];

      for (const key in responseData) {
        loadedAttendance.push({
          Attendance: responseData[key].Attendance,
          userName: responseData[key].user_name,
        });
      }
      setAttendance(loadedAttendance);
      setIsLoading(false);
    };
    fetchAttendance().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  if (isLoading) {
    return (
      <>
        <SpinnerLoading />
      </>
    );
  }
  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }
  return (
    <>
      <div>
        <h1 className={styles.header}>출결 관리</h1>
        <div className={styles.main}>
          <h3 className={styles.header}>1월</h3>
          <hr />
          <TableContainer component={Paper} className={styles.tablecontainer}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className={styles.tablehead}>
                <TableRow>
                  <TableCell align="left">이름</TableCell>
                  <ShowDate attend={attendance[0]} />
                </TableRow>
              </TableHead>
              <TableBody>
                {attendance.map((attend) => (
                  <>
                    <TableRow
                      key={attend.userName}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{attend.userName}</TableCell>
                      <ShowStatus status={attend} />
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};
