import React, { useState, useEffect } from 'react';

interface TextToSpeechProps {
  language: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ language }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [rate, setRate] = useState(1);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    // Add click listener to read text when enabled
    if (isEnabled) {
      document.addEventListener('click', handleTextSelection);
    } else {
      document.removeEventListener('click', handleTextSelection);
    }

    return () => {
      document.removeEventListener('click', handleTextSelection);
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isEnabled, rate, language]);

  const handleTextSelection = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Get text from the clicked element
    let text = '';
    
    // Check for selected text first
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      text = selection.toString().trim();
    } else {
      // Read element's text content
      text = target.textContent || '';
    }

    if (text.length > 0 && text.length < 500) {
      speakText(text);
    }
  };

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech not supported in your browser');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'Hindi' ? 'hi-IN' : 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const toggleEnabled = () => {
    if (isEnabled) {
      stopSpeaking();
    }
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="fixed bottom-40 right-6 z-40">
      <button
        onClick={toggleEnabled}
        className={`p-4 rounded-full shadow-lg transition-all transform hover:scale-110 ${
          isEnabled
            ? 'bg-green-500 text-white'
            : 'bg-gray-300 text-gray-700'
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
        aria-label="Text to Speech"
        title={isEnabled ? 'Disable Text-to-Speech' : 'Enable Text-to-Speech'}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Controls Popup */}
      {(showControls || isSpeaking) && isEnabled && (
        <div 
          className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            🔊 {language === 'Hindi' ? 'टेक्स्ट-टू-स्पीच' : 'Text-to-Speech'}
          </h4>
          
          <div className="mb-3">
            <label className="text-sm text-gray-600 dark:text-gray-300 block mb-1">
              {language === 'Hindi' ? 'बोलने की गति' : 'Speech Rate'}: {rate.toFixed(1)}x
            </label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          {isSpeaking && (
            <button
              onClick={stopSpeaking}
              className="w-full bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
              </svg>
              {language === 'Hindi' ? 'रोकें' : 'Stop'}
            </button>
          )}

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            {language === 'Hindi'
              ? 'किसी भी टेक्स्ट को पढ़ने के लिए क्लिक करें'
              : 'Click any text to hear it read aloud'}
          </p>
        </div>
      )}

      {/* Status Indicator */}
      {isSpeaking && (
        <div className="absolute -top-2 -left-2">
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
      )}
    </div>
  );
};

export default TextToSpeech;
