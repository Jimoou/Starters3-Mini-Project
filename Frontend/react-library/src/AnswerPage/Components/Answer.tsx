import { useEffect, useState } from "react";
import ArticleModel from "../../Models/ArticleModel";
import { SpinnerLoading } from "../../Util/SpinnerLoading";
import styles from "../../Stylesheet/Answer.module.css";
import CommentModel from "../../Models/CommentModel";
import { Link } from "react-router-dom";
import React from "react";
import { Comment } from "../Components/Comment";
import axios from "axios";
import { NorthWest } from "@mui/icons-material";

export const Answer = () => {
  const now = new Date();

  const [article, setArticle] = useState<ArticleModel>();
  const [comments, setComments] = useState<CommentModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const articleId = Number(window.location.pathname.split("/")[2]);

  const [content, setContent] = useState("");

  const submitData = async (e: any) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8080/api/board/${articleId}/comments`, {
        userName: "관리자",
        content: content,
        boardId: articleId,
      })
      .then((response) => {
        if (response.data != null) {
          alert("입력되었습니다.");
        }
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchArticle = async () => {
      const baseUrl: string = `http://localhost:8080/api/boards/${articleId}`;
      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseJson = await response.json();

      const loadedArticle: ArticleModel = {
        userName: responseJson.userName,
        title: responseJson.title,
        content: responseJson.content,
        createAt: responseJson.createAt,
        modifiedAt: responseJson.modifiedAt,
        viewSelf: responseJson._links.comments.href,
      };
      setArticle(loadedArticle);
      setIsLoading(false);
    };
    fetchArticle().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const commentsUrl: string = `http://localhost:8080/api/boards/${articleId}/comments`;

      const response = await fetch(commentsUrl);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseJson = await response.json();

      const responseData = responseJson._embedded.comments;

      const loadedComments: CommentModel[] = [];

      for (const key in responseData) {
        loadedComments.push({
          userName: responseData[key].userName,
          content: responseData[key].content,
          createAt: responseData[key].createAt,
          modifiedAt: responseData[key].modifiedAt,
          viewSelf: responseData[key]._links.self.href,
        });
      }
      setComments(loadedComments);
      setIsLoading(false);
    };
    fetchComments().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div>
        <p>{httpError}</p>
      </div>
    );
  }
  return (
    <div className={styles.answer}>
      <button className={styles.button}>
        <Link className={styles.button} to="/answer">
          목록으로
        </Link>
      </button>
      <div className={styles.container}>
        <div className={styles.title}>{article?.title}</div>
        <div className={styles.profile}>
          <div className={styles.userName}>{article?.userName}</div>
          <div className={styles.createAt}>
            {article?.createAt.split("T")[0]}
          </div>
        </div>
        <div className={styles.content}>{article?.content}</div>
      </div>
      <div className={styles.form}>
        <form onSubmit={submitData}>
          <textarea className={styles.textarea}
            placeholder="댓글을 입력하세요."
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button className={styles.button} type="submit">
            입력
          </button>
        </form>
      </div>
      <div className={styles.container}>
        <div className={styles.commentTitle}>댓글</div>
        {comments.map((comment) => (
          <>
            <div className={styles.profile}>
              <div className={styles.userName}>{comment.userName}</div>
              <div className={styles.createAt}>
                {comment.createAt.split("T")[0]}
              </div>
            </div>
            <div className={styles.content}>
              <Comment
                comment={comment}
                key={Number(comment.viewSelf.split("/")[5])}
              />
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};