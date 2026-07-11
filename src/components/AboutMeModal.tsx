import React from 'react';
import { User, GraduationCap, Building, Heart, MapPin, Laptop, Cpu, Gamepad2, BookOpen, Globe, ExternalLink } from 'lucide-react';
import RoyalScroll from './RoyalScroll';

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
      <div className="flex gap-5 mb-8 items-center">
        <div className="shrink-0 relative">
          <div className="w-28 h-28 rounded-md border-4 border-[#8b5a2b] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.5)] bg-[#4a6b8c] transform rotate-[-2deg]">
            <img 
              src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Ajay&skinColor=f4d4a8" 
              alt="Ajay Acharya" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative pin */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-300 rounded-full shadow-sm border border-gray-400 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 text-[14px] leading-relaxed font-serif text-[#4a3525]">
          <p className="mb-2 font-bold text-xl text-[#8b5a2b]">Hey there! 👋</p>
          <p className="font-medium">
            I'm <span className="font-bold text-[#5c2e0e] text-base">Ajay Acharya</span>, 
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
        
        <div className="space-y-3 text-[13.5px] font-serif bg-[#e8d5b5]/50 p-4 rounded border border-[#8b5a2b]/20 shadow-inner">
          <FactRow icon={<User size={16} />} label="Name" value="Ajay Acharya" />
          <FactRow icon={<GraduationCap size={16} />} label="Education" value="B.Tech in ECE" />
          <FactRow icon={<Building size={16} />} label="College" value="GLA University, Mathura" />
          <FactRow icon={<Heart size={16} />} label="Passion" value="Building, Learning, Innovating" />
          <FactRow icon={<MapPin size={16} />} label="Location" value="India" />
        </div>
      </div>

      {/* What Drives Me */}
      <div className="mb-8 text-center bg-white/30 p-4 rounded border border-white/20 shadow-sm relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f2e6cf] px-2 text-[#8b5a2b]">
          <h3 className="font-serif font-bold text-lg uppercase tracking-wider">What Drives Me</h3>
        </div>
        <p className="text-[14px] leading-relaxed font-serif font-medium mt-2 italic text-[#5a3a22]">
          "I love turning ideas into real-world solutions. 
          I enjoy working on projects that create impact 
          and solving problems through technology."
        </p>
      </div>

      {/* Hobbies */}
      <div className="mb-8 text-center">
        <h3 className="font-serif font-bold text-lg text-[#5c2e0e] mb-4 uppercase tracking-wider">Hobbies</h3>
        <div className="flex justify-center gap-5 flex-wrap">
          <HobbyIcon icon={<Laptop size={24} />} label="Coding" />
          <HobbyIcon icon={<Cpu size={24} />} label="Electronics" />
          <HobbyIcon icon={<Gamepad2 size={24} />} label="Gaming" />
          <HobbyIcon icon={<BookOpen size={24} />} label="Reading" />
          <HobbyIcon icon={<Globe size={24} />} label="Travel" />
        </div>
      </div>

      {/* Connect Button */}
      <div className="flex justify-center mt-6 mb-2">
        <button className="group relative flex items-center gap-2 bg-gradient-to-b from-[#8b5a2b] to-[#5c2e0e] hover:from-[#9c6a3b] hover:to-[#6c3e1e] text-[#f2e6cf] font-serif font-bold text-lg py-2.5 px-8 rounded shadow-[0_4px_0_#3a1a05,0_10px_20px_rgba(0,0,0,0.4)] active:translate-y-1 active:shadow-[0_0_0_#3a1a05,0_0_0_rgba(0,0,0,0.4)] transition-all overflow-hidden border border-[#a67a4b]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          <span className="tracking-wide">Let's Connect</span>
          <ExternalLink size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </RoyalScroll>
  );
};

const FactRow = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-start gap-4 border-b border-[#8b5a2b]/20 pb-2 pt-1 last:border-0 hover:bg-[#8b5a2b]/5 px-2 rounded transition-colors">
    <div className="text-[#8b5a2b] mt-0.5 w-5 flex justify-center drop-shadow-sm">{icon}</div>
    <div className="w-24 font-bold text-[#5c2e0e] tracking-wide">{label}</div>
    <div className="flex-1 font-medium text-[#4a3525]">{value}</div>
  </div>
);

const HobbyIcon = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer">
    <div className="text-[#3a2515] bg-gradient-to-br from-[#e8d5b5] to-[#d8c29d] p-3 rounded-lg border border-[#8b5a2b]/40 shadow-[0_2px_8px_rgba(139,90,43,0.2)] group-hover:shadow-[0_4px_12px_rgba(139,90,43,0.3)] group-hover:-translate-y-1 transition-all">
      {icon}
    </div>
    <span className="text-[11px] font-bold text-[#5c2e0e] uppercase tracking-wider">{label}</span>
  </div>
);

export default AboutMeModal;
