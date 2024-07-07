import React from "react";

export function DotBg() {
  return (
    <div className="w-full h-full bg-gray-primary bg-dot-white/[0.4] absolute top-0 left-0 flex items-center justify-center rounded-2xl">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-2xl"></div>
    </div>
  );
}
