import React from 'react';
import styles from './compHero.module.css';

const compHero: React.FC = () => {
    return (
        <section id="hero" className={styles.compHeroContainer}>
            <h2>What we believe…</h2>
            <p>
                We believe there is beauty in simplicity.
                We believe simple businesses have sophisticated owners.
            </p>
            <p>
                We believe simple business models do not equate to simple operations. (Aka they’re not simple to run)
            </p>
        </section>
    );
};

export default compHero;
