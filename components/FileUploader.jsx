import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

function FileUploader(props) {
  const { setShow, refetch } = props;
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileUploading, setFileUploading] = useState(false);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(Array.from(files));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFileUploading(true);
    // console.log(
    //   "Selected Files:",
    //   selectedFiles.map((file) => file.name)
    // );
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("file", file);
    });
    try {
      const response = await axios.post(
        // "http://localhost:4000/upload",
        "https://seo-page-1-task-file-upload-server.vercel.app/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // console.log("Upload response:", response.data);
      if (response.data.message === "File uploaded and saved to MongoDB!") {
        refetch();
        toast.success("Successfully uploaded!");
        setShow(false);
        setFileUploading(false);
      }
    } catch (error) {
      // console.error("Error uploading file:", error);
      toast.error("File Upload is not successful. Please try again");
      setFileUploading(false);
    }
  };
  return (
    <div className="form-holder">
      <div className="form-p">
        <input className="form-input" type="file" onChange={handleFileChange} />
        <p className="">
          {selectedFiles.length > 0
            ? selectedFiles.map((file) => file.name).join(", ")
            : "Drag your files here or click in this area."}
        </p>
      </div>
      {selectedFiles.length === 0 ? (
        <p className="mb-0 fw-bold">Please select a file to upload</p>
      ) : (
        <p
          className="mb-0"
          style={{
            width: "100%",
            height: "24px",
          }}
        ></p>
      )}
      <button
        disabled={selectedFiles.length === 0 || fileUploading}
        className="form-button"
        type="submit"
        onClick={handleSubmit}
      >
        Upload
      </button>
    </div>
  );
}

export default FileUploader;
