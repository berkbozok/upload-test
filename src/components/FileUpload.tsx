import React, { useState, useRef } from "react";
import XLSXIcon from "../svg/XLSXicon";
import CSVIcon from "../svg/CSVicon";
import ErrorIcon from "../svg/ErrorIcon";
import CenterSpreadsheetIcon from "../svg/Spreadsheet-Center";
import RightFolderIcon from "../svg/Folder-Right";
import LeftFoldertIcon from "../svg/Folder-Left";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import UploadIcon from "../svg/UploadIcon";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [fileNames, setFileNames] = useState<{ name: string; size: number }[]>(
    []
  );
  const [error, setError] = useState<JSX.Element | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadingFile, setUploadingFile] = useState<File | null>(null); // Newly added state
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
            <div className="file-name">{file.name}</div>
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
      setUploadingFile(file);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const newFile = { name: file.name, size: file.size };
      const newFileNames = [...fileNames, newFile];
      console.log(newFile, "hello");
      setFileNames(newFileNames);
      onFileUpload(file);
      setError(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
      setUploadingFile(null);
    }
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 140, color: "#1CC23A" }} spin />
  );

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
          backgroundColor: isDragOver ? "#F3FCF5" : "transparent",
          borderStyle: loading || error ? "none" : "dashed",
          borderColor: isDragOver ? "#169A2D" : "#DADEE6",
        }}
      >
        {loading ? (
          <>
            {uploadingFile && (
              <div>
                <div className="loading-indicator">
                  <UploadIcon />
                  <Spin indicator={antIcon} />
                  <div className="file-name">{uploadingFile.name}</div>
                  <p>uploading...</p>
                </div>
              </div>
            )}
          </>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="drop-area">
            <div>
              <LeftFoldertIcon />
              <CenterSpreadsheetIcon />
              <RightFolderIcon />
            </div>
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
          {fileNames.map((file, index) => (
            <div key={index} className="uploaded-files">
              {file.name.endsWith(".xlsx") ? (
                <div className="file-row">
                  <XLSXIcon />
                  <div className="uploaded-file-title">{file.name}</div>
                  <div className="uploaded-file-size">{`${(
                    file.size /
                    1024 /
                    1024
                  ).toFixed(2)} MB`}</div>
                </div>
              ) : file.name.endsWith(".csv") ? (
                <div className="file-row">
                  <CSVIcon />
                  <div className="uploaded-file-title">{file.name}</div>
                  <div className="uploaded-file-size">{`${(
                    file.size /
                    1024 /
                    1024
                  ).toFixed(2)} MB`}</div>
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
