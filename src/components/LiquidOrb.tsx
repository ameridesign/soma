import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useAmbient } from './AmbientContext';

interface LiquidOrbProps {
  score: number;
  status: string;
  message: string;
}

export default function LiquidOrb({ score, status, message }: LiquidOrbProps) {
  const { config } = useAmbient();

  // Foreground-level parallax (strongest depth)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const px = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), { stiffness: 40, damping: 30 });
  const py = useSpring(useTransform(mouseY, [-1, 1], [-6, 6]), { stiffness: 40, damping: 30 });

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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
      className="flex flex-col items-center gap-4 lg:gap-5"
      style={{ x: px, y: py }}
    >
      {/* Orb */}
      <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] cursor-default">
        {/* Far ambient glow */}
        <motion.div
          animate={{ opacity: [0.4, 0.55, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-[-30%] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(180,200,195,0.25) 0%, rgba(190,190,210,0.10) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Outer glass shell */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.20) 100%)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            boxShadow: `
              0 0.5px 0 0 rgba(255,255,255,0.45) inset,
              0 -0.5px 0 0 rgba(0,0,0,0.03) inset,
              0 12px 60px -15px rgba(130,160,155,0.15),
              0 2px 12px -3px rgba(0,0,0,0.04)
            `,
            border: '0.5px solid rgba(255,255,255,0.35)',
          }}
        />

        {/* Inner liquid layer 1 */}
        <motion.div
          animate={{
            scale: [1, 1.05, 0.97, 1.03, 1],
            borderRadius: ['46% 54% 49% 51%', '51% 49% 53% 47%', '53% 47% 46% 54%', '46% 54% 49% 51%'],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-[10%] rounded-full"
          style={{
            background: 'linear-gradient(145deg, rgba(150,205,180,0.30) 0%, rgba(160,180,210,0.22) 40%, rgba(185,170,200,0.16) 100%)',
            filter: 'blur(1px)',
          }}
        />

        {/* Inner liquid layer 2 */}
        <motion.div
          animate={{
            scale: [1.02, 0.95, 1.04, 0.98, 1.02],
            borderRadius: ['50% 50% 47% 53%', '53% 47% 51% 49%', '47% 53% 53% 47%', '50% 50% 47% 53%'],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-[16%] rounded-full"
          style={{
            background: 'linear-gradient(200deg, rgba(135,195,170,0.25) 0%, rgba(150,170,200,0.18) 50%, rgba(175,160,190,0.12) 100%)',
            filter: 'blur(2px)',
          }}
        />

        {/* Inner liquid layer 3 */}
        <motion.div
          animate={{
            scale: [0.98, 1.03, 0.97, 1.01, 0.98],
            borderRadius: ['48% 52% 50% 50%', '52% 48% 48% 52%', '50% 50% 52% 48%', '48% 52% 50% 50%'],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-[24%] rounded-full"
          style={{
            background: 'radial-gradient(circle at 40% 35%, rgba(170,210,190,0.22) 0%, rgba(160,175,200,0.12) 60%, transparent 100%)',
            filter: 'blur(3px)',
          }}
        />

        {/* Specular highlight */}
        <motion.div
          animate={{ opacity: [0.5, 0.72, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-[4%] rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(165deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.06) 35%, transparent 55%)',
          }}
        />

        {/* Core luminosity */}
        <motion.div
          animate={{ opacity: [0.25, 0.42, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-[28%] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)',
            filter: 'blur(8px)',
          }}
        />

        {/* Rim light */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.35), inset 0 -1px 2px rgba(0,0,0,0.02)',
            border: '0.5px solid rgba(255,255,255,0.22)',
          }}
        />

        {/* Score display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-[10px] md:text-[11px] lg:text-[12px] font-[500] tracking-[0.14em] uppercase mb-1"
            style={{ color: config.textTertiary }}
          >
            Recovery
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-[46px] md:text-[58px] lg:text-[68px] font-[250] leading-none tracking-[-0.02em]"
            style={{ color: config.textPrimary }}
          >
            {score}
          </motion.span>
        </div>
      </div>

      {/* Status text */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        className="text-center"
      >
        <p className="text-[14px] md:text-[16px] font-[500] tracking-[0.01em]" style={{ color: config.textPrimary }}>
          {status}
        </p>
        <p className="text-[12px] md:text-[13px] mt-1 max-w-[260px] leading-relaxed" style={{ color: config.textSecondary }}>
          {message}
        </p>
      </motion.div>
    </motion.div>
  );
}
