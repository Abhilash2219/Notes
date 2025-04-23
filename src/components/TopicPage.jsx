import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import courseData from '../data/courseData.json';
import Sidebar from './Sidebar';
import ContentDisplay from './ContentDisplay';
import './TopicPage.css';

const TopicPage = () => {
  const { topicId } = useParams();
  const topic = courseData[topicId];
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubtopicClick = (filePath) => {
    setSelectedFile(filePath);
  };

  if (!topic) {
    return <div>Topic not found.</div>;
  }

  return (
    <div className="topic-page">
      <Sidebar topics={topic.topics} onSubtopicClick={handleSubtopicClick} />
      <ContentDisplay file={selectedFile} />
    </div>
  );
};

export default TopicPage;
