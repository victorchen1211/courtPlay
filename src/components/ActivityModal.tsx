'use client';

import React, { useState } from 'react';
import styles from '../styles/components/modal.module.scss';

export interface Activity {
  id: string;
  emoji: string;
  title: string;
  category: string;
  location: string;
  city: string;
  time: string;
  goingCount: number;
  description: string;
  avatars: string[];
  fee?: string;
  level?: string;
  image?: string;
}

interface ActivityModalProps {
  activity: Activity | null;
  onClose: () => void;
}

export default function ActivityModal({ activity, onClose }: ActivityModalProps) {
  const [isJoined, setIsJoined] = useState(false);

  if (!activity) return null;

  const handleJoin = () => {
    setIsJoined(!isJoined);
  };

  return (
    <div className={`${styles.overlay} ${activity ? styles.open : ''}`} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="關閉視窗">
          ✕
        </button>

        <div className={styles.emoji}>{activity.emoji}</div>
        <h3 className={styles.title}>{activity.title}</h3>
        
        <div className={styles.metaInfo}>
          <span>📍 {activity.location}, {activity.city}</span>
          <span>•</span>
          <span>⏰ {activity.time}</span>
        </div>

        {(activity.fee || activity.level) && (
          <div className={styles.extraPills} style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '14px' }}>
            {activity.fee && (
              <span style={{ background: '#fff2e6', color: '#ff6b00', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '700' }}>
                💰 費用：{activity.fee}
              </span>
            )}
            {activity.level && (
              <span style={{ background: '#fff2e6', color: '#ff6b00', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '700' }}>
                🎯 程度：{activity.level}
              </span>
            )}
          </div>
        )}

        <div className={styles.description}>
          {activity.description}
        </div>

        <div className={styles.attendeesTitle}>
          已參戰球友 ({activity.goingCount + (isJoined ? 1 : 0)} 人)
        </div>

        <div className={styles.avatarsRow}>
          {activity.avatars.map((url, i) => (
            <img key={i} src={url} alt="球友頭像" className={styles.avatar} />
          ))}
          {isJoined && (
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="你"
              className={styles.avatar}
              style={{ border: '3px solid #ff6b00' }}
            />
          )}
        </div>

        <div className={styles.modalButtons}>
          <button
            className={`${styles.joinBtn} ${isJoined ? styles.joinedStatus : ''}`}
            onClick={handleJoin}
          >
            {isJoined ? '✓ 已成功報名球局！' : '🏀 立即報名參戰'}
          </button>
        </div>
      </div>
    </div>
  );
}
