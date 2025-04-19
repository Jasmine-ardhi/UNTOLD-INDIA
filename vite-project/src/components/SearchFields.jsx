import React from 'react';
// import './SearchFields.css'; // Create this CSS file

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
    <div className="search-page">
      <h2 className="search-title">Explore Topics</h2>

      <div className="category-container">
        {Object.entries(categories).map(([category, topics]) => (
          <div key={category} className="category-card">
            <div className="category-title">
              <h3>{category}</h3>
            </div>

            <div className="topics-list">
              {topics.map((topic, idx) => (
                <div key={idx} className="topic-item">
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
