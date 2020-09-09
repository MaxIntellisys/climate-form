import React, { useState } from "react";
import ThankYou from "./ThankYou";
import Form from "./Form";
import FileUploader from "./FileUploader";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState(false);

  if (submitted) return <ThankYou />;

  if (questions) {
    return <Form questions={questions} setSubmitted={setSubmitted} />;
  }

  return <FileUploader setQuestions={setQuestions} />;
}

export default App;
