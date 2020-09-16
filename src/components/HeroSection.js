import React from "react";

export default function HeroSection() {
  const img = "/img/form-screenshot.png";
  return (
    <section
      className="flex flex-col items-center py-4 lg:flex-row lg:justify-between w-full lg:px-4 bg-teal-400"
      id="hero"
    >
      <div className="right m-2 text-center">
        <p className="text-4xl">Build your form</p>
        <p className="text-lg">
          All you need to do is upload a CSV file and the app will do the magic.
        </p>
      </div>

      <div className="m-2 w-3/4">
        <img src={img} alt="form screenshot" className="rounded-full" />
      </div>
    </section>
  );
}
