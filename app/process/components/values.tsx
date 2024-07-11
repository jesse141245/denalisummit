import React from 'react';
import styles from './values.module.css';

const Values: React.FC = () => {
  return (
    <section className={styles.whatWeOffer}>
      <h2>Our Values</h2>
      <div className={styles.offersContainer}>
        <div className={styles.offer}>
          <h3>Live by win-win</h3>
          <p>
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
          </p>
        </div>
        <div className={styles.offer}>
          <h3>High horsepower, high integrity</h3>
          <p>
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
          </p>
        </div>
        <div className={styles.offer}>
          <h3>Long-Term Focus</h3>
          <p>
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
