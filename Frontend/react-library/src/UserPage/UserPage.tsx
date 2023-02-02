import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../Stylesheet/UserPage.module.css";
import { useEffect, useState } from "react";
import UserModel from "../Models/UserModel";
import { SpinnerLoading } from "../Util/SpinnerLoading";
import { Link } from "react-router-dom";
import axios from "axios";
import { CaseColor } from "../Util/CaseColor";

export default function UserPage() {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [status, setStatus] = useState("수료");
  const [userNo, setUserNo] = useState(0);
  useEffect(() => {
    const fetchUsers = async () => {
      const baseUrl: string = "http://localhost:8080/api/users";

      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("클났다. 문제가있다.");
      }

      const responseJson = await response.json();

      const responseData = responseJson._embedded.users;

      const loadedUsers: UserModel[] = [];

      for (const key in responseData) {
        loadedUsers.push({
          userId: responseData[key].userId,
          userName: responseData[key].userName,
          userAddr: responseData[key].userAddr,
          userPhone: responseData[key].userPhone,
          userEmail: responseData[key].userEmail,
          userRegDate: responseData[key].userRegDate,
          userBirth: responseData[key].userBirth,
          userStatus: responseData[key].userStatus,
          viewSelf: responseData[key]._links.self.href,
        });
      }
      setUsers(loadedUsers);
      setIsLoading(false);
    };
    fetchUsers().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const submitData = async (e: any) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8080/api/users/update/${userNo}`, {
        userStatus: status,
      })
      .then((response) => {
        alert("수정되었습니다.");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      <h1 className={styles.header}>구성원 관리</h1>
      <div className={styles.main}>
        <hr />
        <TableContainer component={Paper} className={styles.tablecontainer}>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead className={styles.tablehead}>
              <TableRow>
                <TableCell align="center">이름</TableCell>
                <TableCell align="center">아이디</TableCell>
                <TableCell align="center">연락처</TableCell>
                <TableCell align="center">이메일</TableCell>
                <TableCell align="center">주소</TableCell>
                <TableCell align="center">생년월일</TableCell>
                <TableCell align="center">상태</TableCell>
                <TableCell align="center">비고</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {users.map((user) => (
                <TableRow
                  className={styles.tableRow}
                  key={user.userId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    <Link
                      className={styles.link}
                      to={`/users/${Number(
                        user.viewSelf.split("/")[5]
                      )}`}
                    >
                      {user.userName}
                    </Link>
                  </TableCell>
                  <TableCell align="center">{user.userId}</TableCell>
                  <TableCell align="center">{user.userPhone}</TableCell>
                  <TableCell align="center">{user.userEmail}</TableCell>
                  <TableCell align="center" className={styles.addr}>{user.userAddr}</TableCell>
                  <TableCell align="center">
                    {user.userBirth.split("T")[0]}
                  </TableCell>
                  <TableCell align="center">
                    <form onSubmit={submitData}>
                      <select
                        defaultValue={status}
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                      >
                        <option value="수료">수료</option>
                        <option value="미수료">미수료</option>
                        <option value="인턴예정">인턴예정</option>
                        <option value="교육중">교육중</option>
                        <option value="퇴소">퇴소</option>
                      </select>
                      <button
                        type="submit"
                        onClick={() =>
                          setUserNo(Number(user.viewSelf.split("/")[5]))
                        }
                      >
                        수정
                      </button>
                    </form>
                  </TableCell>
                  {user.userStatus === undefined ? (
                    <TableCell align="center">--</TableCell>
                  ) : (
                    <TableCell align="center">
                      {CaseColor(user.userStatus)}
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
