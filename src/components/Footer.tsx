'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <div className={styles.logoRow}>
            <div className={styles.badge}>🏀</div>
            <span>courtPlay</span>
          </div>
          <p>
            全台最便利的運動找球友平台。羽球、籃球、網球、皮克球、排球，隨時隨地輕鬆開團報隊！
          </p>
        </div>

        <div className={styles.linksGroup}>
          <div className={styles.col}>
            <h4>運動項目</h4>
            <a href="#activities">羽球臨打 🏸</a>
            <a href="#activities">籃球 3v3 🏀</a>
            <a href="#activities">網球拉球 🎾</a>
            <a href="#activities">皮克球體驗 🏓</a>
          </div>

          <div className={styles.col}>
            <h4>球友社群</h4>
            <a href="#reviews">球友真實評價</a>
            <a href="#download">發起運動球局</a>
            <a href="#download">下載 App (iOS / Android)</a>
          </div>

          <div className={styles.col}>
            <h4>條款與支援</h4>
            <a href="/guidelines">球友運動守則</a>
            <a href="/privacy">隱私權政策</a>
            <a href="/terms">服務條款</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} courtPlay. All rights reserved. 讓每次運動都有最佳球友相伴 🏀🎾🏸
      </div>
    </footer>
  );
}
