import React, { useState } from "react";
import axios from "axios";
import { DataSetFileUploader } from "./projectService";

const Form = ({ _id, projectName }) => {
  const [fileInput, setfileInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await DataSetFileUploader(fileInput, _id, projectName);
    console.log("datadata", res);
  };

  const handleFileSelect = (e) => {
    if (e.target && e.target.files) {
      setfileInput(e.target.files[0]);
    }
  };

  return (
    <form>
      <input type="file" name="file_uploader" onChange={handleFileSelect} />
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
};

export default Form;
