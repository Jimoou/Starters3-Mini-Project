import styles from "../../Stylesheet/Sidebar.module.css";
import GradingIcon from "@mui/icons-material/Grading";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import RuleIcon from "@mui/icons-material/Rule";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Link to="/home" className={styles.container2}>
          <HomeIcon className={styles.Icon} />
          <div className={styles.menudata}>홈</div>
        </Link>
        <Link to="/home" className={styles.container2}>
          <GradingIcon className={styles.Icon} />
          <div className={styles.menudata}>성적 관리</div>
        </Link>
        <Link to='/answer' className={styles.container2}>
          <QuestionAnswerIcon className={styles.Icon} />
          <div className={styles.menudata}>Q&A 답변하기</div>
        </Link>
        <div className={styles.container2}>
          <RuleIcon className={styles.Icon} />
          <div className={styles.menudata}>출결 관리</div>
        </div>
        <Link to='/users' className={styles.container2}>
          <PeopleIcon className={styles.Icon} />
          <div className={styles.menudata}>구성원 관리</div>
        </Link>
      </div>
    </div>
  );
};
