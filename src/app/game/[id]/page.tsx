'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/components/game-detail.module.scss';
import { getGameById, isGameJoined, toggleJoinGame } from '@/utils/storage';
import { Activity } from '@/components/ActivityModal';

export default function GameDetailPage() {
  const params = useParams();
  const gameId = params?.id as string;

  const [game, setGame] = useState<Activity | null>(null);
  const [joinedStatus, setJoinedStatus] = useState(false);
  const [showCopiedToast, setShowCopiedToast] = useState(false);

  // Fetch Game Details
  useEffect(() => {
    if (gameId) {
      const found = getGameById(gameId);
      if (found) {
        setGame(found);
      }
      setJoinedStatus(isGameJoined(gameId));
    }
  }, [gameId]);

  // Copy share URL
  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
      setShowCopiedToast(true);
      setTimeout(() => setShowCopiedToast(false), 3000);
    }
  };

  // Toggle Join
  const handleToggleJoin = () => {
    if (gameId) {
      const newStatus = toggleJoinGame(gameId);
      setJoinedStatus(newStatus);
    }
  };

  if (!game) {
    return (
      <div className={styles.pageWrapper}>
        <Navbar />
        <div className={styles.container} style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h2>🏀 找不到此球局資訊</h2>
          <p style={{ color: '#8c8c9e', margin: '12px 0 24px' }}>球局可能已被移除或是連結不正確。</p>
          <Link
            href="/games"
            style={{
              background: '#ff6b00',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '9999px',
              fontWeight: 800,
              textDecoration: 'none',
            }}
          >
            ← 返回探索所有球局
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Map search query
  const mapSearchQuery = encodeURIComponent(`${game.city} ${game.location}`);

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <div className={styles.container}>
        {/* Top Navigation & Share Bar */}
        <div className={styles.topBar}>
          <Link href="/games" className={styles.backBtn}>
            ← 返回探索球局列表
          </Link>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
            {showCopiedToast && (
              <span className={styles.copiedToast}>✓ 專屬分享連結已複製！</span>
            )}
            <button className={styles.shareBtn} onClick={handleCopyLink}>
              🔗 一鍵複製分享連結
            </button>
          </div>
        </div>

        {/* 1. 照片 (Photo Cover Banner) */}
        <div className={styles.photoBanner}>
          <img src={game.image} alt={game.title} className={styles.bannerImage} />
          <span className={styles.photoCategoryBadge}>{game.category}</span>
        </div>

        {/* 2. Detail Information Card */}
        <div className={styles.detailSection}>
          <div className={styles.headerRow}>
            <div className={styles.emojiBadge}>{game.emoji}</div>
            <div className={styles.titleInfo}>
              <h1>{game.title}</h1>
              <div className={styles.metaLocation}>
                <span>📍 {game.location}, {game.city}</span>
                <span>•</span>
                <span>⏰ {game.time}</span>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className={styles.badgeRow}>
            {game.fee && <span className={styles.pill}>💰 費用：{game.fee}</span>}
            {game.level && <span className={styles.pill}>🎯 程度：{game.level}</span>}
            <span className={styles.pill}>🔥 徵求人數：{game.goingCount} 人</span>
          </div>

          {/* Description */}
          <div className={styles.descriptionBox}>
            <div style={{ fontWeight: 800, color: '#1e1e24', marginBottom: '8px', fontSize: '16px' }}>
              📌 球局詳細說明與規則
            </div>
            {game.description}
          </div>

          {/* Attendees */}
          <div className={styles.attendeesSection}>
            <h4>已參戰球友 ({game.goingCount + (joinedStatus ? 1 : 0)} 人)</h4>
            <div className={styles.avatarsGrid}>
              {game.avatars.map((url, idx) => (
                <div key={idx} className={styles.avatarItem}>
                  <img src={url} alt="球友" />
                  <span>球友 #{idx + 1}</span>
                </div>
              ))}
              {joinedStatus && (
                <div className={styles.avatarItem} style={{ border: '2px solid #34c759' }}>
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="你"
                  />
                  <span style={{ color: '#34c759' }}>你 (已參戰)</span>
                </div>
              )}
            </div>
          </div>

          {/* Join Action Button */}
          <button
            className={`${styles.joinActionBtn} ${joinedStatus ? styles.isJoined : ''}`}
            onClick={handleToggleJoin}
          >
            {joinedStatus ? '✓ 已成功加入此球局！(點擊可取消)' : '🏀 立即報名參戰'}
          </button>
        </div>

        {/* 3. Map & Location Section */}
        <div className={styles.mapSection}>
          <div className={styles.mapHeader}>
            <h3>🗺️ 場館地圖與導航</h3>
            <span style={{ fontSize: '14px', color: '#8c8c9e', fontWeight: 600 }}>{game.city}</span>
          </div>

          {/* Interactive Map Embed */}
          <div className={styles.mapFrameContainer}>
            <iframe
              title="Venue Map"
              src={`https://maps.google.com/maps?q=${mapSearchQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              loading="lazy"
            />
          </div>

          <div className={styles.mapInfoText}>
            <b>詳細地址：</b>{game.city} {game.location}
            <br />
            <b>交通與停車：</b>場館附設專屬汽車與機車停車場，大眾運輸便捷。
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapSearchQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navMapBtn}
          >
            🗺️ 在 Google Maps 中開啟導航
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
