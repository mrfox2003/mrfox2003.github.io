import React, { useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card } from './ui/Card';
import { portfolioData } from '../data/portfolio';
import { staggerReveal } from '../lib/animations';

export const Education = () => {
  const { education } = portfolioData;

  useEffect(() => {
    staggerReveal('.edu-reveal', 100);
  }, []);

  return (
    <section id="education" className="py-24 bg-brand-bg-primary">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="edu-reveal text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-sans">
            Education
          </h2>
          <div className="edu-reveal w-16 h-1 bg-brand-violet rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="edu-reveal border-brand-border/40 hover:border-brand-violet/20">
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-brand-violet/5 rounded-xl border border-brand-violet/10">
                    <GraduationCap className="w-6 h-6 text-brand-violet" />
                  </div>
                  <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-[11px] font-bold uppercase tracking-wider rounded-full">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-navy mb-2 font-sans">
                  {edu.degree}
                </h3>
                <p className="text-brand-violet font-bold text-[15px] mb-4">
                  {edu.institution}
                </p>

                <div className="flex items-center gap-4 text-brand-text-secondary text-[13px] mb-6">
                  <span className="flex items-center gap-1.5 uppercase font-extrabold tracking-wide">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>

                {edu.details && (
                  <div className="mt-auto pt-6 border-t border-brand-border/60">
                    <ul className="space-y-3">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-[14px] leading-relaxed text-brand-text-secondary">
                          <Award className="w-4 h-4 text-brand-green mt-1 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
