import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import styles from './AcisHero.module.css';

export default function AcisNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.brandLogo}>
          <div className={styles.logoBadge}>
            <Icon name="shieldCheck" size={22} />
          </div>
          <div>
            <span className={`${styles.fontSora} text-lg font-extrabold tracking-tight text-white block`}>
              NETCRADUS
            </span>
            <span className={`${styles.fontMono} text-[10px] text-gray-400 uppercase tracking-widest block -mt-1`}>
              ACIS™ Defense
            </span>
          </div>
        </Link>

        <ul className={styles.navLinks}>
          <li><Link to="/acis" className={styles.navLink}>ACIS Platform</Link></li>
          <li><Link to="/services" className={styles.navLink}>Services</Link></li>
          <li><Link to="/why-netcradus" className={styles.navLink}>Why Netcradus</Link></li>
          <li><Link to="/resources" className={styles.navLink}>Resources</Link></li>
          <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
        </ul>

        <div className={styles.navActions}>
          <a href="tel:+917290909571" className={styles.phoneLink}>
            <Icon name="phone" size={14} className="text-[#e8400a]" />
            <span>+91 72909 09571</span>
          </a>

          <Link to="/contact" className={styles.btnPrimary}>
            <span>Schedule Briefing</span>
            <Icon name="arrowRight" size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
