import React, { useEffect } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { staggerReveal } from '../lib/animations';

export const Experience = () => {
  const { experiences } = portfolioData;

  useEffect(() => {
    staggerReveal('.exp-reveal', 100);
  }, []);

  return (
    <section id="experience" className="py-24 bg-transparent">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="exp-reveal text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-sans">
            Work Experience
          </h2>
          <div className="exp-reveal w-16 h-1 bg-brand-green rounded-full"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-reveal relative pl-8 md:pl-0">
              {/* Timeline Line (for larger screens) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-border -translate-x-1/2" />
              
              <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Visual Dot on Timeline */}
                <div className="absolute md:static left-0 top-0 md:top-auto w-4 h-4 rounded-full border-4 border-white bg-brand-green shadow-sm z-10 md:translate-x-0" />

                {/* Content Card */}
                <div className="w-full md:w-[45%] bg-white/40 backdrop-blur-xl border border-white/50 rounded-brand-card p-6 shadow-brand-card hover:shadow-brand-card-hover hover:-translate-y-1 hover:border-white/95 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold text-brand-navy font-sans">{exp.role}</h3>
                    <span className="px-3 py-1 bg-brand-violet/10 text-brand-violet text-[11px] font-bold uppercase tracking-wider rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-brand-text-secondary text-[13px] mb-6">
                    <span className="flex items-center gap-1.5 font-bold text-brand-navy">
                      <Briefcase className="w-3.5 h-3.5 text-brand-green" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-3 text-[14px] leading-relaxed text-brand-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {(exp.location || exp.techStack) && (
                    <div className="mt-6 pt-5 border-t border-brand-border/60 flex flex-wrap gap-4">
                      {exp.location && (
                        <span className="flex items-center gap-1.5 text-[11px] font-bold text-brand-navy/60 uppercase tracking-wide">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      )}
                      {exp.techStack && (
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech, tIdx) => (
                            <span key={tIdx} className="text-[10px] font-extrabold text-brand-violet px-2 py-0.5 bg-brand-violet/5 rounded border border-brand-violet/10">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Spacer for the other side of the timeline */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
