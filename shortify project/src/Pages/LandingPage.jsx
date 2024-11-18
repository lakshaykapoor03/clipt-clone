import React from "react";
import HeroSection from "../components/functionalityComponents/HeroSection";
import VideoSection from "../components/functionalityComponents/VideoSection";
import HowItWorks from "../components/functionalityComponents/HowItWorks";
import FeaturedCards from "../components/functionalityComponents/FeaturedCards";
import VideoEditorSection from "../components/functionalityComponents/VideoEditorSection";
import Pricing from "../components/functionalityComponents/Pricing";
import Faq from "../components/functionalityComponents/Faq";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <FeaturedCards />
      <HowItWorks />
      <VideoEditorSection />
      <Pricing/>
      <Faq/>
    </>
  );
};

export default LandingPage;
