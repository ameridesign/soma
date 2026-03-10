export const recoveryData = {
  score: 82,
  status: 'Balanced',
  message: 'Your body looks ready for a focused day',
  trend: 'stable' as const,
};

export const sleepData = {
  totalHours: 7.4,
  quality: 85,
  bedtime: '11:12 PM',
  wakeTime: '6:35 AM',
  stages: [
    { label: 'Deep', hours: 1.8, color: 'rgba(100, 130, 200, 0.7)' },
    { label: 'REM', hours: 1.9, color: 'rgba(150, 130, 200, 0.6)' },
    { label: 'Light', hours: 3.2, color: 'rgba(170, 180, 210, 0.45)' },
    { label: 'Awake', hours: 0.5, color: 'rgba(200, 190, 180, 0.35)' },
  ],
};

export const stressData = {
  level: 'Low',
  score: 28,
  message: 'Stress remains low this morning',
  trend: 'decreasing' as const,
};

export const heartData = {
  restingHR: 58,
  hrv: 62,
  unit: 'bpm',
  hrvUnit: 'ms',
  trend: 'stable' as const,
};

export const breathData = {
  sessionName: 'Calm Breathing',
  duration: '3 min',
  description: 'A gentle box-breathing session to center your focus',
};

export const habitData = {
  hydration: { current: 5, goal: 8, unit: 'glasses' },
  movement: { current: 32, goal: 40, unit: 'min' },
  windDown: { completed: true, label: 'Wind-down complete' },
};

export const forecastData = {
  title: "Tonight's Sleep Outlook",
  message: 'Wind down recommended tonight. Your recovery rhythm suggests an early rest would be restorative.',
  confidence: 'Good',
};

export const weeklyTrend = [
  { day: 'Mon', recovery: 74, sleep: 6.8 },
  { day: 'Tue', recovery: 78, sleep: 7.1 },
  { day: 'Wed', recovery: 71, sleep: 6.5 },
  { day: 'Thu', recovery: 80, sleep: 7.3 },
  { day: 'Fri', recovery: 76, sleep: 7.0 },
  { day: 'Sat', recovery: 85, sleep: 7.8 },
  { day: 'Sun', recovery: 82, sleep: 7.4 },
];
