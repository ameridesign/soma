import GlassPanel from './GlassPanel';
import { useAmbient } from './AmbientContext';
import { sleepData } from '../data/mockHealthData';

export default function SleepCard({ delay = 0 }: { delay?: number }) {
  const { config } = useAmbient();
  const totalWidth = sleepData.stages.reduce((sum, s) => sum + s.hours, 0);

  return (
    <GlassPanel delay={delay} className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="w-[6px] h-[6px] rounded-full bg-accent-sleep" />
        <span className="text-[11px] font-[500] tracking-[0.08em] uppercase" style={{ color: config.textTertiary }}>
          Sleep
        </span>
      </div>

      <div className="flex items-baseline gap-3">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[28px] lg:text-[32px] font-[300] leading-none tracking-tight" style={{ color: config.textPrimary }}>
            {sleepData.totalHours}
          </span>
          <span className="text-[12px]" style={{ color: config.textTertiary }}>hrs</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[16px] font-[300]" style={{ color: `${config.textPrimary}90` }}>{sleepData.quality}</span>
          <span className="text-[10px]" style={{ color: config.textTertiary }}>quality</span>
        </div>
      </div>

      <div className="flex rounded-full h-[5px] overflow-hidden gap-[2px]">
        {sleepData.stages.map((stage) => (
          <div
            key={stage.label}
            className="h-full rounded-full"
            style={{
              width: `${(stage.hours / totalWidth) * 100}%`,
              backgroundColor: stage.color,
            }}
          />
        ))}
      </div>

      <div className="flex gap-3 flex-wrap">
        {sleepData.stages.map((stage) => (
          <div key={stage.label} className="flex items-center gap-1.5">
            <div className="w-[4px] h-[4px] rounded-full" style={{ backgroundColor: stage.color }} />
            <span className="text-[10px]" style={{ color: config.textTertiary }}>
              {stage.label} {stage.hours}h
            </span>
          </div>
        ))}
      </div>

      <div className="text-[11px]" style={{ color: config.textSecondary }}>
        {sleepData.bedtime} → {sleepData.wakeTime}
      </div>
    </GlassPanel>
  );
}
