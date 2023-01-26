class CommentModel {
    userName: string;
    content?: string;
    createAt: string;
    modifiedAt: string;
    viewSelf: string;
  
    constructor(
      userName: string,
      content: string,
      createAt: string,
      modifiedAt: string,
      viewSelf: string,
    ) {
      this.userName = userName;
      this.content = content;
      this.createAt = createAt;
      this.modifiedAt = modifiedAt;
      this.viewSelf= viewSelf;
    }
  }
  export default CommentModel;
  