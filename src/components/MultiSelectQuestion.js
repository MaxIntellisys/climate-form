import React from "react";

const styles= {
  errors: { color: "red", fontSize: "12px" },
}

export default function MultipleSelection({ source, register, errors }) {
  const { question, name } = source;
 
  return (
    <>
      <div className="flex justify-between bg-gray-200 w-10/12 md:w-6/12 mb-3 p-3" >
        <label className="w-6/12">{question}</label>
        <input className="cursor-pointer" type="radio" name={name} value="1" ref={register({ required: "required 🙏🏽" })}/>
        <input className="cursor-pointer" type="radio" name={name} value="2" ref={register({ required: "required 🙏🏽" })}/>
        <input className="cursor-pointer" type="radio" name={name} value="3" ref={register({ required: "required 🙏🏽" })}/>
        <input className="cursor-pointer" type="radio" name={name} value="4" ref={register({ required: "required 🙏🏽" })}/>
        <input className="cursor-pointer" type="radio" name={name} value="5" ref={register({ required: "required 🙏🏽" })}/>
      </div>
      {errors[name]? <span style={styles.errors}>{errors[name].message}</span>: null}
    </>
  );
}