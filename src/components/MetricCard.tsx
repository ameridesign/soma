import GlassPanel from './GlassPanel';
import { useAmbient } from './AmbientContext';

interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  subtitle?: string;
  accent?: string;
  delay?: number;
  children?: React.ReactNode;
}

export default function MetricCard({ label, value, unit, subtitle, accent, delay = 0, children }: MetricCardProps) {
  const { config } = useAmbient();

  return (
    <GlassPanel delay={delay} className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        {accent && <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: accent }} />}
        <span className="text-[11px] font-[500] tracking-[0.08em] uppercase" style={{ color: config.textTertiary }}>
          {label}
        </span>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-[28px] lg:text-[32px] font-[300] leading-none tracking-tight" style={{ color: config.textPrimary }}>
          {value}
        </span>
        {unit && <span className="text-[12px]" style={{ color: config.textTertiary }}>{unit}</span>}
      </div>
      {subtitle && <p className="text-[12px] leading-relaxed" style={{ color: config.textSecondary }}>{subtitle}</p>}
      {children}
    </GlassPanel>
  );
}
