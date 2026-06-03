import React, { useEffect } from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { Button } from './ui/Button';
import { portfolioData } from '../data/portfolio';
import { staggerReveal, floatAnimation } from '../lib/animations';
import profileImg from '../assets/niranjan.png';

export const Hero = () => {
  const { name, headline, summary, stats, username } = portfolioData.personalInfo;

  useEffect(() => {
    staggerReveal('.hero-reveal', 120);
    floatAnimation('.hero-float');
  }, []);

  return (
    <section id="home" className="min-h-screen pt-32 pb-16 flex items-center relative overflow-hidden bg-transparent">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-brand-violet/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] rounded-full bg-brand-green/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="hero-reveal text-[15px] font-extrabold text-brand-green uppercase tracking-widest mb-4 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>
            Welcome to my space
          </span>

          <h1 className="hero-reveal text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-[1.1] mb-6 font-sans">
            Hi, I'm <span className="text-brand-green font-sans">{name}</span>
          </h1>

          <p className="hero-reveal text-lg md:text-xl font-bold text-brand-violet mb-6">
            {headline}
          </p>

          <p className="hero-reveal text-[15px] md:text-[16px] leading-[1.6] text-brand-text-secondary mb-8 max-w-xl">
            {summary}
          </p>

          <div className="hero-reveal flex flex-wrap gap-4 mb-12">
            <a href="#projects">
              <Button variant="primary" className="flex items-center gap-2">
                View My Work
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </Button>
            </a>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-green" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="hero-reveal grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-brand-border/60 pt-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-brand-navy font-sans tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[12px] md:text-[13px] text-brand-text-secondary mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px] min-h-[460px] rounded-brand-card bg-white border border-brand-border shadow-brand-card p-6 flex flex-col items-center justify-between overflow-hidden group hover:border-brand-violet/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-violet/5 via-transparent to-brand-green/5 opacity-50" />

            <div className="relative w-full aspect-[4/5] rounded-brand-card border-2 border-brand-border bg-brand-violet/5 overflow-hidden shadow-brand-card mb-5 z-20 shrink-0">
              <img
                src={profileImg}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="w-full bg-brand-navy rounded-xl p-4 shadow-md font-mono text-[11px] leading-relaxed text-brand-bg-primary/95 border border-white/5 shrink-0">
              <div className="flex items-center gap-1.5 border-b border-white/10 pb-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-brand-green/80"></div>
                <span className="text-[9px] text-white/40 ml-1.5">{username}@pc:~</span>
              </div>
              <div className="space-y-1">
                <p className="text-white/60"><span className="text-brand-green">$</span> cat profile.json</p>
                <p className="text-brand-peach">{"{"}</p>
                <p className="pl-4">"identity": <span className="text-brand-green">"EEE &amp; Kernel Builder"</span>,</p>
                <p className="pl-4">"focus": [<span className="text-brand-violet">"EV Tech"</span>, <span className="text-brand-violet">"Open Source"</span>],</p>
                <p className="pl-4">"leadership": <span className="text-brand-green">"IEEE RAS SBC Chair , FOSS Cell Ambassador"</span></p>
                <p className="text-brand-peach">{"}"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
