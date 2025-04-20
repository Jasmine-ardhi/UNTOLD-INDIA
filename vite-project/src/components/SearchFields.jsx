import React from 'react';

const SearchFields = () => {
  const categories = {
    "Terrorist Attacks": [
      "Kashmir Files", 
      "26/11", 
      "Pulwama", 
      "Uri", 
      "Godhra", 
      "Mumbai Bombings", 
      "Parmanu"
    ],
    "Religious Conflicts": [
      "Ayodhya", 
      "Kashi Vishwanath", 
      "Sabarimala", 
      "Love Jihad", 
      "Hijab Row", 
      "Godhra Riots", 
      "Operation Bluestar"
    ],
    "Political Events": [
      "Article 370 Abrogation", 
      "Operation Blue Star", 
      "Waqf Board Controversy", 
      "Emergency", 
      "Mandal Commission", 
      "Indira Gandhi's Assassination", 
      "Nuclear Tests"
    ]
  };

  return (
    <div className="bg-black min-h-screen py-10 px-4 text-white font-serif">
      <h2 className="text-4xl text-center font-bold mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
        Explore Topics
      </h2>

      <div className="flex flex-col gap-10 max-w-6xl mx-auto">
        {Object.entries(categories).map(([category, topics]) => (
          <div
            key={category}
            className="flex rounded-xl shadow-lg overflow-hidden border border-gray-700 transform transition-transform hover:scale-[1.03] duration-300"
          >
            {/* Left: Category Title */}
            <div className="w-1/3 bg-gradient-to-b from-teal-700 to-emerald-800 flex items-center justify-center p-6">
              <h3 className="text-2xl font-bold text-lime-300 text-center tracking-wide">
                {category}
              </h3>
            </div>

            {/* Right: Topics List */}
            <div className="w-2/3 bg-slate-900 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="text-cyan-400 hover:text-lime-300 cursor-pointer transition duration-200 transform hover:translate-x-2 hover:scale-105"
                >
                  • {topic}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFields;
