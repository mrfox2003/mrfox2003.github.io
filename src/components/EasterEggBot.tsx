import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const BOT_QUOTES = [
  "Beep boop! 🤖 Kernel debugging is my favorite hobby!",
  "Did you know? My custom OTA builds have over 1,000+ active downloads! 🚀",
  "Charging battery... 🔋 May 2026 graduation status: CONFIRMED.",
  "Executing custom script: `compile_kernel.sh` ... Status: Success! ⚡",
  "Warning: Do not feed the developer coffee after midnight! ☕",
  "Open source is in my circuits! 🦊",
];

export const EasterEggBot = () => {
  const { toast } = useToast();
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const randomQuote = BOT_QUOTES[Math.floor(Math.random() * BOT_QUOTES.length)];

    toast({
      title: "FoxBot 🤖",
      description: randomQuote,
      duration: 4000,
    });

    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <div
      className="fixed bottom-24 left-4 md:bottom-8 md:left-8 z-40 group"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Tooltip speech bubble */}
      <div className="absolute bottom-16 left-0 bg-brand-navy text-white text-[11px] font-sans px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md border border-white/10 after:content-[''] after:absolute after:top-full after:left-5 after:border-4 after:border-transparent after:border-t-brand-navy">
        Click me! ⚡
      </div>

      {/* Glowing aura */}
      <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-md opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 animate-pulse" />

      {/* The Bot body */}
      <button
        onClick={handleClick}
        className={`
          relative flex items-center justify-center w-12 h-12 
          bg-white/45 backdrop-blur-xl border border-white/60 
          text-brand-navy hover:text-brand-green rounded-full 
          shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-brand-green/20
          hover:-translate-y-1 transition-all duration-300
          ${isSpinning ? 'animate-spin' : 'animate-bounce'}
        `}
        style={{
          animationDuration: isSpinning ? '1s' : '3s',
        }}
        aria-label="Developer Bot Easter Egg"
      >
        <Bot className="w-6 h-6 transition-transform group-hover:scale-110" />

        {/* Antenna blinking led dot */}
        <span className="absolute top-2 right-2 w-2 h-2 bg-brand-green rounded-full animate-ping" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-brand-green rounded-full" />
      </button>
    </div>
  );
};
