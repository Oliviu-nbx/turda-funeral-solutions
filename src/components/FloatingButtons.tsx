import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FloatingButtons = () => {
  const phoneNumber = "0756689117";
  const whatsappUrl = `https://wa.me/+40${phoneNumber.substring(1)}`;
  const phoneUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Button
        asChild
        size="icon"
        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contact pe WhatsApp">
          <MessageCircle size={24} />
        </a>
      </Button>
      
      <Button
        asChild
        size="icon"
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <a href={phoneUrl} aria-label="Sună acum">
          <Phone size={24} />
        </a>
      </Button>
    </div>
  );
};