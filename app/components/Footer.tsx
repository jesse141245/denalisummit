import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <div className={styles.contactInfo}>
            <h2>DENALI SUMMIT</h2> 
          </div>
          <div className={styles.contactInfo}>
            <p>Address</p>
            <p>City, State Zip</p>
            <p>Mail: email</p>
            <p>Tel: (xxx) xxx-xxxx</p>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h2>MENU</h2>
          <Link href='/' passHref legacyBehavior><a>Home</a></Link>
          <Link href='/philosophy' passHref legacyBehavior><a>Philosophy</a></Link>
          <Link href='/process' passHref legacyBehavior><a>Process</a></Link>
          <Link href='/team' passHref legacyBehavior><a>Team</a></Link>
          <Link href='/contact' passHref legacyBehavior><a>Contact</a></Link>

        </div>
        <div className={styles.linkdedinSection}>
          <div className={styles.socialMedia}>
            <Link href='/' passHref legacyBehavior>
              <a className={styles.socialIconLink} aria-label='LinkedIn'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Link>
          </div>
          <div className={styles.websiteRights}>
            <p>Copyright © {new Date().getFullYear()}, All rights reserved with </p>
            <p>Denali Summit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
