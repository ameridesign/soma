import GlassPanel from './GlassPanel';
import { forecastData } from '../data/mockHealthData';
import { Moon } from 'lucide-react';

export default function ForecastCard({ delay = 0 }: { delay?: number }) {
  return (
    <GlassPanel delay={delay} className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Moon size={13} className="text-accent-sleep" strokeWidth={1.8} />
        <span className="text-[12px] font-medium tracking-[0.06em] uppercase text-text-tertiary">
          Tonight's Forecast
        </span>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-[20px] font-[300] text-text-primary">{forecastData.confidence}</span>
        <span className="text-[12px] text-text-tertiary">outlook</span>
      </div>

      <p className="text-[13px] text-text-secondary leading-relaxed">
        {forecastData.message}
      </p>
    </GlassPanel>
  );
}
