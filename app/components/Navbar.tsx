"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setPrevScrollPos(currentScrollPos);
    setVisible(isVisible);

    if (!isVisible) {
      closeMobileMenu();
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', showButton);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <>
      <nav className={`${styles.navbar} ${visible ? styles.navbarVisible : styles.navbarHidden}`}>
        <div className={styles.navbarContainer}>
          <Link href='/' passHref legacyBehavior>
            <a className={styles.navbarLogo} onClick={closeMobileMenu}>
              DENALI GROUP
            </a>
          </Link>
          <div className={styles.menuIcon} onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={`${styles.navMenu} ${click ? (visible ? styles.active : styles.hidden) : ''}`}>
            <li className={styles.navItem}>
              <Link href='/' passHref legacyBehavior>
                <a className={styles.navLinks} onClick={closeMobileMenu}>
                  Home
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href='/philosophy' passHref legacyBehavior>
                <a className={styles.navLinks} onClick={closeMobileMenu}>
                  Philosophy
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href='/process' passHref legacyBehavior>
                <a className={styles.navLinks} onClick={closeMobileMenu}>
                  Process
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href='/team' passHref legacyBehavior>
                <a className={styles.navLinks} onClick={closeMobileMenu}>
                  Team
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href='/contact' passHref legacyBehavior>
                <a className={styles.navLinks} onClick={closeMobileMenu}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
