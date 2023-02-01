import axios from "axios";
import { useState } from "react";
import CommentModel from "../../Models/CommentModel";
import styles from "../../Stylesheet/Comment.module.css";
import moment from 'moment';
import 'moment/locale/ko';

export const Comment: React.FC<{ comment: CommentModel }> = (props) => {
  const commentKey = Number(props.comment.viewSelf?.split("/")[5]);
  const nowTime = moment().format('YYYY-MM-DD')+"T" + moment().format( "HH:mm:ss");
  const deleteData = async (id: number) => {
    await axios
      .delete(`http://localhost:8080/api/comments/${id}`, {})
      .then((response) => {
        if (response.data != null) {
          alert("삭제되었습니다.");
        }
        window.location.reload();
      });
  };

  const [check, setCheck] = useState(true);

  //comment
  const [comment, setComment] = useState(props.comment.content);
  const [modifiedAt, setModifiedAt] = useState(props.comment.modifiedAt);

  function boolCheck() {
    setCheck(false);
    setComment(props.comment.content ? props.comment.content : "");
  }
  function boolCheckCancel() {
    setCheck(true);
    setComment(props.comment.content ? props.comment.content : "");
  }

  const submitData = async (e: any) => {
    e.preventDefault();
    const id = Number(props.comment.viewSelf?.split("/")[5]);
    const url = `http://localhost:8080/api/comments/update/${id}`;
    await axios
      .put(url, {
        content: comment,
        modifiedAt: modifiedAt,
      })
      .then((response) => {
        alert("수정되었습니다.");
        window.location.reload();
        setCheck(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      {check ? (
        <>
          <div className={styles.form}>
            <div
              className={styles.button}
              onClick={() => deleteData(commentKey)}
            >
              <p>삭제</p>
            </div>
            <div className={styles.button} onClick={boolCheck}>
              <p>수정</p>
            </div>
          </div>
          <div className={styles.content}>{props.comment.content}</div>
        </>
      ) : (
        <>
          <form onSubmit={submitData}>
            <textarea
              className={styles.textarea}
              placeholder={comment}
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                setModifiedAt(nowTime);
              }}
            />
            <button type="submit">입력</button>
          </form>
          <button onClick={boolCheckCancel}>취소</button>
        </>
      )}
    </div>
  );
};
