'use client';

import React from 'react';
import styles from '../styles/components/story.module.scss';

export default function FounderStory() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          alt="courtPlay 創辦人"
          className={styles.photo}
        />

        <div className={styles.badge}>
          <span>🏀 為什麼我們打造 courtPlay？</span>
        </div>

        <h2 className={styles.heading}>
          「熱愛運動，但每次都缺人？找到合拍球友不該這麼困難。」
        </h2>

        <p className={styles.bodyText}>
          身為羽球與籃球愛好者，我們經常遇到「租了場地卻缺 2 人」、「想去打球卻找不到實力相當的球友」的困擾。在 Line 群組發文容易被洗洗掉，一般的交友 App 又不適合專心運動。
          <br /><br />
          因此我們創立了 <b>courtPlay</b>，透過地圖開局與程度分級，讓每個人都能在 3 秒內找到附近的羽球、籃球、網球團，開開心心流汗打球！
        </p>

        <div className={styles.signature}>
          — Victor <span>@courtPlay 團隊</span>
        </div>
      </div>
    </section>
  );
}
