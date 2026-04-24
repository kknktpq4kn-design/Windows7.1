import React from "react";
import { Link } from "react-router-dom";
import FeatureCard from "../components/reunion7/FeatureCard";
import SectionDivider from "../components/reunion7/SectionDivider";

const IMG_GADGETS = "https://reloadedwin.neocities.org/index_pliki/cac507e1-2bbe-46f0-a0da-84a4ad0ecee8.jpg";
const IMG_INSTALLER = "https://reloadedwin.neocities.org/index_pliki/1190535c-e0e8-4a7f-9f19-43a7105735c9.jpg";
const IMG_VERSIONS = "https://reloadedwin.neocities.org/index_pliki/5de89b2a-18e5-48b0-a05c-6fd6f81d15eb.jpg";
const IMG_MARKETPLACE = "https://reloadedwin.neocities.org/index_pliki/4486496e-f7a6-4116-ba31-d0f8813f8c8a.jpg";
const IMG_HARDWARE = "https://reloadedwin.neocities.org/index_pliki/2cc1be5d-fc27-4fd1-9471-37506db02e62.jpg";
const IMG_SUPPORT = "https://reloadedwin.neocities.org/index_pliki/93fad0cd-9585-4918-80c8-1eedbf1e8107.jpg";

export default function Home() {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-6 font-main">
      <div className="relative w-full overflow-hidden mb-8">
        <img
          src="https://media.base44.com/images/public/69e235548427ca5825f64afc/5c422baf6_Windows7100isnotamodItisthedefinitiveoriginalWindows7experiencefortifiedfor2026Builtonauthenticcodestrippedoftelemetryandsecuredby0patchitbringsbackthetruebubblyAeroyoulovewithmodernappcompatibility.png"
          alt="Introducing Windows 7.1"
          className="w-full h-auto block"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <SectionDivider />
          <h2 className="text-lg font-bold text-[#1a1a1a] mb-4">What Windows 7.1 offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <FeatureCard image={IMG_GADGETS} title="Gadgets and themes"
              description="Windows 7.1 restores the original Windows 7 gadgets and Aero themes, exactly as you remember them." />
            <FeatureCard image={IMG_INSTALLER} title="Easy installer"
              description="The installation is simple and guided, in the classic Windows style — ready in just a few minutes." />
            <FeatureCard image={IMG_VERSIONS} title="Ongoing updates"
              description="Every new version is published here. Windows 7.1 is a living project, constantly evolving." />
          </div>
          <SectionDivider />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FeatureCard image={IMG_MARKETPLACE} title="Windows Marketplace"
              description={<>Windows Marketplace, developed by <strong>Tech Stuff,</strong> is built into the mod.</>} />
            <FeatureCard image={IMG_HARDWARE} title="Modern hardware"
              description={<>Unlike the original Windows 7, Windows 7.1 supports even the latest hardware.{" "}
                <Link to="/specs" className="text-[#0066b3] hover:underline">See recommended specifications</Link></>} />
            <FeatureCard image={IMG_SUPPORT} title="Support"
              description="For any issues with the website or the mod, you can reach us directly on our Discord server." />
          </div>
          <SectionDivider />
        </div>
        <div className="w-full md:w-[200px] shrink-0">
          <h3 className="text-base font-bold text-[#1a1a1a] mb-2">Addons</h3>
          <ul className="list-disc list-inside text-sm">
            <li><Link to="/discover" className="text-[#0066b3] hover:underline">Windows Live Essentials</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
