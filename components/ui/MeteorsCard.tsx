"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorData, setMeteorData] = useState<
    { top: number; left: number; delay: string; duration: string }[]
  >([]);

  useEffect(() => {
    const count = number || 20;

    const generated = Array.from({ length: count }, () => {
      const top = Math.random() * 120 - 10; // -10% a 110%
      const left = Math.random() * 120 - 10;

      const delay =
        Math.random() * (0.8 - 0.2) + 0.2 + "s"; // 0.2s - 0.8s

      const duration =
        Math.floor(Math.random() * (10 - 2) + 2) + "s"; // 2s - 10s

      return { top, left, delay, duration };
    });

    setMeteorData(generated);
  }, [number]);

  return (
    <>
      {meteorData.map((m, idx) => (
        <span
          key={"meteor-" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        ></span>
      ))}
    </>
  );
};
