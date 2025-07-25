import { useEffect, useState } from 'react';
import { Github, Download, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import avatarImage from '../assets/avatar.jpg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const { t } = useLanguage();
  
  const fullText = t('hero.description');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface to-surface-glass" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent-primary)) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, hsl(var(--accent-secondary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 30px 30px'
        }}
      />
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden glass-card border-2 border-accent-primary">
              <img 
                src={avatarImage} 
                alt="Oussama Tabzioui"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 animate-pulse" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-6 text-gradient leading-tight">
            {t('hero.greeting')}
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-sans text-text-secondary mb-8">
            {t('hero.subtitle')}
          </h2>

          {/* Typed Description */}
          <p className="text-lg md:text-xl text-text-muted mb-12 min-h-[2em]">
            <span className={isTyping ? 'typing-text' : ''}>{typedText}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToProjects}
              className="btn-neon w-full sm:w-auto"
            >
              {t('hero.projects')}
            </button>
            
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass-card hover:border-accent-primary transition-all w-full sm:w-auto justify-center"
            >
              <Download size={20} />
              {t('hero.cv')}
            </a>
            
            <a
              href="https://github.com/OussamaTabDev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass-card hover:border-accent-primary transition-all w-full sm:w-auto justify-center"
            >
              <Github size={20} />
              {t('hero.github')}
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center">
            <span className="text-text-muted text-sm mb-2 font-mono">Scroll to explore</span>
            <ArrowDown 
              size={24} 
              className="text-accent-primary animate-bounce cursor-pointer hover:text-accent-secondary transition-colors"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;