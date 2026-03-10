import { motion } from 'framer-motion';
import GlassPanel from './GlassPanel';
import { useAmbient } from './AmbientContext';
import { stressData } from '../data/mockHealthData';

export default function StressCard({ delay = 0 }: { delay?: number }) {
  const { config } = useAmbient();
  const levelPosition = stressData.score / 100;

  return (
    <GlassPanel delay={delay} className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="w-[6px] h-[6px] rounded-full bg-accent-stress" />
        <span className="text-[11px] font-[500] tracking-[0.08em] uppercase" style={{ color: config.textTertiary }}>
          Stress Balance
        </span>
      </div>

      <span className="text-[28px] lg:text-[32px] font-[300] leading-none tracking-tight" style={{ color: config.textPrimary }}>
        {stressData.level}
      </span>

      <div className="relative h-[3px] rounded-full bg-black/[0.04] mt-1">
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
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-white border border-black/[0.08] shadow-sm"
        />
      </div>

      <p className="text-[12px] leading-relaxed mt-1" style={{ color: config.textSecondary }}>
        {stressData.message}
      </p>
    </GlassPanel>
  );
}
