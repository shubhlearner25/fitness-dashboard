import React from "react";
import pic from "../../assets/pic.png"; // correct import

export default function PremiumCard() {
  return (
    <div
      className="
        relative p-6 rounded-2xl overflow-hidden
        text-white 
      "
      style={{
        background: "linear-gradient(180deg, #8B5CF6 0%, #B086FF 100%)",
      }}
    >
      {/* IMAGE */}
      <img
        src={pic}
        alt="Premium"
        className="
          absolute bottom-0 right-0 
          w-24 md:w-28 
          object-contain 
          opacity-80 
          pointer-events-none
        "
      />

      {/* TEXT */}
      <h4 className="font-semibold relative z-10 text-base md:text-lg leading-snug">
        50% off on Premium Membership
      </h4>

      <p className="text-sm mt-2 opacity-90 relative z-10 max-w-[80%]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod.
      </p>

      {/* BUTTON */}
      <button
        className="
          mt-4 relative z-10 
          bg-orange-500 
          text-white 
          px-4 py-2 md:px-5 md:py-2.5 
          rounded-lg 
          font-semibold 
          hover:bg-orange-600 
          transition
        "
      >
        Upgrade
      </button>
    </div>
  );
}
