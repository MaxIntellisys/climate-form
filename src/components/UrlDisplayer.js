import React from "react";
import { Link } from "react-router-dom";

export default function UrlDisplayer({ formURL }) {
  const rootPath = `${window.location}`;
  return (
    <div className="text-center my-32 p-4 border-solid border-4 border-gray-600 rounded-lg md:w-6/12 m-auto">
      <p className="text-xl">
        Newly created from is available on this shareable link:
      </p>
      <p>
        <Link to={`/climate-form${formURL}`}>{`${rootPath}${formURL}`}</Link>
      </p>
    </div>
  );
}
