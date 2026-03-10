import GlassPanel from './GlassPanel';

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
  return (
    <GlassPanel delay={delay} className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        {accent && (
          <div
            className="w-[7px] h-[7px] rounded-full"
            style={{ backgroundColor: accent }}
          />
        )}
        <span className="text-[12px] font-medium tracking-[0.06em] uppercase text-text-tertiary">
          {label}
        </span>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-[32px] md:text-[36px] font-[300] leading-none tracking-tight text-text-primary">
          {value}
        </span>
        {unit && (
          <span className="text-[13px] text-text-tertiary font-normal">
            {unit}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="text-[13px] text-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </GlassPanel>
  );
}
