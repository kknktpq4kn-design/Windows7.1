import React from "react";
import { Link } from "react-router-dom";

const WINDOWS_LOGO = "https://reloadedwin.neocities.org/index_pliki/4300ae64-546c-4bbe-9026-6779b3684fb9.png";
const MICROSOFT_LOGO = "https://reloadedwin.neocities.org/index_pliki/4300ae64-546c-4bbe-9026-6779b3684fb8.png";

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-b from-[#0d2845] to-[#0a1e33] font-main mt-auto">
      <div className="max-w-[900px] mx-auto px-4 py-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link to="/"><img src={WINDOWS_LOGO} alt="Windows" className="h-[34px]" /></Link>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#6a9fc0]">©2026 AeroWorld</span>
            <span className="text-[#5a8aaa]">|</span>
          </div>
          <a href="https://microsoft.com" target="_blank" rel="noopener noreferrer">
            <img src={MICROSOFT_LOGO} alt="Microsoft" className="h-[14px]" />
          </a>
        </div>
        <p className="text-center text-xs text-[#8ab8d8] font-bold mt-4">
          This project is not related with Microsoft. Windows and the Windows logo are Microsoft's property.
        </p>
      </div>
    </div>
  );
}
