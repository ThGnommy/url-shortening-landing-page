import styles from "../styles/Shorten.module.css";

const ShortenALink = () => {
  return (
    <div className={styles.shortenALink}>
      <input type="text" placeholder="Shorten a link here..." value="" />
      <button>Shorten it!</button>
    </div>
  );
};

export default ShortenALink;
