import React, { useState, useEffect } from 'react';
import { Home, User, FolderCode, Briefcase, MessageSquare, Code } from 'lucide-react';
import { Button } from './ui/Button';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { displayName } = portfolioData.personalInfo;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Frame-rate throttled Scroll Spy to track active section
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'contact'];
    
    let ticking = false;

    const handleScrollSpy = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // 1. Force Home if near top
          if (scrollY < 100) {
            setActiveSection('home');
            ticking = false;
            return;
          }

          // 2. Force Contact if reached the bottom of the page
          if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80) {
            setActiveSection('contact');
            ticking = false;
            return;
          }

          // 3. Scan middle-viewport intersection bounds
          const focalPoint = scrollY + window.innerHeight * 0.35;
          
          for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (focalPoint >= top && focalPoint < top + height) {
                setActiveSection(sectionId);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    // Initial check on load
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const mobileLinks = [
    { id: 'home', name: 'Home', href: '#home', Icon: Home },
    { id: 'about', name: 'About', href: '#about', Icon: User },
    { id: 'experience', name: 'Experience', href: '#experience', Icon: Briefcase },
    { id: 'projects', name: 'Projects', href: '#projects', Icon: FolderCode },
    { id: 'contact', name: 'Contact', href: '#contact', Icon: MessageSquare }
  ];

  const brandParts = displayName.split('.');
  const brandFirst = brandParts[0];
  const brandLast = brandParts[1] ? `.${brandParts[1]}` : '';

  return (
    <>
      {/* Top Header Navigation - High Clarity Crystal Glass when Scrolled */}
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled 
            ? 'py-4 bg-white/6 backdrop-blur-[30px] backdrop-saturate-[180%] border-b border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.01)] dark:bg-brand-navy/5 dark:border-white/5' 
            : 'py-6 bg-transparent'}
        `}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center text-brand-green group-hover:rotate-12 transition-transform dark:bg-white dark:text-brand-navy">
              <Code className="w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold text-brand-navy font-sans tracking-tight dark:text-white">
              {brandFirst}<span className="text-brand-violet">{brandLast}</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[14px] font-bold text-brand-text-secondary hover:text-brand-violet transition-colors tracking-wide dark:text-gray-300 dark:hover:text-brand-green"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact">
              <Button variant="accent" className="px-6 py-2.5 text-[14px]">
                Hire Me
              </Button>
            </a>
          </div>

          {/* Mobile Header Actions */}
          <div className="md:hidden flex items-center" />
        </div>
      </nav>

      {/* Floating Bottom High Clarity Crystal Glass Tab Bar (Strictly Mobile Only) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[360px]">
        {/* Subtle Glow backing shadow */}
        <div className="absolute inset-0 bg-brand-violet/5 dark:bg-brand-green/5 blur-2xl -z-10 rounded-full" />
        
        {/* Crystal Clear Liquid Glass Capsule Panel */}
        <div className="relative flex justify-around items-center py-2.5 px-3 bg-white/6 dark:bg-black/5 backdrop-blur-[36px] backdrop-saturate-[200%] border border-white/20 dark:border-white/5 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(0,0,0,0.02),0_16px_36px_-8px_rgba(0,0,0,0.12)]">
          {mobileLinks.map((link) => {
            const IconComponent = link.Icon;
            const isActive = activeSection === link.id;
            
            return (
              <a 
                key={link.id} 
                href={link.href}
                className="relative flex flex-col items-center justify-center p-2.5 rounded-full transition-all duration-300"
              >
                {/* Active Liquid highlight pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-brand-violet/10 dark:bg-brand-green/20 rounded-full border border-brand-violet/15 dark:border-brand-green/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                
                {/* Icon wrapper to apply tap & scale animations */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.12 : 1,
                    y: isActive ? -1 : 0
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative z-10 ${isActive ? 'text-brand-violet dark:text-brand-green' : 'text-brand-text-secondary dark:text-gray-400'}`}
                >
                  <IconComponent className="w-5 h-5 stroke-[2.2]" />
                </motion.div>
                
                {/* Active indicator sub-dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeTabDot"
                    className="absolute -bottom-0.5 w-1 h-1 bg-brand-violet dark:bg-brand-green rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};
