import React from 'react';
import { Leaf, Droplets, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Droplets className="w-12 h-12 text-teal-600" />,
      title: 'Drainage Lymphatique',
      description: 'Technique douce qui stimule la circulation lymphatique et aide à éliminer les toxines.',
      duration: '60 min',
      price: '75€'
    },
    {
      icon: <Leaf className="w-12 h-12 text-teal-600" />,
      title: 'Massage Hawaïen',
      description: 'Massage traditionnel Lomi-Lomi pour une relaxation profonde et harmonieuse.',
      duration: '90 min',
      price: '95€'
    },
    {
      icon: <Heart className="w-12 h-12 text-teal-600" />,
      title: 'Massage Relaxant',
      description: 'Massage personnalisé pour soulager le stress et les tensions musculaires.',
      duration: '60 min',
      price: '70€'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Nos Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mt-auto">
                  <p className="text-sm text-gray-500">Durée: {service.duration}</p>
                  <p className="text-lg font-semibold text-teal-600 mt-2">{service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;