import React from "react";
import SectionDivider from "../components/reunion7/SectionDivider";

const BANNER_BG = "https://reloadedwin.neocities.org/downloads_pliki/6d64af86-3234-4777-a9d9-9cdf66526821.jpg";
const WIN7_BOX = "https://reloadedwin.neocities.org/downloads_pliki/291d0b95-73e1-468f-95d4-da8ffc2db8a1.jpg";

export default function Download() {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-6 font-main">
      <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden mb-8">
        <img src={BANNER_BG} alt="Download Windows 7.1" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center px-6 md:px-10">
          <h2 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-lg max-w-[350px]">
            Download Windows 7 — authentic Windows 7, secure and ready for 2026.
          </h2>
        </div>
      </div>
      <SectionDivider />
      <h2 className="text-lg font-bold text-[#1a1a1a] mb-4">Windows 7.1 (latest)</h2>
      <div className="flex flex-col items-start gap-2 mb-4">
        <a href="https://pixeldrain.com/u/nB5pkiG3" target="_blank" rel="noopener noreferrer">
          <img src={WIN7_BOX} alt="Windows 7 Home Premium" className="w-[80px] h-auto" />
        </a>
        <a href="https://pixeldrain.com/u/nB5pkiG3" target="_blank" rel="noopener noreferrer"
          className="text-sm text-[#0066b3] hover:underline font-semibold">
          Windows 7.1 Ultimate
        </a>
        <p className="text-sm font-bold text-[#1a1a1a]">Release 0.9</p>
        <a href="https://pixeldrain.com/u/nB5pkiG3" target="_blank" rel="noopener noreferrer"
          className="inline-block px-3 py-1 text-xs text-white border border-white/60 hover:bg-white/20 transition-colors"
          style={{ backgroundColor: "#d4a800" }}>
          Download ISO
        </a>
      </div>
      <SectionDivider />
    </div>
  );
}
