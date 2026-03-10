import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { ambientModes, type AmbientMode, type AmbientConfig } from '../data/ambientModes';

interface AmbientState {
  mode: AmbientMode;
  config: AmbientConfig;
  setMode: (mode: AmbientMode) => void;
}

const AmbientCtx = createContext<AmbientState | null>(null);

export function AmbientProvider({ children }: { children: ReactNode }) {
  const [mode, setModeRaw] = useState<AmbientMode>('mist');
  const setMode = useCallback((m: AmbientMode) => setModeRaw(m), []);

  return (
    <AmbientCtx.Provider value={{ mode, config: ambientModes[mode], setMode }}>
      {children}
    </AmbientCtx.Provider>
  );
}

export function useAmbient() {
  const ctx = useContext(AmbientCtx);
  if (!ctx) throw new Error('useAmbient must be inside AmbientProvider');
  return ctx;
}
