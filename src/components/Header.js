import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 right-0 z-50 bg-transparent">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <nav className="hidden md:flex space-x-4">
            <Link 
              to="/" 
              className={`px-4 py-2 text-sm rounded transition-colors duration-200 ${
                isActive('/') 
                  ? 'bg-black text-white' 
                  : 'text-black hover:text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/posts" 
              className={`px-4 py-2 text-sm rounded transition-colors duration-200 ${
                isActive('/posts') 
                  ? 'bg-black text-white' 
                  : 'text-black hover:text-gray-600'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className={`px-4 py-2 text-sm rounded transition-colors duration-200 ${
                isActive('/blog') 
                  ? 'bg-black text-white' 
                  : 'text-black hover:text-gray-600'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 text-sm rounded transition-colors duration-200 ${
                isActive('/about') 
                  ? 'bg-black text-white' 
                  : 'text-black hover:text-gray-600'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
                      className="text-black hover:text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-300">
            <div className="space-y-3">
              <Link 
                to="/" 
                className={`block text-sm px-4 py-2 rounded transition-colors duration-200 ${
                  isActive('/') 
                    ? 'bg-black text-white' 
                    : 'text-black hover:text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/posts" 
                className={`block text-sm px-4 py-2 rounded transition-colors duration-200 ${
                  isActive('/posts') 
                    ? 'bg-black text-white' 
                    : 'text-black hover:text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/blog" 
                className={`block text-sm px-4 py-2 rounded transition-colors duration-200 ${
                  isActive('/blog') 
                    ? 'bg-black text-white' 
                    : 'text-black hover:text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className={`block text-sm px-4 py-2 rounded transition-colors duration-200 ${
                  isActive('/about') 
                    ? 'bg-black text-white' 
                    : 'text-black hover:text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;