import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '../Stylesheet/AnswerPage.module.css';
import { useState } from 'react';
import ArticleModel from '../Models/ArticleModel';
import { SpinnerLoading } from '../Util/SpinnerLoading';
import { Link } from 'react-router-dom';

export default function AnswerPage() {
    const [articles, setArticles] = useState<ArticleModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    React.useEffect(() => {
        const fetchArticles = async () => {
            const baseUrl: string = "http://localhost:8080/api/boards"
            
            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error("클났다. 문제가있다.");
            }

            const responseJson = await response.json();
  
            const responseData = responseJson._embedded.boards;

            const loadedArticles: ArticleModel[] = [];
            
            for (const key in responseData) {
                loadedArticles.push({
                    userName: responseData[key].userName,
                    title: responseData[key].title,
                    content: responseData[key].content,
                    createAt: responseData[key].createAt,
                    modifiedAt: responseData[key].modifiedAt,
                    viewSelf: responseData[key]._links.self.href,
                });
            }
            setArticles(loadedArticles);
            setIsLoading(false);
        };
        fetchArticles().catch((error:any) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return(
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
    <h1 className={styles.header}>Q&A 답변하기</h1>
    
    <div className={styles.main}>
    <hr/>
    <TableContainer component={Paper} className={styles.tablecontainer}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className={styles.tablehead}>
          <TableRow>
            <TableCell>제목</TableCell>
            <TableCell align="center">작성자</TableCell>
            <TableCell align="center">작성일자</TableCell>
            <TableCell align="center">마지막 수정일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((article) => (
            <TableRow
              key={article.viewSelf.split("/")[5]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Link className={styles.link} to={`/boards/${article.viewSelf.split("/")[5]}`}>{article.title}</Link>
              </TableCell>
              <TableCell align="center">
                {article.userName}
                </TableCell>
              <TableCell align="center">{article.createAt.split("T")[0]}</TableCell>
              {article.modifiedAt.split("T")[0] !== article.createAt.split("T")[0] ?
              <TableCell align="center">{article.modifiedAt.split("T")[0]}</TableCell>
              :
              <TableCell align="center">-</TableCell>
            }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}