import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-8 text-gradient">
            {t('about.title')}
          </h2>
          
          <div className="glass-card p-8 md:p-12">
            <p className="text-lg leading-relaxed text-text-secondary">
              {t('about.content')}
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;