import React from "react";

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-600 p-4">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-2xl text-teal-900 mr-3">Survey Ninja</div>
        <div className="text-sm lg:flex-grow">
          <a
            href="#start"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Getting started
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            How to
          </a>
          <a
            href="#sample"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Examples
          </a>
        </div>
      </div>
    </nav>
  );
}
