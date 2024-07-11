import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className='hero-container'>
      <video autoPlay muted loop>
        <source src="/mountainvideo.mp4" type="video/mp4" />
      </video>
      <h1>We buy simple businesses.</h1>
      <p>We make selling simple.</p>
      <div className='hero-btns'>
        <Link href="/contact" passHref>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            CONTACT US
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
