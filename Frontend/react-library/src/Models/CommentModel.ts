class CommentModel {
    userName: string;
    content?: string;
    createAt: string;
    modifiedAt: string;
  
    constructor(
      userName: string,
      content: string,
      createAt: string,
      modifiedAt: string,
    ) {
      this.userName = userName;
      this.content = content;
      this.createAt = createAt;
      this.modifiedAt = modifiedAt;
    }
  }
  export default CommentModel;
  