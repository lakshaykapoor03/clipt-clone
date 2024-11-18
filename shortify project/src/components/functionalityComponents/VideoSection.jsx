import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  const [buttonState, setButtonState] = useState("Ads");
  return (
    <>
      {" "}
      <div className="flex justify-between my-20 items-center px-10">
        <div className="text-white">
          <h2 className="text-5xl ">Want cheap editors?</h2>
          <p className="text-xl ">
            We find you the best overseas video editors for 70% less than US
            employees
          </p>
          <div className="">
            <div className="relative group">
              <buttons className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Let's get started
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </buttons>
            </div>
          </div>
        </div>
        <div className="w-[500px]">
          <img src="/professionalLady.jpg" />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center px-20 py-8 border border-4 border-purple-600 rounded-xl ">
        <h3 className="text-5xl font-semibold text-white">To make videos like these:</h3>
        <div className="my-8">
          {" "}
          {["Ads", "Podcast", "Youtube", "Explainers", "Clips"].map((item,idx) => (
            <Button
            variant={buttonState === item ? "destructive" : ""}
              onClick={() => {
                setButtonState(item);
                setClicked(true)
              }}
            >
              {item}
            </Button>
          ))}
        </div>
        {buttonState === "Ads" && (
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wpf5ga_nu3A?si=3ARdDGzHgUWcgRhx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        )}
      {buttonState === "Podcast" && (
              <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vFuyiCnROzs?si=MhM3XviUtBKLouLB"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>  
      )}
{ buttonState === "Youtube" && (
    <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/1tlJWEv1KFI?si=pZ4XtB_bAnoMbN7V"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
)}
      {buttonState === "Explainers" && <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4WXark4iLwA?si=WkCTU6fnKFWOubmD"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>}
       
       {buttonState === "Clips" && <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/A7qS84hfwWA?si=3lCBrSI76C5-tlv_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>}
       <h3 className="text-3xl font-semibold text-white">…but it’s hard to find editors.
       </h3>
      </div>
    </>
  );
};

export default VideoSection;
