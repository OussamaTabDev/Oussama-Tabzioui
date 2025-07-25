import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import libraryImage from '../assets/library-project.jpg';
import focusaiImage from '../assets/focusai-project.jpg';
import ecommerceImage from '../assets/ecommerce-project.jpg';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: t('projects.library.title'),
      description: t('projects.library.description'),
      longDescription: t('projects.library.long'),
      image: libraryImage,
      tech: ['Django', 'Tailwind CSS', 'Python', 'PostgreSQL'],
      github: 'https://github.com/OussamaTabDev'
    },
    {
      title: t('projects.focusai.title'),
      description: t('projects.focusai.description'),
      longDescription: t('projects.focusai.long'),
      image: focusaiImage,
      tech: ['Python', 'AI/ML', 'Browser Extension', 'JavaScript'],
      github: 'https://github.com/OussamaTabDev'
    },
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      longDescription: t('projects.ecommerce.long'),
      image: ecommerceImage,
      tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
      github: 'https://github.com/OussamaTabDev'
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-gradient">
            {t('projects.title')}
          </h2>
          <p className="text-text-secondary text-lg mb-6">Featured projects from my portfolio</p>
          <Link to="/projects">
            <button className="btn-neon gap-2">
              View All Projects
              <ExternalLink size={16} />
            </button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card cursor-pointer"
              onClick={() => openModal(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-mono font-semibold mb-3 text-accent-primary">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="text-accent-primary font-mono text-sm hover:text-accent-secondary transition-colors">
                  {t('projects.view')} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-surface/80 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          <div className="relative glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-card-hover rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>
            
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            
            <div className="p-6">
              <h3 className="text-2xl font-mono font-bold mb-4 text-gradient">
                {selectedProject.title}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech, index) => (
                  <span key={index} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 btn-neon"
                  >
                    <Github size={20} />
                    {t('projects.github')}
                  </a>
                )}
                
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 glass-card px-4 py-2 hover:border-accent-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;