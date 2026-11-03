import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import styles from './AcisHero.module.css';

export default function AcisHeroSection() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Background Video Handle
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log('Video autoplay handled:', err));
    }
  }, []);

  const handleCanPlay = () => {
    setIsVideoReady(true);
  };

  // Canvas Particle & Network Line Animation System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate Particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.6 + 0.2,
      isOrange: Math.random() > 0.4,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & Connect Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isOrange
          ? `rgba(232, 64, 10, ${p.alpha})`
          : `rgba(6, 182, 212, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.isOrange ? '#e8400a' : '#06b6d4';
        ctx.fill();

        // Connect nearby particles with lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = (1 - dist / 130) * 0.25;
            ctx.strokeStyle = p.isOrange
              ? `rgba(232, 64, 10, ${opacity})`
              : `rgba(6, 182, 212, ${opacity})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={handleCanPlay}
        className={`${styles.videoBackground} ${isVideoReady ? styles.videoReady : ''}`}
      >
        <source src="/videos/cyber-background.mp4" type="video/mp4" />
      </video>

      {/* Dark Vignette Overlay */}
      <div className={styles.videoOverlay} />

      {/* Canvas Particle Overlay */}
      <canvas ref={canvasRef} className={styles.canvasOverlay} />

      {/* Hero Foreground Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroEyebrow}>
          <span className="w-2 h-2 rounded-full bg-[#e8400a] animate-ping" />
          <span>Autonomous Cyber Immune System (ACIS™)</span>
        </div>

        <h1 className={styles.gradientHeadline}>
          Uncompromising Security.<br />Powered by Intelligence.
        </h1>

        <p className={styles.heroSubtext}>
          Netcradus ACIS™ continuously monitors, triages, and contains threats at machine speed. Experience autonomous cyber defense with sub-15 minute SLA containment and zero-trust orchestration.
        </p>

        <div className={styles.heroButtonGroup}>
          <Link to="/contact" className={styles.btnPrimary}>
            <span>Schedule Executive Briefing</span>
            <Icon name="arrowRight" size={16} />
          </Link>
          <a href="#acis-architecture" className={styles.btnSecondary}>
            <span>Explore ACIS Architecture</span>
            <Icon name="zap" size={16} className="text-[#06b6d4]" />
          </a>
        </div>
      </div>
    </section>
  );
}
