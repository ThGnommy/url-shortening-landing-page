import styles from "../styles/Cards.module.css";
import brandRecognitionIcon from "../resources/images/icon-brand-recognition.svg";
import detailedRecordsIcon from "../resources/images/icon-detailed-records.svg";
import fullyCustomizable from "../resources/images/icon-fully-customizable.svg";

const Cards = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <section>
          <img className={styles.brandIcon} src={brandRecognitionIcon} />
        </section>
        <h2>Brand Recognition</h2>
        <p>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>
      <div className={styles.card}>
        <section>
          <img className={styles.brandIcon} src={detailedRecordsIcon} />
        </section>
        <h2>Detailed Records</h2>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div className={styles.card}>
        <section>
          <img className={styles.brandIcon} src={fullyCustomizable} />
        </section>
        <h2>Detailed Records</h2>
        <p>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  );
};

export default Cards;
