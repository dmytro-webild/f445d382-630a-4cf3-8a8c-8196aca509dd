"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MotionMedia } from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type ImageScrollParallaxProps = {
  imageSrc?: string;
  imageAlt?: string;
  strength?: number;
  className?: string;
};

const ImageScrollParallax = ({
  imageSrc = "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907729-otbhav9p.jpg",
  imageAlt = "",
  strength = 0.15,
  className = "",
}: ImageScrollParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const travel = Math.max(0, strength);
  const shift = (travel / (1 + 2 * travel)) * 100;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${shift}%`, `${shift}%`]);

  return (
    <div ref={ref} className={cn("relative aspect-[4/3] w-full overflow-hidden rounded-theme", className)}>
      <MotionMedia
        src={imageSrc}
        alt={imageAlt}
        aria-hidden={imageAlt === ""}
        loading="lazy"
        decoding="async"
        style={{ y: reduce ? 0 : y, top: `${-travel * 100}%`, height: `${(1 + 2 * travel) * 100}%` }}
        className="absolute inset-x-0 w-full object-cover will-change-transform"
      />
    </div>
  );
};

export default ImageScrollParallax;
