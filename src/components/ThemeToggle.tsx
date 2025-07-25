import { useState, useEffect } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [accent, setAccent] = useState<'sky' | 'purple'>('sky');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'dark' | 'light';
    const savedAccent = localStorage.getItem('portfolio-accent') as 'sky' | 'purple';
    
    if (savedTheme) setTheme(savedTheme);
    if (savedAccent) setAccent(savedAccent);
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio-accent', accent);
    document.documentElement.classList.toggle('accent-purple', accent === 'purple');
  }, [accent]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleAccent = () => {
    setAccent(prev => prev === 'sky' ? 'purple' : 'sky');
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Theme Toggle */}
      {/* <button
        onClick={toggleTheme}
        className="glass-card p-3 hover:border-accent-primary transition-all hover:scale-105 group"
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <Sun size={20} className="text-accent-primary group-hover:text-accent-secondary transition-colors" />
        ) : (
          <Moon size={20} className="text-accent-primary group-hover:text-accent-secondary transition-colors" />
        )}
      </button> */}

      {/* Accent Toggle */}
      <button
        onClick={toggleAccent}
        className="glass-card p-3 hover:border-accent-primary transition-all hover:scale-105 group"
        title={`Switch to ${accent === 'sky' ? 'purple' : 'sky'} accent`}
      >
        <Palette 
          size={20} 
          className={`transition-colors ${
            accent === 'sky' 
              ? 'text-sky-400 group-hover:text-purple-400' 
              : 'text-purple-400 group-hover:text-sky-400'
          }`} 
        />
      </button>
    </div>
  );
};

export default ThemeToggle;