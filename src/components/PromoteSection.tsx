'use client';

import React from 'react';
import styles from '../styles/components/promote.module.scss';

export default function PromoteSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.box}>
          <h2 className={styles.title}>準備好自己開局揪球友了嗎？</h2>
          <p className={styles.subtitle}>
            30 秒快速發起球局！自由設定運動項目、場地地點、人數上限與球友程度需求。
          </p>

          <div className={styles.perksGrid}>
            <div className={styles.perkCard}>
              <div className={styles.icon}>🎯</div>
              <h4>彈性設定分級</h4>
              <p>可設定初階歡樂團或中高階對抗團，找到實力最契合的球友。</p>
            </div>
            <div className={styles.perkCard}>
              <div className={styles.icon}>💬</div>
              <h4>球局專屬聊天室</h4>
              <p>自動建立即時討論區，方便協調場地費用、停車與報到時間。</p>
            </div>
            <div className={styles.perkCard}>
              <div className={styles.icon}>🏆</div>
              <h4>累積團長榮譽徽章</h4>
              <p>優質團長可獲得高評價推薦，吸引優質球友優先加入你的熱血球局。</p>
            </div>
          </div>

          <div className={styles.ctaButtons}>
            <a href="#download" className={styles.btnWhite}>
              🏀 立即免費發起球局
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
