import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'; // Import the ReactMarkdown component
import './ContentDisplay.css';

const ContentDisplay = ({ file }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (file) {
      fetch(`/${file}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch content');
          }
          return response.text();
        })
        .then((text) => {
          setContent(text);
          setError(false);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [file]);

  return (
    <div className="content-display">
      {file ? (
        error ? (
          <div className="error-message">
            ⚠️ Failed to load content. Please try again later.
          </div>
        ) : (
          <div className="markdown-content">
            <ReactMarkdown>{content}</ReactMarkdown> {/* Render Markdown as HTML */}
          </div>
        )
      ) : (
        <div className="placeholder">
          📚 Please select a subtopic to view its content.
        </div>
      )}
    </div>
  );
};

export default ContentDisplay;
