import React from 'react';
import { Trophy, ExternalLink, Calendar } from 'lucide-react';
import RoyalScroll from './RoyalScroll';

interface HackathonsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Hackathon {
  name: string;
  college: string;
  location: string;
  duration: string;
  date: string;
}

const HackathonsModal: React.FC<HackathonsModalProps> = ({ isOpen, onClose }) => {
  const hackathons: Hackathon[] = [
    {
      name: 'AETHERION-26',
      college: 'Canara Engineering College',
      location: 'Mangalore',
      duration: '24 Hours',
      date: 'March 12-13, 2026',
    },
    {
      name: 'ATHERNEX',
      college: 'BMS College of Engineering',
      location: 'Bangalore',
      duration: '24 Hours',
      date: 'April 24-25, 2026',
    },
  ];

  return (
    <RoyalScroll 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Hackathons" 
      subtitle="The Arena"
    >
      <div className="space-y-3">
        {hackathons.map((hackathon, index) => (
          <div key={index}>
            <HackathonCard
              name={hackathon.name}
              college={hackathon.college}
              location={hackathon.location}
              duration={hackathon.duration}
              date={hackathon.date}
            />
            {index < hackathons.length - 1 && (
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="w-6 h-px bg-[#8b5a2b]/30"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </RoyalScroll>
  );
};

interface HackathonCardProps {
  name: string;
  college: string;
  location: string;
  duration: string;
  date: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({ name, college, location, duration, date }) => (
  <div className="block bg-[#e8d5b5]/50 border border-[#8b5a2b]/30 rounded p-3 hover:bg-[#e8d5b5]/80 hover:shadow-md hover:border-[#8b5a2b]/60 transition-all">
    <div className="flex items-start gap-3">
      <div className="text-yellow-600 mt-1 flex-shrink-0">
        <Trophy size={22} className="drop-shadow-sm" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-[#5c2e0e] text-sm">
          {name}
        </h4>
        <p className="text-[#6b4423] text-xs mt-1 font-semibold">{college}</p>
        <p className="text-[#6b4423] text-xs">{location}</p>
        <div className="flex items-center gap-1 mt-2 text-[#8b5a2b]">
          <Calendar size={12} />
          <span className="text-xs font-medium">{duration}</span>
        </div>
        <p className="text-[#8b5a2b] text-xs font-semibold mt-1">{date}</p>
      </div>
    </div>
  </div>
);

export default HackathonsModal;
