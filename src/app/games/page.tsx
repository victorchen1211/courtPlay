'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Activity } from '@/components/ActivityModal';
import styles from '@/styles/components/games.module.scss';
import gridStyles from '@/styles/components/activities.module.scss';
import { getStoredGames, INITIAL_GAMES } from '@/utils/storage';

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

  useEffect(() => {
    const customGames = getStoredGames();
    if (customGames.length > 0) {
      setAllGames([...customGames, ...INITIAL_GAMES]);
    }
  }, []);

  // Filter Logic
  const filteredGames = allGames.filter((game) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = game.title.toLowerCase().includes(q);
      const matchLoc = game.location.toLowerCase().includes(q);
      const matchDesc = game.description.toLowerCase().includes(q);
      if (!matchTitle && !matchLoc && !matchDesc) return false;
    }

    if (selectedCategory !== '全部') {
      const catKey = selectedCategory.split(' ')[0];
      if (!game.category.includes(catKey)) return false;
    }

    if (selectedCity !== '全部地區' && game.city !== selectedCity) {
      return false;
    }

    if (selectedTime !== '全部時間') {
      if (!game.time.includes(selectedTime)) return false;
    }

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
              <h1>🔍 探索與報名附近的運動球局</h1>
              <p>點擊任意球局即可獲得專屬分享連結、場館地圖導航與即時聊天室！</p>
            </div>
            <Link href="/create" className={styles.hostBtn}>
              🏀 自己發起全新球局
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
              <Link key={act.id} href={`/game/${act.id}`} className={gridStyles.card}>
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
              </Link>
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

      <Footer />
    </div>
  );
}
