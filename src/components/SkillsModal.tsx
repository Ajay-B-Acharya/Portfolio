import React from 'react';
import RoyalScroll from './RoyalScroll';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['C Programming', 'C++ Programming', 'JavaScript']
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'Web Development', 'Frontend Development']
  },
  {
    category: 'Data & Algorithms',
    skills: ['Data Structures and Algorithms', 'Database Management System']
  },
  {
    category: 'Backend & Database',
    skills: ['Firebase', 'Supabase']
  },
  {
    category: 'Electronics & Circuit Design',
    skills: ['Circuit Design', 'PCB Design', 'Circuit Simulation', 'KiCAD', 'LTSpice', 'Circuit Analysis']
  },
  {
    category: 'Other',
    skills: ['Vibe Coding']
  }
];

const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  return (
    <RoyalScroll 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Skills" 
      subtitle="The Library"
    >
      <div className="space-y-6">
        {skillsData.map((category) => (
          <div key={category.category}>
            <h3 className="font-serif font-bold text-lg text-[#8b5a2b] uppercase tracking-wider mb-3">{category.category}</h3>
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill) => (
                <div 
                  key={skill}
                  className="bg-gradient-to-br from-[#e8d5b5] to-[#d8c29d] p-3 rounded border border-[#8b5a2b]/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <p className="font-serif text-sm font-medium text-[#3a2515]">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </RoyalScroll>
  );
};

export default SkillsModal;
