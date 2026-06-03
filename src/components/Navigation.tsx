import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Button } from './ui/Button';
import { portfolioData } from '../data/portfolio';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { displayName } = portfolioData.personalInfo;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const brandParts = displayName.split('.');
  const brandFirst = brandParts[0];
  const brandLast = brandParts[1] ? `.${brandParts[1]}` : '';

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'py-4 bg-white/40 backdrop-blur-xl border-b border-white/50 shadow-sm' 
          : 'py-6 bg-transparent'}
      `}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center text-brand-green group-hover:rotate-12 transition-transform">
            <Code className="w-6 h-6" />
          </div>
          <span className="text-xl font-extrabold text-brand-navy font-sans tracking-tight">
            {brandFirst}<span className="text-brand-violet">{brandLast}</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[14px] font-bold text-brand-text-secondary hover:text-brand-violet transition-colors tracking-wide"
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

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 text-brand-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="p-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-bold text-brand-navy"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Button variant="accent" className="w-full">
                Hire Me
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
