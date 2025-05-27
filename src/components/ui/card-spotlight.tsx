"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export const CardSpotlight = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

=======
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
>>>>>>> a8bb613d961596c562319d771cbc81914bce23ba
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
<<<<<<< HEAD
    const { left, top } = currentTarget.getBoundingClientRect();
=======
    let { left, top } = currentTarget.getBoundingClientRect();

>>>>>>> a8bb613d961596c562319d771cbc81914bce23ba
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

<<<<<<< HEAD
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className={cn(
        "group/spotlight relative rounded-xl border border-neutral-800 bg-black p-8",
=======
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800",
>>>>>>> a8bb613d961596c562319d771cbc81914bce23ba
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
<<<<<<< HEAD
      {/* Glowing Effect with border width 1 */}
=======
      {/* Glowing Effect */}
>>>>>>> a8bb613d961596c562319d771cbc81914bce23ba
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
<<<<<<< HEAD
        borderWidth={1}
      />

      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
=======
        borderWidth={3}
      />

      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
>>>>>>> a8bb613d961596c562319d771cbc81914bce23ba
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
<<<<<<< HEAD
      <div className="relative z-10">{children}</div>
=======
      {children}
>>>>>>> a8bb613d961596c562319d771cbc81914bce23ba
    </div>
  );
};
