import { useEffect, useState } from "react";
import GradeModel from "../Models/GradeModel";
import styles from "../Stylesheet/GradePage.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SpinnerLoading } from "../Util/SpinnerLoading";
import { Link } from "react-router-dom";

export default function GradePage() {
  const [grade, setGrade] = useState<GradeModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const baseUrl: string = "http://localhost:8080/api/grade";

      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("클났다. 문제가있다.");
      }

      const responseJson = await response.json();

      const responseData = responseJson;

      const loadedGrade: GradeModel[] = [];

      for (const key in responseData) {
        loadedGrade.push({
          first_multi: responseData[key].first_multi,
          first_task: responseData[key].first_task,
          second_multi: responseData[key].second_multi,
          second_task: responseData[key].second_task,
          third_multi: responseData[key].third_multi,
          third_task: responseData[key].third_task,
          final_multi: responseData[key].final_multi,
          final_task: responseData[key].final_task,
          capabilities: responseData[key].capabilities,
          submit: responseData[key].submit,
          final: responseData[key].final,
          total: responseData[key].total,
          Rank: responseData[key].Rank,
        });
      }
      setGrade(loadedGrade);
      setIsLoading(false);
    };
    fetchArticles().catch((error: any) => {
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
      <h1 className={styles.header}>성적관리</h1>

      <div className={styles.main}>
        <hr />
        <TableContainer component={Paper} className={styles.tablecontainer}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className={styles.tablehead}>
              <TableRow>
                <TableCell>이름</TableCell>
                <TableCell align="center">1차 객관식</TableCell>
                <TableCell align="center">1차 과제점수</TableCell>
                <TableCell align="center">2차 객관식</TableCell>
                <TableCell align="center">2차 과제점수</TableCell>
                <TableCell align="center">3차 객관식</TableCell>
                <TableCell align="center">3차 과제점수</TableCell>
                <TableCell align="center">최종 객관식점수</TableCell>
                <TableCell align="center">최종 과제점수</TableCell>
                <TableCell align="center">인재상역량점수</TableCell>
                <TableCell align="center">과제제출합산 점수</TableCell>
                <TableCell align="center">최종 프로젝트점수</TableCell>
                <TableCell align="center">종합 점수</TableCell>
                <TableCell align="center">등수</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {grade.map((grade) => (
                <TableRow>
                  <TableCell align="center">이름</TableCell>
                  <TableCell align="center">{grade.first_multi}</TableCell>
                  <TableCell align="center">{grade.first_task}</TableCell>
                  <TableCell align="center">{grade.second_multi}</TableCell>
                  <TableCell align="center">{grade.second_task}</TableCell>
                  <TableCell align="center">{grade.third_multi}</TableCell>
                  <TableCell align="center">{grade.third_task}</TableCell>
                  <TableCell align="center">{grade.final_multi}</TableCell>
                  <TableCell align="center">{grade.final_task}</TableCell>
                  <TableCell align="center">{grade.capabilities}</TableCell>
                  <TableCell align="center">{grade.submit}</TableCell>
                  <TableCell align="center">{grade.final}</TableCell>
                  <TableCell align="center">{grade.total}</TableCell>
                  <TableCell align="center">{grade.Rank}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
