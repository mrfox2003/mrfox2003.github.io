import React, { useEffect, useState, useRef } from 'react';
import { Card } from './ui/Card';
import { useTheme } from 'next-themes';
import { Github, RefreshCw } from 'lucide-react';

export const GithubActivity = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [key, setKey] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll to the far right on mobile/tablet so the most recent contributions
  // and the snake are visible immediately on load.
  useEffect(() => {
    if (mounted && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft = container.scrollWidth;
    }
  }, [mounted, key]);

  if (!mounted) {
    return (
      <Card className="w-full h-[240px] bg-white/40 backdrop-blur-xl border border-white/60 dark:bg-[#001221]/30 dark:border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.03)]" />
    );
  }

  // Append a cache-busting parameter to prevent the browser from caching old placeholders
  const svgUrl = theme === 'dark'
    ? `/github-contribution-grid-snake-dark.svg?v=${key}`
    : `/github-contribution-grid-snake.svg?v=${key}`;

  return (
    <Card className="w-full flex flex-col items-center p-5 sm:p-6 bg-white/40 backdrop-blur-xl border border-white/60 dark:bg-[#001221]/30 dark:border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_56px_rgba(0,0,0,0.05)] transition-all duration-300">
      {/* Header Controls */}
      <div className="w-full flex justify-between items-center gap-4 mb-4 border-b border-brand-border pb-3.5 dark:border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-brand-navy text-white rounded-lg dark:bg-white dark:text-brand-navy shrink-0">
            <Github className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-brand-navy dark:text-white text-sm">mrfox2003</span>
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-green relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              </span>
            </div>
            <p className="text-[10px] text-brand-text-secondary dark:text-gray-400 uppercase tracking-wider font-semibold">Coding Pulse</p>
          </div>
        </div>
        
        <button 
          onClick={() => setKey(prev => prev + 1)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 border border-brand-border text-brand-text-secondary text-[11px] font-bold rounded-brand-btn hover:border-brand-green hover:text-brand-green transition-all shadow-sm dark:bg-brand-navy/50 dark:border-white/10 dark:text-gray-300 dark:hover:text-brand-green dark:hover:border-brand-green"
        >
          <RefreshCw className="w-3 h-3" />
          Reset
        </button>
      </div>

      {/* SVG Scrollable Container */}
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto py-2 scrollbar-none cursor-grab active:cursor-grabbing flex justify-start md:justify-center"
      >
        {/* Set a minimum width on the grid wrapper to prevent it from getting squished */}
        <div className="min-w-[680px] w-full flex justify-center select-none shrink-0 px-2">
          <img 
            key={key}
            src={svgUrl} 
            alt="GitHub Contribution Snake" 
            className="w-full max-w-[680px] aspect-[828/178] rounded-lg pointer-events-none select-none"
          />
        </div>
      </div>
    </Card>
  );
};
