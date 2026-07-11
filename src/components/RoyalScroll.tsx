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

const RoyalScroll: React.FC<RoyalScrollProps> = ({ isOpen, onClose, title, subtitle, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm pointer-events-auto"
        >
          {/* Scroll Container - Royal Letter Style */}
          <motion.div 
            initial={{ scale: 0.9, y: 20, rotateX: -20, opacity: 0 }}
            animate={{ scale: 1, y: 0, rotateX: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, rotateX: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md max-h-full overflow-y-auto bg-gradient-to-br from-[#f2e6cf] to-[#d8c29d] border-[3px] border-[#8b5a2b] shadow-[0_10px_30px_rgba(0,0,0,0.7),inset_0_0_20px_rgba(139,90,43,0.3)] rounded-sm p-8 text-[#4a3525] transform-gpu [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{
              boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 0 40px rgba(139,90,43,0.2), inset 0 0 10px rgba(255,255,255,0.5)',
              borderRadius: '4px',
              perspective: '1000px'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#8b5a2b] hover:bg-[#6b421a] text-[#f2e6cf] transition-colors border-2 border-[#d8c29d] shadow-md z-10"
            >
              <X size={18} strokeWidth={3} />
            </button>

            {/* Header */}
            <div className="text-center mb-6 mt-2">
              <div className="flex items-center justify-center gap-3 mb-1">
                <div className="w-2 h-2 rotate-45 bg-[#8b5a2b]"></div>
                <h2 className="text-3xl font-serif font-bold text-[#3a2515] tracking-wide">{title}</h2>
                <div className="w-2 h-2 rotate-45 bg-[#8b5a2b]"></div>
              </div>
              {subtitle && (
                <div className="flex items-center justify-center gap-2 text-[#6b421a]">
                  <div className="w-8 h-px bg-[#8b5a2b]/50"></div>
                  <span className="font-serif text-sm italic">{subtitle}</span>
                  <div className="w-8 h-px bg-[#8b5a2b]/50"></div>
                </div>
              )}
            </div>

            {/* Content */}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RoyalScroll;
