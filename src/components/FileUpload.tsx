import React, { useState, useRef } from "react";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
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
    const fileExtension = file.name.split(".").pop()?.toLowerCase();

    if (fileExtension !== "csv" && fileExtension !== "xlsx") {
      setError("Invalid file format. Only .csv and .xlsx files are allowed.");
      return;
    }

    try {
      setLoading(true);
      // Simulating file upload delay with setTimeout
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
            <p>Uploading...</p>
          </div>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
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
        {/* {fileNames.length > 0 && !loading && !error && (
          <div className="file-names">
            {fileNames.map((fileName, index) => (
              <p key={index}>{fileName}</p>
            ))}
          </div>
        )} */}
      </div>

      <p className="upload-title">Uploaded in the past 3 months</p>
      <div className="file-box">
        {fileNames.length > 0 && !error ? (
          <ul className="file-list">
            {fileNames.map((fileName, index) => (
              <li key={index}>{fileName}</li>
            ))}
          </ul>
        ) : (
          <div className="empty-files">
            {!loading && !error && "No document for this period"}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
