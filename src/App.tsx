import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/toaster';
import { EasterEggBot } from './components/EasterEggBot';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-bg-primary selection:bg-brand-violet/20 selection:text-brand-violet relative overflow-hidden">
      {/* Background Liquid Blobs */}
      <div className="absolute top-[5%] left-[-15%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-brand-violet/20 blur-[80px] md:blur-[130px] pointer-events-none -z-10 md:animate-float floating-element" style={{ animationDuration: '12s' }} />
      <div className="absolute top-[20%] right-[-15%] w-[350px] h-[350px] md:w-[700px] md:h-[700px] rounded-full bg-brand-green/15 blur-[90px] md:blur-[150px] pointer-events-none -z-10 md:animate-float floating-element" style={{ animationDuration: '14s', animationDelay: '2s' }} />
      <div className="absolute top-[45%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-brand-violet/15 blur-[80px] md:blur-[140px] pointer-events-none -z-10 md:animate-float floating-element" style={{ animationDuration: '10s', animationDelay: '1s' }} />
      <div className="absolute top-[70%] right-[-10%] w-[350px] h-[350px] md:w-[700px] md:h-[700px] rounded-full bg-brand-green/18 blur-[90px] md:blur-[150px] pointer-events-none -z-10 md:animate-float floating-element" style={{ animationDuration: '16s', animationDelay: '3s' }} />
      <div className="absolute bottom-[5%] left-[-15%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-brand-violet/18 blur-[80px] md:blur-[130px] pointer-events-none -z-10 md:animate-float floating-element" style={{ animationDuration: '13s', animationDelay: '1.5s' }} />
      
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <Toaster />

      {/* Floating Back to Top Arrow Head */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 hidden md:flex items-center justify-center w-12 h-12 bg-white/45 backdrop-blur-xl border border-white/60 text-brand-navy rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-brand-navy hover:text-white hover:border-brand-navy hover:-translate-y-1 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}
      {/* Easter Egg Bot */}
      <EasterEggBot />
    </div>
  );
}

export default App;
