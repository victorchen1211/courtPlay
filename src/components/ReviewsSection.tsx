'use client';

import React from 'react';
import styles from '../styles/components/reviews.module.scss';

const SPORTS_REVIEWS = [
  {
    stars: '★★★★★',
    title: '再也不怕羽球臨打沒伴了！',
    text: '以前想打羽球都要在 Line 群組裡面排隊碰運氣，用 courtPlay 地圖開局超方便，下班直接在地圖上報名中正運動中心的臨打團，球友人都超 Friendly！',
    name: '小陳 Chen',
    location: '台北市 • 羽球愛好者',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
  },
  {
    stars: '★★★★★',
    title: '籃球 3v3 揪團報隊神器',
    text: '週末去新生公園或逢甲打球，直接開 courtPlay 查看現場有沒有缺人的球局，立刻就能湊足全場 5v5 或 3v3，運動效率大幅提高！',
    name: '阿傑 Jay',
    location: '台中市 • 籃球社團球友',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
  },
  {
    stars: '★★★★★',
    title: '找程度相當的網球/皮克球友',
    text: '最棒的是可以設定 NTRP 程度篩選，不會遇到實力差距太大的尷尬狀況，拉球跟打一盤搶七都超盡興！',
    name: '艾琳 Irene',
    location: '新竹縣 • 網球/皮克球友',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
  },
];

export default function ReviewsSection() {
  return (
    <section className={styles.section} id="reviews">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2>超過 50,000+ 球友的一致好評</h2>
        </div>

        {/* Rating Summary Breakdown */}
        <div className={styles.ratingSummary}>
          <div className={styles.ratingBig}>
            <div className={styles.ratingNum}>4.8</div>
            <div className={styles.starsBig}>★★★★★</div>
            <div className={styles.ratingCount}>App Store & Google Play</div>
          </div>

          <div className={styles.ratingBars}>
            {[
              { star: 5, pct: '92%' },
              { star: 4, pct: '6%' },
              { star: 3, pct: '2%' },
              { star: 2, pct: '0%' },
              { star: 1, pct: '0%' },
            ].map((item) => (
              <div key={item.star} className={styles.barRow}>
                <span className={styles.barLabel}>{item.star}</span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: item.pct }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className={styles.grid}>
          {SPORTS_REVIEWS.map((rev, idx) => (
            <div key={idx} className={styles.reviewCard}>
              <div className={styles.stars}>{rev.stars}</div>
              <h3 className={styles.reviewTitle}>{rev.title}</h3>
              <p className={styles.reviewText}>"{rev.text}"</p>
              
              <div className={styles.authorRow}>
                <img src={rev.avatar} alt={rev.name} className={styles.avatar} />
                <div>
                  <div className={styles.authorName}>{rev.name}</div>
                  <div className={styles.authorLoc}>{rev.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
