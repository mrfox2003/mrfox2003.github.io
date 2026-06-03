import React, { useEffect } from 'react';
import { Card } from './ui/Card';
import { portfolioData } from '../data/portfolio';
import { staggerReveal } from '../lib/animations';

export const Skills = () => {
  const { categories } = portfolioData.skills;

  useEffect(() => {
    staggerReveal('.skill-reveal', 80);
  }, []);

  return (
    <section id="skills" className="py-24 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="skill-reveal text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-sans">
            Technical Expertise
          </h2>
          <p className="skill-reveal text-brand-text-secondary max-w-2xl mb-6">
            A comprehensive list of the technologies and tools I work with.
          </p>
          <div className="skill-reveal w-20 h-1.5 bg-brand-violet rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="skill-reveal flex flex-col items-center text-center">
              <h3 className="text-lg font-bold text-brand-navy mb-6 font-sans">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 bg-brand-bg-primary border border-brand-border text-brand-text-secondary text-[12px] font-bold rounded-brand-btn hover:border-brand-violet/30 hover:text-brand-violet transition-colors flex items-center gap-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
