'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/components/activities.module.scss';
import ActivityModal, { Activity } from './ActivityModal';
import { getStoredGames } from '@/utils/storage';

const INITIAL_SPORTS_GAMES: Activity[] = [
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
    fee: '$ 150 / 人',
    level: '初中階友善',
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
    fee: '免費報隊',
    level: '不限程度',
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
    fee: '場地費均分',
    level: 'NTRP 3.0+',
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
    fee: '$ 100 / 人',
    level: '新手零基礎',
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
    fee: '$ 120 / 人',
    level: '中階對抗',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    ],
  },
];

const CATEGORIES = ['全部', '羽球 🏸', '籃球 🏀', '網球 🎾', '皮克球 🏓', '排球 🏐'];

export default function ActivityGrid() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [activeModalItem, setActiveModalItem] = useState<Activity | null>(null);
  const [allGames, setAllGames] = useState<Activity[]>(INITIAL_SPORTS_GAMES);

  // Load custom created games from localStorage on mount
  useEffect(() => {
    const customGames = getStoredGames();
    if (customGames.length > 0) {
      setAllGames([...customGames, ...INITIAL_SPORTS_GAMES]);
    }
  }, []);

  const filteredActivities =
    selectedCategory === '全部'
      ? allGames
      : allGames.filter((a) => a.category.includes(selectedCategory.replace(/ [^\s]+/g, '')) || a.category === selectedCategory);

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
