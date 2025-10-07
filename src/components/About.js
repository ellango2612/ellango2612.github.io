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
              I'm Thu Ngo, a slothful creature from earth who loves to write code and think about life.
            </p>
            
            <p>
              I'm not lazy, I'm on energy saving mode. I prefer to take my time to understand things 
              before implementing them. This approach has taught me that slow and steady often wins the race.
            </p>
            
            <p>
              I'm an extroverted introvert, if that makes sense. I love people, but I also love being alone. 
              Programming is perfect for this duality—I can spend hours in deep focus, solving problems in solitude, 
              but I also thrive in code reviews, pair programming sessions, and team discussions.
            </p>
            
            <p>
              The more I learn, the more I realize how much I don't know. And that's exactly what makes this field 
              so fascinating. There's always something new to explore, always a different way to solve a problem.
            </p>
            
            <p>
              I'm too old to care about the things that used to matter. Now I just want to build things that work, 
              that serve their purpose without fanfare.
            </p>
            
            <p className="italic text-gray-500">
              We know very little.
            </p>
          </div>

          {/* Simple contact info */}
          <div className="mt-16 pt-8 border-t border-gray-300 text-center">
            <p className="text-sm text-gray-400">
              You can find me on{' '}
              <a href="https://github.com" className="hover:text-black transition-colors duration-200">
                GitHub
              </a>
              {' '}or{' '}
              <a href="https://twitter.com" className="hover:text-black transition-colors duration-200">
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;