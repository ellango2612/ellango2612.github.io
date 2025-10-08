import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-medium text-black mb-6">
            ABOUT
          </h2>
          <p className="text-lg text-gray-600 italic">
            __A few words about me__
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              I'm Thu (Ella) Ngo, a Computer Science graduate from Reed College with experience building 
              scalable software solutions at Morgan Stanley, Corgi AI Insurance, and FinBud.
            </p>
            
            <p>
              I specialize in full-stack development with expertise in Python, Java, React, and machine learning. 
              My work spans from building recommendation engines and AI-powered developer tools to creating 
              automated financial analytics pipelines processing 400+ reports daily.
            </p>
            
            <p>
              I believe in thoughtful engineering—taking time to understand problems deeply before implementing 
              solutions. This approach has led to measurable improvements: 35% latency reduction, 20% precision 
              gains, and 60% user satisfaction increases across my projects.
            </p>
            
            <p>
              Beyond code, I'm passionate about creating software that serves its purpose without fanfare. 
              Whether it's optimizing JVM performance, implementing comprehensive testing strategies, or 
              building real-time collaboration features, I focus on reliability and maintainability.
            </p>
            
            <p className="italic text-gray-500">
              Building things that work, one commit at a time.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-16 pt-8 border-t border-gray-300">
            <h3 className="text-xl font-medium text-black mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Languages</h4>
                <p className="text-sm text-gray-600">Python, Java, JavaScript, TypeScript, C/C++, Swift, SQL, R</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Frameworks & Tools</h4>
                <p className="text-sm text-gray-600">React, Node.js, FastAPI, Temporal, Docker, AWS, GitHub Actions</p>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-16 pt-8 border-t border-gray-300 text-center">
            <p className="text-sm text-gray-400">
              Connect with me on{' '}
              <a href="https://linkedin.com/in/thu-ella-ngo" className="hover:text-black transition-colors duration-200">
                LinkedIn
              </a>
              {' '}or{' '}
              <a href="https://github.com/ellango2612" className="hover:text-black transition-colors duration-200">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;