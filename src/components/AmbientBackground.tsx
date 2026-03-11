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
          {/* Base — solid color or gradient */}
          <div className="absolute inset-0" style={{ background: config.base }} />

          {/* Background image (if present) */}
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

          {/* Ambient orbs — float on top of image with soft diffusion */}
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
