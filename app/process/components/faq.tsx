import React from 'react';
import styles from './faq.module.css';

const Faq: React.FC = () => {
  return (
    <section className={styles.faqs}>
      <h2>FAQ</h2>
      <div className={styles.faqsContainer}>
        <div className={styles.faqbox}>
          <h3>Flexibly Structured</h3>
          <p>
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
          </p>
        </div>
        <div className={styles.faqbox}>
          <h3>Resource-Rich Partnership</h3>
          <p>
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
          </p>
        </div>
        <div className={styles.faqbox}>
          <h3>Long-Term Focus</h3>
          <p>
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
          </p>
        </div>
        <div className={styles.faqbox}>
          <h3>Open Communication</h3>
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

export default Faq;
