import React, { useState } from 'react';
import { Shield, Trophy, FileText, Book, Anchor, Cog, Target, Flame } from 'lucide-react';
import MapMarker from './MapMarker';
import AboutMeModal from './AboutMeModal';

const videoUrl = "/kingdom.mp4";

const MapCanvas = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  return (
    <div className="absolute inset-0 z-0 bg-[#0a192f] overflow-hidden">
      <div className="absolute inset-0">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
      </div>
      
      {/* Map Markers positioned absolutely */}
      <MapMarker 
        id="about"
        title="ABOUT ME"
        subtitle="The Castle"
        icon={<Shield className="w-5 h-5 text-blue-400" />}
        top="31%"
        left="49%"
        onClick={() => setIsAboutModalOpen(true)}
      />
      <MapMarker 
        id="education"
        title="EDUCATION"
        subtitle="The Academy"
        icon={<Book className="w-5 h-5 text-blue-400" />}
        top="37%"
        left="29%"
      />
      <MapMarker 
        id="skills"
        title="SKILLS"
        subtitle="The Library"
        icon={<Book className="w-5 h-5 text-blue-400" />}
        top="62%"
        left="40%"
      />
      <MapMarker 
        id="projects"
        title="PROJECTS"
        subtitle="The Workshop"
        icon={<Cog className="w-5 h-5 text-blue-400" />}
        top="15%"
        left="73%"
      />
      <MapMarker 
        id="hackathons"
        title="HACKATHONS"
        subtitle="The Arena"
        icon={<Trophy className="w-5 h-5 text-yellow-500" />}
        top="43%"
        left="76%"
      />
      <MapMarker 
        id="contact"
        title="CONTACT"
        subtitle="The Harbor"
        icon={<Anchor className="w-5 h-5 text-blue-400" />}
        top="63%"
        left="86%"
      />
      <MapMarker 
        id="certifications"
        title="CERTIFICATIONS"
        subtitle="The Forge"
        icon={<Cog className="w-5 h-5 text-gray-400" />}
        top="20%"
        left="38%"
      />

      <AboutMeModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </div>
  );
};

export default MapCanvas;
