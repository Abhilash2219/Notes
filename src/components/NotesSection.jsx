import { useState } from "react";
import { useParams } from "react-router-dom";
import notesData from "../assets/notesData.json";
import { marked } from "marked"; // Corrected import
import "../styles/NotesSection.css";

const NotesSection = () => {
  const { companyCode } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [fileContent, setFileContent] = useState("");

  const companyNotes = notesData[companyCode];

  const handleCourseClick = (courseName) => {
    setSelectedCourse(courseName === selectedCourse ? null : courseName); // Toggle selected course
    setSelectedItem(null);
    setFileContent("");
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Fetch the markdown file from the appropriate path
    fetch(`/public/notes/${item.file}`) // Ensure the file path is correct
      .then((response) => response.text())
      .then((data) => {
        // Convert Markdown to HTML using marked
        const htmlContent = marked(data);
        setFileContent(htmlContent);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
        setFileContent("Error loading content.");
      });
  };

  if (!companyNotes) {
    return (
      <div className="notesSection">
        <div className="notesContent glassBox">
          <h3>Invalid Company Code</h3>
          <p>No notes available for the code: <code>{companyCode}</code></p>
        </div>
      </div>
    );
  }

  const isSimpleFormat = companyNotes.items !== undefined;

  return (
    <div className="notesSectionWrapper">
      <div className="notesSidebar glassBox">
        <h3>Topics</h3>
        <ul className="courseList">
          {isSimpleFormat ? (
            companyNotes.items.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`itemButton ${selectedItem?.file === item.file ? "active" : ""}`}
                  onClick={() => handleItemClick(item)}
                >
                  {item.label}
                </button>
              </li>
            ))
          ) : (
            Object.keys(companyNotes).map((courseName, idx) => (
              <li key={idx}>
                <button
                  className={`courseButton ${selectedCourse === courseName ? "active" : ""}`}
                  onClick={() => handleCourseClick(courseName)}
                >
                  {companyNotes[courseName].title || courseName}
                  <span className={`arrowIcon ${selectedCourse === courseName ? "rotate" : ""}`}>
                    <i className={`fas fa-chevron-right ${selectedCourse === courseName ? "rotate" : ""}`}></i>
                  </span>
                </button>

                <div className={`itemListWrapper ${selectedCourse === courseName ? "open" : ""}`}>
                  {selectedCourse === courseName && companyNotes[courseName].items && (
                    <ul className="itemList">
                      {companyNotes[courseName].items.map((item, subIdx) => (
                        <li key={subIdx}>
                          <button
                            className={`itemButton ${selectedItem?.file === item.file ? "active" : ""}`}
                            onClick={() => handleItemClick(item)}
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="notesContent glassBox">
        {selectedItem ? (
          <>
            <h2>{selectedItem.label}</h2>
            <hr />
            {/* Using dangerouslySetInnerHTML to render the parsed Markdown content */}
            <div
              className="fileContent"
              dangerouslySetInnerHTML={{ __html: fileContent }}
            />
          </>
        ) : (
          <div className="placeholderContent">
            <h3>📚 Select a topic from the left panel to view content.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesSection;
