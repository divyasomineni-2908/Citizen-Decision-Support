import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getChatbotResponse } from '../services/geminiService';
import { CloseIcon, SendIcon, UserIcon, BotIcon, MicrophoneIcon } from './Icons';
import { getTranslator } from '../services/translations';

// SpeechRecognition interface for browser compatibility
// FIX: Cast window to `any` to access non-standard browser APIs. This resolves errors about `SpeechRecognition` and `webkitSpeechRecognition` not existing on `window`.
const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
// FIX: Use `any` for the recognition instance type. This resolves the error where the `SpeechRecognition` variable name shadows the type name, especially when DOM speech recognition types are not available in the TypeScript configuration.
let recognition: any | null = null;
if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
}

interface ChatbotProps {
  setIsOpen: (isOpen: boolean) => void;
  language: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ setIsOpen, language }) => {
  const t = getTranslator(language);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'bot', text: "Hello! How can I help you with government welfare schemes today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botResponseText = await getChatbotResponse(input);
      const botMessage: ChatMessage = { sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { sender: 'bot', text: "Sorry, I'm having trouble connecting. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceInput = () => {
    if (!recognition) {
        alert("Voice recognition is not supported by your browser.");
        return;
    }
    if (isListening) {
        recognition.stop();
        setIsListening(false);
    } else {
        recognition.start();
    }
  };

  useEffect(() => {
      if (!recognition) return;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
      };

      recognition.onerror = (event: any) => {
          console.error("Speech recognition error", event.error);
          alert(`Speech recognition error: ${event.error}`);
      };
      
      recognition.onend = () => {
          setIsListening(false);
      }

      // Cleanup on component unmount
      return () => {
        if(recognition) {
            recognition.onstart = null;
            recognition.onresult = null;
            recognition.onerror = null;
            recognition.onend = null;
        }
      }
  }, []);

  return (
    <div className="fixed bottom-24 right-6 w-full max-w-sm h-[70vh] max-h-[600px] z-50 flex flex-col bg-white rounded-xl shadow-2xl animate-slide-in-up">
      <div className="p-4 bg-primary text-white rounded-t-xl flex justify-between items-center">
        <h3 className="text-lg font-semibold">{t('chatbotTitle')}</h3>
        <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'bot' && <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0"><BotIcon className="w-5 h-5 text-white" /></div>}
              <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-200 text-dark rounded-bl-none'}`}>
                <p className="text-sm">{msg.text}</p>
              </div>
               {msg.sender === 'user' && <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0"><UserIcon className="w-5 h-5 text-gray-600" /></div>}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0"><BotIcon className="w-5 h-5 text-white" /></div>
              <div className="max-w-xs md:max-w-sm px-4 py-2 rounded-2xl bg-gray-200 text-dark rounded-bl-none">
                <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 bg-white rounded-b-xl">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSend()}
            placeholder={isListening ? t('chatbotListening') : t('chatbotPlaceholder')}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading || isListening}
          />
          <button onClick={handleVoiceInput} disabled={isLoading} className={`p-3 rounded-full transition-colors ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>
            <MicrophoneIcon className="w-5 h-5" />
          </button>
          <button onClick={handleSend} disabled={isLoading || input.trim() === ''} className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
            <SendIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;