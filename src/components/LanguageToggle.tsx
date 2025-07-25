import { useState } from 'react';
import { Languages } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

const LanguageToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', flag: '🇲🇦' },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card p-3 hover:border-accent-primary transition-all hover:scale-105 group"
        title="Change language"
      >
        <Languages size={20} className="text-accent-primary group-hover:text-accent-secondary transition-colors" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute bottom-full right-0 mb-2 glass-card min-w-[150px] z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left hover:bg-card-hover transition-colors flex items-center gap-3 ${
                  language === lang.code ? 'text-accent-primary' : 'text-text-secondary'
                } ${lang === languages[0] ? 'rounded-t-lg' : ''} ${
                  lang === languages[languages.length - 1] ? 'rounded-b-lg' : ''
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-mono text-sm">{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageToggle;