import { motion } from 'framer-motion';
import GlassPanel from './GlassPanel';
import { useAmbient } from './AmbientContext';
import { heartData } from '../data/mockHealthData';

export default function HeartCard({ delay = 0 }: { delay?: number }) {
  const { config } = useAmbient();

  return (
    <GlassPanel delay={delay} className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="w-[6px] h-[6px] rounded-full bg-accent-heart" />
        <span className="text-[11px] font-[500] tracking-[0.08em] uppercase" style={{ color: config.textTertiary }}>
          Heart & HRV
        </span>
      </div>

      <div className="flex items-end gap-4">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[28px] lg:text-[32px] font-[300] leading-none tracking-tight" style={{ color: config.textPrimary }}>
            {heartData.restingHR}
          </span>
          <span className="text-[12px]" style={{ color: config.textTertiary }}>{heartData.unit}</span>
        </div>
        <div className="flex items-baseline gap-1 pb-0.5">
          <span className="text-[18px] font-[300]" style={{ color: `${config.textPrimary}90` }}>{heartData.hrv}</span>
          <span className="text-[10px]" style={{ color: config.textTertiary }}>{heartData.hrvUnit} HRV</span>
        </div>
      </div>

      <div className="mt-0.5">
        <svg viewBox="0 0 200 32" className="w-full h-7 opacity-35">
          <motion.path
            d="M0,16 L30,16 L38,16 L42,6 L48,26 L54,10 L58,20 L62,16 L90,16 L98,16 L102,8 L108,24 L114,12 L118,18 L122,16 L150,16 L158,16 L162,6 L168,26 L174,10 L178,20 L182,16 L200,16"
            fill="none"
            stroke="rgba(210,130,140,0.6)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: delay + 0.3, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      <p className="text-[12px]" style={{ color: config.textSecondary }}>
        Resting heart rate is steady
      </p>
    </GlassPanel>
  );
}
