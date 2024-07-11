import React from 'react';
import styles from './Mission.module.css';
import { Button } from './Button';
import Link from 'next/link';

const Mission: React.FC = () => {
    return (
        <section id="missionContainer" className={styles.missionContainer}>
            <h2>Our Mission</h2>
            <p>
                Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
            </p>
            <div className='hero-btns'>
                <Link href="/philosophy" passHref>
                    <Button
                    className='btns'
                    buttonStyle='btn--outline2'
                    buttonSize='btn--medium2'
                    >
                        LEARN MORE
                    </Button>
                </Link>
            </div>
        </section>
    );
}

export default Mission;
