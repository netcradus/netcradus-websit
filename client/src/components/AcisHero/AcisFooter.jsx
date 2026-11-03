import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import styles from './AcisHero.module.css';

export default function AcisFooter() {
  return (
    <footer className={styles.footer}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Icon name="shieldCheck" size={18} className="text-[#e8400a]" />
          <span className="font-sora font-bold text-white text-sm">Netcradus Ltd.</span>
          <span className="text-xs text-gray-500">© 2026 Netcradus. All Rights Reserved.</span>
        </div>

        <div className="flex items-center gap-6 text-xs text-gray-400">
          <Link to="/policy" className="hover:text-white transition-colors no-underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors no-underline">Terms of Service</Link>
          <Link to="/responsible-disclosure" className="hover:text-white transition-colors no-underline">Responsible Disclosure</Link>
        </div>
      </div>
    </footer>
  );
}
