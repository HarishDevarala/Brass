import React from 'react';
import { storeInfo } from '../data/dummyData';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const phoneNumber = storeInfo.phone.replace(/[^0-9]/g, ''); // Clean number
  const message = "Hi! I'm interested in the premium brass collections at Praseeda Brass.";
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="floating-whatsapp" onClick={handleClick} title="Chat with us on WhatsApp">
      <MessageCircle size={32} />
    </div>
  );
};

export default FloatingWhatsApp;
