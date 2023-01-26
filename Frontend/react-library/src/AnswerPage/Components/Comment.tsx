import axios from "axios";
import CommentModel from "../../Models/CommentModel";

export const Comment: React.FC<{ comment: CommentModel }> = (props) => {
  const commentKey = Number(
    props.comment.viewSelf.split("/")[5]
  );


  const deleteData = async (id: number) => {
    await axios.delete(`http://localhost:8080/api/comments/${id}`, {
    }).then(response => {
        if(response.data != null) {
            alert("삭제되었습니다.")
        }
        window.location.reload();
    })
    
  };

  let bool = false;
  function modify(e:any) {
    e.preventDefault();
    bool = true;
  }

  return (
    <div>
      {props.comment.content}
      {/* <form onSubmit={modifyData}>
        <input type="textarea" value={props.comment.content} />
        <button onClick={modify}>수정</button>
      </form> */}
      
        <button onClick={() => deleteData(commentKey)}>삭제</button>
    </div>
  );
};
