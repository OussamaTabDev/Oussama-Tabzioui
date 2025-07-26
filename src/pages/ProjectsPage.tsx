import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import libraryProject from '@/assets/library-project.jpg';
import ecommerceProject from '@/assets/ecommerce-project.jpg';
import focusaiProject from '@/assets/focusai-project.jpg';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  status?: string;
}

const ProjectsPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allProjects: Project[] = [
    {
      title: t('projects.library.title'),
      description: t('projects.library.description'),
      longDescription: t('projects.library.long'),
      image: libraryProject,
      tech: ['Django', 'Tailwind CSS', 'PostgreSQL', 'JavaScript'],
      github: 'https://github.com/OussamaTabDev/library-manager',
      status: 'Completed'
    },
    {
      title: t('projects.focusai.title'),
      description: t('projects.focusai.description'),
      longDescription: t('projects.focusai.long'),
      image: focusaiProject,
      tech: ['Python', 'TensorFlow', 'React', 'Electron'],
      github: 'https://github.com/OussamaTabDev/focusai-tracker',
      status: 'In Progress'
    },
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      longDescription: t('projects.ecommerce.long'),
      image: ecommerceProject,
      tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/OussamaTabDev/ecommerce-platform',
      status: 'Completed'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management platform with real-time updates and team collaboration features.',
      longDescription: 'Built a comprehensive task management system using React and Node.js. Features include real-time notifications, file sharing, project templates, and advanced filtering. Implemented WebSocket connections for live updates and integrated with popular third-party services.',
      image: libraryProject,
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      github: 'https://github.com/OussamaTabDev/task-manager',
      demo: 'https://tasks.example.com',
      status: 'Completed'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'ML-powered weather prediction dashboard with interactive visualizations and historical data analysis.',
      longDescription: 'Developed a sophisticated weather analytics platform using machine learning algorithms to predict weather patterns. Features include interactive charts, historical data analysis, and API integrations with multiple weather services.',
      image: focusaiProject,
      tech: ['Python', 'FastAPI', 'React', 'Chart.js', 'Scikit-learn'],
      github: 'https://github.com/OussamaTabDev/weather-dashboard',
      status: 'Completed'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure blockchain-based voting platform ensuring transparency and immutability.',
      longDescription: 'Created a decentralized voting system using blockchain technology to ensure vote integrity and transparency. Implemented smart contracts for vote validation and created an intuitive web interface for voters and administrators.',
      image: ecommerceProject,
      tech: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Ethereum'],
      github: 'https://github.com/OussamaTabDev/blockchain-voting',
      status: 'In Progress'
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border border-green-500/30';
      case 'In Progress':
        return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-surface relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl"></div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative animate-fade-in">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <button className="flex items-center gap-2 px-4 py-2 text-text-secondary hover:text-accent-primary transition-colors font-mono">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </button>
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 text-gradient">
              All Projects
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              A comprehensive collection of my development work, from web applications to AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 relative animate-slide-up">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="project-card cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20"
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                  {project.status && (
                    <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-mono ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-mono font-semibold mb-3 text-accent-primary">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="skill-tag text-xs opacity-60">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button className="text-accent-primary font-mono text-sm hover:text-accent-secondary transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-surface/80 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          <div className="relative glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-card-hover rounded-full transition-colors z-10 text-text-primary"
            >
              ✕
            </button>
            
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-mono font-bold text-gradient">
                  {selectedProject.title}
                </h3>
                {selectedProject.status && (
                  <span className={`px-3 py-1 rounded-full text-xs font-mono ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                )}
              </div>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              
              <div className="mb-6">
                <h4 className="font-mono font-semibold mb-3 text-accent-primary">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
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
                    View Code
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

      <Footer />
    </div>
  );
};

export default ProjectsPage;