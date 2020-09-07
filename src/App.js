import React from "react";
import { useForm } from "react-hook-form";
import Question from "./Question";
import FormHeader from "./FormHeader";

const formQuestions = [
  { question: "Te gusta el Pica Pollo?", name: "pica_pollo" },
  { question: "Marvel o DC?", name: "comic" },
  { question: "Cual es tu postre favorito?", name: "postre" },
];

function Form() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader />
      {formQuestions.map((source, index) => {
        return (
          <Question
            source={source}
            key={index}
            register={register}
            errors={errors}
          />
        );
      })}
      <input type="submit" />
    </form>
  );
}

export default Form;
