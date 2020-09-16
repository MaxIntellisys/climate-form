import React from "react";

const styles= {
  errors: { color: "red", fontSize: "12px" },
}

export default function MultipleSelection({ source, register, errors }) {
  const { question, name, type } = source;
 
  if(type === "radio"){
    return (
      <>
        <div className="flex justify-between bg-yellow-100 w-10/12 md:w-6/12 mb-5 p-3 rounded" >
          <label className="w-6/12">{question}</label>
          <input className="cursor-pointer" type={type} name={name} value="1" ref={register({ required: "required 🙏🏽" })}/>
          <input className="cursor-pointer" type={type} name={name} value="2" ref={register({ required: "required 🙏🏽" })}/>
          <input className="cursor-pointer" type={type} name={name} value="3" ref={register({ required: "required 🙏🏽" })}/>
          <input className="cursor-pointer" type={type} name={name} value="4" ref={register({ required: "required 🙏🏽" })}/>
          <input className="cursor-pointer" type={type} name={name} value="5" ref={register({ required: "required 🙏🏽" })}/>
        </div>
        {errors[name]? <span style={styles.errors}>{errors[name].message}</span>: null}
      </>
  );
  } else {
    return (
      <>
        <div className="flex justify-between bg-yellow-100 w-10/12 md:w-6/12 mb-5 p-3 rounded" >
          <label className="w-6/12">{question}</label>
          <input className="focus:outline-none focus:border-yellow-700 border border-yellow-300 rounded-lg px-2 w-full appearance-none leading-normal" type="text" name={name} ref={register({ required: "required 🙏🏽" })}/>
        </div>
        {errors[name]? <span style={styles.errors}>{errors[name].message}</span>: null}
      </>
    );
  }
}