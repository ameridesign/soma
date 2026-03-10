import { motion } from 'framer-motion';
import GlassPanel from './GlassPanel';
import { habitData } from '../data/mockHealthData';
import { Check } from 'lucide-react';

function MiniProgress({ current, goal, label }: { current: number; goal: number; label: string }) {
  const pct = Math.min((current / goal) * 100, 100);
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-baseline">
        <span className="text-[12px] text-text-secondary">{label}</span>
        <span className="text-[11px] text-text-tertiary">
          {current}/{goal}
        </span>
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
  return (
    <GlassPanel delay={delay} className="flex flex-col gap-4">
      <span className="text-[12px] font-medium tracking-[0.06em] uppercase text-text-tertiary">
        Recovery Habits
      </span>

      <MiniProgress
        current={habitData.hydration.current}
        goal={habitData.hydration.goal}
        label="Hydration"
      />
      <MiniProgress
        current={habitData.movement.current}
        goal={habitData.movement.goal}
        label="Movement"
      />

      <div className="flex items-center gap-2">
        <div className="w-[18px] h-[18px] rounded-full bg-accent-recovery/30 flex items-center justify-center">
          <Check size={10} className="text-accent-recovery" strokeWidth={2.5} />
        </div>
        <span className="text-[12px] text-text-secondary">{habitData.windDown.label}</span>
      </div>
    </GlassPanel>
  );
}
