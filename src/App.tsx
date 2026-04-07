import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const tarotCards = [
  { name: "The Fool", message: "Embrace new beginnings with childlike wonder. Leap into the unknown—adventure awaits." },
  { name: "The Magician", message: "You have all the tools you need. Manifest your desires through focused intention." },
  { name: "The High Priestess", message: "Trust your intuition. The answers lie within your inner wisdom and mysteries." },
  { name: "The Empress", message: "Nurture yourself and others. Abundance and creativity flow through care and connection." },
  { name: "The Emperor", message: "Establish structure and discipline. Take command of your reality with authority." },
  { name: "The Hierophant", message: "Seek guidance from tradition and teachers. Spiritual structure supports your growth." },
  { name: "The Lovers", message: "Choose with your heart. Harmony and meaningful relationships are aligning." },
  { name: "The Chariot", message: "Willpower conquers obstacles. Direct your focus and charge toward victory." },
  { name: "Strength", message: "True power is gentle. Tame your inner beast through compassion and courage." },
  { name: "The Hermit", message: "Solitude brings clarity. Seek inner truth away from the world's distractions." },
  { name: "Wheel of Fortune", message: "Cycles turn in your favor. Embrace change as opportunity for growth." },
  { name: "Justice", message: "Truth and balance prevail. Your actions create fair outcomes—stay honest." },
  { name: "The Hanged Man", message: "New perspective through surrender. Let go to gain profound understanding." },
  { name: "Death", message: "Transformation clears the old. Endings birth powerful new beginnings." },
  { name: "Temperance", message: "Balance opposites harmoniously. Patience blends extremes into healing." },
  { name: "The Devil", message: "Face your shadows. Freedom comes from breaking self-imposed chains." },
  { name: "The Tower", message: "Sudden change destroys illusions. Rebuild on truth after the storm." },
  { name: "The Star", message: "Hope and inspiration guide you. Renewed faith illuminates your path." },
  { name: "The Moon", message: "Navigate uncertainty with intuition. Illusions hide deeper truths." },
  { name: "The Sun", message: "Pure joy and success shine brightly. Vitality and clarity embrace you." },
  { name: "Judgement", message: "Awakening calls. Forgive the past and rise renewed." },
  { name: "The World", message: "Completion and wholeness achieved. Integration brings fulfillment." }
];


function App() {
  const [drawnCardIndex, setDrawnCardIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastDrawnIndex, setLastDrawnIndex] = useState<number | null>(null);


  const drawCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDrawnCardIndex(null); // Reset

    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * 9); // 0-8 for visible deck
      do {
        randomIndex = Math.floor(Math.random() * 9);
      } while (randomIndex === lastDrawnIndex && 9 > 1);


      setDrawnCardIndex(randomIndex);
      setLastDrawnIndex(randomIndex);

      setTimeout(() => {
        setIsAnimating(false);
      }, 1200);
    }, 200);
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
          {/* Deck of cards - fanned layout */}
          <div className="deck-container perspective-container max-w-md w-full">
            {Array.from({length: 9}, (_, i) => i).map((index) => {
              const card = tarotCards[index % tarotCards.length];
              const isDrawn = drawnCardIndex === index;
              return (
                <div
                  key={index}
                  className={`deck-card tarot-card absolute inset-0 mx-auto transition-all duration-1000 ${
                    isDrawn ? 'deck-card-emerging flipping' : ''
                  } ${isAnimating && !isDrawn ? 'deck-card-fade' : ''}`}
                  style={{ zIndex: isDrawn ? 10 : 10 - index }}
                >
                  <div className="card-inner">
                    <div className="card-back">
                      <div className="card-pattern"></div>
                    </div>
                    <div className="card-front">
                      {isDrawn && card && (
                        <div className="p-6 sm:p-8 h-full flex flex-col items-center justify-center text-center">
                          <h3 className="text-amber-50 text-xl sm:text-2xl md:text-3xl font-serif mb-4 font-bold text-shadow-glow">
                            {card.name}
                          </h3>
                          <div className="w-12 h-12 sm:w-16 sm:h-16 mb-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/50">
                            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-950" />
                          </div>
                          <p className="text-amber-50 text-sm sm:text-base md:text-lg font-serif leading-relaxed px-4">
                            {card.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


          <button
            onClick={drawCard}
            disabled={isAnimating}
            className="relative px-6 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-amber-300 rounded-full font-semibold text-sm sm:text-base lg:text-lg tracking-wide border-2 border-amber-500/30 shadow-lg shadow-purple-900/50 hover:shadow-amber-500/50 hover:border-amber-500/60 hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              Draw Your Card
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </button>

          {drawnCardIndex !== null && (
            <p className="text-purple-400 text-xs sm:text-sm italic animate-fade-in">
              Your card has spoken. Reflect and draw again when ready.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;

