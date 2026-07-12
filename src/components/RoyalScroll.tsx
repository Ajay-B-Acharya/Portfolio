import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RoyalScrollProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

/* ─────────────────────────────────────────────────────────────────────────
   Timing constants — tweak these to taste
───────────────────────────────────────────────────────────────────────── */
const T = {
  sealDelay:    0.05,   // backdrop appears → seal shows
  sealDuration: 0.35,
  flapDelay:    0.28,   // seal is visible → top flap folds down
  flapDuration: 0.45,
  paperDelay:   0.55,   // flap done → paper unrolls
  paperDuration: 0.55,
  contentDelay: 0.90,   // paper visible → inner content fades in
};

const RoyalScroll: React.FC<RoyalScrollProps> = ({ isOpen, onClose, title, subtitle, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        /* ── Backdrop ── */
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm pointer-events-auto"
        >

          {/* ── Outer wrapper — gives perspective for the 3-D flip ── */}
          <div style={{ perspective: '1200px', width: '100%', maxWidth: '42rem' }}>

            {/* ── Stage 1 · Wax-seal "pop" ── */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 1] }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: T.sealDelay, duration: T.sealDuration, ease: 'easeOut' }}
              className="flex justify-center mb-[-28px] relative z-20 pointer-events-none"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #c0392b, #7b0000)',
                  border: '3px solid #8b5a2b',
                }}
              >
                {/* Crown SVG stamped in wax */}
                <svg viewBox="0 0 24 24" width="26" height="26" fill="#f2e6cf" opacity="0.9">
                  <path d="M2 19h20v2H2v-2zM2 7l5 5 5-8 5 8 5-5v10H2V7z" />
                </svg>
              </div>
            </motion.div>

            {/* ── Stage 2 · Envelope flap that folds down ── */}
            <motion.div
              initial={{ scaleY: 0, rotateX: -90, originY: 0, opacity: 0 }}
              animate={{ scaleY: 1, rotateX: 0, opacity: 1 }}
              exit={{ scaleY: 0, rotateX: -90, opacity: 0 }}
              transition={{ delay: T.flapDelay, duration: T.flapDuration, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'top center' }}
              className="relative z-10"
            >
              {/* ── Stage 3 · Parchment that unrolls top-to-bottom ── */}
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                exit={{ scaleY: 0, opacity: 0 }}
                transition={{ delay: T.paperDelay, duration: T.paperDuration, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-h-[85vh] overflow-hidden border-[3px] border-[#8b5a2b] rounded-sm"
                style={{
                  transformOrigin: 'top center',
                  boxShadow:
                    '0 20px 60px rgba(0,0,0,0.6), inset 0 0 40px rgba(139,90,43,0.15), inset 0 0 8px rgba(255,255,255,0.4)',
                  backgroundImage: `
                    linear-gradient(to bottom, #f7eed8, #f2e6cf 40%, #d8c29d),
                    repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 28px,
                      rgba(139,90,43,0.06) 28px,
                      rgba(139,90,43,0.06) 29px
                    )
                  `,
                }}
              >
                {/* Rolled-edge shadow at top — sits above scrollable content */}
                <div
                  className="absolute top-0 left-0 right-0 h-6 pointer-events-none z-10 rounded-t-sm"
                  style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.18), transparent)' }}
                />
                {/* Rolled-edge shadow at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-6 pointer-events-none z-10 rounded-b-sm"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.18), transparent)' }}
                />

                {/* Inner scrollable wrapper — scrollbar stays fully inside, no bleed */}
                <div className="scroll-hide h-full max-h-[85vh] overflow-y-auto px-8 pt-10 pb-8">

                  {/* ── Stage 4 · Content fades + rises in ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: T.contentDelay, duration: 0.45, ease: 'easeOut' }}
                  >
                    {/* Close Button */}
                    <button
                      onClick={onClose}
                      className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#8b5a2b] hover:bg-[#6b421a] text-[#f2e6cf] transition-colors border-2 border-[#d8c29d] shadow-md z-20"
                    >
                      <X size={18} strokeWidth={3} />
                    </button>

                    {/* ── Decorative top border ── */}
                    <div className="flex items-center justify-center gap-1 mb-5">
                      <div className="flex-1 h-px bg-[#8b5a2b]/40" />
                      <div className="flex gap-1 items-center">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 rotate-45 bg-[#8b5a2b]"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: T.contentDelay + 0.1 + i * 0.06, duration: 0.2 }}
                          />
                        ))}
                      </div>
                      <div className="flex-1 h-px bg-[#8b5a2b]/40" />
                    </div>

                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-3 mb-1">
                        <div className="w-2 h-2 rotate-45 bg-[#8b5a2b]" />
                        <h2 className="text-3xl font-serif font-bold text-[#3a2515] tracking-wide">
                          {title}
                        </h2>
                        <div className="w-2 h-2 rotate-45 bg-[#8b5a2b]" />
                      </div>
                      {subtitle && (
                        <div className="flex items-center justify-center gap-2 text-[#6b421a]">
                          <div className="w-8 h-px bg-[#8b5a2b]/50" />
                          <span className="font-serif text-sm italic">{subtitle}</span>
                          <div className="w-8 h-px bg-[#8b5a2b]/50" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    {children}

                    {/* ── Decorative bottom border ── */}
                    <div className="flex items-center justify-center gap-1 mt-6">
                      <div className="flex-1 h-px bg-[#8b5a2b]/40" />
                      <div className="flex gap-1 items-center">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 rotate-45 bg-[#8b5a2b]"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: T.contentDelay + 0.35 + i * 0.06, duration: 0.2 }}
                          />
                        ))}
                      </div>
                      <div className="flex-1 h-px bg-[#8b5a2b]/40" />
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RoyalScroll;
