import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserModel from "../../Models/UserModel";
import styles from "../../Stylesheet/DetailUser.module.css";
import { CaseColor } from "../../Util/CaseColor";
import { SpinnerLoading } from "../../Util/SpinnerLoading";

export const DetailUser = () => {
  const [user, setUser] = useState<UserModel>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  
  useEffect(() => {
    const userId = window.location.pathname.split("/")[2];
    const fetchArticle = async () => {
      const baseUrl: string = `http://localhost:8080/api/users/${userId}`;
      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseJson = await response.json();

      const loadedUser: UserModel = {
        userId: responseJson.userId,
        userName: responseJson.userName,
        userAddr: responseJson.userAddr,
        userPhone: responseJson.userPhone,
        userEmail: responseJson.userEmail,
        userRegDate: responseJson.userRegDate,
        userBirth: responseJson.userBirth,
        userStatus: responseJson.userStatus,
        viewSelf: responseJson._links.self.href,
      };
      setUser(loadedUser);
      setIsLoading(false);
    };
    fetchArticle().catch((error: any) => {
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
    <div>
       <button className={styles.button}><Link className={styles.button} to='/users'>목록으로</Link></button>
      <div className={styles.profile}>
        <div className={styles.name}>{user?.userName}</div>
        <div className={styles.id}>ID: {user?.userId}</div>
        <hr />
        <div className={styles.subProfile}>
          <div className={styles.phone}>
            <p className={styles.smallheader}>연락처</p>
            <div>{user?.userPhone}</div>
          </div>
          <hr />
          <div className={styles.email}>
            <p className={styles.smallheader}>이메일</p>
            <div>{user?.userEmail}</div>
          </div>
          <hr />
          <div className={styles.addr}>
            <p className={styles.smallheader}>주소</p>
            {user?.userAddr}
          </div>
          <hr />
          <div className={styles.birth}>
            <p className={styles.smallheader}>생년월일</p>
            {user?.userBirth.split("T")[0]}
          </div>
          <hr />
          <div className={styles.indate}>
            <p className={styles.smallheader}>가입일</p>
            {user?.userRegDate.split("T")[0]}
          </div>
          <hr />
          {user?.userStatus !== undefined ? (
            <div className={styles.status}>
              <p className={styles.smallheader}>특이사항</p>
              {CaseColor(user?.userStatus)}
            </div>
          ) : (
            <div className={styles.status}>
              <p className={styles.smallheader}>특이사항</p>없음
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
