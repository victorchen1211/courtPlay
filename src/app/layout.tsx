import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'courtPlay — 隨時隨地 找球友組隊打球',
  description: '全台最便利的找球友開團平台！快速尋找羽球、籃球、網球、皮克球、排球球友，即時報名運動球局，今天就開打！',
  keywords: ['courtPlay', '找球友', '羽球臨打', '籃球開團', '網球揪團', '皮克球', '排球', '運動揪團'],
  openGraph: {
    title: 'courtPlay — 找球友 報名開團打球',
    description: '尋找附近的羽球、籃球、網球局，一鍵加入報隊，運動不缺人！',
    url: 'https://courtplay.app',
    siteName: 'courtPlay',
    locale: 'zh_TW',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}
