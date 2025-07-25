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
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'In Progress':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-mono font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              All Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of my development work, from web applications to AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer transform hover:scale-105 border-border/50 backdrop-blur-sm"
                onClick={() => openModal(project)}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="font-mono text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.status && (
                      <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card/95 backdrop-blur-lg rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border/50">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-mono font-bold mb-2">{selectedProject.title}</h3>
                  {selectedProject.status && (
                    <Badge className={getStatusColor(selectedProject.status)}>
                      {selectedProject.status}
                    </Badge>
                  )}
                </div>
                <Button variant="ghost" onClick={closeModal} className="text-muted-foreground hover:text-foreground">
                  ✕
                </Button>
              </div>
              
              <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              
              <div className="mb-6">
                <h4 className="font-mono font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                {selectedProject.github && (
                  <Button asChild className="gap-2">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {selectedProject.demo && (
                  <Button asChild variant="outline" className="gap-2">
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
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