'use client';

import React from 'react';
import Link from 'next/link';
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
              <h4>彈性設定分級與費用</h4>
              <p>可設定初階歡樂團或中高階對抗團，並清楚標示免費或分攤場地費。</p>
            </div>
            <div className={styles.perkCard}>
              <div className={styles.icon}>💬</div>
              <h4>即時報名統計</h4>
              <p>清楚顯示目前已報名球友頭像與名額，迅速掌握開團進度。</p>
            </div>
            <div className={styles.perkCard}>
              <div className={styles.icon}>🏆</div>
              <h4>累積熱血球友</h4>
              <p>結交志同道合的固定球友，以後打球隨時都有最佳夥伴。</p>
            </div>
          </div>

          <div className={styles.ctaButtons}>
            <Link href="/create" className={styles.btnWhite}>
              🏀 立即發起球局
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
