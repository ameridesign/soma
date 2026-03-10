import { motion } from 'framer-motion';
import GlassPanel from './GlassPanel';
import { heartData } from '../data/mockHealthData';

export default function HeartCard({ delay = 0 }: { delay?: number }) {
  return (
    <GlassPanel delay={delay} className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="w-[7px] h-[7px] rounded-full bg-accent-heart" />
        <span className="text-[12px] font-medium tracking-[0.06em] uppercase text-text-tertiary">
          Heart & HRV
        </span>
      </div>

      <div className="flex items-end gap-5">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[32px] md:text-[36px] font-[300] leading-none tracking-tight text-text-primary">
            {heartData.restingHR}
          </span>
          <span className="text-[13px] text-text-tertiary">{heartData.unit}</span>
        </div>
        <div className="flex items-baseline gap-1 pb-1">
          <span className="text-[20px] font-[300] text-text-primary/70">{heartData.hrv}</span>
          <span className="text-[11px] text-text-tertiary">{heartData.hrvUnit} HRV</span>
        </div>
      </div>

      {/* Minimal heartbeat line */}
      <div className="mt-1">
        <svg viewBox="0 0 200 32" className="w-full h-8 opacity-40">
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

      <p className="text-[13px] text-text-secondary">
        Resting heart rate is steady
      </p>
    </GlassPanel>
  );
}
