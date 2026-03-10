import GlassPanel from './GlassPanel';
import { useAmbient } from './AmbientContext';
import { forecastData } from '../data/mockHealthData';
import { Moon } from 'lucide-react';

export default function ForecastCard({ delay = 0 }: { delay?: number }) {
  const { config } = useAmbient();

  return (
    <GlassPanel delay={delay} className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2">
        <Moon size={12} className="text-accent-sleep" strokeWidth={1.8} />
        <span className="text-[11px] font-[500] tracking-[0.08em] uppercase" style={{ color: config.textTertiary }}>
          Tonight's Forecast
        </span>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-[18px] font-[300]" style={{ color: config.textPrimary }}>{forecastData.confidence}</span>
        <span className="text-[11px]" style={{ color: config.textTertiary }}>outlook</span>
      </div>

      <p className="text-[11px] leading-relaxed" style={{ color: config.textSecondary }}>
        {forecastData.message}
      </p>
    </GlassPanel>
  );
}
