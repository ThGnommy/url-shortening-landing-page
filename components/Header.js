import styles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../resources/images/logo.svg";
import MobileNav from "./MobileNav";
import { useEffect } from "react";

const Header = ({ nav = false, switchNav }) => {
  return (
    <div className={styles.header}>
      <Image width="150px" height="40px" src={logo} alt="logo" />
      <div onClick={switchNav} className={styles.mobile__nav_icon}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {nav && <MobileNav nav={nav} />}
    </div>
  );
};

export default Header;
