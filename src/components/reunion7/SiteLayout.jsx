import { Outlet } from "react-router-dom";

// Se i file esistono, togli i // qui sotto e controlla le maiuscole!
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const SiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      {/* HEADER TEMPORANEO (Se l'altro fallisce) */}
      <header className="p-4 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <h1 className="text-xl font-bold">AeroWorld Resurrection</h1>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER TEMPORANEO */}
      <footer className="p-4 border-t border-white/10 text-center text-sm opacity-50">
        © 2026 Elon Stek - Resurrection Project
      </footer>
    </div>
  );
};

export default SiteLayout;
