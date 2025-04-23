import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ topics, onSubtopicClick }) => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const handleMainTopicClick = (mainTopic) => {
    setExpandedTopic(prev => (prev === mainTopic ? null : mainTopic));
  };

  return (
    <div className="sidebar">
      {Object.entries(topics).map(([mainTopic, subtopics]) => (
        <div key={mainTopic} className="main-topic">
          <div 
            className="main-topic-header" 
            onClick={() => handleMainTopicClick(mainTopic)}
          >
            <h3 className="main-topic-title">{mainTopic}</h3>
            <span className="expand-icon">
              {expandedTopic === mainTopic ? '−' : '+'}
            </span>
          </div>
          {expandedTopic === mainTopic && (
            <ul className="subtopics-list">
              {subtopics.items.map((item, index) => (
                <li 
                  key={index} 
                  onClick={() => onSubtopicClick(item.file)} 
                  className="subtopic-item"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
