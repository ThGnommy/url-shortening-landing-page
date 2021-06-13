import styles from "../styles/Header.module.css";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className={styles.mobileNav}>
      <ul>
        <li>
          <Link href="#">Features</Link>
        </li>
        <li>
          <Link href="#">Pricing</Link>
        </li>
        <li>
          <Link href="#">Resources</Link>
        </li>
        <hr />
        <li>
          <Link href="#">Login</Link>
        </li>
        <li>
          <Link href="#">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
