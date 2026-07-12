import React from 'react';
import { GraduationCap } from 'lucide-react';
import RoyalScroll from './RoyalScroll';

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EducationModal: React.FC<EducationModalProps> = ({ isOpen, onClose }) => {
  return (
    <RoyalScroll 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Education" 
      subtitle="Academic Journey"
    >
      <div className="space-y-4">
        {/* NMAM */}
        <EducationCard
          icon={<GraduationCap size={24} />}
          institute="NMAM Institute of Technology"
          location="Nitte"
          year="2028"
          degree="B.Tech in Electronics and Communication"
          specialization="Advanced Communication Technology"
          score="8.7 CGPA"
        />

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="w-8 h-px bg-[#8b5a2b]/40"></div>
          <div className="w-1.5 h-1.5 rotate-45 border border-[#8b5a2b]/60"></div>
          <div className="w-8 h-px bg-[#8b5a2b]/40"></div>
        </div>

        {/* Govt PU College */}
        <EducationCard
          icon={<GraduationCap size={24} />}
          institute="Govt PU College"
          location="Brahmavara"
          year="2024"
          degree="Pre University (PCMCs)"
          score="91.33%"
        />

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="w-8 h-px bg-[#8b5a2b]/40"></div>
          <div className="w-1.5 h-1.5 rotate-45 border border-[#8b5a2b]/60"></div>
          <div className="w-8 h-px bg-[#8b5a2b]/40"></div>
        </div>

        {/* Govt Highschool */}
        <EducationCard
          icon={<GraduationCap size={24} />}
          institute="Govt Highschool"
          location="Brahmavara"
          year="2022"
          degree="Secondary School"
          score="94.4%"
        />
      </div>
    </RoyalScroll>
  );
};

interface EducationCardProps {
  icon: React.ReactNode;
  institute: string;
  location: string;
  year: string;
  degree: string;
  specialization?: string;
  score: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  icon,
  institute,
  location,
  year,
  degree,
  specialization,
  score,
}) => (
  <div className="bg-[#e8d5b5]/50 border border-[#8b5a2b]/30 rounded p-4 hover:bg-[#e8d5b5]/70 hover:shadow-md transition-all">
    <div className="flex items-start gap-3">
      <div className="text-[#8b5a2b] mt-1">{icon}</div>
      <div className="flex-1">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1">
            <h4 className="font-bold text-[#5c2e0e] text-base">{institute}</h4>
            <p className="text-[#6b4423] text-sm">{location}</p>
            <p className="font-semibold text-[#4a3525] text-sm mt-1">{degree}</p>
            {specialization && (
              <p className="text-[#6b4423] text-xs italic mt-1">{specialization}</p>
            )}
          </div>
          <div className="text-right">
            <p className="font-bold text-[#8b5a2b] text-sm">{year}</p>
            <p className="bg-[#8b5a2b]/20 text-[#5c2e0e] font-bold px-2 py-1 rounded text-xs mt-1">
              {score}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EducationModal;
