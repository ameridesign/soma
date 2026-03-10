import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassPanel({ children, className = '', hover = true, delay = 0 }: GlassPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={hover ? { y: -2, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } } : undefined}
      className={`
        relative rounded-[32px] p-7
        overflow-hidden
        ${className}
      `}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.36) 50%, rgba(255,255,255,0.42) 100%)',
        backdropFilter: 'blur(48px) saturate(1.6)',
        WebkitBackdropFilter: 'blur(48px) saturate(1.6)',
        boxShadow: `
          0 0.5px 0 0 rgba(255,255,255,0.65) inset,
          0 -0.5px 0 0 rgba(255,255,255,0.15) inset,
          1px 0 0 0 rgba(255,255,255,0.20) inset,
          -1px 0 0 0 rgba(255,255,255,0.20) inset,
          0 4px 32px -8px rgba(0,0,0,0.06),
          0 1px 4px -1px rgba(0,0,0,0.03)
        `,
        border: '0.5px solid rgba(255,255,255,0.50)',
      }}
    >
      {/* Top edge highlight — simulates light hitting glass edge */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-[1px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.7) 70%, transparent)',
        }}
      />
      {/* Inner surface gradient — adds depth and luminosity */}
      <div
        className="absolute inset-0 rounded-[32px] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.14) 0%, transparent 40%, rgba(255,255,255,0.04) 100%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
