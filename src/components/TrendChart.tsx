import { motion } from 'framer-motion';
import GlassPanel from './GlassPanel';
import { weeklyTrend } from '../data/mockHealthData';

export default function TrendChart({ delay = 0 }: { delay?: number }) {
  const maxRecovery = Math.max(...weeklyTrend.map(d => d.recovery));

  return (
    <GlassPanel delay={delay} className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-medium tracking-[0.06em] uppercase text-text-tertiary">
          Weekly Recovery
        </span>
        <span className="text-[11px] text-text-tertiary">Past 7 days</span>
      </div>

      {/* Simple bar chart */}
      <div className="flex items-end gap-[6px] h-[80px] md:h-[100px]">
        {weeklyTrend.map((day, i) => {
          const height = (day.recovery / maxRecovery) * 100;
          const isToday = i === weeklyTrend.length - 1;
          return (
            <div key={day.day} className="flex flex-col items-center gap-2 flex-1">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.8, delay: delay + 0.1 * i, ease: 'easeOut' }}
                className={`w-full max-w-[32px] rounded-lg ${
                  isToday
                    ? 'bg-accent-recovery/50'
                    : 'bg-black/[0.04]'
                }`}
              />
              <span className={`text-[10px] ${isToday ? 'text-text-secondary font-medium' : 'text-text-tertiary'}`}>
                {day.day}
              </span>
            </div>
          );
        })}
      </div>
    </GlassPanel>
  );
}
