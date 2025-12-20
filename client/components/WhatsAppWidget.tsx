import { MessageCircle } from "lucide-react";
import { useState } from "react";

interface WhatsAppWidgetProps {
  phoneNumber: string; // Format: country code + number (e.g., "919587056755")
  message?: string;
}

export function WhatsAppWidget({
  phoneNumber,
  message = "Hi! I'm interested in your assignment help services.",
}: WhatsAppWidgetProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
        
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute right-full mr-3 px-4 py-2 bg-[#0F0F0F] text-[#FEFEFE] text-sm font-semibold rounded-lg whitespace-nowrap shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute top-1/2 right-[-6px] transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#0F0F0F]"></div>
          </div>
        )}
      </button>
    </div>
  );
}
