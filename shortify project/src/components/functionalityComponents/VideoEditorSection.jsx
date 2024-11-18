import React from "react";
import CommonButton from "../ui/CommonButton";

const VideoEditorSection = () => {
  return (
    <div className="flex  items-center gap-7 py-40">
      <div className="w-2/4">
        <h1 className="text-5xl font-semibold text-white my-6">
          Meet your future video editor
        </h1>
        <p className="w-3/4 text-white">
          Scroll through the top 1% of video editors that apply to Clipt. Your
          editor will have the skills, expertise, and creativity to support all
          your video needs.
        </p>
        <div className="mt-8" >

        <CommonButton buttonText="Start Hiring" />
        </div>
      </div>
      <div className="w-2/4 bg-red-700 h-28">

      </div>
    </div>
  );
};

export default VideoEditorSection;
