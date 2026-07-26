'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.nav} aria-label="主導覽列">
      <Link href="/" className={styles.brand}>
        <div className={styles.logoBadge}>🏀</div>
        <span className={styles.logoText}>courtPlay</span>
      </Link>

      <div className={styles.links}>
        <Link href="/games" className={styles.navHideMobile}>探索球局 🔍</Link>
        <Link href="/#timeline" className={styles.navHideMobile}>如何揪團</Link>
        <Link href="/#reviews" className={styles.navHideMobile}>球友評價</Link>
        <Link href="/create" className={styles.createCta}>🏀 立即開局</Link>
      </div>
    </nav>
  );
}
