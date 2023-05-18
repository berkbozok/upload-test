import React from "react";
import FileUpload from "./components/FileUpload";
import "./App.css";

const App: React.FC = () => {
  const handleFileUpload = (file: File) => {
    // Handle the uploaded file here
    console.log("Uploaded file:", file);
  };

  return (
    <div className="main-page">
      <div className="upload-border">
        <header className="title">Quarterly Report Dropbox</header>
        <div className="frame">
          <FileUpload onFileUpload={handleFileUpload} />
        </div>
      </div>
    </div>
  );
};

export default App;
