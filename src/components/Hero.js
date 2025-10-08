import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-white pt-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl text-black leading-none mb-8">
          Thu Ngo
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Software Engineer
        </p>
        <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto">
          Building thoughtful digital experiences through clean code and minimalist design. 
          Passionate about creating software that serves its purpose without fanfare.
        </p>
        <div className="w-full max-w-2xl mx-auto">
          <img 
            src="/images/blog/urban-scene.jpg" 
            alt="Vibrant Chinatown street scene with street vendor stall, fresh produce, and elevated bridge structure"
            className="w-full h-64 object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;