import Image from "next/image";
import Link from "next/link";
import logo from "../resources/images/logo.svg";
import styles from "../styles/Footer.module.css";

import facebook from "../resources/images/icon-facebook.svg";
import instagram from "../resources/images/icon-instagram.svg";
import pinterest from "../resources/images/icon-pinterest.svg";
import twitter from "../resources/images/icon-twitter.svg";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.logoContainer}></div>
      <section>
        <h3>Featuring</h3>
        <nav className={styles.footerNav}>
          <ul>
            <li>
              <Link href="#">Link Shortening</Link>
            </li>
            <li>
              <Link href="#">Branded Links</Link>
            </li>
            <li>
              <Link href="#">Analytics</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h3>Company</h3>
        <nav className={styles.footerNav}>
          <ul>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Developers</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h3>Company</h3>
        <nav className={styles.footerNav}>
          <ul>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Our Team</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className={styles.socialIcons}>
        <Image width="30px" height="30px" src={facebook} alt="facebook" />
        <Image width="30px" height="30px" src={twitter} alt="twitter" />
        <Image width="30px" height="30px" src={pinterest} alt="pinterest" />
        <Image width="30px" height="30px" src={instagram} alt="instagram" />
      </section>
    </div>
  );
};

export default Footer;
