import React from 'react';
import { Award, ExternalLink, Scroll } from 'lucide-react';
import RoyalScroll from './RoyalScroll';

interface CertificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Certification {
  name: string;
  issuer: string;
  url: string;
}

interface Workshop {
  name: string;
  organizer: string;
  description: string;
}

const CertificationsModal: React.FC<CertificationsModalProps> = ({ isOpen, onClose }) => {
  const workshops: Workshop[] = [
    {
      name: 'Recent Trends In Communication And Technology Pathway From 5G Towards 6G',
      organizer: 'IEEE MTT-S & NMAMIT',
      description:
        'Attended a three-day workshop focusing on future wireless networks, advanced communication systems, and emerging technology trends.',
    },
  ];

  const certifications: Certification[] = [
    {
      name: 'Database Management System',
      issuer: 'NPTEL',
      url: 'https://nptel.ac.in/noc/E_Certificate/NOC26CS39S57100007603135369',
    },
    {
      name: 'AINNOVATION 2025: Applied AI Learning Challenge',
      issuer: 'Microsoft',
      url: 'https://learn.microsoft.com/en-in/users/ajay-6040/achievements/qs7u7pze',
    },
    {
      name: 'AINNOVATION 2025: Microsoft AI Learning Challenge',
      issuer: 'Microsoft',
      url: 'https://learn.microsoft.com/en-in/users/ajay-6040/achievements/h76qvad8',
    },
    {
      name: 'AINNOVATION 2025: Microsoft Azure Learning Challenge',
      issuer: 'Microsoft',
      url: 'https://learn.microsoft.com/en-in/users/ajay-6040/achievements/8zc2a7bw',
    },
    {
      name: 'C for Everyone, Part 1: Programming Fundamentals',
      issuer: 'United Latino Students Association',
      url: 'https://www.coursera.org/account/accomplishments/verify/A3A31OMPV0K9',
    },
    {
      name: 'MATLAB Certified (Fundamentals)',
      issuer: 'MathWorks',
      url: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=ec8f4d78-123c-4fba-8d39-6cef6aa00910&',
    },
    {
      name: 'MATLAB Certified (Onramp)',
      issuer: 'MathWorks',
      url: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=56f06c66-b466-4957-afa0-2734449433f4&',
    },
    {
      name: 'MATLAB Certified (Advanced)',
      issuer: 'MathWorks',
      url: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=231a83ae-95dd-46f7-8136-49e2046874cb',
    },
  ];

  return (
    <RoyalScroll 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Certifications" 
      subtitle="Achievements & Credentials"
    >
      <div className="space-y-4">

        {/* Workshop Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Scroll size={16} className="text-[#8b5a2b]" />
            <h3 className="text-sm font-bold text-[#5c2e0e] uppercase tracking-wider">
              Workshop Certifications
            </h3>
            <div className="flex-1 h-px bg-[#8b5a2b]/30 ml-1"></div>
          </div>
          <div className="space-y-3">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-[#e8d5b5]/50 border border-[#8b5a2b]/30 rounded p-3">
                <div className="flex items-start gap-3">
                  <div className="text-[#8b5a2b] mt-1 flex-shrink-0">
                    <Scroll size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#5c2e0e] text-sm">{workshop.name}</h4>
                    <p className="text-[#6b4423] text-xs mt-1 font-semibold">{workshop.organizer}</p>
                    <p className="text-[#6b4423] text-xs mt-1 leading-relaxed">{workshop.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-[#8b5a2b]/30"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#8b5a2b]/50"></div>
          <div className="flex-1 h-px bg-[#8b5a2b]/30"></div>
        </div>

        {/* Online Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Award size={16} className="text-[#8b5a2b]" />
            <h3 className="text-sm font-bold text-[#5c2e0e] uppercase tracking-wider">
              Online Certifications
            </h3>
            <div className="flex-1 h-px bg-[#8b5a2b]/30 ml-1"></div>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index}>
                <CertificationCard
                  name={cert.name}
                  issuer={cert.issuer}
                  url={cert.url}
                />
                {index < certifications.length - 1 && (
                  <div className="flex items-center justify-center gap-2 my-2">
                    <div className="w-6 h-px bg-[#8b5a2b]/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </RoyalScroll>
  );
};

interface CertificationCardProps {
  name: string;
  issuer: string;
  url: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ name, issuer, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-[#e8d5b5]/50 border border-[#8b5a2b]/30 rounded p-3 hover:bg-[#e8d5b5]/80 hover:shadow-md hover:border-[#8b5a2b]/60 transition-all group"
  >
    <div className="flex items-start gap-3">
      <div className="text-[#8b5a2b] mt-1 flex-shrink-0">
        <Award size={20} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-[#5c2e0e] text-sm group-hover:text-[#3a1f08] transition-colors">
          {name}
        </h4>
        <p className="text-[#6b4423] text-xs mt-1">{issuer}</p>
      </div>
      <ExternalLink size={16} className="text-[#8b5a2b] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </a>
);

export default CertificationsModal;
