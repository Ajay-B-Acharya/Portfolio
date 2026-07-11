import React from 'react';

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
  return (
    <div 
      className="absolute group cursor-pointer z-10 hover:z-20 transition-transform hover:scale-110"
      style={{ top, left, transform: 'translate(-50%, -100%)' }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        {/* Banner */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[#e6d8ba] to-[#c7b48c] border-2 border-[#5c4033] shadow-[0_4px_8px_rgba(0,0,0,0.6),inset_0_0_8px_rgba(0,0,0,0.2)] px-3 py-1 mb-1 flex items-center gap-2 rounded shadow-lg relative group-hover:animate-subtle-pulse">
          <div className="bg-[#2c3e50] rounded p-1 shadow-inner border border-[#1a252f]">
            {icon}
          </div>
          <div className="flex flex-col">
            <span className="font-nunito font-extrabold text-xs tracking-tight text-[#2c1a0e] leading-none uppercase">{title}</span>
            <span className="font-nunito font-bold text-[9px] text-[#5c4033] mt-0.5 leading-none">{subtitle}</span>
          </div>
        </div>
        
        {/* Pin or Indicator */}
        <div className="opacity-0 group-hover:opacity-80 transition-opacity duration-300 w-1 h-6 bg-gradient-to-b from-[#5c4033] to-transparent"></div>
        
        {/* Glow effect on hover */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:animate-subtle-pulse transition-opacity pointer-events-none"></div>
      </div>
    </div>
  );
};

export default MapMarker;
