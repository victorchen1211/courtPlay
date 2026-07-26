export interface Activity {
  id: string;
  emoji: string;
  title: string;
  category: string;
  location: string;
  city: string;
  time: string;
  goingCount: number;
  description: string;
  avatars: string[];
  fee?: string;
  level?: string;
  image?: string;
}

export interface UserProfile {
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  city: string;
  favoriteSports: string[];
  level: string;
}

const STORAGE_KEY = 'courtplay_created_games';
const JOINED_KEY = 'courtplay_joined_game_ids';
const PROFILE_KEY = 'courtplay_user_profile';

export const INITIAL_PROFILE: UserProfile = {
  name: 'Victor Chen',
  handle: '@victor_chen',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  bio: '熱愛羽球與籃球！每週固定打球 3 天，歡樂流汗、結交志同道合的好球友！🏀🏸',
  city: '台北市',
  favoriteSports: ['羽球 🏸', '籃球 🏀', '網球 🎾'],
  level: '中階切磋對抗',
};

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
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
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

export function saveNewGame(
  newGame: Omit<Activity, 'id' | 'avatars'> & { fee?: string; level?: string; image?: string }
): Activity {
  const existing = getStoredGames();
  const avatarList = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  ];

  const defaultImages: Record<string, string> = {
    '羽球': 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80',
    '籃球': 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    '網球': 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80',
    '排球': 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
  };

  const key = newGame.category.substring(0, 2);
  const fallbackImg = defaultImages[key] || 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80';

  const fullGameItem: Activity = {
    ...newGame,
    id: `custom_${Date.now()}`,
    image: newGame.image && newGame.image.trim() ? newGame.image.trim() : fallbackImg,
    avatars: avatarList,
  };

  const updated = [fullGameItem, ...existing];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return fullGameItem;
}

// Joined Games Logic
export function getJoinedGameIds(): string[] {
  if (typeof window === 'undefined') return ['1', '3'];
  try {
    const raw = localStorage.getItem(JOINED_KEY);
    return raw ? JSON.parse(raw) : ['1', '3'];
  } catch (err) {
    return ['1', '3'];
  }
}

export function isGameJoined(gameId: string): boolean {
  const joined = getJoinedGameIds();
  return joined.includes(gameId);
}

export function toggleJoinGame(gameId: string): boolean {
  const current = getJoinedGameIds();
  const exists = current.includes(gameId);
  const updated = exists ? current.filter((id) => id !== gameId) : [...current, gameId];

  if (typeof window !== 'undefined') {
    localStorage.setItem(JOINED_KEY, JSON.stringify(updated));
  }
  return !exists;
}

export function getJoinedGames(): Activity[] {
  const joinedIds = getJoinedGameIds();
  const all = getAllGames();
  return all.filter((g) => joinedIds.includes(g.id));
}

// User Profile Helpers
export function getUserProfile(): UserProfile {
  if (typeof window === 'undefined') return INITIAL_PROFILE;
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? JSON.parse(raw) : INITIAL_PROFILE;
  } catch (err) {
    return INITIAL_PROFILE;
  }
}

export function saveUserProfile(profile: UserProfile): UserProfile {
  if (typeof window !== 'undefined') {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  }
  return profile;
}
