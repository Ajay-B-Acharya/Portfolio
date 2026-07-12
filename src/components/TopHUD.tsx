import React, { useState, useEffect, useRef } from 'react';
import { Crown, Github, Linkedin, Mail, FileText, Swords, Music, Square } from 'lucide-react';
import resumePDF from '../assets/images/resume.pdf';
import vinlandMusic from '../assets/images/Vinland.mp3';

const TopHUD = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [openProfile, setOpenProfile] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

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
    if (audioRef.current && hasInteracted) {
      audioRef.current.volume = 0.25;
      if (!isMuted) {
        audioRef.current.play().catch(e => console.log("Music play failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted, hasInteracted]);

  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-30 pointer-events-none">
      <audio
        ref={audioRef}
        src={vinlandMusic}
        loop
      />
      
      {/* Profile Section */}
      <div 
        className="pointer-events-auto relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsLocked(!isLocked)}
      >
        <div className={`game-panel p-1.5 flex items-center gap-2 bg-gradient-to-b from-blue-950 to-blue-900 border-yellow-600 rounded-lg cursor-pointer transition-colors ${showDetails ? 'border-yellow-400 bg-gradient-to-b from-blue-900 to-blue-950' : ''}`}>
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
            <div className="game-panel p-5 bg-gradient-to-br from-blue-950 to-blue-900/95 flex flex-col gap-6 relative z-30 rounded-lg border-2 border-yellow-600 shadow-xl">
              
              {/* Welcome Section */}
              <div className="text-center">
                <h2 className="font-nunito font-black text-yellow-500 tracking-wider mb-2">WELCOME!</h2>
                <p className="font-nunito text-xs text-gray-300 leading-relaxed">
                  Welcome to my kingdom! Explore to know more about my journey, skills, projects and achievements.
                </p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />

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

              <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />

              {/* Join My Kingdom (Socials) */}
              <div>
                <h3 className="font-nunito font-black text-sm text-yellow-400 tracking-wider mb-3 text-center">JOIN MY KINGDOM</h3>
                <div className="flex justify-center gap-3 mb-4">
                  <SocialBtn icon={<Github size={18} />} onClick={() => setOpenProfile('github')} />
                  <SocialBtn icon={<Linkedin size={18} />} onClick={() => setOpenProfile('linkedin')} />
                  <SocialBtn icon={<Mail size={18} />} onClick={() => setOpenProfile('email')} />
                  <SocialBtn icon={<FileText size={18} />} />
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const link = document.createElement('a');
                    link.href = resumePDF;
                    link.download = 'Ajay_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="w-full game-button !border-yellow-600 !bg-gradient-to-b !from-blue-800 !to-blue-900 py-2 flex items-center justify-center gap-2 hover:!from-blue-700 hover:!to-blue-800 text-yellow-200 hover:text-yellow-100">
                  <FileText size={16} />
                  <span className="font-nunito font-bold text-sm">Download Resume</span>
                </button>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Play Music Button */}
      <div className="pointer-events-auto">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="game-panel px-4 py-2.5 flex items-center justify-center gap-2 bg-gradient-to-b from-blue-950 to-blue-900 border-yellow-600 rounded-lg cursor-pointer transition-colors hover:border-yellow-400 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-950 text-yellow-300 hover:text-yellow-100"
          title={isMuted ? "Play Music" : "Stop Music"}
        >
          {isMuted ? (
            <>
              <Music size={18} />
              <span className="font-nunito font-bold text-xs hidden sm:inline">MUSIC</span>
            </>
          ) : (
            <>
              <Square size={18} fill="currentColor" />
              <span className="font-nunito font-bold text-xs hidden sm:inline">STOP</span>
            </>
          )}
        </button>
      </div>

      {/* Social Profile Modal */}
      {openProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto" onClick={() => setOpenProfile(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative z-10 bg-gradient-to-br from-blue-950 to-blue-900 border-2 border-yellow-600 rounded-lg p-8 w-96 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpenProfile(null)} className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300">
              ✕
            </button>
            {openProfile === 'github' && (
              <SocialProfileCard
                title="GitHub"
                icon={<Github size={32} className="text-yellow-400" />}
                url="https://github.com/Ajay-B-Acharya"
              />
            )}
            {openProfile === 'linkedin' && (
              <SocialProfileCard
                title="LinkedIn"
                icon={<Linkedin size={32} className="text-yellow-400" />}
                url="https://www.linkedin.com/in/ajay-b-acharya-574a3b3a8/"
              />
            )}
            {openProfile === 'email' && (
              <SocialProfileCard
                title="Email"
                icon={<Mail size={32} className="text-yellow-400" />}
                url="mailto:ajaybacharya920@gmail.com"
                isEmail
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const HighlightItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2">
    <Swords size={12} className="text-yellow-400 mt-0.5 shrink-0" />
    <span className="font-nunito text-xs text-yellow-100 leading-tight">{text}</span>
  </li>
);

const SocialBtn = ({ icon, onClick }: { icon: React.ReactNode; onClick?: () => void }) => (
  <button onClick={(e) => { e.stopPropagation(); onClick?.(); }} className="bg-gradient-to-b from-blue-900 to-blue-950 p-2 rounded-full border border-yellow-600 text-yellow-300 hover:text-yellow-100 hover:bg-gradient-to-b hover:from-blue-800 hover:to-blue-900 transition-colors shadow-md hover:shadow-lg active:translate-y-px">
    {icon}
  </button>
);

const SocialProfileCard = ({ title, icon, url, isEmail }: { title: string; icon: React.ReactNode; url: string; isEmail?: boolean }) => (
  <div className="flex flex-col items-center gap-6 text-center">
    <div>{icon}</div>
    <div>
      <h3 className="font-nunito font-bold text-xl text-yellow-400 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{url}</p>
    </div>
    <button
      onClick={() => {
        if (isEmail) {
          window.location.href = url;
        } else {
          window.open(url, '_blank');
        }
      }}
      className="w-full game-button !border-yellow-600 !bg-gradient-to-b !from-blue-800 !to-blue-900 py-2 flex items-center justify-center gap-2 hover:!from-blue-700 hover:!to-blue-800 text-yellow-200 hover:text-yellow-100 font-nunito font-bold"
    >
      View Profile
    </button>
  </div>
);

export default TopHUD;
