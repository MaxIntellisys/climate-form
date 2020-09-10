import React from "react";
import { useForm } from "react-hook-form";
import FormHeader from "./FormHeader";
import QuestionsHeader from "./QuestionsHeader";
import Question from "./MultiSelectQuestion";

export default function Form({ questions, setSubmitted }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

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
        Send
      </button>
    </form>
  );
}
