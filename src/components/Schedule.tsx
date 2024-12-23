import React from 'react';
import { Clock } from 'lucide-react';

const Schedule = () => {
  const hours = [
    { day: 'Lundi', hours: '9h00 - 19h00' },
    { day: 'Mardi', hours: '9h00 - 19h00' },
    { day: 'Mercredi', hours: '9h00 - 19h00' },
    { day: 'Jeudi', hours: '9h00 - 19h00' },
    { day: 'Vendredi', hours: '9h00 - 18h00' },
    { day: 'Samedi', hours: '10h00 - 17h00' },
    { day: 'Dimanche', hours: 'Fermé' }
  ];

  return (
    <section id="horaires" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Clock className="w-8 h-8 text-teal-600 mr-3" />
            <h2 className="text-3xl font-serif">Horaires d'ouverture</h2>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            {hours.map((item) => (
              <div
                key={item.day}
                className="flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0"
              >
                <span className="font-medium">{item.day}</span>
                <span className={`${item.hours === 'Fermé' ? 'text-red-500' : 'text-teal-600'}`}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;