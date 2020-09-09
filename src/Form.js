import React from "react";
import { useForm } from "react-hook-form";
import FormHeader from "./FormHeader";
import QuestionsHeader from "./QuestionsHeader";
import Question from "./MultipleSelection";
import Button from "@material-ui/core/Button";

export default function Form({questions, setSubmitted}) {
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
      <Button type="submit" variant="outlined" color="primary">
        Send
      </Button>
    </form>
  );
}
