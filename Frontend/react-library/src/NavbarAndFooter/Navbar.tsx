import styles from "../Stylesheet/Navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.title}>
        <li>스타터스 3기</li>
      </ul>
    </div>
  );
}
