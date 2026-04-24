import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

const WINDOWS_LOGO = "https://reloadedwin.neocities.org/index_pliki/4300ae64-546c-4bbe-9026-6779b3684fb9.png";
const MICROSOFT_LOGO = "https://reloadedwin.neocities.org/index_pliki/4300ae64-546c-4bbe-9026-6779b3684fb8.png";

// --- NAVBAR DATA ---
const downloadSubMenu = [
  { label: "Windows 7.1", to: "/download" },
  { label: "Windows 7.1 themes", to: "#" },
  { label: "Desktop backgrounds", to: "#" },
];

const discoverSubMenu = [
  { label: "Desktop", to: "#" },
  { label: "Personalize", to: "#" },
  { label: "TV and streaming", to: "#" },
  { label: "Windows Touch", to: "#" },
  { label: "More articles", to: "/discover" },
];

function NavItem({ label, to, subItems, isActive }) {
  const [open, setOpen] = useState(false);
  const hasSubMenu = subItems && subItems.length > 0;
  return (
    <div className="relative"
      onMouseEnter={() => hasSubMenu && setOpen(true)}
      onMouseLeave={() => hasSubMenu && setOpen(false)}>
      <Link to={to}
        className={`px-4 py-2 text-[13px] font-medium transition-colors ${
          isActive ? "bg-[#1a4a6e] text-white" : "text-[#b4d5f0] hover:bg-[#1a4a6e] hover:text-white"
        }`}>
        {label}
      </Link>
      {hasSubMenu && open && (
        <div className="absolute top-full left-0 z-50 bg-[#0b2e4e] border border-[#1a5a8a] shadow-xl min-w-[210px] py-1">
          {subItems.map((item, i) => (
            <React.Fragment key={i}>
              {i === subItems.length - 1 && subItems.length > 2 && (
                <div className="border-t border-[#1a5a8a] my-1 mx-2" />
              )}
              <Link to={item.to}
                className="block px-4 py-1.5 text-[12px] text-[#b4d5f0] hover:text-white hover:bg-[#0d3a5f]">
                {item.label}
              </Link>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SiteLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#003366] font-sans selection:bg-blue-500/30">
      
      {/* 1. TOP BAR (United States | Change) */}
      <div className="w-full bg-[#0a1e33] border-b border-white/5">
        <div className="max-w-[960px] mx-auto px-4 flex justify-end items-center py-1.5 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="text-[#8ab8d8]">United States</span>
            <button className="text-[#d4a800] hover:underline">Change</button>
            <span className="text-[#5a8aaa] mx-1">|</span>
            <button className="text-[#d4a800] hover:underline">Other projects</button>
          </div>
        </div>
      </div>

      {/* 2. LOGO AREA */}
      <div className="w-full bg-gradient-to-b from-[#0a1e33] to-[#0d2845]">
        <div className="max-w-[960px] mx-auto px-4 py-3">
          <Link to="/">
            <img src={WINDOWS_LOGO} alt="Windows" className="h-[32px] w-auto" />
          </Link>
        </div>
      </div>

      {/* 3. NAVIGATION BAR */}
      <div className="w-full bg-[#0d2845] border-y border-[#1a4a6e]">
        <div className="max-w-[960px] mx-auto px-2">
          <nav className="flex items-center">
            <NavItem label="Home" to="/" isActive={location.pathname === "/"} />
            <NavItem label="Download" to="/download" subItems={downloadSubMenu} isActive={location.pathname === "/download"} />
            <NavItem label="Discover Windows" to="/discover" subItems={discoverSubMenu} isActive={location.pathname === "/discover"} />
          </nav>
        </div>
      </div>

      {/* 4. MAIN CONTENT AREA */}
      <main className="flex-1 w-full max-w-[960px] mx-auto bg-[#004892] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <Outlet />
      </main>

      {/* 5. FOOTER */}
      <footer className="w-full bg-[#0a1e33] border-t border-[#1a4a6e] mt-auto">
        <div className="max-w-[960px] mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <img src={WINDOWS_LOGO} alt="Windows" className="h-[30px] opacity-80" />
            <div className="flex items-center gap-3 text-[11px] text-[#6a9fc0]">
              <span>©2026 AeroWorld</span>
              <span className="text-[#1a4a6e]">|</span>
              <a href="https://microsoft.com" target="_blank" rel="noopener noreferrer">
                <img src={MICROSOFT_LOGO} alt="Microsoft" className="h-[12px]" />
              </a>
            </div>
          </div>
          <p className="text-center text-[10px] text-[#5a8aaa] leading-relaxed max-w-[600px] mx-auto">
            This project is not related with Microsoft. Windows and the Windows logo are Microsoft's property.
          </p>
        </div>
      </footer>
    </div>
  );
}
