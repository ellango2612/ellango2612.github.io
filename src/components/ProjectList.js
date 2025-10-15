import React, { useState, useMemo } from 'react';
import { portfolioProjects } from '../data/portfolioProjects';

const ProjectList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    let filtered = portfolioProjects;
    
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return filtered;
  }, [searchTerm]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Simple Filter */}
        <div className="mb-12 text-center">
          <input
            type="text"
            placeholder="search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black text-sm"
          />
        </div>

        {/* Beautiful Project Layout */}
        <div className="space-y-24">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>
              {/* Left Side - Content */}
              <div className="flex-1 space-y-6">
                {/* Project Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl md:text-4xl font-light text-black">
                      {project.title}
                    </h2>
                    <div className="flex space-x-4">
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 hover:text-black transition-colors duration-200"
                        >
                          GitHub →
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 hover:text-black transition-colors duration-200"
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 italic mb-4">
                    {project.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{project.date}</span>
                    <span>•</span>
                    <span>{project.readTime}</span>
                    <span>•</span>
                    <span className="capitalize">{project.category}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="prose prose-lg max-w-none">
                  <div 
                    className="text-gray-700 leading-relaxed font-light"
                    dangerouslySetInnerHTML={{ __html: project.content }}
                  />
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-sm text-gray-400 font-light"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side - Media */}
              <div className="flex-1">
                {project.id === 2 ? (
                  // Love Extension - Show Video
                  <div className="sticky top-8">
                    <video 
                      controls 
                      className="w-full h-auto rounded-lg shadow-lg"
                      poster={project.image}
                    >
                      <source src="/images/projects/love-extension-demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className="mt-3 text-sm text-gray-500 italic text-center">
                      Love Extension demo - Watch the theme and messaging features in action
                    </p>
                  </div>
                ) : (
                  // Other Projects - Show Image
                  <div className="sticky top-8">
                    <img 
                      src={project.image} 
                      alt={project.alt}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-500">
              No projects found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectList;
