import { motion } from 'framer-motion';
import GlassPanel from './GlassPanel';
import { stressData } from '../data/mockHealthData';

export default function StressCard({ delay = 0 }: { delay?: number }) {
  const levelPosition = stressData.score / 100;

  return (
    <GlassPanel delay={delay} className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="w-[7px] h-[7px] rounded-full bg-accent-stress" />
        <span className="text-[12px] font-medium tracking-[0.06em] uppercase text-text-tertiary">
          Stress Balance
        </span>
      </div>

      <div className="flex items-baseline gap-1.5">
        <span className="text-[32px] md:text-[36px] font-[300] leading-none tracking-tight text-text-primary">
          {stressData.level}
        </span>
      </div>

      {/* Minimal stress indicator bar */}
      <div className="relative h-[4px] rounded-full bg-black/[0.04] mt-1">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${stressData.score}%` }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, rgba(160,200,175,0.5), rgba(210,180,130,${levelPosition}))`,
          }}
        />
        <motion.div
          initial={{ left: '0%' }}
          animate={{ left: `${stressData.score}%` }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[8px] h-[8px] rounded-full bg-white border border-black/[0.08] shadow-sm"
        />
      </div>

      <p className="text-[13px] text-text-secondary leading-relaxed mt-1">
        {stressData.message}
      </p>
    </GlassPanel>
  );
}
