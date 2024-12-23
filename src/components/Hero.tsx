import React from 'react';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600"
          alt="Massage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-6">
          Massage & Bien-être
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Découvrez l'art du massage thérapeutique et offrez-vous un moment de détente absolue
        </p>
        <a
          href="#services"
          className="inline-block bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition-colors"
        >
          Découvrir nos services
        </a>
      </div>
    </section>
  );
};

export default Hero;