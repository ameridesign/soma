import { motion } from 'framer-motion';

interface LiquidOrbProps {
  score: number;
  status: string;
  message: string;
}

export default function LiquidOrb({ score, status, message }: LiquidOrbProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
      className="flex flex-col items-center gap-6"
    >
      {/* Orb Container */}
      <div className="relative w-[230px] h-[230px] md:w-[290px] md:h-[290px] lg:w-[340px] lg:h-[340px] cursor-default">
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
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            boxShadow: `
              0 0.5px 0 0 rgba(255,255,255,0.45) inset,
              0 -0.5px 0 0 rgba(0,0,0,0.03) inset,
              0 12px 60px -15px rgba(130,160,155,0.15),
              0 2px 12px -3px rgba(0,0,0,0.04)
            `,
            border: '0.5px solid rgba(255,255,255,0.35)',
          }}
        />

        {/* Inner liquid layer 1 — primary slow morph */}
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

        {/* Inner liquid layer 2 — secondary offset morph */}
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

        {/* Inner liquid layer 3 — deep core */}
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

        {/* Specular highlight — top edge catch light */}
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

        {/* Rim light — subtle edge definition */}
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
            className="text-[11px] md:text-[12px] font-[500] tracking-[0.14em] uppercase mb-1.5"
            style={{ color: 'rgba(30,30,35,0.40)' }}
          >
            Recovery
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-[54px] md:text-[68px] lg:text-[76px] font-[250] leading-none tracking-[-0.02em]"
            style={{ color: 'rgba(30,30,35,0.82)' }}
          >
            {score}
          </motion.span>
        </div>
      </div>

      {/* Status text below orb */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        className="text-center"
      >
        <p className="text-[16px] md:text-[18px] font-[500] tracking-[0.01em]" style={{ color: 'rgba(30,30,35,0.80)' }}>
          {status}
        </p>
        <p className="text-[13px] md:text-[14px] mt-1.5 max-w-[300px] leading-relaxed" style={{ color: 'rgba(30,30,35,0.44)' }}>
          {message}
        </p>
      </motion.div>
    </motion.div>
  );
}
