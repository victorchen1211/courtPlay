'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/components/profile.module.scss';
import gridStyles from '@/styles/components/activities.module.scss';
import {
  getUserProfile,
  saveUserProfile,
  UserProfile,
  getStoredGames,
  getJoinedGames,
} from '@/utils/storage';
import { Activity } from '@/components/ActivityModal';

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>(getUserProfile());
  const [createdGames, setCreatedGames] = useState<Activity[]>([]);
  const [joinedGames, setJoinedGames] = useState<Activity[]>([]);
  const [activeTab, setActiveTab] = useState<'created' | 'joined' | 'badges'>('created');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Form State for editing profile
  const [editName, setEditName] = useState('');
  const [editHandle, setEditHandle] = useState('');
  const [editBio, setEditBio] = useState('');
  const [editCity, setEditCity] = useState('');
  const [editAvatar, setEditAvatar] = useState('');

  // Load User Data & Games
  useEffect(() => {
    const loadedProfile = getUserProfile();
    setProfile(loadedProfile);

    const created = getStoredGames();
    setCreatedGames(created);

    const joined = getJoinedGames();
    setJoinedGames(joined);
  }, []);

  const openEditModal = () => {
    setEditName(profile.name);
    setEditHandle(profile.handle);
    setEditBio(profile.bio);
    setEditCity(profile.city);
    setEditAvatar(profile.avatar);
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: UserProfile = {
      ...profile,
      name: editName.trim() || profile.name,
      handle: editHandle.trim() || profile.handle,
      bio: editBio.trim() || profile.bio,
      city: editCity.trim() || profile.city,
      avatar: editAvatar.trim() || profile.avatar,
    };
    saveUserProfile(updated);
    setProfile(updated);
    setIsEditModalOpen(false);
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <div className={styles.container}>
        {/* Profile Banner */}
        <div className={styles.profileCard}>
          <div className={styles.headerFlex}>
            <img src={profile.avatar} alt={profile.name} className={styles.avatar} />

            <div className={styles.mainInfo}>
              <div className={styles.nameRow}>
                <div>
                  <h1>{profile.name}</h1>
                  <span className={styles.handle}>{profile.handle}</span>
                </div>

                <button className={styles.editBtn} onClick={openEditModal}>
                  ✏️ 編輯個人資料
                </button>
              </div>

              <p className={styles.bioText}>{profile.bio}</p>

              <div className={styles.sportsBadges}>
                <span>偏好球類：</span>
                {profile.favoriteSports.map((s, idx) => (
                  <span key={idx} className={styles.badgePill}>
                    {s}
                  </span>
                ))}
                <span className={styles.badgePill} style={{ background: '#fff2e6', color: '#ff6b00' }}>
                  🎯 {profile.level}
                </span>
                <span className={styles.badgePill} style={{ background: '#fff2e6', color: '#ff6b00' }}>
                  📍 {profile.city}
                </span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>{createdGames.length}</div>
              <div className={styles.statLabel}>發起的球局 (Created)</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>{joinedGames.length}</div>
              <div className={styles.statLabel}>已參戰球局 (Joined)</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>4.9 ★</div>
              <div className={styles.statLabel}>球友社群評分</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>98%</div>
              <div className={styles.statLabel}>球局出席率 (Attendance)</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabsRow}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'created' ? styles.active : ''}`}
            onClick={() => setActiveTab('created')}
          >
            📌 我發起的球局 ({createdGames.length})
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'joined' ? styles.active : ''}`}
            onClick={() => setActiveTab('joined')}
          >
            🏀 我參戰的球局 ({joinedGames.length})
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'badges' ? styles.active : ''}`}
            onClick={() => setActiveTab('badges')}
          >
            🏆 運動成就與榮譽
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'created' && (
          <div>
            {createdGames.length > 0 ? (
              <div className={gridStyles.grid}>
                {createdGames.map((act) => (
                  <Link key={act.id} href={`/game/${act.id}`} className={gridStyles.card}>
                    <div className={gridStyles.emoji}>{act.emoji}</div>
                    <h3 className={gridStyles.title}>{act.title}</h3>
                    <div className={gridStyles.location}>
                      📍 {act.location} • {act.city} | ⏰ {act.time}
                    </div>

                    <div className={gridStyles.footerRow}>
                      <div className={gridStyles.avatars}>
                        {act.avatars.slice(0, 3).map((url, idx) => (
                          <img key={idx} src={url} alt="球友" className={gridStyles.avatar} />
                        ))}
                      </div>
                      <span className={gridStyles.goingBadge}>已發布球局</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.emptyBox}>
                <div className={styles.emptyIcon}>🏀</div>
                <h3>你尚未發起過任何運動球局</h3>
                <p>有想打的運動缺球友嗎？30 秒輕鬆快速發起球局開團！</p>
                <Link href="/create" className={styles.actionBtn}>
                  🏀 立即發起全新球局
                </Link>
              </div>
            )}
          </div>
        )}

        {activeTab === 'joined' && (
          <div>
            {joinedGames.length > 0 ? (
              <div className={gridStyles.grid}>
                {joinedGames.map((act) => (
                  <Link key={act.id} href={`/game/${act.id}`} className={gridStyles.card}>
                    <div className={gridStyles.emoji}>{act.emoji}</div>
                    <h3 className={gridStyles.title}>{act.title}</h3>
                    <div className={gridStyles.location}>
                      📍 {act.location} • {act.city} | ⏰ {act.time}
                    </div>

                    <div className={gridStyles.footerRow}>
                      <div className={gridStyles.avatars}>
                        {act.avatars.slice(0, 3).map((url, idx) => (
                          <img key={idx} src={url} alt="球友" className={gridStyles.avatar} />
                        ))}
                      </div>
                      <span className={gridStyles.goingBadge} style={{ background: '#e6f9ed', color: '#34c759' }}>
                        ✓ 已報名參戰
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.emptyBox}>
                <div className={styles.emptyIcon}>🔍</div>
                <h3>你目前尚未加入任何球局</h3>
                <p>前往探索頁面查看附近的羽球、籃球、網球團並即時報名吧！</p>
                <Link href="/games" className={styles.actionBtn}>
                  🔍 探索附近的運動球局
                </Link>
              </div>
            )}
          </div>
        )}

        {activeTab === 'badges' && (
          <div className={styles.achieveGrid}>
            <div className={styles.achieveCard}>
              <div className={styles.badgeIcon}>🥇</div>
              <div>
                <div className={styles.title}>熱血開團主</div>
                <div className={styles.subtitle}>發起超過 3 場優質運動球局</div>
              </div>
            </div>
            <div className={styles.achieveCard}>
              <div className={styles.badgeIcon}>🏸</div>
              <div>
                <div className={styles.title}>羽球對抗王</div>
                <div className={styles.subtitle}>累積參加 5 場以上雙打臨打團</div>
              </div>
            </div>
            <div className={styles.achieveCard}>
              <div className={styles.badgeIcon}>🌟</div>
              <div>
                <div className={styles.title}>社群好評球友</div>
                <div className={styles.subtitle}>獲得球友 100% 準時報到好評</div>
              </div>
            </div>
            <div className={styles.achieveCard}>
              <div className={styles.badgeIcon}>⚡️</div>
              <div>
                <div className={styles.title}>運動極致流汗</div>
                <div className={styles.subtitle}>單月流汗時數超過 20 小時</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsEditModalOpen(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <h2>✏️ 編輯個人基本資料</h2>

            <form onSubmit={handleSaveProfile}>
              <div className={styles.formGroup}>
                <label>顯示名稱 (Display Name)</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>使用者帳號 (Handle)</label>
                <input
                  type="text"
                  value={editHandle}
                  onChange={(e) => setEditHandle(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>頭像圖片連結 (Avatar URL)</label>
                <input
                  type="text"
                  value={editAvatar}
                  onChange={(e) => setEditAvatar(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label>主要活動地區 (City)</label>
                <input
                  type="text"
                  value={editCity}
                  onChange={(e) => setEditCity(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label>個人簡介 (Bio)</label>
                <textarea
                  rows={3}
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                />
              </div>

              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setIsEditModalOpen(false)}
                >
                  取消
                </button>
                <button type="submit" className={styles.saveBtn}>
                  儲存修改
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
