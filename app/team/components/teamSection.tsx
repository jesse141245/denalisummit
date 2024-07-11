import React from 'react';
import styles from './TeamSection.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TeamSection: React.FC = () => {
  return (
    <div className={styles.teamSection}>
      <h2>Meet the team</h2>
      <div className={styles.teamMembers}>
        <div className={styles.member}>
          <img src="/BrittanyDenali.jpg" alt="Brittany" className={styles.photo} />
          <div className={styles.details}>
            <h3>CEO</h3>
            <h4>Brittany Lin</h4>
            <p>As the CEO of Denali Summit Group, Brittany is focused on helping inspirational owners leave their legacy in good hands. Brittany is the rare breed of Bostonian who actively chose to live in New England after a decade in Silicon Valley and growing up in LA. She is a seasoned entrepreneur and go-to-market leader. Brittany was the VP of Partner Development at Honor, where she scaled the world’s largest network of home care agencies, taking the company from ~$10M to $200M+ ARR. Previously, Brittany was the #1 SMB salesperson of Google Ads in North America. After 15 years working across industries from energy to technology to healthcare, Brittany discovered the common thread and her true passion has always been small businesses.</p>
            <p>Brittany earned her MBA at the Stanford Graduate School of Business and AB in Economics at Harvard University. As a former athlete, Brittany now chases her three young children and 90-lb Rhodesian Ridgeback when she’s not chasing down deals.
            </p>
            <Link href="https://www.linkedin.com/in/brittanylin" legacyBehavior>
              <a className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                <span>LinkedIn</span>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.member}>
          <img src="/LarryDenali.jpg" alt="Larry" className={styles.photo} />
          <div className={styles.details}>
            <h3>President</h3>
            <h4>Larry Oppenheimer</h4>
            <p>As the President of Denali Summit Group, Larry’s committed to creating win-win situations for all parties involved, including the employees who contribute to the success of his ventures. This approach has been instrumental in founding and managing two successful self-funded businesses, Sola Salons Boston and ToyWorld in Minnesota. In 2023, two of Larry’s five Sola Salons locations were ranked in the top ten across all 700 Sola locations in the United States. Prior to Sola Salons, he owned five ToyWorld stores and sold them to his competitor before moving to Boston in 2014. His leadership is characterized by a gentle demeanor, honesty, and trustworthiness. He is excited to partner with Brittany to expand more businesses, benefit more people, and create more win-win situations. He is a passionate basketball fan and his beloved teams are the Boston Celtics and Minnesota Timberwolves. He enjoys reading John Grisham's novels and watching romantic movies in his spare time. He is based in Boston and wishes he was related to the physicist J. Robert Oppenheimer from the movie Oppenheimer. Larry holds a Bachelor's degree in Economics from Macalester College in Minnesota.</p>
            <Link href="https://www.linkedin.com/in/larry-oppenheimer-331951149" legacyBehavior>
              <a className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                <span>LinkedIn</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
