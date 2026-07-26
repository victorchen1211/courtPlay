import { Activity } from '@/components/ActivityModal';

const STORAGE_KEY = 'courtplay_created_games';
const CHAT_STORAGE_KEY_PREFIX = 'courtplay_chat_';

export interface ChatMessage {
  id: string;
  senderName: string;
  avatar: string;
  text: string;
  timestamp: string;
  isSelf?: boolean;
}

export const INITIAL_GAMES: Activity[] = [
  {
    id: '1',
    emoji: '🏸',
    title: '中正運動中心 雙打歡樂臨打團',
    category: '羽球 🏸',
    location: '中正運動中心 7F',
    city: '台北市',
    time: '今天 19:30 - 21:30',
    goingCount: 6,
    description: '冷氣大開！歡樂雙打臨打團，初階與中階球友皆歡迎，使用勝家一級比賽球。現場提供公用球拍與飲水機。',
    fee: '$ 150 / 人',
    level: '初階歡樂友善',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '2',
    emoji: '🏀',
    title: '新生公園戶外 3v3 全場報隊開打',
    category: '籃球 🏀',
    location: '新生公園籃球場 A 框',
    city: '台北市',
    time: '今天 18:00 - 20:30',
    goingCount: 8,
    description: '下班下課暢快流汗！目前已有 8 人，差 4 人可以開雙框輪流報隊。歡樂防守、無粗暴動作！',
    fee: '免費報隊',
    level: '不限程度（零基礎可）',
    avatars: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '3',
    emoji: '🎾',
    title: '大安森林公園 網球對打拉球練習',
    category: '網球 🎾',
    location: '大安森林公園網球場',
    city: '台北市',
    time: '明天 07:30 - 09:30',
    goingCount: 4,
    description: '徵求 NTRP 3.0 ~ 3.5 級別球友進行正反拍拉球與底線抽球練習，最後預留 30 分鐘打一盤搶七！',
    fee: '場地費均分',
    level: '中階切磋對抗',
    avatars: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '4',
    emoji: '🏓',
    title: '內湖運動中心 皮克球 (Pickleball) 體驗團',
    category: '皮克球 🏓',
    location: '內湖運動中心 5F 多功能球場',
    city: '台北市',
    time: '明天 14:00 - 16:00',
    goingCount: 10,
    description: '最火紅的皮克球！新手零基礎友善，現場提供球拍與皮克球，並有資深球友現場規則教學。',
    fee: '$ 100 / 人',
    level: '不限程度（零基礎可）',
    avatars: [
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '5',
    emoji: '🏐',
    title: '臺大體育館 6v6 歡樂排球友誼賽',
    category: '排球 🏐',
    location: '臺灣大學舊體育館',
    city: '台北市',
    time: '今天 19:00 - 22:00',
    goingCount: 12,
    description: '室內木地板網高 2.43m，徵求攻擊手與自由球員，注重團隊配合與開心打球！',
    fee: '$ 120 / 人',
    level: '中階切磋對抗',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '6',
    emoji: '🏸',
    title: '南港運動中心 高階羽球切磋團',
    category: '羽球 🏸',
    location: '南港運動中心 4F',
    city: '台北市',
    time: '今天 20:00 - 22:00',
    goingCount: 7,
    description: '中高階（球齡 3 年以上）雙打切磋，使用勝利 Master 1 比賽球，含場地費與球費均分。',
    fee: '$ 200 / 人',
    level: '高階競技切磋',
    avatars: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '7',
    emoji: '🏀',
    title: '竹北運動中心 室內 5v5 全場聯誼賽',
    category: '籃球 🏀',
    location: '竹北國民運動中心 4F',
    city: '新竹縣市',
    time: '明天 19:00 - 21:00',
    goingCount: 15,
    description: '專業裁判吹哨、電子計分板！兩隊輪流替換，極致流汗、無粗暴動作，歡迎科技業球友報名。',
    fee: '$ 250 / 人',
    level: '中階切磋對抗',
    avatars: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
    ],
  },
  {
    id: '8',
    emoji: '🎾',
    title: '臺中市網球中心 雙打交流開團',
    category: '網球 🎾',
    location: '臺中市網球中心 硬地 A 場',
    city: '台中市',
    time: '今天 16:30 - 18:30',
    goingCount: 4,
    description: '夕陽歡樂雙打對抗賽，NTRP 2.5 ~ 3.5 級別皆可報名，提供全新海德網球，打完一起喝飲品！',
    fee: '場地費均分',
    level: '初階歡樂友善',
    avatars: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    ],
  },
];

export function getStoredGames(): Activity[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to load games from localStorage:', err);
    return [];
  }
}

export function getAllGames(): Activity[] {
  const custom = getStoredGames();
  return [...custom, ...INITIAL_GAMES];
}

export function getGameById(id: string): Activity | undefined {
  const all = getAllGames();
  return all.find((g) => g.id === id);
}

export function saveNewGame(newGame: Omit<Activity, 'id' | 'avatars'> & { fee?: string; level?: string }): Activity {
  const existing = getStoredGames();
  const avatarList = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  ];

  const fullGameItem: Activity = {
    ...newGame,
    id: `custom_${Date.now()}`,
    avatars: avatarList,
  };

  const updated = [fullGameItem, ...existing];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return fullGameItem;
}

// Chat Messages Helpers
export function getGameMessages(gameId: string): ChatMessage[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`${CHAT_STORAGE_KEY_PREFIX}${gameId}`);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load chat messages:', err);
  }

  // Default initial sample messages per game
  return [
    {
      id: 'm1',
      senderName: '球局團長 (Host)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      text: '哈囉大家！比賽用球和飲料已經準備好了，大家記得攜帶毛巾並準時到場喔！🏸🏀',
      timestamp: '10:30 AM',
    },
    {
      id: 'm2',
      senderName: '阿傑',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      text: '收到！請問附近開車方便停車嗎？',
      timestamp: '10:35 AM',
    },
    {
      id: 'm3',
      senderName: '球局團長 (Host)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      text: '場館地下室有收費停車場，或是對面巷子也有路邊停車格很方便！',
      timestamp: '10:38 AM',
    },
  ];
}

export function addGameMessage(gameId: string, text: string, senderName = '我 (You)'): ChatMessage[] {
  const current = getGameMessages(gameId);
  const now = new Date();
  const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

  const newMessage: ChatMessage = {
    id: `msg_${Date.now()}`,
    senderName,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    text,
    timestamp: timeStr,
    isSelf: true,
  };

  const updated = [...current, newMessage];
  if (typeof window !== 'undefined') {
    localStorage.setItem(`${CHAT_STORAGE_KEY_PREFIX}${gameId}`, JSON.stringify(updated));
  }
  return updated;
}
