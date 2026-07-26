'use client';

import React from 'react';
import styles from '../styles/components/marquee.module.scss';

interface VenueItem {
  emoji: string;
  venue: string;
  location: string;
  activeGames: number;
}

const VENUES: VenueItem[] = [
  { emoji: '🏸', venue: '大安運動中心', location: '台北市', activeGames: 12 },
  { emoji: '🏀', venue: '新生公園戶外球場', location: '台北市', activeGames: 18 },
  { emoji: '🏸', venue: '竹北國民運動中心', location: '新竹縣', activeGames: 15 },
  { emoji: '🎾', venue: '臺中市網球中心', location: '台中市', activeGames: 8 },
  { emoji: '🏐', venue: '臺灣大學體育館', location: '台北市', activeGames: 9 },
  { emoji: '🏓', venue: '內湖運動中心', location: '台北市', activeGames: 14 },
  { emoji: '🏸', venue: '板橋國民運動中心', location: '新北市', activeGames: 16 },
  { emoji: '🏀', venue: '鳳山運動園區', location: '高雄市', activeGames: 11 },
  { emoji: '🎾', venue: '大安森林公園網球場', location: '台北市', activeGames: 7 },
];

export default function CityMarquee() {
  const marqueeItems = [...VENUES, ...VENUES];

  return (
    <section className={styles.marqueeSection}>
      <h3 className={styles.label}>
        全台熱門場館 <span>即時開局中</span> 🔥
      </h3>

      <div className={styles.marqueeTrack}>
        {marqueeItems.map((item, index) => (
          <div key={index} className={styles.mqCard}>
            <span className={styles.emoji}>{item.emoji}</span>
            <div className={styles.info}>
              <span className={styles.name}>{item.venue}</span>
              <span className={styles.country}>{item.location}</span>
            </div>
            <span className={styles.count}>{item.activeGames} 場熱戰中</span>
          </div>
        ))}
      </div>
    </section>
  );
}
