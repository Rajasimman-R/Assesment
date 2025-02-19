import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Typography } from "@mui/material";

function RichTextEditor() {
  const [content, setContent] = useState("");

  // Load saved content from Local Storage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem("richTextContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  // Handle content change and save to Local Storage
  const handleContentChange = (value) => {
    setContent(value);
    localStorage.setItem("richTextContent", value);
  };

  // Quill toolbar options
  const toolbarOptions = [
    [{ bold: true }, { italic: true }, { underline: true }], // Formatting
    [{ list: "ordered" }, { list: "bullet" }], // Lists
    [{ align: [] }], // Text alignment
    ["clean"], // Remove formatting
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <Typography variant="h5">Rich Text Editor</Typography>
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        modules={{ toolbar: toolbarOptions }}
        theme="snow"
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
        onClick={() => alert("Data Saved!")}
      >
        Save
      </Button>
    </div>
  );
}

export default RichTextEditor;
