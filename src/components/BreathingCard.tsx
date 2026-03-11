import { motion } from 'framer-motion';
import GlassPanel from './GlassPanel';
import { useAmbient } from './AmbientContext';
import { breathData } from '../data/mockHealthData';

export default function BreathingCard({ delay = 0 }: { delay?: number }) {
  const { config } = useAmbient();

  return (
    <GlassPanel delay={delay} className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="w-[6px] h-[6px] rounded-full bg-accent-breath" />
        <span className="text-[11px] font-[500] tracking-[0.08em] uppercase" style={{ color: config.textTertiary }}>
          Breathwork
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative w-11 h-11 flex-shrink-0">
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full bg-accent-breath/30"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
            className="absolute inset-[15%] rounded-full bg-accent-breath/40"
          />
          <div className="absolute inset-[30%] rounded-full bg-accent-breath/50" />
        </div>

        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-[14px] font-[500] truncate" style={{ color: config.textPrimary }}>
            {breathData.sessionName}
          </span>
          <span className="text-[11px] leading-snug" style={{ color: config.textSecondary }}>
            {breathData.duration}
          </span>
        </div>
      </div>

      <button
        className="w-full py-2 rounded-2xl text-[12px] font-[500] tracking-wide transition-all duration-300"
        style={{
          background: config.glassBg,
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: config.glassBorder,
          boxShadow: `0 0.5px 0 0 ${config.glassHighlight} inset, ${config.glassShadow}`,
          color: config.textSecondary,
        }}
      >
        Begin Session
      </button>
    </GlassPanel>
  );
}
