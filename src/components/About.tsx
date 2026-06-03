import React, { useEffect } from 'react';
import { Card } from './ui/Card';
import { portfolioData } from '../data/portfolio';
import { staggerReveal } from '../lib/animations';

export const About = () => {
  const { details } = portfolioData.about;

  useEffect(() => {
    staggerReveal('.about-reveal', 100);
  }, []);

  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="about-reveal text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-sans">
            About Me
          </h2>
          <div className="about-reveal w-20 h-1.5 bg-brand-green rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="about-reveal flex gap-6 items-start">
                <div className="p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/80 shadow-sm shrink-0">
                  <Icon className="w-5 h-5 text-brand-violet" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-brand-text-secondary leading-relaxed text-[15px]">
                    {item.content}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
