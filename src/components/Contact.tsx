import { Mail, Phone, MapPin, Github, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: t('contact.email'),
      value: 'OussamaTabzioui09@gmail.com',
      href: 'mailto:OussamaTabzioui09@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      label: t('contact.phone'),
      value: '+212 774 368 063',
      href: 'tel:+212774368063'
    },
    {
      icon: <MapPin size={20} />,
      label: t('contact.location'),
      value: 'Khénifra, Morocco',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/OussamaTabDev'
    },
    {
      icon: <Globe size={24} />,
      label: 'Website',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-16 text-gradient">
          {t('contact.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-mono font-semibold text-accent-primary mb-6">
                Contact Information
              </h3>
              
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="glass-card p-4 flex items-center gap-4 hover:border-accent-primary transition-all group block"
                >
                  <div className="text-accent-primary group-hover:text-accent-secondary transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-text-muted text-sm font-mono">{item.label}</p>
                    <p className="text-text-primary font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Social Links & CTA */}
            <div className="space-y-6">
              <h3 className="text-xl font-mono font-semibold text-accent-primary mb-6">
                Let's Connect
              </h3>
              
              <div className="glass-card p-6">
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
                </p>
                
                <div className="flex gap-4 mb-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card hover:border-accent-primary transition-all hover:scale-105 group"
                      title={link.label}
                    >
                      <span className="text-accent-primary group-hover:text-accent-secondary transition-colors">
                        {link.icon}
                      </span>
                    </a>
                  ))}
                </div>
                
                <a
                  href="mailto:OussamaTabzioui09@gmail.com"
                  className="btn-neon w-full justify-center"
                >
                  Send Message
                </a>
              </div>
              
              {/* Fun Fact */}
              <div className="glass-card p-4 text-center">
                <p className="text-text-muted text-sm font-mono">
                  💡 Fun Fact: Try the Konami Code!
                </p>
                <p className="text-xs text-text-muted mt-1">
                  ↑↑↓↓←→←→BA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;