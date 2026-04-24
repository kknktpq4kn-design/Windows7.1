import React from "react";
import SectionDivider from "../components/reunion7/SectionDivider";

const specs = [
  {
    category: "Minimum",
    note: "A PC from around 2010 or newer should work fine.",
    items: [
      { label: "CPU", value: "1 GHz 64-bit processor (Intel Core 2 Duo or AMD Athlon 64 X2)" },
      { label: "RAM", value: "2 GB" },
      { label: "Storage", value: "20 GB free disk space" },
      { label: "GPU", value: "DirectX 9 compatible with WDDM 1.0 driver" },
      { label: "Display", value: "800x600 resolution" },
      { label: "Drive", value: "USB drive (8 GB+) or DVD for installation" },
    ],
  },
  {
    category: "Recommended",
    note: "For the best Aero Glass experience.",
    items: [
      { label: "CPU", value: "Intel Core i3 / AMD Ryzen 3 or better" },
      { label: "RAM", value: "4 GB or more" },
      { label: "Storage", value: "40 GB free disk space (SSD preferred)" },
      { label: "GPU", value: "DirectX 11 compatible GPU with 512 MB VRAM" },
      { label: "Display", value: "1280x720 or higher" },
      { label: "Drive", value: "USB drive (8 GB+) or DVD for installation" },
    ],
  },
];

export default function Specs() {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-6 font-main">
      <h1 className="text-2xl font-light text-[#1a1a1a] mb-2">Recommended specifications</h1>
      <p className="text-sm text-[#555] mb-6">
        Windows 7.1 is designed to run on any PC from 2010 onwards. Below are the minimum and recommended requirements.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        {specs.map((spec, i) => (
          <div key={i} className="flex-1 border border-[#c8dde8] bg-white/70 p-4">
            <h2 className="text-base font-bold text-[#0066b3] mb-1">{spec.category}</h2>
            <p className="text-xs text-[#666] mb-3 italic">{spec.note}</p>
            <table className="w-full text-sm">
              <tbody>
                {spec.items.map((item, j) => (
                  <tr key={j} className={j % 2 === 0 ? "bg-[#f0f6fa]" : ""}>
                    <td className="py-1.5 px-2 font-semibold text-[#333] w-[90px]">{item.label}</td>
                    <td className="py-1.5 px-2 text-[#444]">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <SectionDivider />
      <p className="text-xs text-[#777] mt-2">
        * Windows 7.1 is a standalone OS — install it directly on your PC or in a virtual machine.
      </p>
    </div>
  );
}
