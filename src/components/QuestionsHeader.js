import React from "react";

export default function QuestionsHeader() {
  return (
    <div className="flex justify-between bg-gray-200 w-10/12 md:w-6/12 sticky top-0" >
      <div className="w-6/12 bg-white"></div>
      <div><span role="img" aria-label="excellent">😍</span></div>
      <div><span role="img" aria-label="good">😃</span></div>
      <div><span role="img" aria-label="ok">👌🏽</span></div>
      <div><span role="img" aria-label="bad">😤</span> </div>
      <div><span role="img" aria-label="terrible">💩</span></div>
    </div>
  );
}







