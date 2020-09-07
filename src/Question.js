import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Question({ source, register, errors }) {
  const { question, name } = source;
  let width = window.innerWidth <= 480 ? "100%" : "50%";

  return (
    <>
      <TextField
        style={{ width, margin: "30px 0" }}
        label={question}
        name={name}
        inputRef={register({
          required: "Este campo es requerido, ayudame ahi 😉",
        })}
      />
      {errors[name] && (
        <p style={{ color: "red", fontSize: "12px" }}>{errors[name].message}</p>
      )}
      <br />
      <br />
    </>
  );
}
