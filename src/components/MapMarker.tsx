import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface MapMarkerProps {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  top: string;
  left: string;
  onClick?: () => void;
}

const MapMarker: React.FC<MapMarkerProps> = ({ id, title, subtitle, icon, top, left, onClick }) => {
  const [bursting, setBursting] = useState(false);

  const handleClick = () => {
    setBursting(true);
    setTimeout(() => setBursting(false), 700);
    onClick?.();
  };

  // 6 dust particles spraying outward on click
  const particles = Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * 2 * Math.PI;
    return {
      dx: Math.round(Math.cos(angle) * 28),
      dy: Math.round(Math.sin(angle) * 28),
    };
  });

  return (
    <div
      className="absolute group cursor-pointer z-10 hover:z-20"
      style={{ top, left, transform: 'translate(-50%, -100%)' }}
      onClick={handleClick}
    >
      <motion.div
        className="flex flex-col items-center"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.88 }}
        transition={{ type: 'spring', stiffness: 420, damping: 18 }}
      >
        {/* Banner tooltip */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-blue-800 to-blue-900 border-2 border-yellow-600 shadow-[0_4px_8px_rgba(0,0,0,0.6),inset_0_0_8px_rgba(0,0,0,0.2)] px-3 py-1 mb-1 flex items-center gap-2 rounded shadow-lg relative group-hover:animate-subtle-pulse">
          <div className="bg-blue-950 rounded p-1 shadow-inner border border-yellow-600">
            {icon}
          </div>
          <div className="flex flex-col">
            <span className="font-nunito font-extrabold text-xs tracking-tight text-yellow-300 leading-none uppercase">{title}</span>
            <span className="font-nunito font-bold text-[9px] text-yellow-200 mt-0.5 leading-none">{subtitle}</span>
          </div>
        </div>

        {/* Connector line */}
        <div className="opacity-0 group-hover:opacity-80 transition-opacity duration-300 w-1 h-6 bg-gradient-to-b from-yellow-600 to-transparent" />

        {/* Glow halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:animate-subtle-pulse transition-opacity pointer-events-none" />
      </motion.div>

      {/* Click burst — dust / wax particles */}
      <AnimatePresence>
        {bursting && particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
            style={{
              width: 6 + (i % 3) * 2,
              height: 6 + (i % 3) * 2,
              background: i % 2 === 0 ? '#8b5a2b' : '#fbbf24',
            }}
            initial={{ x: -3, y: -3, opacity: 1, scale: 1 }}
            animate={{ x: p.dx, y: p.dy, opacity: 0, scale: 0 }}
            exit={{}}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MapMarker;
