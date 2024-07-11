// components/ValuesSection.tsx
import React from 'react';
import styles from './businessQuestion.module.css';

const values = [
  {
    number: '01',
    title: 'Low Assets',
    description: 'Low assets, low inventory, low employee count.',
  },
  {
    number: '02',
    title: 'High Margins',
    description: 'High margin at 20-30%+ in EBITDA margins.',
  },
  {
    number: '03',
    title: 'High Revenue',
    description: 'Required, recurring revenue with $500K+ EBITDA.',
  },
  {
    number: '04',
    title: 'Easily Understandable',
    description: 'With a business model your grandmother could understand.',
  },
];

const BusinessQuestion: React.FC = () => {
  return (
    <section className={styles.valuesSection}>
      <h2>What is a Simple Business?</h2>
      {values.map((value, index) => (
        <div
          key={value.number}
          className={`${styles.value} ${index % 2 === 0 ? styles.left : styles.right}`}
        >
          <div className={styles.valueContent}>
            <h3>{value.number}</h3>
            <h4>{value.title}</h4>
            <p>{value.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BusinessQuestion;
