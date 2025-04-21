// HomePosterShowcase.jsx
import React from 'react';

const posters = [
  {
    src: '/images/Article370.webp',
    alt: 'Article 370',
    title: 'Abrogation of Article 370',
    description: 'Heightened Patrolling Near Srinagar Ahead of Supreme Court Verdict on Article 370,Security Forces on Alert as Tensions Rise in the Kashmir Valley'
  },
  {
    src: '/images/delhi.avif',
    alt: 'Delhi Riots',
    title: 'Delhi Riots',
    description: 'The aftermath of the northeast Delhi riots witnessed a devastating toll, with over 50 lives lost and more than 200 individuals injured.'
  },
  {
    src: '/images/kashmir.webp',
    alt: 'Kashmir Files',
    title: 'Exodus of Kashmiri Hindus',
    description: 'Kashmiri Pandits Rally for Rights, Seeking Justice and the Return to Their Ancestral Homeland'
  },
  {
    src: '/images/mumbai.jpg',
    alt: '26/11 Mumbai Attacks',
    title: '26/11 Mumbai Attacks',
    description: 'Mumbai 26/11: The Terror Attack That Tested the City’s Resilience and Strength'
  },
  {
    src: '/images/pulwama.jpeg',
    alt: 'Pulwama Attack',
    title: 'Pulwama Attack',
    description: '40 Brave CRPF Soldiers Martyred in Pulwama India Deadliest Terror Attack in Decades'
  },
  {
    src: '/images/hijab.jpg',
    alt: 'Hijab Row',
    title: 'Hijab Row',
    description: 'Karnataka Hijab Row: Students Denied Entry for Wearing Hijab, Sparking Protests and National Debate'
  }
];

const HomePosterShowcase = () => {
  return (
    <section className="px-6 py-12 bg-black text-white">
      <h3 className="text-5xl font-bold text-center text-yellow-400 mb-10 tracking-wide">
        Stories That Stirred the Soul
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {posters.map((poster, index) => (
          <div
            key={index}
            className="relative w-full max-w-sm h-96 rounded-xl overflow-hidden group shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,0,0.6)]"

          >
            <img
              src={poster.src}
              alt={poster.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">
              <h4 className="text-2xl font-bold text-yellow-300 mb-2">{poster.title}</h4>
              <p className="text-xl text-gray-200">{poster.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePosterShowcase; 