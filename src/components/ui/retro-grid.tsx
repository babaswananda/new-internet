import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export function RetroGrid({
  className,
  angle = 45,
}: {
  className?: string;
  angle?: number;
}) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let pos = 0;

    const animate = () => {
      pos += 3; // Faster but still smooth
      if (pos >= 104) pos = 0;
      grid.style.backgroundPosition = `0px ${pos}px`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:400px]",
        className,
      )}
      style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          ref={gridRef}
          className="[background-repeat:repeat] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:center_center] [width:600vw]"
          style={{
            backgroundSize: "104px 104px",
            backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.4) 0.5px, transparent 0.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0.5px, transparent 0.5px)",
          }}
        />
      </div>

      {/* Black gradient on top */}
      <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-black via-black to-transparent" />
    </div>
  );
}