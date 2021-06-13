import styles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../resources/images/logo.svg";
import Link from "next/link";

const HeaderDesktop = () => {
  return (
    <div className={styles.header}>
      <Image width="150px" height="40px" src={logo} alt="logo" />
      <nav className={styles.desktopNav}>
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
        </ul>
        <ul>
          <li>
            <Link href="#">Login</Link>
          </li>
          <li>
            <Link href="#">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderDesktop;
