import { motion, AnimatePresence } from 'framer-motion';
import { useAmbient } from './AmbientContext';

export default function AmbientBackground() {
  const { mode, config } = useAmbient();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="absolute inset-0"
        >
          {/* Base gradient */}
          <div className="absolute inset-0" style={{ background: config.base }} />

          {/* Background image (if configured) */}
          {config.backgroundImage && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${config.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          )}

          {/* Meadow-specific: animated light streaks simulating sunlight on grass */}
          {mode === 'meadow' && (
            <>
              <motion.div
                animate={{ opacity: [0.06, 0.14, 0.06], x: ['-5%', '3%', '-5%'] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, transparent 20%, rgba(220,235,140,0.12) 35%, transparent 50%, rgba(200,225,120,0.08) 65%, transparent 80%)',
                }}
              />
              <motion.div
                animate={{ opacity: [0.04, 0.10, 0.04], x: ['3%', '-4%', '3%'] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(160deg, transparent 30%, rgba(240,250,180,0.08) 45%, transparent 60%, rgba(210,230,130,0.06) 75%, transparent 90%)',
                }}
              />
            </>
          )}

          {/* Ambient orbs */}
          {config.orbs.map((orb, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.04, 0.97, 1.02, 1],
                opacity: [0.85, 1, 0.88, 0.95, 0.85],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`absolute rounded-full ${orb.position} ${orb.size}`}
              style={{
                background: orb.gradient,
                filter: `blur(${orb.blur})`,
              }}
            />
          ))}

          {/* Central bloom */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: config.bloom }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
