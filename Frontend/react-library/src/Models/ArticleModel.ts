class ArticleModel {
  userName: string;
  title: string;
  content?: string;
  createAt: string;
  modifiedAt: string;
  viewSelf: string;

  constructor(
    userName: string,
    title: string,
    content: string,
    createAt: string,
    modifiedAt: string,
    viewSelf: string,
  ) {
    this.userName = userName;
    this.title = title;
    this.content = content;
    this.createAt = createAt;
    this.modifiedAt = modifiedAt;
    this.viewSelf = viewSelf;
  }
}
export default ArticleModel;
