import styles from "../styles/ShortenLinks.module.css";

const ShortenLinks = () => {
  return (
    <div className={styles.shortenedLink}>
      <div>
        <p>https://www.example.com</p>
        <hr />
        <p>https://rel.ink/kj39sw</p>
        <button>Copy</button>
      </div>
    </div>
  );
};

export default ShortenLinks;
