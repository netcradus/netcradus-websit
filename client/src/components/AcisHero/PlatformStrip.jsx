import React from 'react';
import Icon from './Icon';
import styles from './AcisHero.module.css';

export default function PlatformStrip() {
  return (
    <section className={styles.platformStrip}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 py-4 text-gray-400 font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Icon name="cloud" size={18} className="text-[#06b6d4]" />
            <span>AWS / Azure / GCP</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Icon name="server" size={18} className="text-[#e8400a]" />
            <span>Kubernetes & Docker</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Icon name="brain" size={18} className="text-[#ec4c8c]" />
            <span>LLM & Vector Pipelines</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Icon name="network" size={18} className="text-[#8b5cf6]" />
            <span>SIEM / SOAR Connectors</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Icon name="shieldCheck" size={18} className="text-emerald-400" />
            <span>ISO 27001 / SOC 2 Type II</span>
          </div>
        </div>

        {/* Pulsing Chevrons Indicator */}
        <div className={styles.pulsingChevrons}>
          <Icon name="chevronsDown" size={24} />
        </div>
      </div>
    </section>
  );
}
