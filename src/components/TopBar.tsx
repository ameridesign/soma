import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Settings } from 'lucide-react';
import { useAmbient } from './AmbientContext';

export default function TopBar() {
  const { config } = useAmbient();
  const now = new Date();
  const greeting = now.getHours() < 12 ? 'Good morning' : now.getHours() < 17 ? 'Good afternoon' : 'Good evening';
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const px = useSpring(useTransform(mouseX, [-1, 1], [-1.2, 1.2]), { stiffness: 50, damping: 30 });
  const py = useSpring(useTransform(mouseY, [-1, 1], [-0.6, 0.6]), { stiffness: 50, damping: 30 });

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;
    const handler = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
      style={{ x: px, y: py }}
      className="flex items-center justify-between px-5 md:px-8 lg:px-10 py-4 md:py-5 relative z-30"
    >
      <div className="flex items-center gap-3 md:gap-4">
        <h1 className="text-[20px] md:text-[22px] font-[600] tracking-[-0.01em]" style={{ color: config.textPrimary }}>
          Soma
        </h1>
        <div className="hidden md:block w-px h-4" style={{ background: `${config.textTertiary}40` }} />
        <span className="hidden md:block text-[13px] font-[400]" style={{ color: config.textSecondary }}>
          {greeting}
        </span>
      </div>

      <div className="hidden lg:block text-[13px] font-[400] tracking-wide" style={{ color: config.textTertiary }}>
        {dateStr}
      </div>

      <div className="flex items-center gap-3">
        <div
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: config.glassBg,
            backdropFilter: 'blur(32px) saturate(1.4)',
            WebkitBackdropFilter: 'blur(32px) saturate(1.4)',
            border: config.glassBorder,
            boxShadow: `0 0.5px 0 0 ${config.glassHighlight} inset, ${config.glassShadow}`,
          }}
        >
          <div className="w-[6px] h-[6px] rounded-full" style={{ background: config.accentRecovery }} />
          <span className="text-[12px] font-[500] tracking-wide" style={{ color: config.textSecondary }}>
            Recovery ready
          </span>
        </div>
        <button
          className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: config.glassBg,
            backdropFilter: 'blur(32px) saturate(1.4)',
            WebkitBackdropFilter: 'blur(32px) saturate(1.4)',
            border: config.glassBorder,
            boxShadow: `0 0.5px 0 0 ${config.glassHighlight} inset, ${config.glassShadow}`,
          }}
          aria-label="Settings"
        >
          <Settings size={16} strokeWidth={1.6} style={{ color: config.textSecondary }} />
        </button>
      </div>
    </motion.header>
  );
}
