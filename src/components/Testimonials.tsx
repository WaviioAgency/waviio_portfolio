import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sophie L.',
      text: 'Le drainage lymphatique a complètement transformé ma silhouette. Je me sens plus légère et en meilleure santé.',
      rating: 5,
      imageBefore: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      imageAfter: 'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=400'
    },
    {
      name: 'Marie D.',
      text: 'Le massage hawaïen est une pure merveille. Une expérience relaxante unique qui m\'aide à gérer mon stress.',
      rating: 5,
      imageBefore: 'https://images.unsplash.com/photo-1571019613533-d330c832cf98?w=400',
      imageAfter: 'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=400'
    }
  ];

  return (
    <section id="temoignages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Témoignages</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Avant</p>
                  <img
                    src={testimonial.imageBefore}
                    alt="Avant"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Après</p>
                  <img
                    src={testimonial.imageAfter}
                    alt="Après"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;