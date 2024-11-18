import React from "react";
import { Button } from "@/components/ui/button";
import DirectionArrow from "./DirectionArrow";

const HeroSection = () => {
  return (
    <div>
      <h1 className="text-6xl text-white font-bold text-center leading-snug">
        Hire
         {" "}<span className="text-purple-400">amazing video editors</span>
        <br />
        for 70% less than US employees
      </h1>
      <p className="text-white text-xl font-medium px-28">
        We're a staffing agency for placing top overseas editors into your
        company. Build your content machine – faster, smarter, and more
        affordably.
      </p>
      <div className="flex justify-center items-center">
        {" "}
        <Button className="px-20 py-10 text-4xl rounded-2xl text-white border border-4 border-red-600">
          Start Hiring
        </Button>
      </div>
      <h2 className="text-4xl text-white text-center mt-10">Who are you?</h2>
      <DirectionArrow />
      <div className="flex justify-between items-center gap-4">
        <img className="w-40" src="/podcaster.png" />
        <img className="w-40" src="/podcaster.png" />
        <img className="w-40" src="/podcaster.png" />
        <img className="w-40" src="/podcaster.png" />
        <img className="w-40" src="/podcaster.png" />
      </div>
    </div>
  );
};

export default HeroSection;
