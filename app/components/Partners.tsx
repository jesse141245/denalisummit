"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from './Partners.module.css';
import Image from 'next/image';

const Partners: React.FC = () => {
    const partnersLogosRef = useRef<HTMLDivElement | null>(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (partnersLogosRef.current) {
                const partnerLogos = partnersLogosRef.current.querySelectorAll(`.${styles.partnerLogo}`);
                if (partnerLogos.length > 0) {
                    const containerHeight = partnersLogosRef.current.clientHeight;
                    const rowHeight = partnerLogos[0].clientHeight + 30; // 30 for margin and gap
                    const rows = Math.ceil(containerHeight / rowHeight);

                    if (rows > 3) {
                        const scaleFactor = 3 / rows;
                        setScale(scaleFactor);
                    } else {
                        setScale(1);
                    }
                }
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="partners" className={styles.partnersContainer}>
            <h2>Our Partners</h2>
            <div className={styles.partnersLogos} ref={partnersLogosRef}>
               
            </div>
        </section>
    );
};

export default Partners;
