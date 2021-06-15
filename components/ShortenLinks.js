import styles from "../styles/ShortenLinks.module.css";

const ShortenLinks = ({ original, shortened }) => {
  return (
    <div className={styles.shortenedLink}>
      <p>{original}</p>
      <hr />
      <p>{shortened}</p>
      <button>Copy</button>
    </div>
  );
};

export default ShortenLinks;
