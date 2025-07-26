import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('education.university.degree'),
      school: t('education.university.school'),
      period: t('education.university.period'),
      status: 'current'
    },
    {
      degree: t('education.highschool.degree'),
      school: t('education.highschool.school'),
      period: t('education.highschool.period'),
      status: 'completed'
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-16 text-gradient">
          {t('education.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-6 hover:border-accent-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`p-3 rounded-full ${
                      edu.status === 'current' 
                        ? 'bg-accent-primary/20 text-accent-primary' 
                        : 'bg-accent-secondary/20 text-accent-secondary'
                    }`}>
                      <GraduationCap size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-mono font-semibold text-accent-primary">
                        {edu.degree}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-text-muted font-mono text-sm">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-text-primary mb-3">
                      {edu.school}
                    </p>
                    {/* need to chnage after a while */}
                    <div className="flex items-center gap-2">
                      <span className={`skill-tag ${
                        edu.status === 'current' 
                          ? 'border-accent-primary text-accent-primary' 
                          : 'border-accent-secondary text-accent-secondary'
                      }`}>
                        {edu.status === 'current' ? 'Complete' : 'Complete'}
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

export default Education;