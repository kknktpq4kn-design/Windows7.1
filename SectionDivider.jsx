import React from "react";

export default function SectionDivider() {
  return (
    <div className="my-4">
      <div className="h-[3px] w-full"
        style={{ background: "linear-gradient(to right, #a0c4de, #d8e8f3 50%, transparent 100%)" }} />
    </div>
  );
}
