import React from 'react';
import { useNavigate } from 'react-router-dom';
import courseData from '../data/courseData.json';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleTopicClick = (topicId) => {
    navigate(`/topic/${topicId}`);
  };

  return (
    <div className="home">
      <h1>Courses</h1>
      <div className="topics-list">
        {Object.keys(courseData).map((topicId) => (
          <div key={topicId} className="topic-card" onClick={() => handleTopicClick(topicId)}>
            {courseData[topicId].title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
