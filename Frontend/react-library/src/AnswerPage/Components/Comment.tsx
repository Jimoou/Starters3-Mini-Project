import axios from "axios";
import { useState } from "react";
import CommentModel from "../../Models/CommentModel";
import styles from "../../Stylesheet/Comment.module.css";

export const Comment: React.FC<{ comment: CommentModel }> = (props) => {
  const commentKey = Number(props.comment.viewSelf.split("/")[5]);
  let now = String(new Date());
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
  const [comment, setComment] = useState(props.comment.content);
  function boolCheck() {
    setCheck(false);
    setComment(props.comment.content ? props.comment.content : "");
  }
  function boolCheckCancel() {
    setCheck(true);
    setComment(props.comment.content ? props.comment.content : "");
  }

  const submitData = async (e : any) => {
    const id = Number(props.comment.viewSelf.split("/")[5]);
    e.prevent.default();
    setComment(e.target.value);
    await axios.put(`http://localhost:8080/api/comment/update/${id}`, {
      content: comment,
    }).then((response) => {

      alert("수정되었습니다.")
    }).catch((error) => {
      console.log(error)
    })
    
  }

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
                }}
              />
            <button type="submit" >입력</button>
          </form>
          <button onClick={boolCheckCancel}>취소</button>
        </>
      )}
    </div>
  );
};
