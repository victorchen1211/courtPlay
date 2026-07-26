'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/components/hero.module.scss';

const SPORTS_EMOJIS = ['🏀', '🎾', '🏸', '🏐', '🏓', '⚽️', '⚾️', '🥇', '🏆', '🎯', '🏃‍♂️', '👟'];

export default function HeroSection() {
  const [onlineCount, setOnlineCount] = useState(18460);

  // Dynamic counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Floating Sports Emoji Background */}
      <div className={styles.flagRain} aria-hidden="true">
        {SPORTS_EMOJIS.map((emoji, i) => (
          <span
            key={i}
            className={styles.flagParticle}
            style={{
              left: `${(i * 8 + 3) % 92}%`,
              animationDelay: `${(i * 0.4) % 4}s`,
              animationDuration: `${4.5 + (i % 3)}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className={styles.heroContent}>
        {/* Live Pill */}
        <div className={styles.livePill}>
          <span className={styles.pulseDot} aria-hidden="true" />
          <span>
            <span className={styles.countNum}>{onlineCount.toLocaleString()}</span> 位球友正在線上尋找球局 🏀
          </span>
        </div>

        {/* Hero Title */}
        <h1 className={styles.title}>
          隨時隨地 <span className={styles.pop}>找球友</span>
          <br />
          歡樂開團流汗組隊
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          瀏覽附近的羽球臨打、籃球 3v3、網球拉球、皮克球與排球局，一鍵加入報隊，運動再也不缺人！
        </p>

        {/* Trust Badges */}
        <div className={styles.trustRow}>
          <div className={styles.trustBadge}>
            <span>⚡️</span>
            <span><span className={styles.badgeNum}>50,000+</span> 球友都在用</span>
          </div>
          <div className={styles.trustBadge}>
            <span className={styles.badgeStars}>★★★★★</span>
            <span>4.8 高評分運動 App</span>
          </div>
        </div>

        {/* Download Buttons */}
        <div className={styles.dlButtons} id="download">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.dlBtn} ${styles.dlIos}`}
          >
            <svg viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            下載 iOS App
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.dlBtn} ${styles.dlAndroid}`}
          >
            <svg viewBox="0 0 24 24">
              <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 002 18h20a10.78 10.78 0 00-4.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
            </svg>
            下載 Android App
          </a>
        </div>
      </div>
    </section>
  );
}
