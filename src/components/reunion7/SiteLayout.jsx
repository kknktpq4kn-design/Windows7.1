import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/Header.jsx";
import Footer from "@/Footer.jsx";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col font-main"
      style={{ background: "linear-gradient(180deg, #c8dff0 0%, #dde9f3 30%, #e8f0f6 60%, #c8dff0 100%)" }}>
      <Header />
      <div className="flex-1"><Outlet /></div>
      <Footer />
    </div>
  );
}
