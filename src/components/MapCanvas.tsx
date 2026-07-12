import React, { useState, useRef, useEffect } from 'react';
import { Shield, Trophy, FileText, Book, Anchor, Cog, Target, Flame } from 'lucide-react';
import MapMarker from './MapMarker';
import AboutMeModal from './AboutMeModal';
import SkillsModal from './SkillsModal';
import ContactModal from './ContactModal';
import EducationModal from './EducationModal';
import CertificationsModal from './CertificationsModal';
import HackathonsModal from './HackathonsModal';
import ProjectsModal from './ProjectsModal';
import kingdomVideo from '../assets/images/kingdom.mp4';

const videoUrl = kingdomVideo;

const MapCanvas = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCertificationsModalOpen, setIsCertificationsModalOpen] = useState(false);
  const [isHackathonsModalOpen, setIsHackathonsModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [markerStage, setMarkerStage] = useState({ width: 0, height: 0, left: 0 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlayAttempt = () => {
      video.play().catch(error => {
        console.log("Video autoplay failed (this is normal, will play on interaction):", error.name);
      });
    };

    // Try to play on mount
    handlePlayAttempt();

    // Play on any user interaction if not already playing
    const playOnInteraction = () => {
      if (video.paused) {
        video.play().catch(e => console.log("Play on interaction failed:", e));
      }
    };

    document.addEventListener('click', playOnInteraction);
    document.addEventListener('touchstart', playOnInteraction);

    return () => {
      document.removeEventListener('click', playOnInteraction);
      document.removeEventListener('touchstart', playOnInteraction);
    };
  }, []);

  useEffect(() => {
    const updateMarkerStage = () => {
      const video = videoRef.current;
      const videoWidth = video?.videoWidth || 16;
      const videoHeight = video?.videoHeight || 9;
      const scale = Math.max(window.innerWidth / videoWidth, window.innerHeight / videoHeight);
      const width = videoWidth * scale;

      setMarkerStage({
        width,
        height: videoHeight * scale,
        left: (window.innerWidth - width) / 2,
      });
    };

    updateMarkerStage();
    window.addEventListener('resize', updateMarkerStage);
    videoRef.current?.addEventListener('loadedmetadata', updateMarkerStage);

    return () => {
      window.removeEventListener('resize', updateMarkerStage);
      videoRef.current?.removeEventListener('loadedmetadata', updateMarkerStage);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-[#0a192f] overflow-hidden">
      <div className="absolute inset-0">
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-top"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={(e) => {
            const error = e.currentTarget.error;
            if (error) {
              const errorMsg = {
                '1': 'ABORTED',
                '2': 'NETWORK',
                '3': 'DECODE',
                '4': 'SRC_NOT_SUPPORTED'
              }[error.code] || 'UNKNOWN';
              console.error("Video error:", errorMsg, error.message);
            }
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
      </div>
      
      {/* This stage matches the video crop exactly, keeping pins on their buildings. */}
      <div
        className="absolute z-10"
        style={{
          width: markerStage.width || '100%',
          height: markerStage.height || '100%',
          left: markerStage.left,
          top: 0,
        }}
      >
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
        onClick={() => setIsEducationModalOpen(true)}
      />
      <MapMarker 
        id="skills"
        title="SKILLS"
        subtitle="The Library"
        icon={<Book className="w-5 h-5 text-blue-400" />}
        top="62%"
        left="40%"
        onClick={() => setIsSkillsModalOpen(true)}
      />
      <MapMarker 
        id="projects"
        title="PROJECTS"
        subtitle="The Workshop"
        icon={<Cog className="w-5 h-5 text-blue-400" />}
        top="15%"
        left="68%"
        onClick={() => setIsProjectsModalOpen(true)}
      />
      <MapMarker 
        id="hackathons"
        title="HACKATHONS"
        subtitle="The Arena"
        icon={<Trophy className="w-5 h-5 text-yellow-500" />}
        top="43%"
        left="76%"
        onClick={() => setIsHackathonsModalOpen(true)}
      />
      <MapMarker 
        id="contact"
        title="CONTACT"
        subtitle="The Harbor"
        icon={<Anchor className="w-5 h-5 text-blue-400" />}
        top="63%"
        left="86%"
        onClick={() => setIsContactModalOpen(true)}
      />
      <MapMarker 
        id="certifications"
        title="CERTIFICATIONS"
        subtitle="The Forge"
        icon={<Cog className="w-5 h-5 text-gray-400" />}
        top="20%"
        left="38%"
        onClick={() => setIsCertificationsModalOpen(true)}
      />
      </div>

      <AboutMeModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
      <EducationModal isOpen={isEducationModalOpen} onClose={() => setIsEducationModalOpen(false)} />
      <SkillsModal isOpen={isSkillsModalOpen} onClose={() => setIsSkillsModalOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <CertificationsModal isOpen={isCertificationsModalOpen} onClose={() => setIsCertificationsModalOpen(false)} />
      <HackathonsModal isOpen={isHackathonsModalOpen} onClose={() => setIsHackathonsModalOpen(false)} />
      <ProjectsModal isOpen={isProjectsModalOpen} onClose={() => setIsProjectsModalOpen(false)} />
    </div>
  );
};

export default MapCanvas;
