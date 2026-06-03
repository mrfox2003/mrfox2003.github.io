import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { portfolioData } from '../data/portfolio';
import { staggerReveal } from '../lib/animations';

export const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    staggerReveal('.project-reveal', 100);
  }, [filter]);

  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="project-reveal text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-sans">
              Featured Projects
            </h2>
            <p className="project-reveal text-brand-text-secondary leading-relaxed">
              Expore some of my work across embedded systems, software engineering, and experimental hardware builds.
            </p>
          </div>

          <div className="project-reveal flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                  px-5 py-2.5 text-[12px] font-bold rounded-full transition-all duration-300
                  ${filter === cat 
                    ? 'bg-brand-navy text-white shadow-md' 
                    : 'bg-white/40 backdrop-blur-md text-brand-text-secondary border border-white/60 hover:bg-white/60'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="project-reveal group flex flex-col h-full bg-white/40 border-white/50">
              <div className={`relative rounded-xl overflow-hidden mb-6 border border-white/50 bg-white/30 backdrop-blur-lg group-hover:border-brand-violet/20 transition-all ${!project.image ? 'aspect-video' : ''}`}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-brand-violet/20">
                    <Github className="w-12 h-12" />
                  </div>
                )}
                {/* Status Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg border border-white/50 text-[10px] font-extrabold text-brand-navy uppercase tracking-wider">
                  {project.category}
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-navy mb-3 font-sans group-hover:text-brand-violet transition-colors">
                  {project.title}
                </h3>
                <p className="text-[14px] text-brand-text-secondary leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 bg-white/50 border border-white/40 text-brand-navy/70 text-[10px] font-bold rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="icon">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" className="flex items-center gap-2 text-[12px] py-2 px-4">
                        View Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Explore more button if we have many projects */}
        <div className="mt-16 flex justify-center project-reveal">
           <a href="https://github.com/mrfox2003" target="_blank" rel="noopener noreferrer">
             <Button variant="text" className="flex items-center gap-2">
               Explore more on GitHub
               <ArrowRight className="w-4 h-4" />
             </Button>
           </a>
        </div>
      </div>
    </section>
  );
};
