import React from "react";
import pic from "../../assets/image.jpg";

export default function ActivityCard() {
  return (
    <div
      className="
        w-full 
        h-56 md:h-48 
        rounded-xl overflow-hidden 
        flex 
        flex-col md:flex-row 
        relative text-white
      "
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            #FC6212 0%,
            rgba(252,98,18,0.85) 18%,
            rgba(252,98,18,0.45) 40%,
            rgba(252,98,18,0.10) 60%,
            rgba(252,98,18,0) 80%
          ),
          url(${pic})
        `,
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* TEXT */}
      <div
        className="
          w-full md:w-1/2 
          p-4 md:p-6 
          flex flex-col justify-center 
          z-10
        "
      >
        <h2 className="text-xl md:text-2xl font-bold leading-snug">
          Track Your Daily Activities
        </h2>

        <p
          className="mt-2 md:mt-3 text-sm"
          style={{
            fontFamily: "Manrope",
            fontWeight: 400,
            lineHeight: "150%",
            letterSpacing: "0.1px",
            opacity: 0.9,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod.
        </p>
      </div>
    </div>
  );
}
