import React from 'react';
import { ExternalLink, Github, ArrowUpRight, Code, Zap } from 'lucide-react';
import Header from '../Header/page';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "FinTrack AI Based Finance Tracker",
      description: "Real-time financial analytics dashboard with interactive charts, portfolio tracking, and automated reporting system.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      tags: ["React" , "Node.js" , "Express.js", "AWS" , "OpenAI" , "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML"
    },
    {
      id: 2,
      title: "Food Delivery Platform",
      description: "Full-stack food delivery solution with modern UI, secure payments, and real-time inventory management. Built for scalability and performance.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      tags: ["React.js", "TypeScript" , "Framer Motion" , "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "AI Expence Predictor",
      description: "A smart expense prediction app that takes year and month as input and predicts average monthly expenses using Python and machine learning techniques.",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["React" , "Machine Learning", "Python", "FastAPI" , "Render.com"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Netflix Trailer Platform",
      description: "A Netflix-inspired streaming platform with modern UI, user authentication, dynamic movie listings using TMDB API, responsive design, and seamless video playback experience.",
      image: "https://images.unsplash.com/photo-1717295248230-93ea71f48f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV0ZmxpeCUyMGNsb25lfGVufDB8fDB8fHww",
      tags: ["React", "Tailwind CSS", "TMDB API", "Supabase", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      id: 5,
      title: "Tic-Tac-Toe",
      description: "A classic Tic Tac Toe game built with modern UI, two-player support, win detection logic, and responsive design for smooth gameplay across devices.",
      image: "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGljJTIwdGFjJTIwdG9lfGVufDB8fDB8fHww",
      tags: ["React", "Tailwind CSS", "TypeScript", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Modern TO-DO",
      description: "A sleek, responsive modern To-Do List app with real-time updates, intuitive UI, task categorization, and smooth animations—designed for seamless productivity and user experience.",
      image: "https://plus.unsplash.com/premium_photo-1683309568772-57011d6c1b7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG8lMjBkb3xlbnwwfHwwfHx8MA%3D%3D",
      tags: ["React.js", "Typescript", "Tailwind", "Framer Motion", "Lucide icons"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative z-10 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-sm font-medium">Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Featured
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences that push boundaries and solve real-world problems 
              with cutting-edge technology and thoughtful design.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/60 transition-all duration-500 hover:scale-[1.02] hover:border-slate-600/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-slate-900/80 backdrop-blur-sm border border-slate-600/50 rounded-lg text-slate-300 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-slate-900/80 backdrop-blur-sm border border-slate-600/50 rounded-lg text-slate-300 hover:text-purple-400 hover:border-purple-400/50 transition-all duration-200"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight 
                      className="text-slate-500 group-hover:text-blue-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                      size={20} 
                    />
                  </div>

                  <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600/30 text-slate-300 rounded-lg text-xs font-medium hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                      >
                        <Zap size={14} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-slate-400 hover:text-slate-300 text-sm font-medium transition-colors duration-200"
                      >
                        <Code size={14} />
                        Source
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-6 p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">Explore More Projects</h3>
                  <p className="text-sm text-slate-400">Check out my GitHub for additional work</p>
                </div>
              </div>
              
              <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                View All Projects
                <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;