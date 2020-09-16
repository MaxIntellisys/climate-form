import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SampleSection from "../components/SampleSection";
import FileUploader from "../components/FileUploader";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SampleSection />
      <FileUploader />
      <Footer />
    </main>
  );
}
