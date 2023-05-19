import React, { useState, useRef } from "react";
import XLSXIcon from "../svg/XLSXicon";
import CSVIcon from "../svg/CSVicon";
import ErrorIcon from "../svg/ErrorIcon";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [error, setError] = useState<JSX.Element | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setIsDragOver(false);
    await handleFileUpload(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleFileInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      await handleFileUpload(file);
    }
  };

  const handleFileUpload = async (file: File) => {
    const fileExtension = file.name
      .split(".")
      .pop()
      ?.toLowerCase();

    if (fileExtension !== "csv" && fileExtension !== "xlsx") {
      setError(
        <>
          <div className="error-message">
            <ErrorIcon />
            <div className="red-ring"></div>
            <div className="text-padding">
              This document could not be uploaded because the file type is
              incorrect.
            </div>
            <div className="text-padding">
              Only .CSV and .XLSX can be uploaded
            </div>
            <div className="click-text">Upload another document</div>
          </div>
        </>
      );
      return;
    }

    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const newFileNames = [...fileNames, file.name];
      setFileNames(newFileNames);
      onFileUpload(file);
      setError(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="upload-frame">
      <div
        className={`upload-area ${loading ? "uploading" : ""} ${
          error ? "invalid-format" : ""
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleBrowseClick}
        style={{
          backgroundColor: isDragOver ? "lightgreen" : "transparent",
          borderStyle: loading || error ? "none" : "dashed",
        }}
      >
        {loading ? (
          <div className="loading-indicator">
            {fileNames.length > 0 && <p>{fileNames[fileNames.length - 1]}</p>}
            <p>uploading...</p>
          </div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="drop-area">
            <div className="bold-text">Drag and drop</div>
            <div>your document here or</div>
            <div className="click-text">click to upload</div>
          </div>
        )}

        <input
          type="file"
          accept=".csv,.xlsx"
          onChange={handleFileInputChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
      </div>

      <p className="upload-title">Uploaded in the past 3 months</p>

      {fileNames.length > 0 && !error ? (
        <ul className="file-list">
          {fileNames.map((fileName, index) => (
            <div key={index} className="uploaded-files">
              {fileName.endsWith(".xlsx") ? (
                <div className="file-row">
                  <XLSXIcon />
                  <div className="uploaded-file-title">{fileName}</div>
                </div>
              ) : fileName.endsWith(".csv") ? (
                <div className="file-row">
                  <CSVIcon />
                  <div className="uploaded-file-title">{fileName}</div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </ul>
      ) : (
        <div className="file-box">
          <div className="empty-files">
            {!loading && "No document for this period"}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
