import { WhatsappLogo } from 'phosphor-react';

export default function WhatsAppCTA() {
  const phoneNumber = '919999999999'; // Replace with actual number
  const message = encodeURIComponent(
    "Hi! I'm interested in your wedding invitation designs. Can you help me? 😊"
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
      title="Chat on WhatsApp"
    >
      <WhatsappLogo size={32} weight="fill" />
    </a>
  );
}
