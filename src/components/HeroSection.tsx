'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
            <span>4.8 高評分運動平台</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.dlButtons}>
          <Link href="/create" className={`${styles.dlBtn} ${styles.dlIos}`}>
            🏀 立即發起球局
          </Link>
          <a href="#activities" className={`${styles.dlBtn} ${styles.dlAndroid}`}>
            🔍 探索熱門球局
          </a>
        </div>
      </div>
    </section>
  );
}
