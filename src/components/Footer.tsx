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
            <Link href="/#activities">羽球臨打 🏸</Link>
            <Link href="/#activities">籃球 3v3 🏀</Link>
            <Link href="/#activities">網球拉球 🎾</Link>
            <Link href="/#activities">皮克球體驗 🏓</Link>
          </div>

          <div className={styles.col}>
            <h4>球友功能</h4>
            <Link href="/create">發起運動球局 🏀</Link>
            <Link href="/#activities">尋找熱門球局 🔍</Link>
            <Link href="/#reviews">球友真實評價 ⭐</Link>
          </div>

          <div className={styles.col}>
            <h4>條款與支援</h4>
            <Link href="/guidelines">球友運動守則</Link>
            <Link href="/privacy">隱私權政策</Link>
            <Link href="/terms">服務條款</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} courtPlay. All rights reserved. 讓每次運動都有最佳球友相伴 🏀🎾🏸
      </div>
    </footer>
  );
}
