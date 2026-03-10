import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette } from 'lucide-react';
import { useAmbient } from './AmbientContext';
import { ambientModes, type AmbientMode } from '../data/ambientModes';

const modeColors: Record<AmbientMode, string> = {
  dawn: 'linear-gradient(135deg, #e8d5c0, #d4bfa8)',
  mist: 'linear-gradient(135deg, #d5ddd8, #c8cdd0)',
  night: 'linear-gradient(135deg, #4a5060, #383d48)',
};

export default function AmbientSwitcher() {
  const { mode, setMode, config } = useAmbient();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-2"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="rounded-[22px] p-3 flex flex-col gap-1.5 overflow-hidden"
            style={{
              background: config.glassBg,
              backdropFilter: 'blur(48px) saturate(1.6)',
              WebkitBackdropFilter: 'blur(48px) saturate(1.6)',
              border: config.glassBorder,
              boxShadow: config.glassShadow,
            }}
          >
            {(Object.keys(ambientModes) as AmbientMode[]).map((m) => (
              <button
                key={m}
                onClick={() => { setMode(m); setOpen(false); }}
                className="flex items-center gap-3 px-3.5 py-2 rounded-[14px] transition-all duration-300 min-w-[120px]"
                style={{
                  background: mode === m ? `${config.mode === 'night' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.35)'}` : 'transparent',
                }}
              >
                <div
                  className="w-5 h-5 rounded-full flex-shrink-0"
                  style={{
                    background: modeColors[m],
                    boxShadow: mode === m ? `0 0 0 1.5px ${config.mode === 'night' ? 'rgba(255,255,255,0.20)' : 'rgba(0,0,0,0.08)'}` : 'none',
                  }}
                />
                <span
                  className="text-[13px] font-[500] tracking-wide"
                  style={{ color: config.textSecondary }}
                >
                  {ambientModes[m].label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen(!open)}
        className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: config.glassBg,
          backdropFilter: 'blur(48px) saturate(1.6)',
          WebkitBackdropFilter: 'blur(48px) saturate(1.6)',
          border: config.glassBorder,
          boxShadow: config.glassShadow,
        }}
        aria-label="Change ambient background"
      >
        <Palette size={16} strokeWidth={1.6} style={{ color: config.textSecondary }} />
      </motion.button>
    </motion.div>
  );
}
