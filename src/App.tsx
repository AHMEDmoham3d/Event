import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const tarotMessages = [
  "The path you seek is already unfolding beneath your feet.",
  "A hidden truth will soon reveal itself—be ready to listen.",
  "The whispers of your soul know the way forward.",
  "What you release today makes room for tomorrow's blessings.",
  "Your intuition is sharper than you believe—trust it.",
  "The universe conspires in your favor, even in silence.",
  "A door you thought closed is merely waiting for your touch.",
  "Your strength lies not in certainty, but in embracing the unknown.",
  "The seeds you planted in darkness are ready to bloom.",
  "A chance encounter will illuminate your next chapter.",
  "Your past has prepared you for this very moment.",
  "The answer you seek dwells in the question itself.",
  "A transformation is stirring within—allow it to emerge.",
  "Your energy is shifting toward alignment and grace.",
  "The moon's pull reminds you that change is natural.",
  "A creative spark within you demands expression.",
  "The chains you feel are crafted from your own doubts.",
  "A message from the stars: you are exactly where you need to be.",
  "Your vulnerability is the gateway to your power.",
  "The currents of fate are turning in your direction.",
  "A forgotten dream is calling to be remembered.",
  "Your patience will soon bear unexpected fruit.",
  "The wisdom you seek already resides within you.",
  "A cycle is completing—honor what it has taught you.",
  "Your authenticity is your most powerful magic.",
  "The veil between worlds grows thin—stay open to signs.",
  "A mentor or guide approaches from an unexpected direction.",
  "Your heart knows truths your mind has yet to accept.",
  "The shadows you fear hold gifts you cannot yet see.",
  "A new beginning awaits beyond the edge of your comfort."
];

function App() {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [lastMessageIndex, setLastMessageIndex] = useState<number | null>(null);
  const [hasDrawn, setHasDrawn] = useState(false);

  const drawCard = () => {
    setIsFlipping(true);

    setTimeout(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * tarotMessages.length);
      } while (randomIndex === lastMessageIndex && tarotMessages.length > 1);

      setCurrentMessage(tarotMessages[randomIndex]);
      setLastMessageIndex(randomIndex);
      setHasDrawn(true);

      setTimeout(() => {
        setIsFlipping(false);
      }, 300);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-purple-900 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="relative z-10 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl w-full">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 animate-pulse" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 mx-2 sm:mx-4">
              Mystic Oracle
            </h1>
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 animate-pulse" />
          </div>
          <p className="text-purple-300 text-sm sm:text-base lg:text-lg font-light tracking-wide">
            Seek wisdom from the cosmic tapestry
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <div className="perspective-container">
            <div className={`tarot-card ${isFlipping ? 'flipping' : ''} ${hasDrawn ? 'revealed' : ''}`}>
              <div className="card-inner">
                <div className="card-back">
                  <div className="card-pattern"></div>
                </div>
                <div className="card-front">
                  {currentMessage && (
                    <div className="p-6 sm:p-8 h-full flex flex-col items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/50">
                        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-950" />
                      </div>
                      <p className="text-amber-50 text-base sm:text-lg md:text-xl font-serif leading-relaxed text-center px-2">
                        {currentMessage}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={drawCard}
            disabled={isFlipping}
            className="relative px-6 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-amber-300 rounded-full font-semibold text-sm sm:text-base lg:text-lg tracking-wide border-2 border-amber-500/30 shadow-lg shadow-purple-900/50 hover:shadow-amber-500/50 hover:border-amber-500/60 hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              Track Your Message
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </button>

          {hasDrawn && (
            <p className="text-purple-400 text-xs sm:text-sm italic animate-fade-in">
              Reflect upon this message. Draw again when you are ready.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

