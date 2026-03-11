import { motion } from 'framer-motion';
import { Home, Moon, Activity, User } from 'lucide-react';
import { useAmbient } from './AmbientContext';

const tabs = [
  { label: 'Home', icon: Home, active: true },
  { label: 'Sleep', icon: Moon, active: false },
  { label: 'Recovery', icon: Activity, active: false },
  { label: 'Profile', icon: User, active: false },
];

export default function BottomNavMobile() {
  const { config } = useAmbient();

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div
        className="mx-3 mb-3 px-2 py-2.5 rounded-[24px]"
        style={{
          background: config.glassBg,
          backdropFilter: 'blur(48px) saturate(1.6)',
          WebkitBackdropFilter: 'blur(48px) saturate(1.6)',
          border: config.glassBorder,
          boxShadow: `
            0 0.5px 0 0 ${config.glassHighlight} inset,
            0 -0.5px 0 0 rgba(255,255,255,0.10) inset,
            ${config.glassShadow}
          `,
        }}
      >
        <div className="flex items-center justify-around">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className="flex flex-col items-center gap-0.5 py-1.5 px-4 rounded-2xl transition-colors duration-300"
            >
              <tab.icon
                size={20}
                strokeWidth={tab.active ? 1.8 : 1.4}
                style={{ color: tab.active ? config.textPrimary : config.textTertiary }}
              />
              <span
                className={`text-[10px] tracking-wide ${tab.active ? 'font-[500]' : 'font-[400]'}`}
                style={{ color: tab.active ? config.textSecondary : config.textTertiary }}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
