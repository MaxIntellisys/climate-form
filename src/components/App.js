import React, { useState } from "react";
import ThankYou from "./ThankYou";
import Form from "./Form";
import FileUploader from "./FileUploader";
import { getFormFromDb } from "../firestore";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState(false);  // console.log(getFormFromDb("LonrsZ3hveFW74c8OYwg"));
  
  if (submitted) return <ThankYou />;

  // if (questions) {
  //   return <Form questions={questions} setSubmitted={setSubmitted} />;
  // }

  return <FileUploader setQuestions={setQuestions} />;
}

export default App;
