import { useState } from "react";
import styles from "../styles/ShortenLinks.module.css";

const ShortenLinks = ({ original, shortened }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortened);
    setCopied(true);
  };

  return (
    <div className={styles.shortenedLink}>
      <p>{original}</p>
      <hr />
      <p>{shortened}</p>
      <button
        className={copied ? styles.copied : null}
        onClick={copyToClipboard}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default ShortenLinks;
