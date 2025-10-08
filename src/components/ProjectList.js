import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id} 
              to={`/project/${project.id}`}
              className="group"
            >
              <div className="bg-white border border-gray-200 hover:border-gray-400 transition-colors duration-200 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-black mb-2 group-hover:text-gray-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {project.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-400">
                    {project.date} • {project.readTime}
                  </div>
                </div>
              </div>
            </Link>
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
