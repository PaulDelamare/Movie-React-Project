import { Link } from "react-router";
import styles from "./Navbar.module.css";
import { useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <img
        src="/asset/logo.png"
        alt="Logo"
        className={styles.logo}
        style={{ width: "60px", marginRight: "16px" }}
      />
      <Link
        to="/"
        className={`${styles.link} ${
          location.pathname === "/" ? styles.activeLink : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/wishlist"
        className={`${styles.link} ${
          location.pathname === "/wishlist" ? styles.activeLink : ""
        }`}
      >
        Wishlist
      </Link>
    </nav>
  );
};

export default Navbar;
