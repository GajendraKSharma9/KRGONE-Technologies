import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, ArrowRight, RefreshCw, ChevronDown, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  showAssessmentCTA?: boolean;
  showConsultationCTA?: boolean;
  timestamp: string;
}

interface AIGrowthAssistantProps {
  onStartAssessment: () => void;
  onBookConsultation: () => void;
}

const SUGGESTED_QUESTIONS = [
  "Increase Revenue",
  "Improve Sales",
  "Business Assessment",
  "Business Diagnostic",
  "AI for Business",
  "Book Consultation"
];

const INITIAL_GREETING = `Hello,

Welcome to KRGONE.

I'm your AI Growth Assistant™.

I can help you understand
• Business Growth
• Revenue Strategy
• Sales Transformation
• Business Systems
• SOP Development
• AI Adoption
• KRGONE Services

How can I assist you today?`;

export const AIGrowthAssistant: React.FC<AIGrowthAssistantProps> = ({
  onStartAssessment,
  onBookConsultation
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'greeting-1',
      sender: 'bot',
      text: INITIAL_GREETING,
      showAssessmentCTA: true,
      showConsultationCTA: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isLoading) return;

    const userMsgId = Date.now().toString();
    const userMessage: Message = {
      id: userMsgId,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInputText('');
    setIsLoading(true);

    try {
      const history = messages
        .filter(m => m.id !== 'greeting-1')
        .map(m => ({
          role: m.sender === 'user' ? 'user' : 'model',
          content: m.text
        }));

      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [...history, { role: 'user', content: query }],
          userMessage: query
        })
      });

      const data = await response.json();

      if (data.success && data.text) {
        const lowerReply = data.text.toLowerCase();
        const shouldShowAssessment = lowerReply.includes('assessment') || lowerReply.includes('audit') || lowerReply.includes('score') || query.toLowerCase().includes('assessment');
        const shouldShowConsultation = lowerReply.includes('consultation') || lowerReply.includes('diagnostic') || lowerReply.includes('book') || query.toLowerCase().includes('consult') || query.toLowerCase().includes('diagnostic');

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: data.text,
          showAssessmentCTA: shouldShowAssessment || (!shouldShowAssessment && !shouldShowConsultation),
          showConsultationCTA: shouldShowConsultation || (!shouldShowAssessment && !shouldShowConsultation),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('API response invalid');
      }
    } catch (err) {
      console.error('Error contacting AI Assistant:', err);
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: "I'm currently unavailable. Please complete the FREE Business Growth Assessment or contact KRGONE directly.",
        showAssessmentCTA: true,
        showConsultationCTA: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Floating Widget Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setHasUnread(false);
          }}
          className="group relative flex items-center gap-3 bg-[#0A1628] hover:bg-[#0F1F38] text-white pl-4 pr-5 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer"
          aria-label="Open KRGONE AI Growth Assistant™"
        >
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-[#C29D2F] to-[#F3D97F] flex items-center justify-center text-[#0A1628] shadow-md">
            <Bot className="w-5 h-5 stroke-[2.2]" />
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0A1628]"></span>
            )}
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="text-[13px] font-bold tracking-wide text-white group-hover:text-[#F3D97F] transition-colors leading-tight">
              AI Growth Assistant™
            </span>
            <span className="text-[10px] font-medium text-slate-400 tracking-wider uppercase">
              KRGONE Advisory
            </span>
          </div>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[420px] h-[580px] max-h-[82vh] bg-[#0A1628]/95 backdrop-blur-xl border border-[#D4AF37]/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden text-slate-200 animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#070D1B] via-[#0A1628] to-[#12223D] px-5 py-4 border-b border-[#D4AF37]/20 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C29D2F] to-[#F3D97F] flex items-center justify-center text-[#0A1628] shadow-md shrink-0">
                <Bot className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-[14px] font-extrabold text-white tracking-wide leading-none">
                    KRGONE AI Growth Assistant™
                  </h3>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <span className="text-[10px] font-semibold tracking-widest text-[#D4AF37] uppercase mt-1">
                  Knowledge • Revenue • Growth
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Minimize Chat"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-[13px] leading-relaxed scrollbar-thin scrollbar-thumb-[#D4AF37]/20">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 shadow-md whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#C29D2F] to-[#D4AF37] text-[#070D1B] font-semibold rounded-br-none'
                      : 'bg-[#112038] text-slate-100 border border-[#D4AF37]/20 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Inline Action CTAs inside bot responses */}
                {msg.sender === 'bot' && (msg.showAssessmentCTA || msg.showConsultationCTA) && (
                  <div className="mt-2.5 flex flex-wrap gap-2 max-w-[88%]">
                    {msg.showAssessmentCTA && (
                      <button
                        onClick={() => {
                          onStartAssessment();
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-1.5 bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 text-[#070D1B] font-bold text-[11px] px-3.5 py-2 rounded-lg transition-all shadow-sm active:scale-95 uppercase tracking-wider cursor-pointer"
                      >
                        <span>Start Free Assessment</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                    {msg.showConsultationCTA && (
                      <button
                        onClick={() => {
                          onBookConsultation();
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-1.5 bg-[#070D1B] hover:bg-[#162A4A] text-[#F3D97F] border border-[#D4AF37]/40 font-bold text-[11px] px-3.5 py-2 rounded-lg transition-all shadow-sm active:scale-95 uppercase tracking-wider cursor-pointer"
                      >
                        <span>Book Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}

                <span className="text-[9px] text-slate-500 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="bg-[#112038] text-slate-300 border border-[#D4AF37]/20 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#D4AF37] animate-spin" />
                  <span className="text-[12px] font-medium">Analyzing query...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions Pills */}
          <div className="px-3 py-2 bg-[#070D1B]/60 border-t border-[#D4AF37]/10 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider whitespace-nowrap pl-1 pr-1">
              Quick Actions:
            </span>
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
                className="whitespace-nowrap bg-[#12223D] hover:bg-[#1C335A] text-slate-200 hover:text-[#F3D97F] border border-[#D4AF37]/25 hover:border-[#D4AF37] text-[11px] font-medium px-3 py-1 rounded-full transition-all cursor-pointer disabled:opacity-50 shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box Area */}
          <div className="p-3 bg-[#070D1B] border-t border-[#D4AF37]/20 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a business growth question..."
              disabled={isLoading}
              className="flex-1 bg-[#0A1628] text-white placeholder-slate-500 text-[13px] px-3.5 py-2.5 rounded-xl border border-[#D4AF37]/20 focus:border-[#D4AF37] focus:outline-none transition-colors"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputText.trim() || isLoading}
              className="w-10 h-10 bg-gradient-to-r from-[#C29D2F] to-[#D4AF37] hover:brightness-110 disabled:opacity-40 text-[#070D1B] rounded-xl flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-md"
              title="Send Message"
            >
              <Send className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
};
