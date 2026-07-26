'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ActivityModal, { Activity } from '@/components/ActivityModal';
import styles from '@/styles/components/games.module.scss';
import gridStyles from '@/styles/components/activities.module.scss';
import { getStoredGames } from '@/utils/storage';

const INITIAL_GAMES: Activity[] = [
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
    level: '初階歡樂友善',
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
    level: '不限程度（零基礎可）',
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
    level: '中階切磋對抗',
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
    level: '不限程度（零基礎可）',
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
    level: '中階切磋對抗',
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
    fee: '$ 200 / 人',
    level: '高階競技切磋',
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
    city: '新竹縣市',
    time: '明天 19:00 - 21:00',
    goingCount: 15,
    description: '專業裁判吹哨、電子計分板！兩隊輪流替換，極致流汗、無粗暴動作，歡迎科技業球友報名。',
    fee: '$ 250 / 人',
    level: '中階切磋對抗',
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
    fee: '場地費均分',
    level: '初階歡樂友善',
    avatars: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    ],
  },
];

const CATEGORIES = ['全部', '羽球 🏸', '籃球 🏀', '網球 🎾', '皮克球 🏓', '排球 🏐', '桌球 🏓', '足球 ⚽️'];
const CITIES = ['全部地區', '台北市', '新北市', '新竹縣市', '台中市', '高雄市'];
const TIMES = ['全部時間', '今天', '明天'];
const LEVELS = ['全部程度', '初階歡樂友善', '中階切磋對抗', '高階競技切磋', '不限程度（零基礎可）'];

export default function GamesPage() {
  const [allGames, setAllGames] = useState<Activity[]>(INITIAL_GAMES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedCity, setSelectedCity] = useState('全部地區');
  const [selectedTime, setSelectedTime] = useState('全部時間');
  const [selectedLevel, setSelectedLevel] = useState('全部程度');
  const [activeModalItem, setActiveModalItem] = useState<Activity | null>(null);

  useEffect(() => {
    const customGames = getStoredGames();
    if (customGames.length > 0) {
      setAllGames([...customGames, ...INITIAL_GAMES]);
    }
  }, []);

  // Filter Logic
  const filteredGames = allGames.filter((game) => {
    // Search Keyword Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = game.title.toLowerCase().includes(q);
      const matchLoc = game.location.toLowerCase().includes(q);
      const matchDesc = game.description.toLowerCase().includes(q);
      if (!matchTitle && !matchLoc && !matchDesc) return false;
    }

    // Category Filter
    if (selectedCategory !== '全部') {
      const catKey = selectedCategory.split(' ')[0];
      if (!game.category.includes(catKey)) return false;
    }

    // City Filter
    if (selectedCity !== '全部地區' && game.city !== selectedCity) {
      return false;
    }

    // Time Filter
    if (selectedTime !== '全部時間') {
      if (!game.time.includes(selectedTime)) return false;
    }

    // Skill Level Filter
    if (selectedLevel !== '全部程度' && game.level) {
      if (!game.level.includes(selectedLevel.substring(0, 2))) return false;
    }

    return true;
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('全部');
    setSelectedCity('全部地區');
    setSelectedTime('全部時間');
    setSelectedLevel('全部程度');
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.topRow}>
            <div>
              <h1>🔍 探索與即時報名附近的運動球局</h1>
              <p>自由篩選球類、地區、時間與程度分級，尋找最合拍的運動球友！</p>
            </div>
            <Link href="/create" className={styles.hostBtn}>
              🏀 找不到想打的？自己發起球局
            </Link>
          </div>
        </div>

        {/* Filter Panel */}
        <div className={styles.filterPanel}>
          {/* Search Bar */}
          <div className={styles.searchBar}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="搜尋場館名稱、地點或球局主題 (例如：中正運動中心、新生公園)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Sports Category Pills */}
          <div className={styles.categoryPills}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.pill} ${selectedCategory === cat ? styles.activePill : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Advanced Dropdown Filters */}
          <div className={styles.filtersGrid}>
            <div className={styles.filterItem}>
              <label>📍 縣市地區</label>
              <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.filterItem}>
              <label>⏰ 舉辦時間</label>
              <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                {TIMES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.filterItem}>
              <label>🎯 程度分級</label>
              <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
                {LEVELS.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.filterItem} style={{ justifyContent: 'flex-end' }}>
              <button className={styles.resetBtn} onClick={handleResetFilters} style={{ padding: '12px 0', textAlign: 'left' }}>
                ↺ 重置所有篩選條件
              </button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className={styles.resultsHeader}>
          <div className={styles.countText}>
            共找到 <span>{filteredGames.length}</span> 場可報名的運動球局
          </div>
        </div>

        {/* Games Grid or Empty State */}
        {filteredGames.length > 0 ? (
          <div className={gridStyles.grid}>
            {filteredGames.map((act) => (
              <div key={act.id} className={gridStyles.card} onClick={() => setActiveModalItem(act)}>
                <div className={gridStyles.emoji}>{act.emoji}</div>
                <h3 className={gridStyles.title}>{act.title}</h3>
                <div className={gridStyles.location}>
                  📍 {act.location} • {act.city} | ⏰ {act.time}
                </div>

                <div className={gridStyles.footerRow}>
                  <div className={gridStyles.avatars}>
                    {act.avatars.slice(0, 3).map((url, idx) => (
                      <img key={idx} src={url} alt="球友頭像" className={gridStyles.avatar} />
                    ))}
                    {act.goingCount > 3 && (
                      <div className={gridStyles.extraCount}>+{act.goingCount - 3}</div>
                    )}
                  </div>
                  <span className={gridStyles.goingBadge}>{act.goingCount} 人參戰</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🏀</div>
            <h3>找不到符合篩選條件的球局</h3>
            <p>試著調整篩選關鍵字，或是成為第一個在這個時段開局的團長吧！</p>
            <Link href="/create" className={styles.createEmptyBtn}>
              🏀 立即發起球局
            </Link>
          </div>
        )}
      </div>

      {/* Activity Detail Modal */}
      <ActivityModal activity={activeModalItem} onClose={() => setActiveModalItem(null)} />

      <Footer />
    </div>
  );
}
