import React, { useState, useEffect } from 'react';

interface VoiceAssistantProps {
  language: string;
  onCommand: (command: string) => void;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ language, onCommand }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      setIsSupported(true);
    }
  }, []);

  const startListening = () => {
    if (!isSupported) {
      alert('Voice recognition is not supported in your browser. Please use Chrome or Edge.');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = language === 'Hindi' ? 'hi-IN' : 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript('Listening...');
    };

    recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript;
      setTranscript(command);
      onCommand(command);
      
      // Auto speak response
      speakText(`Processing: ${command}`);
    };

    recognition.onerror = () => {
      setIsListening(false);
      setTranscript('Error occurred. Please try again.');
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'Hindi' ? 'hi-IN' : 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-40">
      <button
        onClick={startListening}
        disabled={isListening}
        className={`p-4 rounded-full shadow-lg transition-all transform hover:scale-110 ${
          isListening 
            ? 'bg-red-500 animate-pulse' 
            : 'bg-green-500 hover:bg-green-600'
        } text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
        aria-label="Voice Assistant"
        title={isListening ? 'Listening...' : 'Click to speak'}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
        </svg>
      </button>
      {transcript && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg max-w-xs text-sm">
          <p className="text-gray-800 dark:text-gray-200">{transcript}</p>
        </div>
      )}
    </div>
  );
};

export default VoiceAssistant;
