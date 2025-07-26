import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';

import { useToast } from '../hooks/use-toast';

const Index = () => {
  const [konamiSequence] = useState(['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']);
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [matrixMode, setMatrixMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === konamiSequence[konamiIndex]) {
        setKonamiIndex(prev => prev + 1);
        if (konamiIndex === konamiSequence.length - 1) {
          setMatrixMode(true);
          setKonamiIndex(0);
          document.body.classList.add('konami-mode');
          toast({
            title: "🎮 Konami Code Activated!",
            description: "Welcome, fellow gamer! The Matrix has you...",
          });
          
          // Reset after 5 seconds
          setTimeout(() => {
            setMatrixMode(false);
            document.body.classList.remove('konami-mode');
          }, 5000);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex, konamiSequence, toast]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-surface text-text-primary relative overflow-x-hidden">
      {matrixMode && <div className="matrix-rain" />}
      
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Fixed controls */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </div>
  );
};

export default Index;