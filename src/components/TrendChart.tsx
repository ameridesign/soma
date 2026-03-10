import { motion } from 'framer-motion';
import GlassPanel from './GlassPanel';
import { useAmbient } from './AmbientContext';
import { weeklyTrend } from '../data/mockHealthData';

export default function TrendChart({ delay = 0 }: { delay?: number }) {
  const { config } = useAmbient();
  const maxRecovery = Math.max(...weeklyTrend.map(d => d.recovery));

  return (
    <GlassPanel delay={delay} className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-[500] tracking-[0.08em] uppercase" style={{ color: config.textTertiary }}>
          Weekly Recovery
        </span>
        <span className="text-[10px]" style={{ color: config.textTertiary }}>Past 7 days</span>
      </div>

      <div className="flex items-end gap-[5px] h-[60px] lg:h-[72px]">
        {weeklyTrend.map((day, i) => {
          const height = (day.recovery / maxRecovery) * 100;
          const isToday = i === weeklyTrend.length - 1;
          return (
            <div key={day.day} className="flex flex-col items-center gap-1.5 flex-1">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.8, delay: delay + 0.08 * i, ease: 'easeOut' }}
                className={`w-full max-w-[28px] rounded-md ${isToday ? 'bg-accent-recovery/50' : 'bg-black/[0.04]'}`}
              />
              <span
                className={`text-[9px] ${isToday ? 'font-[500]' : ''}`}
                style={{ color: isToday ? config.textSecondary : config.textTertiary }}
              >
                {day.day}
              </span>
            </div>
          );
        })}
      </div>
    </GlassPanel>
  );
}
