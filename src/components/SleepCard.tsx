import GlassPanel from './GlassPanel';
import { sleepData } from '../data/mockHealthData';

export default function SleepCard({ delay = 0 }: { delay?: number }) {
  const totalWidth = sleepData.stages.reduce((sum, s) => sum + s.hours, 0);

  return (
    <GlassPanel delay={delay} className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="w-[7px] h-[7px] rounded-full bg-accent-sleep" />
        <span className="text-[12px] font-medium tracking-[0.06em] uppercase text-text-tertiary">
          Sleep
        </span>
      </div>

      <div className="flex items-baseline gap-3">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[32px] md:text-[36px] font-[300] leading-none tracking-tight text-text-primary">
            {sleepData.totalHours}
          </span>
          <span className="text-[13px] text-text-tertiary">hrs</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[18px] font-[300] text-text-primary/70">{sleepData.quality}</span>
          <span className="text-[11px] text-text-tertiary">quality</span>
        </div>
      </div>

      {/* Sleep stage bar */}
      <div className="flex rounded-full h-[6px] overflow-hidden gap-[2px]">
        {sleepData.stages.map((stage) => (
          <div
            key={stage.label}
            className="h-full rounded-full first:rounded-l-full last:rounded-r-full"
            style={{
              width: `${(stage.hours / totalWidth) * 100}%`,
              backgroundColor: stage.color,
            }}
          />
        ))}
      </div>

      {/* Stage labels */}
      <div className="flex gap-3 flex-wrap">
        {sleepData.stages.map((stage) => (
          <div key={stage.label} className="flex items-center gap-1.5">
            <div
              className="w-[5px] h-[5px] rounded-full"
              style={{ backgroundColor: stage.color }}
            />
            <span className="text-[11px] text-text-tertiary">
              {stage.label} {stage.hours}h
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-4 text-[12px] text-text-secondary">
        <span>{sleepData.bedtime} → {sleepData.wakeTime}</span>
      </div>
    </GlassPanel>
  );
}
