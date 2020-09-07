import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Question({ source, register, errors }) {
  const { question, name } = source;

  return (
    <>
      <TextField
        label={question}
        name={name}
        inputRef={register({
          required: "Este campo es requerido, ayudame ahi 😉",
        })}
      />
      {errors[name] && (
        <p>
          <small style={{ color: "red" }}>{errors[name].message}</small>
        </p>
      )}
      <br />
      <br />
    </>
  );
}
