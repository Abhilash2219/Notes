import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesSection from "./components/NotesSection";
import "../src/App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/notes/:companyCode" element={<NotesSection />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
