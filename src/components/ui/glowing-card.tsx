"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  spread?: number;
  proximity?: number;
  inactiveZone?: number;
}

export function GlowingCard({
  children,
  className,
  borderWidth = 1,
  spread = 40,
  proximity = 100,
  inactiveZone = 0.01,
}: GlowingCardProps) {
  return (
    <div className={cn("relative rounded-xl", className)}>
      <GlowingEffect
        spread={spread}
        glow={true}
        disabled={false}
        proximity={proximity}
        inactiveZone={inactiveZone}
        borderWidth={borderWidth}
      />
      {children}
    </div>
  );
}
