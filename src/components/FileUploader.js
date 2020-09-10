import React from "react";

export default function FileUploader({ setQuestions }) {
  const handleChange = async (e) => {
    e.preventDefault();
    let file = e.target.files[0];

    try {
      if (file.type !== "text/csv") return alert("File type must be csv");
      const text = await file.text();

      let arr = text.replace(/\n/g, ",").split(",");
      arr = arr.filter((word) => Boolean(word));

      let results = [];
      for (let index in arr) {
        let obj = {};
        if (index > 1 && index % 2 === 0) {
          obj[arr[0]] = arr[+index];
          obj[arr[1]] = arr[+index + 1];
          results.push(obj);
        }
      }

      setQuestions(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-center p-4  m-auto">
      <h1 className="text-4xl mt-4" >Metrics Circle Form Builder</h1>
      <div className="text-center my-32 p-4 border-solid border-4 border-gray-600 rounded-lg md:w-6/12 m-auto">
        <p className="text-2xl">
          Please upload a csv file to generate your form
        </p>
        <input type="file" id="fileUpload" onChange={handleChange} />
      </div>
    </div>
  );
}
