import { Activity } from '@/components/ActivityModal';

const STORAGE_KEY = 'courtplay_created_games';

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

export function saveNewGame(newGame: Omit<Activity, 'id' | 'avatars'> & { fee?: string; level?: string }): Activity {
  const existing = getStoredGames();

  // Pick default random user avatar
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
