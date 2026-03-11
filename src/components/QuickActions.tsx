import { motion } from 'framer-motion';
import { Wind, Moon, Eye, Activity } from 'lucide-react';
import { useAmbient } from './AmbientContext';

const actions = [
  { label: 'Breathwork', icon: Wind },
  { label: 'Wind Down', icon: Moon },
  { label: 'View Sleep', icon: Eye },
  { label: 'Recovery', icon: Activity },
];

export default function QuickActions({ delay = 0 }: { delay?: number }) {
  const { config } = useAmbient();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className="flex flex-wrap gap-2 lg:gap-2.5 justify-center"
    >
      {actions.map((action, i) => (
        <motion.button
          key={action.label}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + i * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
          whileHover={{ y: -1, transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] } }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-[12px] lg:text-[13px] font-[500] tracking-wide transition-all duration-300"
          style={{
            background: config.glassBg,
            backdropFilter: 'blur(32px) saturate(1.4)',
            WebkitBackdropFilter: 'blur(32px) saturate(1.4)',
            border: config.glassBorder,
            boxShadow: `0 0.5px 0 0 ${config.glassHighlight} inset, ${config.glassShadow}`,
            color: config.textSecondary,
          }}
        >
          <action.icon size={13} strokeWidth={1.6} />
          {action.label}
        </motion.button>
      ))}
    </motion.div>
  );
}
