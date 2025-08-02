import React from 'react';
import { Download, MapPin, Calendar, Coffee, Code, Zap, Heart, Users, Award, Target } from 'lucide-react';
import Header from '../Header/page';


const About2 = () => {
  const skills = [
    { name: 'Frontend Development', percentage: 95, icon: Code },
    { name: 'Backend Development', percentage: 88, icon: Zap },
    { name: 'UI/UX Design', percentage: 82, icon: Heart },
    { name: 'Project Management', percentage: 90, icon: Target }
  ];

  const stats = [
    { number: '20+', label: 'Projects Completed', icon: Award },
    { number: '3+', label: 'Years Experience', icon: Calendar },
    { number: '10+', label: 'Group Projects', icon: Users },
    { number: '500+', label: 'Cups of Coffee', icon: Coffee }
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Next.js', 'Node.js', 
    'Python', "Framer Motion", "Machine Learning" , 'Firebase', "Supabase",
    'MongoDB', 'PostgreSQL', 'AWS', 'FastAPI',"Vercel","Lucide icons", "more+"
  ];
  
  const Resume = () => {
      return(<h1></h1>);
  };
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative z-1 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-sm font-medium">About Me</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Creating Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            
            {/* Left Column - About Text & Image */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-80 h-96 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-700/50">
                  <img
                    src="https://imag es.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
                
                
              </div>

              {/* About Text */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Arman Malik</span>
                </h2>
                
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    I'm a passionate full-stack developer with over 3 years of experience creating 
                    digital solutions that make a difference. My journey started with a curiosity 
                    about how things work, and it has evolved into a career dedicated to building 
                    innovative web applications.
                  </p>
                  
                  <p>
                    I specialize in modern JavaScript frameworks, cloud technologies, and creating 
                    seamless user experiences. When I'm not coding, you'll find me exploring new 
                    technologies, contributing to open-source projects, or enjoying a good cup of coffee 
                    while brainstorming the next big idea.
                  </p>
                  
                  <p>
                    I believe in writing clean, maintainable code and creating products that not only 
                    look great but also solve real-world problems. Let's build something amazing together!
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                    <Download size={20} />
                    Download Resume
                  </button >
                  
                  <button className="flex items-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-slate-800/70">
                    Let's Connect
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Skills & Stats */}
            <div className="space-y-8">
              
              {/* Skills Section */}
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  Skills & Expertise
                </h3>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-5 h-5 text-blue-400" />
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-slate-400 text-sm">{skill.percentage}%</span>
                        </div>
                        
                        <div className="w-full bg-slate-700/50 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-800/60 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Technologies I Work With</h3>
              <p className="text-slate-400">Always learning and exploring new tools to create better solutions</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 text-slate-300 rounded-xl font-medium hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-6 p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Let's Work Together</h3>
                <p className="text-slate-400 max-w-md">
                  I'm always interested in new opportunities and exciting projects. 
                  Let's create something amazing together!
                </p>
              </div>
              
              <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Get In Touch
                <Heart className="transform group-hover:scale-110 transition-transform duration-200" size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About2;