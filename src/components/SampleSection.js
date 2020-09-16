import React from "react";

export default function SampleSection() {
  return (
    <section className="flex items-center justify-center py-16 bg-green-100">
      <div className="flex flex-col items-center w-10/12 lg:w-1/3 bg-green-200 p-6">
        <p className="text-2xl">This is how the CSV should be structured.</p>
        <img
          src="/img/excel-screenshot.png"
          alt="sample csv"
          className="my-4"
        />
        <p className="text-md">Download sample CSV and edit at your will.</p>
        <a
          href="/files/sample.csv"
          download
          className="px-4 py-2 bg-purple-400 rounded pointer m-4 outline-none hover:bg-purple-500"
        >
          Download
        </a>
      </div>
    </section>
  );
}
