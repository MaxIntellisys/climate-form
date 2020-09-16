import React from "react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between flex-wrap bg-teal-600 p-16">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#link"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Metrics Engineering Team (MET)
          </a>
          
        </div>
      </div>
    </footer>
  );
}
