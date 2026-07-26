'use client';

import React from 'react';
import styles from '../styles/components/timeline.module.scss';

const SPORTS_TIMELINE_STEPS = [
  {
    time: '07:00 AM',
    emoji: '🎾',
    title: '晨間網球發球拉球',
    desc: '打開 courtPlay，與附近的網球友約在公園球場練習正反拍拉球 1 小時，活力滿滿開啟一天。',
  },
  {
    time: '12:30 PM',
    emoji: '🏸',
    title: '午休快速羽球雙打',
    desc: '利用午休時間在運動中心加入 4 人臨打團，快節奏拉球流汗，順便交流熱門球拍心法。',
  },
  {
    time: '06:30 PM',
    emoji: '🏀',
    title: '下班 3v3 籃球報隊',
    desc: '下班後查看地圖，加入新生公園或大安球場 3v3 缺一人的隊伍，熱血對抗解放上班壓力！',
  },
  {
    time: '08:30 PM',
    emoji: '🏓',
    title: '夜間皮克球/排球歡樂開團',
    desc: '歡樂開團打皮克球或六人排球，運動完順便一起補充蛋白質，輕鬆結交志同道合的新球友。',
  },
];

export default function DayTimeline() {
  return (
    <section className={styles.section} id="timeline">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2>用 courtPlay 開啟熱血運動的一天</h2>
          <p>從晨間拉球到夜間歡樂開團，簡單 4 步驟輕鬆找到球友</p>
        </div>

        <div className={styles.timeline}>
          {SPORTS_TIMELINE_STEPS.map((step, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.leftCol}>
                <div className={styles.dot}>{step.emoji}</div>
                {idx !== SPORTS_TIMELINE_STEPS.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.rightCol}>
                <span className={styles.timeBadge}>{step.time}</span>
                <div className={styles.text}>
                  <b>{step.title}</b> — {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
