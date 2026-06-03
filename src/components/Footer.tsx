import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Footer = () => {
  const { socialLinks, personalInfo } = portfolioData;
  const { displayName, name } = personalInfo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const brandParts = displayName.split('.');
  const brandFirst = brandParts[0];
  const brandLast = brandParts[1] ? `.${brandParts[1]}` : '';

  return (
    <footer className="bg-white/40 backdrop-blur-xl border-t border-white/50 py-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="text-2xl font-extrabold text-brand-navy font-sans tracking-tight mb-4">
              {brandFirst}<span className="text-brand-violet">{brandLast}</span>
            </a>
            <p className="text-brand-text-secondary text-[14px] max-w-sm text-center md:text-left leading-relaxed">
              Engineering sustainable solutions and building modern digital experiences with code and circuits.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-bg-secondary text-brand-navy rounded-xl hover:bg-brand-navy hover:text-white transition-all shadow-sm">
                <Github className="w-5 h-5" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-bg-secondary text-brand-navy rounded-xl hover:bg-brand-navy hover:text-white transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-bg-secondary text-brand-navy rounded-xl hover:bg-brand-navy hover:text-white transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={`mailto:${portfolioData.personalInfo.email}`} className="p-3 bg-brand-bg-secondary text-brand-navy rounded-xl hover:bg-brand-navy hover:text-white transition-all shadow-sm">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[12px] font-extrabold text-brand-violet uppercase tracking-widest hover:text-brand-navy transition-colors"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-border/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-brand-text-secondary">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
