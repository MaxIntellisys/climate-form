import React, { useState } from "react";
import ThankYou from "./ThankYou";
import Form from "./Form";
import FileUploader from "./FileUploader";

// const formQuestions = [
//   { question: "Te gusta el Pica Pollo?", name: "pica_pollo" },
//   { question: "Marvel o DC?", name: "comic" },
//   { question: "Cual es tu postre favorito?", name: "postre" },
//   { question: "Como calificas a la pelicula de John Wick que salio el año pasado?", name: "johhn-wick" },
// ];

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
