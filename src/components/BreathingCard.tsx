import { motion } from 'framer-motion';
import GlassPanel from './GlassPanel';
import { breathData } from '../data/mockHealthData';

export default function BreathingCard({ delay = 0 }: { delay?: number }) {
  return (
    <GlassPanel delay={delay} className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="w-[7px] h-[7px] rounded-full bg-accent-breath" />
        <span className="text-[12px] font-medium tracking-[0.06em] uppercase text-text-tertiary">
          Breathwork
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* Animated breathing circle */}
        <div className="relative w-14 h-14 flex-shrink-0">
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full bg-accent-breath/30"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.75, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
            className="absolute inset-[15%] rounded-full bg-accent-breath/40"
          />
          <div className="absolute inset-[30%] rounded-full bg-accent-breath/50" />
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="text-[15px] font-medium text-text-primary">
            {breathData.sessionName}
          </span>
          <span className="text-[13px] text-text-secondary">
            {breathData.duration} · {breathData.description}
          </span>
        </div>
      </div>

      <button
        className="w-full py-2.5 rounded-2xl text-[13px] font-[500] tracking-wide transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.50), rgba(255,255,255,0.32))',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '0.5px solid rgba(255,255,255,0.45)',
          boxShadow: '0 1px 6px -2px rgba(0,0,0,0.04), 0 0.5px 0 0 rgba(255,255,255,0.5) inset',
          color: 'rgba(30,30,35,0.65)',
        }}
      >
        Begin Session
      </button>
    </GlassPanel>
  );
}
