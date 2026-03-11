import { motion } from 'framer-motion';
import GlassPanel from './GlassPanel';
import { useAmbient } from './AmbientContext';
import { habitData } from '../data/mockHealthData';
import { Check } from 'lucide-react';

function MiniProgress({ current, goal, label, config }: { current: number; goal: number; label: string; config: { textSecondary: string; textTertiary: string } }) {
  const pct = Math.min((current / goal) * 100, 100);
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-baseline">
        <span className="text-[11px]" style={{ color: config.textSecondary }}>{label}</span>
        <span className="text-[10px]" style={{ color: config.textTertiary }}>{current}/{goal}</span>
      </div>
      <div className="h-[3px] rounded-full bg-black/[0.04]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full bg-accent-recovery/60"
        />
      </div>
    </div>
  );
}

export default function HabitCard({ delay = 0 }: { delay?: number }) {
  const { config } = useAmbient();

  return (
    <GlassPanel delay={delay} className="flex flex-col gap-3">
      <span className="text-[11px] font-[500] tracking-[0.08em] uppercase" style={{ color: config.textTertiary }}>
        Recovery Habits
      </span>

      <MiniProgress current={habitData.hydration.current} goal={habitData.hydration.goal} label="Hydration" config={config} />
      <MiniProgress current={habitData.movement.current} goal={habitData.movement.goal} label="Movement" config={config} />

      <div className="flex items-center gap-2">
        <div className="w-[16px] h-[16px] rounded-full bg-accent-recovery/30 flex items-center justify-center">
          <Check size={9} className="text-accent-recovery" strokeWidth={2.5} />
        </div>
        <span className="text-[11px]" style={{ color: config.textSecondary }}>{habitData.windDown.label}</span>
      </div>
    </GlassPanel>
  );
}
