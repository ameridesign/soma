export type AmbientMode = 'dawn' | 'mist' | 'night';

export interface AmbientConfig {
  label: string;
  base: string;
  orbs: {
    position: string;
    size: string;
    gradient: string;
    blur: string;
  }[];
  bloom: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  glassBg: string;
  glassBorder: string;
  glassHighlight: string;
  glassShadow: string;
  glassEdge: string;
  glassSurface: string;
  accentRecovery: string;
}

export const ambientModes: Record<AmbientMode, AmbientConfig> = {
  dawn: {
    label: 'Dawn',
    base: 'linear-gradient(160deg, #ede9e3 0%, #e8e2db 35%, #e3ddd8 60%, #ebe6e0 100%)',
    orbs: [
      {
        position: 'top-[-12%] left-[5%]',
        size: 'w-[70vw] h-[70vw]',
        gradient: 'radial-gradient(circle, rgba(210,185,165,0.28) 0%, rgba(200,180,175,0.10) 45%, transparent 70%)',
        blur: '70px',
      },
      {
        position: 'bottom-[-8%] right-[-5%]',
        size: 'w-[55vw] h-[55vw]',
        gradient: 'radial-gradient(circle, rgba(185,195,210,0.20) 0%, rgba(190,185,200,0.08) 50%, transparent 70%)',
        blur: '60px',
      },
      {
        position: 'top-[30%] right-[10%]',
        size: 'w-[35vw] h-[35vw]',
        gradient: 'radial-gradient(circle, rgba(220,195,175,0.18) 0%, transparent 60%)',
        blur: '50px',
      },
      {
        position: 'top-[8%] left-[25%]',
        size: 'w-[40vw] h-[40vw]',
        gradient: 'radial-gradient(circle, rgba(255,245,235,0.18) 0%, transparent 60%)',
        blur: '45px',
      },
    ],
    bloom: 'radial-gradient(circle at 50% 35%, rgba(255,240,225,0.10) 0%, transparent 50%)',
    textPrimary: 'rgba(40,35,30,0.86)',
    textSecondary: 'rgba(40,35,30,0.48)',
    textTertiary: 'rgba(40,35,30,0.30)',
    glassBg: 'linear-gradient(135deg, rgba(255,255,255,0.48) 0%, rgba(255,255,255,0.32) 50%, rgba(255,255,255,0.38) 100%)',
    glassBorder: '0.5px solid rgba(255,255,255,0.48)',
    glassHighlight: 'rgba(255,255,255,0.65)',
    glassShadow: '0 4px 32px -8px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(0,0,0,0.02)',
    glassEdge: 'linear-gradient(90deg, transparent, rgba(255,252,245,0.75) 30%, rgba(255,252,245,0.90) 50%, rgba(255,252,245,0.75) 70%, transparent)',
    glassSurface: 'linear-gradient(180deg, rgba(255,252,245,0.14) 0%, transparent 40%, rgba(255,250,240,0.05) 100%)',
    accentRecovery: 'rgba(180,155,120,0.70)',
  },
  mist: {
    label: 'Mist',
    base: 'linear-gradient(160deg, #edeae5 0%, #e6e4e0 35%, #e2e1de 60%, #eae7e3 100%)',
    orbs: [
      {
        position: 'top-[-15%] left-[8%]',
        size: 'w-[65vw] h-[65vw]',
        gradient: 'radial-gradient(circle, rgba(185,210,198,0.30) 0%, rgba(195,200,210,0.10) 45%, transparent 70%)',
        blur: '70px',
      },
      {
        position: 'bottom-[-10%] right-[0%]',
        size: 'w-[55vw] h-[55vw]',
        gradient: 'radial-gradient(circle, rgba(195,190,215,0.20) 0%, rgba(205,198,190,0.08) 50%, transparent 70%)',
        blur: '60px',
      },
      {
        position: 'top-[35%] right-[15%]',
        size: 'w-[30vw] h-[30vw]',
        gradient: 'radial-gradient(circle, rgba(212,205,195,0.18) 0%, transparent 60%)',
        blur: '50px',
      },
      {
        position: 'top-[10%] left-[30%]',
        size: 'w-[40vw] h-[40vw]',
        gradient: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)',
        blur: '45px',
      },
    ],
    bloom: 'radial-gradient(circle at 50% 35%, rgba(255,255,255,0.10) 0%, transparent 50%)',
    textPrimary: 'rgba(30,30,35,0.86)',
    textSecondary: 'rgba(30,30,35,0.48)',
    textTertiary: 'rgba(30,30,35,0.30)',
    glassBg: 'linear-gradient(135deg, rgba(255,255,255,0.50) 0%, rgba(255,255,255,0.34) 50%, rgba(255,255,255,0.40) 100%)',
    glassBorder: '0.5px solid rgba(255,255,255,0.50)',
    glassHighlight: 'rgba(255,255,255,0.65)',
    glassShadow: '0 4px 32px -8px rgba(0,0,0,0.06), 0 1px 4px -1px rgba(0,0,0,0.03)',
    glassEdge: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.7) 70%, transparent)',
    glassSurface: 'linear-gradient(180deg, rgba(255,255,255,0.14) 0%, transparent 40%, rgba(255,255,255,0.04) 100%)',
    accentRecovery: 'rgba(120,190,160,0.85)',
  },
  night: {
    label: 'Night',
    base: 'linear-gradient(160deg, #2a2d32 0%, #232730 35%, #1e2128 60%, #282b30 100%)',
    orbs: [
      {
        position: 'top-[-15%] left-[5%]',
        size: 'w-[65vw] h-[65vw]',
        gradient: 'radial-gradient(circle, rgba(80,100,130,0.18) 0%, rgba(70,80,100,0.06) 45%, transparent 70%)',
        blur: '70px',
      },
      {
        position: 'bottom-[-10%] right-[-5%]',
        size: 'w-[55vw] h-[55vw]',
        gradient: 'radial-gradient(circle, rgba(90,80,120,0.14) 0%, rgba(70,70,90,0.05) 50%, transparent 70%)',
        blur: '60px',
      },
      {
        position: 'top-[30%] right-[12%]',
        size: 'w-[35vw] h-[35vw]',
        gradient: 'radial-gradient(circle, rgba(60,75,100,0.14) 0%, transparent 60%)',
        blur: '55px',
      },
      {
        position: 'top-[10%] left-[28%]',
        size: 'w-[40vw] h-[40vw]',
        gradient: 'radial-gradient(circle, rgba(100,110,130,0.08) 0%, transparent 60%)',
        blur: '45px',
      },
    ],
    bloom: 'radial-gradient(circle at 50% 35%, rgba(100,120,150,0.06) 0%, transparent 50%)',
    textPrimary: 'rgba(230,232,240,0.88)',
    textSecondary: 'rgba(200,205,215,0.50)',
    textTertiary: 'rgba(180,185,195,0.34)',
    glassBg: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.06) 100%)',
    glassBorder: '0.5px solid rgba(255,255,255,0.10)',
    glassHighlight: 'rgba(255,255,255,0.14)',
    glassShadow: '0 4px 32px -8px rgba(0,0,0,0.25), 0 1px 4px -1px rgba(0,0,0,0.15)',
    glassEdge: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.12) 70%, transparent)',
    glassSurface: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 40%, rgba(255,255,255,0.02) 100%)',
    accentRecovery: 'rgba(120,180,155,0.70)',
  },
};
