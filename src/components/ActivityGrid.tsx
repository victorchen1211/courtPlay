'use client';

import React, { useState } from 'react';
import styles from '../styles/components/activities.module.scss';
import ActivityModal, { Activity } from './ActivityModal';

const SAMPLE_SPORTS_GAMES: Activity[] = [
  {
    id: '1',
    emoji: '🏸',
    title: '中正運動中心 雙打歡樂臨打團',
    category: '羽球 🏸',
    location: '中正運動中心 7F',
    city: '台北市',
    time: '今天 19:30 - 21:30',
    goingCount: 6,
    description: '冷氣大開！歡樂雙打臨打團，初階與中階球友皆歡迎，使用勝家一級比賽球。現場提供公用球拍與飲水機。',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '2',
    emoji: '🏀',
    title: '新生公園戶外 3v3 全場報隊開打',
    category: '籃球 🏀',
    location: '新生公園籃球場 A 框',
    city: '台北市',
    time: '今天 18:00 - 20:30',
    goingCount: 8,
    description: '下班下課暢快流汗！目前已有 8 人，差 4 人可以開雙框輪流報隊。歡樂防守、無粗暴動作！',
    avatars: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '3',
    emoji: '🎾',
    title: '大安森林公園 網球對打拉球練習',
    category: '網球 🎾',
    location: '大安森林公園網球場',
    city: '台北市',
    time: '明天 07:30 - 09:30',
    goingCount: 4,
    description: '徵求 NTRP 3.0 ~ 3.5 級別球友進行正反拍拉球與底線抽球練習，最後預留 30 分鐘打一盤搶七！',
    avatars: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '4',
    emoji: '🏓',
    title: '內湖運動中心 皮克球 (Pickleball) 體驗團',
    category: '皮克球 🏓',
    location: '內湖運動中心 5F 多功能球場',
    city: '台北市',
    time: '明天 14:00 - 16:00',
    goingCount: 10,
    description: '最火紅的皮克球！新手零基礎友善，現場提供球拍與皮克球，並有資深球友現場規則教學。',
    avatars: [
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '5',
    emoji: '🏐',
    title: '臺大體育館 6v6 歡樂排球友誼賽',
    category: '排球 🏐',
    location: '臺灣大學舊體育館',
    city: '台北市',
    time: '今天 19:00 - 22:00',
    goingCount: 12,
    description: '室內木地板網高 2.43m，徵求攻擊手與自由球員，注重團隊配合與開心打球！',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '6',
    emoji: '🏸',
    title: '南港運動中心 高階羽球切磋團',
    category: '羽球 🏸',
    location: '南港運動中心 4F',
    city: '台北市',
    time: '今天 20:00 - 22:00',
    goingCount: 7,
    description: '中高階（球齡 3 年以上）雙打切磋，使用勝利 Master 1 比賽球，含場地費與球費均分。',
    avatars: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '7',
    emoji: '🏀',
    title: '竹北運動中心 室內 5v5 全場聯誼賽',
    category: '籃球 🏀',
    location: '竹北國民運動中心 4F',
    city: '新竹縣',
    time: '明天 19:00 - 21:00',
    goingCount: 15,
    description: '專業裁判吹哨、電子計分板！兩隊輪流替換，極致流汗、無粗暴動作，歡迎科技業球友報名。',
    avatars: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '8',
    emoji: '🎾',
    title: '臺中市網球中心 雙打交流開團',
    category: '網球 🎾',
    location: '臺中市網球中心 硬地 A 場',
    city: '台中市',
    time: '今天 16:30 - 18:30',
    goingCount: 4,
    description: '夕陽歡樂雙打對抗賽，NTRP 2.5 ~ 3.5 級別皆可報名，提供全新海德網球，打完一起喝飲品！',
    avatars: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    ],
  },
];

const CATEGORIES = ['全部', '羽球 🏸', '籃球 🏀', '網球 🎾', '皮克球 🏓', '排球 🏐'];

export default function ActivityGrid() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [activeModalItem, setActiveModalItem] = useState<Activity | null>(null);

  const filteredActivities =
    selectedCategory === '全部'
      ? SAMPLE_SPORTS_GAMES
      : SAMPLE_SPORTS_GAMES.filter((a) => a.category === selectedCategory);

  return (
    <section className={styles.section} id="activities">
      <div className={styles.head}>
        <h2>即時報名附近的運動球局</h2>
        <p>告別找不到球友的困擾！輕鬆加入羽球、籃球、網球開團。</p>
      </div>

      {/* Category Tabs */}
      <div className={styles.filterTabs}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${styles.tab} ${selectedCategory === cat ? styles.activeTab : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Activity Cards Grid */}
      <div className={styles.grid}>
        {filteredActivities.map((act) => (
          <div key={act.id} className={styles.card} onClick={() => setActiveModalItem(act)}>
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
              <span className={styles.goingBadge}>{act.goingCount} 人已參戰</span>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Detail Modal */}
      <ActivityModal activity={activeModalItem} onClose={() => setActiveModalItem(null)} />
    </section>
  );
}
