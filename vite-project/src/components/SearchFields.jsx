import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PosterContext } from '../context/PosterContext';

const SearchFields = () => {
  const { topicsPosters } = useContext(PosterContext);
  const navigate = useNavigate();

  // Grouping by category
  const groupedByCategory = topicsPosters.reduce((acc, item) => {
    const category = item.category || 'Uncategorized';
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="bg-black min-h-screen py-10 px-4 text-white font-serif">
      <h2 className="text-5xl text-center font-bold mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
        Explore Topics
      </h2>

      <div className="flex flex-col gap-10 max-w-6xl mx-auto">
        {Object.entries(groupedByCategory).map(([category, topics]) => (
          <div
            key={category}
            className="flex rounded-xl shadow-lg overflow-hidden border border-gray-700 transform transition-transform hover:scale-[1.03] duration-300"
          >
            {/* Left: Category Title */}
            <div className="w-1/3 bg-gradient-to-b from-teal-700 to-emerald-800 flex items-center justify-center p-6">
              <h3 className="text-3xl font-bold text-lime-300 text-center tracking-wide">
                {category}
              </h3>
            </div>

            {/* Right: Topics List */}
            <div className="w-2/3 text-2xl bg-slate-900 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() =>
                    navigate(`/topic/${topic.id}`, {
                      state: {
                        wikipedia: topic.wikipedia,
                        movie: topic.movie,
                        book: topic.book,
                        title: topic.title,
                      },
                    })
                  }
                  className="text-cyan-400 hover:text-lime-300 cursor-pointer transition duration-200 transform hover:translate-x-2 hover:scale-105"
                >
                  • {topic.title}
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
