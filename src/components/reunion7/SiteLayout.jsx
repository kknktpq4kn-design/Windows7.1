import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

const WINDOWS_LOGO = "https://reloadedwin.neocities.org/index_pliki/4300ae64-546c-4bbe-9026-6779b3684fb9.png";
const MICROSOFT_LOGO = "https://reloadedwin.neocities.org/index_pliki/4300ae64-546c-4bbe-9026-6779b3684fb8.png";

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

// --- SOTTO-COMPONENTE NAVITEM ---
function NavItem({ label, to, subItems, isActive }) {
  const [open, setOpen] = useState(false);
  const hasSubMenu = subItems && subItems.length > 0;
  return (
    <div className="relative"
      onMouseEnter={() => hasSubMenu && setOpen(true)}
      onMouseLeave={() => hasSubMenu && setOpen(false)}>
      <Link to={to}
        className={`px-3 py-2 text-sm font-main inline-block transition-colors ${
          isActive ? "text-white font-semibold" : "text-[#b4d5f0] hover:text-white"
        }`}>
        {label}
      </Link>
      {hasSubMenu && open && (
        <div className="absolute top-full left-0 z-50 bg-[#0b2e4e] border border-[#1a5a8a] shadow-lg min-w-[200px]">
          {subItems.map((item, i) => (
            <React.Fragment key={i}>
              {i === subItems.length - 1 && subItems.length > 2 && (
                <div className="border-t border-[#1a5a8a] mx-2" />
              )}
              <Link to={item.to}
                className="block px-4 py-2 text-sm text-[#b4d5f0] hover:text-white hover:bg-[#0d3a5f] font-main">
                {item.label}
              </Link>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

// --- COMPONENTE LAYOUT PRINCIPALE ---
export default function SiteLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#05111d] text-white">
      {/* HEADER */}
      <header className="w-full bg-gradient-to-b from-[#0a1e33] to-[#0d2845] font-main">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="flex justify-end items-center py-2 text-xs gap-2">
            <span className="text-[#8ab8d8]">United States</span>
            <span className="text-[#d4a800] hover:underline cursor-pointer">Change</span>
            <span className="text-[#5a8aaa]">|</span>
            <span className="text-[#d4a800] hover:underline cursor-pointer">Other projects</span>
          </div>
        </div>
        <div className="max-w-[900px] mx-auto px-4 pb-1">
          <Link to="/"><img src={WINDOWS_LOGO} alt="Windows" className="h-[34px]" /></Link>
        </div>
        <div className="border-t border-[#1a4a6e]">
          <div className="max-w-[900px] mx-auto px-4">
            <nav className="flex items-center">
              <NavItem label="Home" to="/" isActive={location.pathname === "/"} />
              <NavItem label="Download" to="/download" subItems={downloadSubMenu} isActive={location.pathname === "/download"} />
              <NavItem label="Discover Windows" to="/discover" subItems={discoverSubMenu} isActive={location.pathname === "/discover"} />
            </nav>
          </div>
        </div>
      </header>

      {/* CONTENT (Le tue pagine: Home, Download, ecc.) */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-gradient-to-b from-[#0d2845] to-[#0a1e33] font-main mt-auto">
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
            This project is not related with Microsoft. [span_0](start_span)Windows and the Windows logo are Microsoft's property[span_0](end_span).
          </p>
        </div>
      </footer>
    </div>
  );
}
