import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

export default function TopBar() {
  const now = new Date();
  const greeting = now.getHours() < 12 ? 'Good morning' : now.getHours() < 17 ? 'Good afternoon' : 'Good evening';
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
      className="flex items-center justify-between px-5 md:px-8 lg:px-10 py-5 md:py-6"
    >
      {/* Left: Brand */}
      <div className="flex items-center gap-3 md:gap-4">
        <h1
          className="text-[21px] md:text-[23px] font-[600] tracking-[-0.01em]"
          style={{ color: 'rgba(30,30,35,0.85)' }}
        >
          Soma
        </h1>
        <div className="hidden md:block w-px h-4" style={{ background: 'rgba(30,30,35,0.10)' }} />
        <span className="hidden md:block text-[13px] font-[400]" style={{ color: 'rgba(30,30,35,0.40)' }}>
          {greeting}
        </span>
      </div>

      {/* Center: Date (desktop) */}
      <div
        className="hidden lg:block text-[13px] font-[400] tracking-wide"
        style={{ color: 'rgba(30,30,35,0.32)' }}
      >
        {dateStr}
      </div>

      {/* Right: Status + Settings */}
      <div className="flex items-center gap-3">
        <div
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.45), rgba(255,255,255,0.30))',
            backdropFilter: 'blur(32px) saturate(1.4)',
            WebkitBackdropFilter: 'blur(32px) saturate(1.4)',
            border: '0.5px solid rgba(255,255,255,0.45)',
            boxShadow: '0 1px 8px -2px rgba(0,0,0,0.04), 0 0.5px 0 0 rgba(255,255,255,0.55) inset',
          }}
        >
          <div className="w-[6px] h-[6px] rounded-full bg-accent-recovery" />
          <span className="text-[12px] font-[500] tracking-wide" style={{ color: 'rgba(30,30,35,0.48)' }}>
            Recovery ready
          </span>
        </div>
        <button
          className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.38), rgba(255,255,255,0.22))',
            backdropFilter: 'blur(32px) saturate(1.4)',
            WebkitBackdropFilter: 'blur(32px) saturate(1.4)',
            border: '0.5px solid rgba(255,255,255,0.40)',
            boxShadow: '0 1px 6px -2px rgba(0,0,0,0.04), 0 0.5px 0 0 rgba(255,255,255,0.5) inset',
          }}
          aria-label="Settings"
        >
          <Settings size={16} strokeWidth={1.6} style={{ color: 'rgba(30,30,35,0.42)' }} />
        </button>
      </div>
    </motion.header>
  );
}
