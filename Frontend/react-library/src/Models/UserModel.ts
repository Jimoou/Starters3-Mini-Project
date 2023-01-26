class UserModel {
  userId: string;
  userName: string;
  userAddr: string;
  userPhone: string;
  userEmail: string;
  userRegDate: string;
  userBirth: string;
  viewSelf: string;
  userStatus?: string;
  

  constructor(
    userId: string,
    userName: string,
    userAddr: string,
    userPhone: string,
    userEmail: string,
    userRegDate: string,
    userBirth: string,
    viewSelf: string,
    userStatus?: string,
    
  ) {
    this.userId = userId;
    this.userName = userName;
    this.userAddr = userAddr;
    this.userPhone = userPhone;
    this.userEmail = userEmail;
    this.userRegDate = userRegDate;
    this.userBirth = userBirth;
    this.viewSelf = viewSelf;
    this.userStatus = userStatus;

  }
}
export default UserModel;
