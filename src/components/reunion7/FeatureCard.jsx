import React from "react";

export default function FeatureCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-start">
      {image && (
        <div className="mb-2">
          <img src={image} alt={title} className="w-[192px] h-[112px] object-cover" />
        </div>
      )}
      <h3 className="text-sm font-semibold text-[#0066b3] hover:underline cursor-pointer font-main">
        {title}
      </h3>
      <p className="text-xs text-[#333] mt-1 font-main leading-relaxed">{description}</p>
    </div>
  );
}
