import React, { useState } from "react";
import { saveFormToDb } from "../firestore";

export default function FileUploader({ setQuestions }) {
  const [formURL, setFormURL] = useState(false);
  
  const handleChange = async (e) => {
    e.preventDefault();
    let file = e.target.files[0];

    try {
      const isValid =
        file.type === "text/csv" || file.type === "application/vnd.ms-excel";
      if (!isValid) return alert("File type must be csv");

      const text = await file.text();

      let arr = text.replace(/\n/g, ",").split(",");
      arr = arr.filter((word) => Boolean(word));

      let questions = [];
      for (let index in arr) {
        let obj = {};
        if (index > 1 && index % 2 === 0) {
          obj[arr[0].trim()] = arr[+index];
          obj[arr[1].trim()] = arr[+index + 1];
          questions.push(obj);
        }
      }

      const id = await saveFormToDb({ questions });
      setFormURL(`${window.location}?share=${id}`);
      setQuestions(questions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-center p-4  m-auto">
      <h1 className="text-4xl mt-4">Metrics Circle Form Builder</h1>
      <div className="text-center my-32 p-4 border-solid border-4 border-gray-600 rounded-lg md:w-6/12 m-auto">
        <p className="text-2xl">
          Please upload a csv file to generate your form
        </p>
        <input
          type="file"
          id="fileUpload"
          accept=".csv, .ms-excel"
          onChange={handleChange}
        />
      </div>

      {formURL ? (
        <div className="text-center my-32 p-4 border-solid border-4 border-gray-600 rounded-lg md:w-6/12 m-auto">
          <p className="text-xl">
            Newly created from is available on this shareable link:
          </p>
          <p><a href={formURL}>{formURL}</a></p>
        </div>
      ) : null}
    </div>
  );
}
