import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="font-main w-full bg-white">
      {/* HERO SECTION: Il gradiente blu stile Windows 7 */}
      <section className="relative w-full bg-gradient-to-r from-[#173e6d] via-[#105a9c] to-[#0c70b8] text-white py-12 overflow-hidden border-b-2 border-white">
        {/* Effetto fiocchi di neve (CSS generico per dare l'idea) */}
        <div className="absolute top-4 left-10 text-4xl opacity-50">❄</div>
        <div className="absolute bottom-10 right-20 text-5xl opacity-40">❄</div>
        <div className="absolute top-1/2 left-1/2 text-2xl opacity-30">❄</div>

        <div className="max-w-[900px] mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          
          {/* Testo di Presentazione */}
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-5xl mb-6 font-handwriting drop-shadow-md leading-tight">
              Presenting <br/> Windows 7.1
            </h1>
            <p className="text-[13px] leading-relaxed text-[#d4e6f6] font-medium drop-shadow">
              Forget modern mods and Windows 10 skins. [span_2](start_span)Experience the original, authentic Windows 7, meticulously fortified for 2026[span_2](end_span). [span_3](start_span)Built on clean code, stripped of all telemetry, and secured with 0patch and Mullvad, it brings back the bubbly Aero world you love — fully compatible with the modern web[span_3](end_span).
            </p>
          </div>

          {/* Immagini (Box e Laptop) */}
          <div className="md:w-1/2 flex items-center justify-center mt-10 md:mt-0 relative">
             {/* Sostituisci questi src con i link delle tue immagini reali se le hai su Neocities */}
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Windows_7_box.png" 
               alt="Windows 7.1 Box" 
               className="h-48 z-20 relative -mr-12 drop-shadow-2xl hover:scale-105 transition-transform"
             />
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Windows_7_laptop.png/800px-Windows_7_laptop.png" 
               alt="Laptop Windows 7" 
               className="h-44 z-10 opacity-90"
             />
          </div>
        </div>
      </section>

      {/* SEZIONE CARATTERISTICHE (Griglia) */}
      <section className="max-w-[900px] mx-auto px-4 py-12">
        <h2 className="text-[22px] text-[#003399] mb-8 font-normal">What Windows 7.1 offers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          
          <div>
            <h3 className="font-bold text-[#003399] mb-1">Gadgets and themes</h3>
            [span_4](start_span)<p className="text-[13px] text-gray-700 leading-relaxed">Windows 7.1 restores the original Windows 7 gadgets and Aero themes, exactly as you remember them[span_4](end_span).</p>
          </div>

          <div>
            <h3 className="font-bold text-[#003399] mb-1">Easy installer</h3>
            [span_5](start_span)<p className="text-[13px] text-gray-700 leading-relaxed">The installation is simple and guided, in the classic Windows style ready in just a few minutes[span_5](end_span).</p>
          </div>

          <div>
            <h3 className="font-bold text-[#003399] mb-1">Ongoing updates</h3>
            <p className="text-[13px] text-gray-700 leading-relaxed">Every new version is published here. [span_6](start_span)Windows 7.1 is a living project, constantly evolving[span_6](end_span).</p>
          </div>

          <div>
            <h3 className="font-bold text-[#003399] mb-1">Windows Marketplace</h3>
            [span_7](start_span)<p className="text-[13px] text-gray-700 leading-relaxed">Windows Marketplace, developed by Tech Stuff, is built into the mod[span_7](end_span).</p>
          </div>

          <div>
            <h3 className="font-bold text-[#003399] mb-1">Modern hardware</h3>
            [span_8](start_span)<p className="text-[13px] text-gray-700 leading-relaxed">Unlike the original Windows 7, Windows 7.1 supports even the latest hardware[span_8](end_span).</p>
            [span_9](start_span)<Link to="/specs" className="text-[#0055cc] text-[13px] hover:underline block mt-1">See recommended specifications[span_9](end_span)</Link>
          </div>

          <div>
            <h3 className="font-bold text-[#003399] mb-1">Support</h3>
            [span_10](start_span)<p className="text-[13px] text-gray-700 leading-relaxed">For any issues with the website or the mod, you can reach us directly on our Discord server[span_10](end_span).</p>
          </div>

        </div>

        {/* ADDONS */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          [span_11](start_span)<h3 className="font-bold text-[#003399] mb-2">Addons[span_11](end_span)</h3>
          <ul className="list-disc pl-5 text-[13px] text-gray-700">
            [span_12](start_span)<li>Windows Live Essentials[span_12](end_span)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
