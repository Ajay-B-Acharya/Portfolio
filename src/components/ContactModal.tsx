import React from 'react';
import { Mail, Linkedin, Phone, Copy } from 'lucide-react';
import RoyalScroll from './RoyalScroll';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactDetails = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'ajaybacharya920@gmail.com',
      href: 'mailto:ajaybacharya920@gmail.com',
      type: 'email'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'ajay-b-acharya-574a3b3a8',
      href: 'https://www.linkedin.com/in/ajay-b-acharya-574a3b3a8/',
      type: 'linkedin'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '9035090719',
      href: 'tel:9035090719',
      type: 'phone'
    }
  ];

  return (
    <RoyalScroll 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Contact" 
      subtitle="The Harbor"
    >
      <div className="space-y-4">
        {contactDetails.map((contact) => (
          <div 
            key={contact.type}
            className="bg-gradient-to-br from-[#e8d5b5] to-[#d8c29d] p-4 rounded border border-[#8b5a2b]/30 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="text-[#8b5a2b]">{contact.icon}</div>
              <h3 className="font-serif font-bold text-[#5c2e0e]">{contact.label}</h3>
            </div>
            <p className="font-serif text-sm text-[#3a2515] mb-3">{contact.value}</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleCopy(contact.value, contact.type)}
                className="flex-1 flex items-center justify-center gap-2 bg-[#8b5a2b] hover:bg-[#6b421a] text-[#f2e6cf] font-serif font-bold py-2 px-3 rounded text-sm transition-colors"
              >
                <Copy size={16} />
                {copied === contact.type ? 'Copied!' : 'Copy'}
              </button>
              <a
                href={contact.href}
                target={contact.type === 'email' ? undefined : '_blank'}
                rel={contact.type === 'email' ? undefined : 'noopener noreferrer'}
                className="flex-1 bg-gradient-to-b from-[#8b5a2b] to-[#5c2e0e] hover:from-[#9c6a3b] hover:to-[#6c3e1e] text-[#f2e6cf] font-serif font-bold py-2 px-3 rounded text-sm transition-colors text-center"
              >
                {contact.type === 'email' ? 'Send Email' : contact.type === 'phone' ? 'Call' : 'View'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </RoyalScroll>
  );
};

export default ContactModal;
