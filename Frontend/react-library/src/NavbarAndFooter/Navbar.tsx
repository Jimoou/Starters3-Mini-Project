import styles from "../Stylesheet/Navbar.module.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { SpinnerLoading } from "../Util/SpinnerLoading";
export default function NavBar() {
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) {
    return <SpinnerLoading />;
  }

  const handleLogout = async () => oktaAuth.signOut();

  console.log(authState);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.title}>
          <div>스타터스 3기</div>
        </div>

        <ul className="navbar-nav ms-auto">
          {!authState.isAuthenticated ? (
            <li className="nav-item m-1">
              <div className={styles.button}>
              <Link
                type="button"
                className="btn btn-outline-secondary"
                to="/login"
              >
                로그인
              </Link>
              </div>
            </li>
          ) : (
            <li>
              <div className={styles.left} >
              <div className={styles.icon}>
                <NotificationsNoneIcon />
              </div>
              <div className={styles.button}>
              <button
                className="btn btn-outline-secondary"
                onClick={handleLogout}
              >
                로그아웃
              </button>
              </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
