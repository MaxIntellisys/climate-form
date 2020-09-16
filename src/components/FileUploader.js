import React, { useState } from "react";
import { saveFormToDb } from "../firestore";
import UrlDisplayer from "./UrlDisplayer";

export default function FileUploader({ setQuestions }) {
  const [formURL, setFormURL] = useState(false);

  const handleCSV = async (e) => {
    e.preventDefault();
    let file = e.target.files[0];

    try {
      const isValid =
        file.type === "text/csv" || file.type === "application/vnd.ms-excel";
      if (!isValid) return alert("File type must be csv");

      const text = await file.text();

      let arr = text.replace(/\n/g, ",").split(",");
      arr = arr.filter((word) => Boolean(word));

      const headers = arr.splice(0, 3);
      const questions = [];
      
      arr.forEach((element) => {
        let obj = {};
        let chunk = arr.splice(0, 3);

        obj[headers[0].trim()] = chunk[0];
        obj[headers[1].trim()] = chunk[1];
        obj[headers[2].trim()] = chunk[2];
        questions.push(obj);
      });

      const id = await saveFormToDb({ questions });
      setFormURL(`form/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpload = () => {
    const fileInput = document.querySelector("#file-upload");
    fileInput.click();
  };

  return (
    <section className="flex flex-col items-center justify-center py-16 bg-orange-100">
      <div className="flex flex-col items-center w-10/12 lg:w-1/3 bg-orange-200 p-6 mb-5">
        <p className="text-2xl">
          Please upload a csv file to generate your form
        </p>
        <input
          className="hidden"
          type="file"
          id="file-upload"
          accept=".csv, .ms-excel"
          onChange={handleCSV}
        />
        <button
          className="px-4 py-2 bg-yellow-400 rounded pointer m-4 hover:bg-yellow-500 outline-none"
          onClick={handleUpload}
        >
          Upload csv
        </button>
      </div>

      {formURL ? <UrlDisplayer formURL={formURL} /> : null}
    </section>
  );
}
