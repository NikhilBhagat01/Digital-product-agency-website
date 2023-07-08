import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
// import logo from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.logo} onClick={() => navigate("/")}>
            <span className={styles.a}>A+</span> Studio
          </h1>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>Home</li>
          <li className={styles.link}>What We Do</li>
          <li className={styles.link}>Service</li>
          <li className={styles.link}>Project</li>
          <li className={styles.link}>Blog</li>
          <li className={styles.link} onClick={() => navigate("/contact")}>
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
