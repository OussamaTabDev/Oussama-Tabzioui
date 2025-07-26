import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.generationnt.title'),
      company: t('experience.generationnt.company'),
      period: t('experience.generationnt.period'),
      description: t('experience.generationnt.description'),
      type: 'Internship'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-16 text-gradient">
          {t('experience.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-primary/30" />
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-accent-primary rounded-full border-4 border-surface shadow-lg" />
                
                <div className="ml-20">
                  <div className="glass-card p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-mono font-semibold text-accent-primary mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-text-primary mb-2">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-text-muted font-mono text-sm">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-text-primary leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mt-4">
                      <span className="skill-tag">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;