import { motion } from 'framer-motion';
import { Wind, Moon, Eye, Activity } from 'lucide-react';

const actions = [
  { label: 'Breathwork', icon: Wind },
  { label: 'Wind Down', icon: Moon },
  { label: 'View Sleep', icon: Eye },
  { label: 'Recovery', icon: Activity },
];

export default function QuickActions({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className="flex flex-wrap gap-2.5 justify-center"
    >
      {actions.map((action, i) => (
        <motion.button
          key={action.label}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + i * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
          whileHover={{ y: -1, transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] } }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-[500] tracking-wide transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.40), rgba(255,255,255,0.25))',
            backdropFilter: 'blur(32px) saturate(1.4)',
            WebkitBackdropFilter: 'blur(32px) saturate(1.4)',
            border: '0.5px solid rgba(255,255,255,0.42)',
            boxShadow: '0 1px 8px -2px rgba(0,0,0,0.04), 0 0.5px 0 0 rgba(255,255,255,0.5) inset',
            color: 'rgba(30,30,35,0.48)',
          }}
        >
          <action.icon size={14} strokeWidth={1.6} />
          {action.label}
        </motion.button>
      ))}
    </motion.div>
  );
}
