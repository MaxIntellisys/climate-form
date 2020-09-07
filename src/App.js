import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Question from "./Question";
import FormHeader from "./FormHeader";
import ThankYou from "./ThankYou";
import Button from "@material-ui/core/Button";

const formQuestions = [
  { question: "Te gusta el Pica Pollo?", name: "pica_pollo" },
  { question: "Marvel o DC?", name: "comic" },
  { question: "Cual es tu postre favorito?", name: "postre" },
];

const styles = {
  height: "100vh",
  margin: "0 auto",
  padding: "30px 0",
  textAlign: "center",
};

function Form() {
  const { register, handleSubmit, errors } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  if (submitted) return <ThankYou />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles}>
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
      <Button type="submit" variant="outlined" color="primary">
        Send
      </Button>
    </form>
  );
}

export default Form;
