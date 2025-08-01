import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, MessageSquare } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<Array<{ sender: 'user' | 'bot'; message: string }>>([
    { sender: 'bot', message: 'Hello! Welcome to RoyaMotorsUK. How can I assist you today?' },
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChat((prev) => [...prev, { sender: 'user', message }]);
    setMessage('');

    setTimeout(() => {
      let botResponse = '';
      const lowerMsg = message.toLowerCase();

      if (lowerMsg.includes('price') || lowerMsg.includes('cost')) {
        botResponse = 'Our luxury vehicles range from £195,000 to £550,000. You can view detailed pricing on our collection page or I can help you with a specific model.';
      } else if (lowerMsg.includes('shipping') || lowerMsg.includes('delivery') || lowerMsg.includes('transport')) {
        botResponse = 'We offer comprehensive shipping services to Kenya and Tanzania. Our team handles all logistics, customs clearance, and delivery to your location.';
      } else if (lowerMsg.includes('contact') || lowerMsg.includes('speak') || lowerMsg.includes('call')) {
        botResponse = 'You can reach our team at +254 710 966523 or via email at info@royamotorsuk.com. Would you like me to arrange a callback from one of our specialists?';
      } else if (lowerMsg.includes('whatsapp')) {
        botResponse = 'You can connect with us on WhatsApp at +44 7964 595923. Click the WhatsApp button on any vehicle page for direct assistance.';
      } else {
        botResponse = 'Thank you for your message. Would you like to speak with one of our luxury vehicle specialists? They can provide more detailed information tailored to your needs.';
      }

      setChat((prev) => [...prev, { sender: 'bot', message: botResponse }]);
    }, 1000);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [chat]);

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-cta text-white p-4 rounded-full shadow-lg hover:bg-cta/90 transition-all ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-0 right-0 z-50 w-full sm:w-96 bg-muted rounded-t-lg shadow-xl transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        } sm:right-6 sm:bottom-6 sm:rounded-lg flex flex-col max-h-[80vh]`}
      >
        {/* Chat header */}
        <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <MessageSquare size={20} className="mr-2" />
            <h3 className="font-medium">RoyaMotorsUK Support</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-accent transition-colors"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat messages */}
        <div
          className="p-4 flex-1 overflow-y-auto space-y-3"
          ref={chatContainerRef}
        >
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-cta/10 text-primary ml-auto'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {msg.message}
            </div>
          ))}
        </div>

        {/* Chat input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-muted">
          <div className="flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary bg-muted"
            />
            <button
              type="submit"
              className="bg-cta text-white p-3 rounded-r-md hover:bg-cta/90 transition-colors"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-500 text-center">
            You can also reach us on WhatsApp at +44 7964 595923
          </p>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;
