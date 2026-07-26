'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/components/activities.module.scss';
import { Activity } from './ActivityModal';
import { getStoredGames, INITIAL_GAMES } from '@/utils/storage';

export default function ActivityGrid() {
  const [allGames, setAllGames] = useState<Activity[]>(INITIAL_GAMES);

  useEffect(() => {
    const customGames = getStoredGames();
    if (customGames.length > 0) {
      setAllGames([...customGames, ...INITIAL_GAMES]);
    }
  }, []);

  return (
    <section className={styles.section} id="activities">
      <div className={styles.head}>
        <h2>即時報名附近的熱門運動球局</h2>
        <p>告別找不到球友的困擾！點擊卡片查看球局地圖、聊天室並分享專屬連結。</p>
      </div>

      {/* Activity Cards Grid */}
      <div className={styles.grid}>
        {allGames.slice(0, 4).map((act) => (
          <Link key={act.id} href={`/game/${act.id}`} className={styles.card}>
            <div className={styles.emoji}>{act.emoji}</div>
            <h3 className={styles.title}>{act.title}</h3>
            <div className={styles.location}>
              📍 {act.location} • {act.city}
            </div>

            <div className={styles.footerRow}>
              <div className={styles.avatars}>
                {act.avatars.slice(0, 3).map((url, idx) => (
                  <img key={idx} src={url} alt="球友頭像" className={styles.avatar} />
                ))}
                {act.goingCount > 3 && (
                  <div className={styles.extraCount}>+{act.goingCount - 3}</div>
                )}
              </div>
              <span className={styles.goingBadge}>{act.goingCount} 人參戰</span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Button to Full Explore Page */}
      <div style={{ textAlign: 'center', marginTop: '36px' }}>
        <Link
          href="/games"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#ff6b00',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '16px',
            padding: '14px 32px',
            borderRadius: '9999px',
            boxShadow: '0 4px 16px rgba(255, 107, 0, 0.3)',
            textDecoration: 'none',
          }}
        >
          🔍 查看全部運動球局並進行高級篩選 ➔
        </Link>
      </div>
    </section>
  );
}
