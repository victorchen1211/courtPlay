'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/components/game-detail.module.scss';
import { getGameById, getGameMessages, addGameMessage, ChatMessage } from '@/utils/storage';
import { Activity } from '@/components/ActivityModal';

export default function GameDetailPage() {
  const params = useParams();
  const gameId = params?.id as string;

  const [game, setGame] = useState<Activity | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessageText, setNewMessageText] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [showCopiedToast, setShowCopiedToast] = useState(false);

  // Fetch Game & Chat Data
  useEffect(() => {
    if (gameId) {
      const found = getGameById(gameId);
      if (found) {
        setGame(found);
      }
      const msgs = getGameMessages(gameId);
      setMessages(msgs);
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

  // Send Chat Message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageText.trim() || !gameId) return;

    const updated = addGameMessage(gameId, newMessageText.trim(), '我 (You)');
    setMessages(updated);
    setNewMessageText('');
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

  // Construct Map Embed Query
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {showCopiedToast && (
              <span className={styles.copiedToast}>✓ 專屬分享連結已複製！</span>
            )}
            <button className={styles.shareBtn} onClick={handleCopyLink}>
              🔗 一鍵複製分享連結
            </button>
          </div>
        </div>

        {/* Main Layout Grid */}
        <div className={styles.mainGrid}>
          {/* Left Column: Detail Info & Interactive Map */}
          <div>
            {/* Game Detail Card */}
            <div className={styles.detailCard}>
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
                <span className={styles.pill}>🏷️ 分類：{game.category}</span>
                {game.fee && <span className={styles.pill}>💰 費用：{game.fee}</span>}
                {game.level && <span className={styles.pill}>🎯 程度：{game.level}</span>}
              </div>

              {/* Description */}
              <div className={styles.descriptionBox}>
                <div style={{ fontWeight: 800, color: '#1e1e24', marginBottom: '6px' }}>
                  📌 球局說明與規則
                </div>
                {game.description}
              </div>

              {/* Attendees */}
              <div className={styles.attendeesSection}>
                <h4>已參戰球友 ({game.goingCount + (isJoined ? 1 : 0)} 人)</h4>
                <div className={styles.avatarsGrid}>
                  {game.avatars.map((url, idx) => (
                    <div key={idx} className={styles.avatarItem}>
                      <img src={url} alt="球友" />
                      <span>球友 #{idx + 1}</span>
                    </div>
                  ))}
                  {isJoined && (
                    <div className={styles.avatarItem} style={{ border: '2px solid #34c759' }}>
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                        alt="你"
                      />
                      <span style={{ color: '#34c759' }}>你 (已加入)</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Join Action Button */}
              <button
                className={`${styles.joinActionBtn} ${isJoined ? styles.isJoined : ''}`}
                onClick={() => setIsJoined(!isJoined)}
              >
                {isJoined ? '✓ 已成功加入此球局！(點擊可取消)' : '🏀 立即報名參戰'}
              </button>
            </div>

            {/* Map & Location Card */}
            <div className={styles.mapCard}>
              <div className={styles.mapHeader}>
                <h3>🗺️ 場館地圖與導航</h3>
                <span style={{ fontSize: '13px', color: '#8c8c9e' }}>{game.city}</span>
              </div>

              {/* OpenStreetMap Interactive Frame */}
              <div className={styles.mapFrameContainer}>
                <iframe
                  title="Venue Map"
                  src={`https://maps.google.com/maps?q=${mapSearchQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  loading="lazy"
                />
              </div>

              <div className={styles.mapInfoText}>
                <b>詳細地點：</b>{game.city} {game.location}
                <br />
                <b>停車建議：</b>場館內設有地下車位，周邊設有公共汽機車停車格。
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

          {/* Right Column: Live Chatroom */}
          <div>
            <div className={styles.chatCard}>
              <div className={styles.chatHeader}>
                <h3>
                  <span className={styles.onlineDot} /> 球局專屬即時聊天室
                </h3>
                <p>與團長及同局球友討論細節、集合地點與現場狀況</p>
              </div>

              {/* Message Thread */}
              <div className={styles.messagesThread}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`${styles.messageBubble} ${msg.isSelf ? styles.self : ''}`}
                  >
                    <img src={msg.avatar} alt={msg.senderName} className={styles.avatar} />
                    <div className={styles.content}>
                      <div className={styles.sender}>{msg.senderName}</div>
                      <div>{msg.text}</div>
                      <div className={styles.time}>{msg.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input Form */}
              <form className={styles.chatForm} onSubmit={handleSendMessage}>
                <input
                  type="text"
                  placeholder="輸入訊息，與球友討論..."
                  value={newMessageText}
                  onChange={(e) => setNewMessageText(e.target.value)}
                />
                <button type="submit">發送</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
