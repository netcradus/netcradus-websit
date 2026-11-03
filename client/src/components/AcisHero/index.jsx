import React from 'react';
import AcisNavbar from './AcisNavbar';
import AcisHeroSection from './AcisHeroSection';
import OrbitDiagram from './OrbitDiagram';
import PlatformStrip from './PlatformStrip';
import AcisFooter from './AcisFooter';
import styles from './AcisHero.module.css';

export default function AcisHeroContainer() {
  return (
    <div className={styles.acisHeroWrapper}>
      <AcisNavbar />
      <AcisHeroSection />
      <OrbitDiagram />
      <PlatformStrip />
      <AcisFooter />
    </div>
  );
}

export { AcisNavbar, AcisHeroSection, OrbitDiagram, PlatformStrip, AcisFooter };
