import React from "react";

export default function QuestionsHeader() {
  return (
    <div className="flex justify-end w-10/12 md:w-6/12 sticky top-0 mb-5" >
      <div className="flex justify-around w-1/2 bg-yellow-300 py-2">
        <div><span role="img" aria-label="excellent">😍</span></div>
        <div><span role="img" aria-label="good">😃</span></div>
        <div><span role="img" aria-label="ok">👌🏽</span></div>
        <div><span role="img" aria-label="bad">😤</span> </div>
        <div><span role="img" aria-label="terrible">💩</span></div>
      </div>
      
    </div>
  );
}







