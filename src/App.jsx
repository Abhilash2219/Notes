import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TopicPage from './components/TopicPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<Home />} />
          
          {/* Topic Page Route */}
          <Route path="/topic/:topicId" element={<TopicPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
