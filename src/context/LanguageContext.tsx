import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': "Hi, I'm Oussama Tabzioui",
    'hero.subtitle': 'Full-Stack Developer & AI Enthusiast',
    'hero.description': 'I build fast, elegant, AI-powered web & backend solutions.',
    'hero.projects': 'Projects',
    'hero.cv': 'Download CV',
    'hero.github': 'GitHub',
    
    // About
    'about.title': 'About Me',
    'about.content': '3rd-year Licence SMI student at Université Moulay Ismail (Meknès). Passionate about clean architectures, scalable APIs, and machine-learning magic. From vanilla-PHP e-commerce to Django + React libraries—turning ideas into production code.',
    
    // Skills
    'skills.title': 'Skills & Technologies',
    'skills.languages': 'Languages',
    'skills.frameworks': 'Frameworks',
    'skills.ai': 'AI/ML',
    'skills.databases': 'Databases',
    'skills.tools': 'DevOps/Tools',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.view': 'View Details',
    'projects.github': 'View on GitHub',
    'projects.library.title': 'University Library Manager',
    'projects.library.description': 'Django + Tailwind – book borrowing, member portal, admin dashboard.',
    'projects.library.long': 'A comprehensive library management system built with Django and Tailwind CSS. Features include book catalog management, member registration, borrowing system, and administrative dashboard with detailed analytics.',
    'projects.focusai.title': 'FocusAI Tracker',
    'projects.focusai.description': 'WIP – multi-window productivity tracker + browser extension.',
    'projects.focusai.long': 'An AI-powered productivity tracking application currently in development. Features multi-window focus monitoring, browser extension integration, and intelligent productivity insights.',
    'projects.ecommerce.title': 'E-Commerce Platform',
    'projects.ecommerce.description': 'vanilla PHP, MySQL – cart, products, admin panel (internship @ GenerationNT).',
    'projects.ecommerce.long': 'A complete e-commerce solution built during my internship at GenerationNT. Developed with vanilla PHP and MySQL, featuring shopping cart, product management, and comprehensive admin panel.',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.generationnt.title': 'Full-Stack Intern',
    'experience.generationnt.company': 'GenerationNT',
    'experience.generationnt.period': '2023',
    'experience.generationnt.description': 'Built complete e-commerce engine in vanilla PHP focused on business logic, security, and query optimization.',
    
    // Education
    'education.title': 'Education',
    'education.university.degree': 'Licence SMI',
    'education.university.school': 'Université Moulay Ismail',
    'education.university.period': '2022-2025',
    'education.highschool.degree': 'Baccalauréat Sciences Math',
    'education.highschool.school': 'Lycée Tariq Khénifra',
    'education.highschool.period': '2021 (Mention Passable)',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    
    // Footer
    'footer.text': 'Crafted with Tailwind & ❤️',
  },
  fr: {
    // Navigation
    'nav.about': 'À Propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': "Salut, je suis Oussama Tabzioui",
    'hero.subtitle': 'Développeur Full-Stack & Passionné d\'IA',
    'hero.description': 'Je crée des solutions web et backend rapides, élégantes et alimentées par l\'IA.',
    'hero.projects': 'Projets',
    'hero.cv': 'Télécharger CV',
    'hero.github': 'GitHub',
    
    // About
    'about.title': 'À Propos de Moi',
    'about.content': 'Étudiant en 3ème année Licence SMI à l\'Université Moulay Ismail (Meknès). Passionné par les architectures propres, les API évolutives et la magie de l\'apprentissage automatique. Du e-commerce vanilla-PHP aux bibliothèques Django + React—transformant les idées en code de production.',
    
    // Skills
    'skills.title': 'Compétences & Technologies',
    'skills.languages': 'Langages',
    'skills.frameworks': 'Frameworks',
    'skills.ai': 'IA/ML',
    'skills.databases': 'Bases de Données',
    'skills.tools': 'DevOps/Outils',
    
    // Projects
    'projects.title': 'Projets Phares',
    'projects.view': 'Voir Détails',
    'projects.github': 'Voir sur GitHub',
    'projects.library.title': 'Gestionnaire Bibliothèque Universitaire',
    'projects.library.description': 'Django + Tailwind – emprunt de livres, portail membre, tableau de bord admin.',
    'projects.library.long': 'Un système complet de gestion de bibliothèque construit avec Django et Tailwind CSS. Comprend la gestion du catalogue de livres, l\'inscription des membres, le système d\'emprunt et un tableau de bord administratif avec des analyses détaillées.',
    'projects.focusai.title': 'FocusAI Tracker',
    'projects.focusai.description': 'En cours – tracker de productivité multi-fenêtres + extension navigateur.',
    'projects.focusai.long': 'Une application de suivi de productivité alimentée par l\'IA actuellement en développement. Comprend la surveillance de focus multi-fenêtres, l\'intégration d\'extension de navigateur et des insights de productivité intelligents.',
    'projects.ecommerce.title': 'Plateforme E-Commerce',
    'projects.ecommerce.description': 'PHP vanilla, MySQL – panier, produits, panneau admin (stage @ GenerationNT).',
    'projects.ecommerce.long': 'Une solution e-commerce complète construite pendant mon stage chez GenerationNT. Développée avec PHP vanilla et MySQL, comprenant panier d\'achat, gestion des produits et panneau d\'administration complet.',
    
    // Experience
    'experience.title': 'Expérience Professionnelle',
    'experience.generationnt.title': 'Stagiaire Full-Stack',
    'experience.generationnt.company': 'GenerationNT',
    'experience.generationnt.period': '2023',
    'experience.generationnt.description': 'Construction d\'un moteur e-commerce complet en PHP vanilla axé sur la logique métier, la sécurité et l\'optimisation des requêtes.',
    
    // Education
    'education.title': 'Formation',
    'education.university.degree': 'Licence SMI',
    'education.university.school': 'Université Moulay Ismail',
    'education.university.period': '2022-2025',
    'education.highschool.degree': 'Baccalauréat Sciences Math',
    'education.highschool.school': 'Lycée Tariq Khénifra',
    'education.highschool.period': '2021 (Mention Passable)',
    
    // Contact
    'contact.title': 'Restons en Contact',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    
    // Footer
    'footer.text': 'Créé avec Tailwind & ❤️',
  },
  ar: {
    // Navigation
    'nav.about': 'نبذة',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.experience': 'الخبرة',
    'nav.contact': 'التواصل',
    
    // Hero
    'hero.greeting': "مرحبا، أنا أسامة طبزيوي",
    'hero.subtitle': 'مطور ويب متكامل ومتحمس للذكاء الاصطناعي',
    'hero.description': 'أقوم ببناء حلول ويب وخادم سريعة وأنيقة ومدعومة بالذكاء الاصطناعي.',
    'hero.projects': 'المشاريع',
    'hero.cv': 'تحميل السيرة الذاتية',
    'hero.github': 'GitHub',
    
    // About
    'about.title': 'نبذة عني',
    'about.content': 'طالب في السنة الثالثة إجازة SMI في جامعة مولاي إسماعيل (مكناس). شغوف بالهياكل النظيفة وواجهات البرمجة القابلة للتطوير وسحر التعلم الآلي. من التجارة الإلكترونية بـ PHP الخام إلى مكتبات Django + React—تحويل الأفكار إلى كود إنتاج.',
    
    // Skills
    'skills.title': 'المهارات والتقنيات',
    'skills.languages': 'اللغات',
    'skills.frameworks': 'الأطر',
    'skills.ai': 'الذكاء الاصطناعي/التعلم الآلي',
    'skills.databases': 'قواعد البيانات',
    'skills.tools': 'DevOps/الأدوات',
    
    // Projects
    'projects.title': 'المشاريع المميزة',
    'projects.view': 'عرض التفاصيل',
    'projects.github': 'عرض على GitHub',
    'projects.library.title': 'مدير المكتبة الجامعية',
    'projects.library.description': 'Django + Tailwind – استعارة الكتب، بوابة الأعضاء، لوحة الإدارة.',
    'projects.library.long': 'نظام إدارة مكتبة شامل مبني بـ Django و Tailwind CSS. يتضمن إدارة فهرس الكتب، تسجيل الأعضاء، نظام الاستعارة، ولوحة إدارية مع تحليلات مفصلة.',
    'projects.focusai.title': 'FocusAI Tracker',
    'projects.focusai.description': 'قيد التطوير – متتبع إنتاجية متعدد النوافذ + إضافة متصفح.',
    'projects.focusai.long': 'تطبيق تتبع إنتاجية مدعوم بالذكاء الاصطناعي قيد التطوير حاليًا. يتضمن مراقبة التركيز متعدد النوافذ، تكامل إضافة المتصفح، ورؤى إنتاجية ذكية.',
    'projects.ecommerce.title': 'منصة التجارة الإلكترونية',
    'projects.ecommerce.description': 'PHP خام، MySQL – عربة التسوق، المنتجات، لوحة الإدارة (تدريب @ GenerationNT).',
    'projects.ecommerce.long': 'حل تجارة إلكترونية كامل تم بناؤه خلال تدريبي في GenerationNT. تم تطويره بـ PHP الخام و MySQL، يتضمن عربة التسوق، إدارة المنتجات، ولوحة إدارة شاملة.',
    
    // Experience
    'experience.title': 'الخبرة المهنية',
    'experience.generationnt.title': 'متدرب مطور متكامل',
    'experience.generationnt.company': 'GenerationNT',
    'experience.generationnt.period': '2023',
    'experience.generationnt.description': 'بناء محرك تجارة إلكترونية كامل بـ PHP الخام مع التركيز على منطق الأعمال والأمان وتحسين الاستعلامات.',
    
    // Education
    'education.title': 'التعليم',
    'education.university.degree': 'إجازة SMI',
    'education.university.school': 'جامعة مولاي إسماعيل',
    'education.university.period': '2022-2025',
    'education.highschool.degree': 'بكالوريا علوم رياضية',
    'education.highschool.school': 'ثانوية طارق خنيفرة',
    'education.highschool.period': '2021 (ميزة مقبول)',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.location': 'الموقع',
    
    // Footer
    'footer.text': 'صُنع بـ Tailwind & ❤️',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-language') as Language;
    if (saved && ['en', 'fr', 'ar'].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};