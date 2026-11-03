import React from 'react';
import Icon from './Icon';
import styles from './AcisHero.module.css';

export default function OrbitNode({
  icon,
  label,
  ringRadius,
  index,
  total,
  tone = 'inner',
  subtitle
}) {
  // Calculate polar angle in radians (-PI/2 offset so index 0 starts at top)
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const x = ringRadius * Math.cos(angle);
  const y = ringRadius * Math.sin(angle);

  const toneClass = tone === 'inner' ? styles.nodeToneInner : styles.nodeToneOuter;

  return (
    <div
      className={`${styles.orbitNodeItem} ${toneClass}`}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
      title={subtitle || label}
    >
      <div className={styles.nodeIconWrapper}>
        <Icon name={icon} size={20} />
      </div>
      <div className={styles.nodeLabel}>{label}</div>
    </div>
  );
}
