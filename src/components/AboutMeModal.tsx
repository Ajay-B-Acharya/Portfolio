import React from 'react';
import { User, GraduationCap, Building, Heart, MapPin, Laptop, Cpu, Gamepad2, Pen, Film, Calendar } from 'lucide-react';
import RoyalScroll from './RoyalScroll';
import AjayImage from '../assets/images/Ajay.jpeg';

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutMeModal: React.FC<AboutMeModalProps> = ({ isOpen, onClose }) => {
  return (
    <RoyalScroll 
      isOpen={isOpen} 
      onClose={onClose} 
      title="About Me" 
      subtitle="Home Village"
    >
      {/* Intro Section */}
      <div className="flex gap-8 mb-8 items-start">
        <div className="shrink-0 relative">
          <div className="w-48 h-48 rounded-md border-4 border-[#8b5a2b] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.5)] bg-[#4a6b8c] transform rotate-[-2deg]">
            <img 
              src={AjayImage}
              alt="Ajay Acharya" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative pin */}
          <div className="absolute -top-3 -right-3 w-5 h-5 bg-gray-300 rounded-full shadow-sm border border-gray-400 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 text-[15px] leading-relaxed font-serif text-[#4a3525]">
          <p className="mb-3 font-bold text-2xl text-[#8b5a2b]">Hey there! 👋</p>
          <p className="font-medium">
            I'm <span className="font-bold text-[#5c2e0e] text-lg">Ajay</span>, 
            an Electronics & Communication Engineering student, developer, 
            problem solver, and life-long learner.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center gap-2 my-6">
        <div className="w-12 h-px bg-[#8b5a2b]/40"></div>
        <div className="w-2 h-2 rotate-45 border border-[#8b5a2b]/60"></div>
        <div className="w-12 h-px bg-[#8b5a2b]/40"></div>
      </div>

      {/* Quick Facts */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-2 mb-4 text-[#5a3a22]">
          <div className="w-1.5 h-1.5 rotate-45 bg-[#8b5a2b]"></div>
          <h3 className="font-serif font-bold text-xl uppercase tracking-widest text-[#5c2e0e]">Quick Facts</h3>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#8b5a2b]"></div>
        </div>
        
        <div className="space-y-2 text-[13.5px] font-serif bg-[#e8d5b5]/50 p-4 rounded border border-[#8b5a2b]/20 shadow-inner">
          <div className="grid grid-cols-2 gap-4">
            <FactRow icon={<User size={16} />} label="Name" value="AJAY" />
            <FactRow icon={<Calendar size={16} />} label="D.O.B" value="26/07/2006" />
            <FactRow icon={<GraduationCap size={16} />} label="Education" value="B.Tech in ECE" />
            <FactRow icon={<Building size={16} />} label="College" value="NMAM Institute of Technology" />
            <FactRow icon={<MapPin size={16} />} label="Location" value="Udupi, Karnataka, India" />
          </div>
          <div className="flex gap-4 mt-2">
            <div className="flex-1">
              <FactRow icon={<Heart size={16} />} label="Passion" value="Building, Learning, Innovating" />
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies */}
      <div className="mb-8 text-center">
        <h3 className="font-serif font-bold text-lg text-[#5c2e0e] mb-4 uppercase tracking-wider">Hobbies</h3>
        <div className="flex justify-center gap-8 flex-wrap">
          <HobbyIcon icon={<Laptop size={24} />} label="Coding" />
          <HobbyIcon icon={<Cpu size={24} />} label="Electronics" />
          <HobbyIcon icon={<Gamepad2 size={24} />} label="Gaming" />
          <HobbyIcon icon={<Pen size={24} />} label="Sketching" />
          <HobbyIcon icon={<Film size={24} />} label="Movies" />
        </div>
      </div>
    </RoyalScroll>
  );
};

const FactRow = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-start gap-3 pb-1 hover:bg-[#8b5a2b]/5 px-1 rounded transition-colors">
    <div className="text-[#8b5a2b] mt-0.5 w-4 flex justify-center drop-shadow-sm shrink-0">{icon}</div>
    <div className="flex-1">
      <div className="font-bold text-[#5c2e0e] tracking-wide text-sm">{label}</div>
      <div className="font-medium text-[#4a3525] text-xs">{value}</div>
    </div>
  </div>
);

const HobbyIcon = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer">
    <div className="text-[#3a2515] bg-gradient-to-br from-[#e8d5b5] to-[#d8c29d] p-4 rounded-lg border border-[#8b5a2b]/40 shadow-[0_2px_8px_rgba(139,90,43,0.2)] group-hover:shadow-[0_4px_12px_rgba(139,90,43,0.3)] group-hover:-translate-y-1 transition-all">
      {icon}
    </div>
    <span className="text-[11px] font-bold text-[#5c2e0e] uppercase tracking-wider">{label}</span>
  </div>
);

export default AboutMeModal;
