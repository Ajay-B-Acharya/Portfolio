import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Zap } from 'lucide-react';
import RoyalScroll from './RoyalScroll';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SoftwareProject {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
}

interface HardwareProject {
  title: string;
  description: string;
  patent?: {
    number: string;
    date: string;
    url: string;
  };
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'software' | 'hardware'>('software');

  const softwareProjects: SoftwareProject[] = [
    {
      title: 'Chathuranga',
      description:
        'A strategic multiplayer board game inspired by the ancient Indian game that influenced modern chess. Features interactive gameplay, turn-based mechanics, responsive UI design, and smooth user experience using modern web technologies. Focuses on logic implementation, game state management, and engaging gameplay features.',
      liveUrl: 'https://chaturanga-lac.vercel.app/',
      githubUrl: 'https://github.com/Ajay-B-Acharya/Chaturanga',
    },
    {
      title: 'Route-X',
      description:
        'A smart route planning web application for finding the shortest path between locations using free and open-source map services. Utilizes OpenStreetMap for visualization and OSRM for route calculation, providing distance, estimated travel time, and interactive navigation without paid APIs.',
      liveUrl: 'https://route-x-xi.vercel.app/',
      githubUrl: 'https://github.com/Ajay-B-Acharya/RouteX',
    },
    {
      title: 'Ultimate Tic Tac Toe',
      description:
        'An advanced game featuring a multi-board strategy system with dynamic move constraints. Includes efficient game logic, optimized state management, interactive responsive UI, Python FastAPI backend, and AI opponent with decision-making algorithms. Built with clean architecture and performance optimization.',
      liveUrl: 'https://ultimate-tic-tac-toe-icys.vercel.app/',
      githubUrl: 'https://github.com/Ajay-B-Acharya/Ultimate-Tic-Tac-Toe',
    },
  ];

  const hardwareProjects: HardwareProject[] = [
    {
      title: 'Multi-Factor Authentication Door Lock System',
      description:
        'A patented security system integrating multiple authentication methods including fingerprint recognition, RFID-based access, and password verification. Features intelligent modules for data processing and user authentication with tamper detection and real-time alert mechanisms. Demonstrates IoT and embedded systems application in modern security solutions.',
      patent: {
        number: '202541126763',
        date: '02 January 2026',
        url: 'https://iprsearch.ipindia.gov.in/publicsearch',
      },
    },
    {
      title: 'Class A Stereo Amplifier',
      description:
        'A high-fidelity audio amplification circuit designed with linear biasing and symmetric components for premium sound quality. Implements Class A topology for low distortion and rich audio reproduction, ideal for audiophile applications. Features optimized thermal management, impedance matching, and frequency response optimization across the audible spectrum.',
    },
    {
      title: 'AC Detector Circuit PCB',
      description:
        'A fabricated printed circuit board for detecting alternating current presence and characteristics. The circuit implements precision signal conditioning, zero-crossing detection, and frequency analysis for accurate AC detection. Suitable for industrial monitoring, safety applications, and circuit diagnostics.',
    },
  ];

  return (
    <RoyalScroll 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Projects" 
      subtitle="The Workshop"
    >
      {/* Tab Selector */}
      <div className="flex gap-2 mb-6 justify-center">
        <button
          onClick={() => setActiveTab('software')}
          className={`px-4 py-2 rounded font-semibold text-sm transition-colors ${
            activeTab === 'software'
              ? 'bg-[#8b5a2b] text-[#f2e6cf]'
              : 'bg-[#e8d5b5]/50 text-[#5c2e0e] hover:bg-[#e8d5b5]/70'
          }`}
        >
          <div className="flex items-center gap-2">
            <Code2 size={16} />
            Software
          </div>
        </button>
        <button
          onClick={() => setActiveTab('hardware')}
          className={`px-4 py-2 rounded font-semibold text-sm transition-colors ${
            activeTab === 'hardware'
              ? 'bg-[#8b5a2b] text-[#f2e6cf]'
              : 'bg-[#e8d5b5]/50 text-[#5c2e0e] hover:bg-[#e8d5b5]/70'
          }`}
        >
          <div className="flex items-center gap-2">
            <Zap size={16} />
            Hardware
          </div>
        </button>
      </div>

      {/* Projects List */}
      <div className="space-y-3">
        {activeTab === 'software' ? (
          softwareProjects.map((project, index) => (
            <div key={index}>
              <SoftwareProjectCard {...project} />
              {index < softwareProjects.length - 1 && (
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="w-6 h-px bg-[#8b5a2b]/30"></div>
                </div>
              )}
            </div>
          ))
        ) : (
          hardwareProjects.map((project, index) => (
            <div key={index}>
              <HardwareProjectCard {...project} />
              {index < hardwareProjects.length - 1 && (
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="w-6 h-px bg-[#8b5a2b]/30"></div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </RoyalScroll>
  );
};

interface SoftwareProjectCardProps extends SoftwareProject {}

const SoftwareProjectCard: React.FC<SoftwareProjectCardProps> = ({
  title,
  description,
  liveUrl,
  githubUrl,
}) => (
  <div className="bg-[#e8d5b5]/50 border border-[#8b5a2b]/30 rounded p-3 hover:bg-[#e8d5b5]/80 hover:shadow-md transition-all">
    <div>
      <h4 className="font-bold text-[#5c2e0e] text-sm mb-2">{title}</h4>
      <p className="text-[#4a3525] text-xs leading-relaxed mb-3">{description}</p>
      <div className="flex gap-2">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-3 py-1 bg-[#8b5a2b]/20 hover:bg-[#8b5a2b]/40 text-[#5c2e0e] rounded text-xs font-semibold transition-colors"
        >
          <ExternalLink size={12} />
          Live Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-3 py-1 bg-[#8b5a2b]/20 hover:bg-[#8b5a2b]/40 text-[#5c2e0e] rounded text-xs font-semibold transition-colors"
        >
          <Github size={12} />
          Source
        </a>
      </div>
    </div>
  </div>
);

interface HardwareProjectCardProps extends HardwareProject {}

const HardwareProjectCard: React.FC<HardwareProjectCardProps> = ({ title, description, patent }) => (
  <div className="bg-[#e8d5b5]/50 border border-[#8b5a2b]/30 rounded p-3 hover:bg-[#e8d5b5]/80 hover:shadow-md transition-all">
    <div>
      <h4 className="font-bold text-[#5c2e0e] text-sm mb-2">{title}</h4>
      <p className="text-[#4a3525] text-xs leading-relaxed mb-3">{description}</p>
      {patent && (
        <div className="bg-[#8b5a2b]/10 border border-[#8b5a2b]/20 rounded p-2 mb-3">
          <p className="text-[#5c2e0e] text-xs font-semibold">
            Patent: {patent.number}
          </p>
          <p className="text-[#6b4423] text-xs">Issued: {patent.date}</p>
          <a
            href={patent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b5a2b] hover:text-[#5c2e0e] text-xs font-semibold mt-1 inline-flex items-center gap-1 transition-colors"
          >
            View Patent <ExternalLink size={10} />
          </a>
        </div>
      )}
    </div>
  </div>
);

export default ProjectsModal;
