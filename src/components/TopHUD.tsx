import React, { useState, useEffect, useRef } from 'react';
import { Crown, Github, Linkedin, Mail, FileText, Swords, Volume2, VolumeX } from 'lucide-react';

const TopHUD = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const birdsAudioRef = useRef<HTMLAudioElement>(null);

  const showDetails = isHovered || isLocked;

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      document.removeEventListener('click', handleInteraction);
    };
    document.addEventListener('click', handleInteraction);
    return () => document.removeEventListener('click', handleInteraction);
  }, []);

  useEffect(() => {
    if (audioRef.current && birdsAudioRef.current && hasInteracted) {
      audioRef.current.volume = 0.15; // Small volume
      birdsAudioRef.current.volume = 0.08; // Very low volume for birds
      if (!isMuted) {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        birdsAudioRef.current.play().catch(e => console.log("Birds play failed:", e));
      } else {
        audioRef.current.pause();
        birdsAudioRef.current.pause();
      }
    }
  }, [isMuted, hasInteracted]);

  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-30 pointer-events-none">
      <audio
        ref={audioRef}
        src="https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg"
        loop
      />
      <audio
        ref={birdsAudioRef}
        src="https://actions.google.com/sounds/v1/animals/june_songbirds.ogg"
        loop
      />
      
      {/* Profile Section */}
      <div 
        className="pointer-events-auto relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsLocked(!isLocked)}
      >
        <div className={`game-panel p-1.5 flex items-center gap-2 bg-gray-900 border-gray-600 rounded-lg cursor-pointer transition-colors ${showDetails ? 'border-yellow-500 bg-gray-800' : ''}`}>
          <div className="relative">
            <div className="w-10 h-10 bg-blue-900 border-2 border-yellow-500 rounded-md flex items-center justify-center">
              <Crown className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-blue-600 border border-blue-400 rounded-full w-5 h-5 flex items-center justify-center text-[9px] font-bold text-white shadow">
              20
            </div>
          </div>
          <div className="pr-2">
            <h1 className="font-nunito font-black text-base text-gray-100 tracking-wide uppercase leading-tight">Ajay</h1>
          </div>
        </div>

        {/* Details Dropdown */}
        {showDetails && (
          <div className="absolute top-full left-0 mt-2 w-[300px] flex flex-col gap-4 pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="game-panel p-5 bg-gray-900/95 flex flex-col gap-6 relative z-30 rounded-lg border-2 border-gray-600 shadow-xl">
              
              {/* Welcome Section */}
              <div className="text-center">
                <h2 className="font-nunito font-black text-yellow-500 tracking-wider mb-2">WELCOME!</h2>
                <p className="font-nunito text-xs text-gray-300 leading-relaxed">
                  Welcome to my kingdom! Explore to know more about my journey, skills, projects and achievements.
                </p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

              {/* Journey Highlights */}
              <div>
                <h3 className="font-nunito font-black text-sm text-yellow-500 tracking-wider mb-3 text-center">JOURNEY HIGHLIGHTS</h3>
                <ul className="flex flex-col gap-2">
                  <HighlightItem text="Built 25+ Projects" />
                  <HighlightItem text="Participated in 15+ Hackathons" />
                  <HighlightItem text="Skilled in 10+ Technologies" />
                  <HighlightItem text="Always learning, always building!" />
                </ul>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

              {/* Join My Kingdom (Socials) */}
              <div>
                <h3 className="font-nunito font-black text-sm text-gray-200 tracking-wider mb-3 text-center">JOIN MY KINGDOM</h3>
                <div className="flex justify-center gap-3 mb-4">
                  <SocialBtn icon={<Github size={18} />} />
                  <SocialBtn icon={<Linkedin size={18} />} />
                  <SocialBtn icon={<Mail size={18} />} />
                  <SocialBtn icon={<FileText size={18} />} />
                </div>
                <button className="w-full game-button !border-purple-600 !bg-gradient-to-b !from-purple-800 !to-purple-900 py-2 flex items-center justify-center gap-2 hover:!from-purple-700 hover:!to-purple-800">
                  <FileText size={16} />
                  <span className="font-nunito font-bold text-sm">Download Resume</span>
                </button>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Audio Toggle */}
      <div className="pointer-events-auto">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="game-panel p-2.5 flex items-center justify-center bg-gray-900 border-gray-600 rounded-lg cursor-pointer transition-colors hover:border-yellow-500 hover:bg-gray-800 text-gray-300 hover:text-white"
          title={isMuted ? "Unmute sound" : "Mute sound"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
};

const HighlightItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2">
    <Swords size={12} className="text-yellow-600 mt-0.5 shrink-0" />
    <span className="font-nunito text-xs text-gray-300 leading-tight">{text}</span>
  </li>
);

const SocialBtn = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" onClick={(e) => e.stopPropagation()} className="bg-gray-800 p-2 rounded-full border border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg active:translate-y-px">
    {icon}
  </a>
);

export default TopHUD;
