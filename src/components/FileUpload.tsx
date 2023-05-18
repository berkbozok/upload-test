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
    if (
      file.type !== "application/vnd.ms-excel" &&
      file.type !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
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
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleBrowseClick}
        style={{
          width: "400px",
          height: "300px",
          border: "2px dashed gray",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          backgroundColor: isDragOver ? "lightgreen" : "transparent",
        }}
      >
        {loading ? (
          <p>Uploading...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <p>Drag and drop .csv or .xlsx files here, or click to browse.</p>
        )}
        <input
          type="file"
          accept=".csv,.xlsx"
          onChange={handleFileInputChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
      </div>
      {fileNames.length > 0 && (
        <ul>
          {fileNames.map((fileName, index) => (
            <li key={index}>Uploaded File: {fileName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUpload;
