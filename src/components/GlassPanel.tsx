import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, type ReactNode } from 'react';
import { useAmbient } from './AmbientContext';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  depth?: 1 | 2 | 3;
}

export default function GlassPanel({ children, className = '', hover = true, delay = 0, depth = 2 }: GlassPanelProps) {
  const { config } = useAmbient();
  const ref = useRef<HTMLDivElement>(null);

  // Subtle floating drift
  const driftY = useMotionValue(0);
  const smoothDrift = useSpring(driftY, { stiffness: 20, damping: 30 });

  useEffect(() => {
    const offset = (Math.random() - 0.5) * 3;
    const speed = 6000 + Math.random() * 4000;
    let frame: number;
    const animate = () => {
      const t = Date.now() / speed;
      driftY.set(Math.sin(t) * offset);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [driftY]);

  // Desktop parallax
  const mouseX = useMotionValue(0);
  const parallaxFactor = depth === 3 ? 5 : depth === 1 ? 1.5 : 3;
  const px = useSpring(useTransform(mouseX, [-1, 1], [-parallaxFactor, parallaxFactor]), { stiffness: 50, damping: 30 });

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;
    const handler = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX]);

  const blurAmount = depth === 3 ? 56 : depth === 1 ? 36 : 48;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={hover ? { y: -2, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } } : undefined}
      style={{
        x: px,
        y: smoothDrift,
        background: config.glassBg,
        backdropFilter: `blur(${blurAmount}px) saturate(1.6)`,
        WebkitBackdropFilter: `blur(${blurAmount}px) saturate(1.6)`,
        boxShadow: `
          0 0.5px 0 0 ${config.glassHighlight} inset,
          0 -0.5px 0 0 rgba(255,255,255,0.12) inset,
          1px 0 0 0 rgba(255,255,255,0.15) inset,
          -1px 0 0 0 rgba(255,255,255,0.15) inset,
          ${config.glassShadow}
        `,
        border: config.glassBorder,
      }}
      className={`relative rounded-[28px] p-5 lg:p-6 overflow-hidden ${className}`}
    >
      {/* Top edge highlight */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-[1px] pointer-events-none"
        style={{ background: config.glassEdge }}
      />
      {/* Inner surface gradient */}
      <div
        className="absolute inset-0 rounded-[28px] pointer-events-none"
        style={{ background: config.glassSurface }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
