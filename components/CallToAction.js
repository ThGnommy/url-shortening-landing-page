import styles from "../styles/Home.module.css";

const CallToAction = () => {
  return (
    <div className={styles.callToAction}>
      <h1>More than just shorter links</h1>
      <p>
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <button className={styles.primaryButton}>Get Started</button>
    </div>
  );
};

export default CallToAction;
