import React, { useState } from 'react';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0); 
  const [isSubmitted, setIsSubmitted] = useState(false); 

  // Handle the star click event
  const handleStarClick = (index) => {
    setRating(index);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); 
  };

  return (
    <section className="px-6 py-12 bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <div className="bg-black w-full max-w-4xl p-12 rounded-lg shadow-lg transform transition duration-500 hover:bg-black hover:scale-105 hover:shadow-xl group">
        <h2 className="text-4xl font-semibold text-lime-400 text-center mb-6">Feedback Form</h2>

        {isSubmitted && (
          <p className="text-green-400 text-center mb-6">Thank you for your feedback!</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="feedback" className="block text-xl mb-2">Your Thoughts:</label>
            <textarea
              id="feedback"
              rows="6"
              className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none"
              placeholder="Share your feedback here..."
            />
          </div>

          <div className="mb-6">
            <label htmlFor="rating" className="block text-xl mb-2">Rate Us:</label>
            <div className="flex justify-center space-x-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <span
                  key={index}
                  onClick={() => handleStarClick(index)}
                  className={`cursor-pointer text-4xl transition-all ${
                    index <= rating ? 'text-yellow-400' : 'text-white'
                  } hover:text-yellow-400`}
                >
                  {index <= rating ? '★' : '☆'}
                </span>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-lime-500 text-black font-semibold px-8 py-4 rounded-lg hover:bg-lime-600 transform hover:scale-105 transition duration-300"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;
