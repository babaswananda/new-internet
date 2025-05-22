"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const CanvasRevealEffect = ({
  containerClassName,
  colors = [[255, 255, 255]],
  dotSize = 2,
  dotCount = 100,
  animationSpeed = 2,
}: {
  containerClassName?: string;
  colors?: number[][];
  dotSize?: number;
  dotCount?: number;
  animationSpeed?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === canvas) {
          const { width, height } = entry.contentRect;
          canvas.width = width;
          canvas.height = height;
        }
      }
    });

    resizeObserver.observe(canvas);

    const dots: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: number[];
      size: number;
    }[] = [];

    for (let i = 0; i < dotCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * animationSpeed,
        vy: (Math.random() - 0.5) * animationSpeed,
        color,
        size: dotSize,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off walls
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dot.color[0]}, ${dot.color[1]}, ${dot.color[2]}, 0.7)`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.unobserve(canvas);
    };
  }, [colors, dotSize, dotCount, animationSpeed]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", containerClassName)}>
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ opacity: 0.5 }}
      />
    </div>
  );
};
