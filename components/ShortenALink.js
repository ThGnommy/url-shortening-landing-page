import styles from "../styles/Shorten.module.css";

const ShortenALink = ({ onClick, valueRef, onChange }) => {
  return (
    <div className={styles.shortenALink}>
      <input
        ref={valueRef}
        onChange={onChange}
        type="text"
        placeholder="Shorten a link here..."
      />
      <p className={styles.focusText}>Please add a link</p>
      <button onClick={onClick}>Shorten it!</button>
    </div>
  );
};

export default ShortenALink;
