import React, { useState, useEffect, useRef } from 'react';

type ChatState = 'initial' | 'chatting' | 'offline';
type UserType = 'employer' | 'candidate' | null;

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatState, setChatState] = useState<ChatState>('initial');
  const [userType, setUserType] = useState<UserType>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Business hours configuration
  // For demo purposes, we default to TRUE so you can see the functionality.
  // In production, uncomment the logic below to enforce 9-6 schedule.
  const checkBusinessHours = () => {
    // const now = new Date();
    // const day = now.getDay(); // 0 = Sun, 6 = Sat
    // const hour = now.getHours();
    
    // Config: Mon-Fri, 9 AM - 6 PM
    // return day >= 1 && day <= 5 && hour >= 9 && hour < 18;
    return true; 
  };

  const isOnline = checkBusinessHours();

  const handleOpen = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    if (newIsOpen && messages.length === 0) {
       if (!isOnline) {
         setChatState('offline');
       } else {
         setChatState('initial');
       }
    }
  };

  const handleRoleSelect = (role: 'employer' | 'candidate') => {
    setUserType(role);
    setChatState('chatting');
    
    const greeting = role === 'employer' 
      ? "Welcome to Career Collab B2B Support. A recruitment specialist will be with you shortly."
      : "Hi there! A Career Guide will be with you in a moment to help with your job search.";
      
    setMessages([{ id: 'init', text: greeting, sender: 'bot' }]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Simulate response
    setTimeout(() => {
      const botMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        text: userType === 'employer' 
          ? "Thank you. Can you please provide your company name while we connect you?"
          : "Thanks! Could you clarify which industry you are interested in?",
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, chatState]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-body">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col animate-fade-in-up transition-all" style={{ height: '500px' }}>
          
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-secondary">
                  <i className="fas fa-headset"></i>
                </div>
                {isOnline && <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-primary"></div>}
              </div>
              <div>
                <h3 className="font-bold text-sm">Career Collab Support</h3>
                <p className="text-xs text-gray-300">{isOnline ? 'We are online' : 'Currently Offline'}</p>
              </div>
            </div>
            <button onClick={handleOpen} className="text-white/70 hover:text-white transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Body */}
          <div className="flex-grow bg-gray-50 overflow-y-auto p-4 flex flex-col">
            
            {/* Initial State: Path Selection */}
            {chatState === 'initial' && (
              <div className="flex flex-col h-full justify-center gap-6">
                <div className="text-center space-y-2">
                  <h4 className="font-bold text-primary text-lg">Hello! 👋</h4>
                  <p className="text-gray-500 text-sm">Please select your role so we can connect you with the right expert.</p>
                </div>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => handleRoleSelect('employer')}
                    className="w-full bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-secondary hover:shadow-md transition-all text-left flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <div>
                      <span className="block font-bold text-primary text-sm">I'm an Employer</span>
                      <span className="block text-xs text-gray-400">Hiring talent & consulting</span>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleRoleSelect('candidate')}
                    className="w-full bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-secondary hover:shadow-md transition-all text-left flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-emerald-600 group-hover:bg-secondary group-hover:text-white transition-colors">
                      <i className="fas fa-user"></i>
                    </div>
                    <div>
                      <span className="block font-bold text-primary text-sm">I'm a Candidate</span>
                      <span className="block text-xs text-gray-400">Job search & application</span>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Offline State */}
            {chatState === 'offline' && (
              <div className="text-center mt-10">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4">
                  <i className="fas fa-moon text-2xl"></i>
                </div>
                <h4 className="font-bold text-gray-700">We are currently closed</h4>
                <p className="text-sm text-gray-500 mt-2 mb-6">Our team is available Mon-Fri, 9am - 6pm. Please leave a message and we'll get back to you.</p>
                <form onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); setIsOpen(false); }}>
                  <textarea className="w-full p-3 border border-gray-300 rounded-lg text-sm mb-3 focus:border-secondary focus:outline-none" rows={4} placeholder="How can we help?"></textarea>
                  <button className="w-full bg-primary text-white py-2 rounded-lg font-bold text-sm">Send Message</button>
                </form>
              </div>
            )}

            {/* Chatting State */}
            {chatState === 'chatting' && (
              <div className="flex flex-col gap-4">
                <div className="text-center text-xs text-gray-400 my-2">Today</div>
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-white border border-gray-200 text-gray-700 rounded-tl-none shadow-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Footer Input */}
          {chatState === 'chatting' && (
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..." 
                className="flex-grow bg-gray-50 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-secondary/50 outline-none"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center disabled:opacity-50 hover:bg-emerald-500 transition-colors"
              >
                <i className="fas fa-paper-plane text-sm"></i>
              </button>
            </form>
          )}
        </div>
      )}

      {/* FAB */}
      <button 
        onClick={handleOpen}
        className={`${isOpen ? 'rotate-90 opacity-0 pointer-events-none absolute' : 'rotate-0 opacity-100'} transition-all duration-300 w-16 h-16 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-400 hover:scale-105 active:scale-95 group`}
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
        <i className="fas fa-comment-dots text-2xl group-hover:animate-pulse"></i>
      </button>

      {/* Close Button replacement when open */}
       <button 
        onClick={handleOpen}
        className={`${!isOpen ? '-rotate-90 opacity-0 pointer-events-none absolute' : 'rotate-0 opacity-100'} transition-all duration-300 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-800`}
      >
        <i className="fas fa-chevron-down text-xl"></i>
      </button>

    </div>
  );
};

export default LiveChat;