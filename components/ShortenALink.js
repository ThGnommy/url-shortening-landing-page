import styles from "../styles/Shorten.module.css";

const ShortenALink = () => {
  return (
    <div className={styles.shortenALink}>
      <input type="text" placeholder="Shorten a link here..." />
      <p className={styles.focusText}>Please add a link</p>
      <button>Shorten it!</button>
    </div>
  );
};

export default ShortenALink;
