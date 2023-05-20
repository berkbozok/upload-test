import React, { useState, useRef } from "react";
import FileUpload from "./FileUpload";
import "./MainPage.css";

interface MainPage {}

const MainPage: React.FC<MainPage> = () => {
  const handleFileUpload = (file: File) => {
    console.log("Uploaded file:", file);
  };

  return (
    <>
      <div className="main-page">
        <div className="upload-border">
          <header className="title">Quarterly Report Dropbox</header>
          <div className="frame">
            <FileUpload onFileUpload={handleFileUpload} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
