'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/components/create.module.scss';
import { saveNewGame } from '@/utils/storage';

const SPORTS_OPTIONS = [
  { label: '羽球 🏸', emoji: '🏸', category: '羽球 🏸' },
  { label: '籃球 🏀', emoji: '🏀', category: '籃球 🏀' },
  { label: '網球 🎾', emoji: '🎾', category: '網球 🎾' },
  { label: '皮克球 🏓', emoji: '🏓', category: '皮克球 🏓' },
  { label: '排球 🏐', emoji: '🏐', category: '排球 🏐' },
  { label: '桌球 🏓', emoji: '🏓', category: '桌球 🏓' },
  { label: '足球 ⚽️', emoji: '⚽️', category: '足球 ⚽️' },
];

const CITIES = ['台北市', '新北市', '桃園市', '新竹縣市', '台中市', '台南市', '高雄市', '其他縣市'];

const LEVELS = ['初階歡樂友善', '中階切磋對抗', '高階競技切磋', '不限程度（零基礎可）'];

export default function CreateGamePage() {
  const router = useRouter();

  // Form State
  const [sportIndex, setSportIndex] = useState(0);
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('台北市');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [fee, setFee] = useState('');
  const [level, setLevel] = useState('初階歡樂友善');
  const [openSlots, setOpenSlots] = useState('4');
  const [description, setDescription] = useState('');

  const selectedSport = SPORTS_OPTIONS[sportIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !location.trim() || !time.trim()) {
      alert('請填寫球局標題、地點與舉辦時間！');
      return;
    }

    // Save game to storage
    saveNewGame({
      emoji: selectedSport.emoji,
      title: title.trim(),
      category: selectedSport.category,
      city,
      location: location.trim(),
      time: time.trim(),
      goingCount: parseInt(openSlots, 10) || 4,
      description: description.trim() || '歡迎喜愛運動的球友一同報名流汗打球！',
      fee: fee.trim() || '免費報隊',
      level,
    });

    alert('🎉 球局成功發布！正在回到首頁...');
    router.push('/');
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← 返回首頁探索球局
          </Link>
          <h1>🏀 發起全新運動球局</h1>
          <p>填寫球局資訊，30 秒快速尋找附近熱血球友一同開打！</p>
        </div>

        {/* Main Grid: Form + Live Preview */}
        <div className={styles.layoutGrid}>
          {/* Form */}
          <form className={styles.formCard} onSubmit={handleSubmit}>
            {/* Sport Category */}
            <div className={styles.formGroup}>
              <label>運動球類<span>*</span></label>
              <select
                value={sportIndex}
                onChange={(e) => setSportIndex(parseInt(e.target.value, 10))}
              >
                {SPORTS_OPTIONS.map((opt, idx) => (
                  <option key={idx} value={idx}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div className={styles.formGroup}>
              <label>球局名稱<span>*</span></label>
              <input
                type="text"
                placeholder="例如：中正運動中心 雙打歡樂臨打團"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* City & Location */}
            <div className={styles.rowTwo}>
              <div className={styles.formGroup}>
                <label>縣市<span>*</span></label>
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                  {CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>場地地點<span>*</span></label>
                <input
                  type="text"
                  placeholder="例如：中正運動中心 7F"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Date Time & Open Slots */}
            <div className={styles.rowTwo}>
              <div className={styles.formGroup}>
                <label>舉辦時間<span>*</span></label>
                <input
                  type="text"
                  placeholder="例如：今天 19:30 - 21:30"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>徵求人數</label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={openSlots}
                  onChange={(e) => setOpenSlots(e.target.value)}
                />
              </div>
            </div>

            {/* Level & Fee */}
            <div className={styles.rowTwo}>
              <div className={styles.formGroup}>
                <label>程度分級</label>
                <select value={level} onChange={(e) => setLevel(e.target.value)}>
                  {LEVELS.map((lvl) => (
                    <option key={lvl} value={lvl}>
                      {lvl}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>人均費用</label>
                <input
                  type="text"
                  placeholder="例如：$150 / 人 或 場地費均分"
                  value={fee}
                  onChange={(e) => setFee(e.target.value)}
                />
              </div>
            </div>

            {/* Description */}
            <div className={styles.formGroup}>
              <label>球局說明與注意事項</label>
              <textarea
                placeholder="說明使用球款、設備提供、報名注意事項或程度要求..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitBtn}>
              🚀 立即發布球局並招募球友
            </button>
          </form>

          {/* Realtime Live Preview */}
          <div className={styles.previewSticky}>
            <div className={styles.previewLabel}>
              ✨ 球局卡片即時預覽 (Live Preview)
            </div>

            <div className={styles.previewCard}>
              <div className={styles.emoji}>{selectedSport.emoji}</div>
              <h3 className={styles.title}>
                {title.trim() || '球局標題預覽 (例如：中正運動中心羽球雙打)'}
              </h3>
              <div className={styles.location}>
                📍 {location.trim() || '場地地點'} • {city} | ⏰ {time.trim() || '時間未定'}
              </div>

              <div className={styles.metaBadges}>
                <span className={styles.pill}>💰 {fee.trim() || '免費報隊'}</span>
                <span className={styles.pill}>🎯 {level}</span>
              </div>

              <div className={styles.descriptionPreview}>
                {description.trim() || '球局說明會在此預覽顯示...'}
              </div>

              <div className={styles.footerRow}>
                <span className={styles.goingBadge}>
                  🔥 已徵求 {openSlots} 位球友
                </span>
                <span style={{ fontSize: '12px', color: '#8c8c9e' }}>courtPlay 即時開局</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
