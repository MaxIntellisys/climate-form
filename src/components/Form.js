import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "./FormHeader";
import QuestionsHeader from "./QuestionsHeader";
import Question from "./MultiSelectQuestion";
import { getFormFromDb } from "../firestore";

export default function Form({ match, history }) {
  
  const {
    params: { id },
  } = match;
  const { register, handleSubmit, errors } = useForm();
  const [questions, setQuestions] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    history.push("/thanks")
  };

  const getQuestions = async () => {
    const questions = await getFormFromDb(id);
    setQuestions(questions);
  };

  useEffect(() => {
    let isMounted = true
    if(isMounted) { getQuestions(); }
    
    return () => { isMounted = false }
  }, [id]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between items-center py-8"
    >
      <FormHeader />

      <QuestionsHeader />

      {questions.map((source, index) => {
        return (
          <Question
            source={source}
            key={index}
            register={register}
            errors={errors}
          />
        );
      })}

      <button className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-5 rounded-full">
        Send your answers
      </button>
    </form>
  );
}
