import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Qu\'est-ce que le drainage lymphatique ?',
      answer: 'Le drainage lymphatique est une technique de massage douce qui stimule la circulation de la lymphe. Il aide à éliminer les toxines, réduire la rétention d\'eau et améliorer le système immunitaire.'
    },
    {
      question: 'Quels sont les bienfaits du massage hawaïen ?',
      answer: 'Le massage hawaïen (Lomi-Lomi) procure une relaxation profonde, améliore la circulation sanguine, soulage les tensions musculaires et apporte un bien-être mental et physique.'
    },
    {
      question: 'À quelle fréquence dois-je faire des séances ?',
      answer: 'La fréquence dépend de vos objectifs. Pour le drainage lymphatique, une série de 6 à 10 séances est recommandée, à raison de 1 à 2 fois par semaine. Pour les massages de détente, 1 séance par mois est idéale pour maintenir les bienfaits.'
    },
    {
      question: 'Comment me préparer pour une séance ?',
      answer: 'Venez dans une tenue confortable. Évitez les repas copieux avant la séance. Prévenez-moi de tout problème de santé ou contre-indication lors de la prise de rendez-vous.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <HelpCircle className="w-8 h-8 text-teal-600 mr-3" />
          <h2 className="text-3xl font-serif">Questions Fréquentes</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;