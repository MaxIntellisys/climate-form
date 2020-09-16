import React from "react";
import { Link } from "react-router-dom";

export default function UrlDisplayer({ formURL }) {
  const completeURL = `${window.location}${formURL}`;

  const handleCopy = (e) => {
    const textarea = document.createElement("textarea");

    if (!completeURL) {
      return;
    }

    textarea.value = completeURL;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    e.target.innerText = "Copied";
  };

  return (
    <div className="flex flex-col items-center justify-center w-10/12 lg:w-1/3 bg-orange-200 p-6 mb-5">
      <p className="text-xl mb-3">
        Your survey is ready at this URL below{" "}
        <span role="img" aria-label="pointing">
          👇🏽
        </span>
        :
      </p>
      <p className="text-xs bg-orange-400 px-1 py-3 mb-2 lg:text-base">
        <Link to={`${formURL}`} target="_blank">
          {completeURL}
        </Link>
      </p>
      <button
        className="px-4 py-1 bg-purple-400 pointer outline-none hover:bg-purple-500 rounded"
        onClick={handleCopy}
      >
        Copy
      </button>
    </div>
  );
}
