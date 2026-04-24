import React from "react";

export default function WlsIcon({ src, label }) {
  return (
    <div className="flex flex-col items-center text-center w-[80px]">
      <img src={src} alt={label} className="w-[48px] h-[48px] object-contain mb-1" />
      <span className="text-xs text-[#0066b3] font-main">{label}</span>
    </div>
  );
}
