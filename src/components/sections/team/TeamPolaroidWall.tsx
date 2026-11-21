import { useRef, useSyncExternalStore } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ImageScrollParallax from "@/components/animation/ImageScrollParallax";
import NudgeHeader from "@/components/kit/NudgeHeader";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Person = { title: string; description?: string; imageSrc: string; imageAlt?: string };

type TeamPolaroidWallProps = {
  note?: string;
  title?: string;
  description?: string;
  items?: Person[];
  ariaLabel?: string;
  className?: string;
};

const px = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

const defaults: Person[] = [
  { title: "Nora Kim", description: "Founder, design lead", imageSrc: px(7006690) },
  { title: "Eli Brooks", description: "Product designer", imageSrc: px(12311564) },
  { title: "Ana Silva", description: "Brand designer", imageSrc: px(38197025) },
  { title: "Marcus Bell", description: "Design engineer", imageSrc: px(36510739) },
];

const TILTS = [-3, 2, -2, 3, -3, 2, -2, 3];
const TAGS = [
  "bg-secondary text-secondary-foreground",
  "bg-[var(--tint-1)] text-secondary-foreground",
  "bg-[var(--tint-3)] text-secondary-foreground",
  "bg-accent text-accent-foreground",
];
const ARROWS = ["fill-secondary", "fill-[var(--tint-1)]", "fill-[var(--tint-3)]", "fill-accent"];
const SPEEDS = [-1, 1];

const queries = ["(min-width: 1280px)", "(min-width: 880px)"];
const subscribe = (onChange: () => void) => {
  const lists = queries.map((query) => window.matchMedia(query));
  lists.forEach((list) => list.addEventListener("change", onChange));
  return () => lists.forEach((list) => list.removeEventListener("change", onChange));
};
const readColumns = () => (window.matchMedia(queries[0]).matches ? 4 : window.matchMedia(queries[1]).matches ? 3 : 2);
const useColumns = () => useSyncExternalStore(subscribe, readColumns, () => 4);

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

type PolaroidProps = { item: Person; index: number; columns: number; pass: MotionValue<number>; reduce: boolean };

const Polaroid = ({ item, index, columns, pass, reduce }: PolaroidProps) => {
  const column = index % columns;
  const speed = SPEEDS[column % 2] * (columns > 2 ? 3 : 1.5);
  const drift = useTransform(pass, (p) => `${(0.5 - clamp01(p)) * speed}rem`);
  const tilt = TILTS[index % TILTS.length];
  const tone = index % 4;
  const right = index % 2 === 0;
  const first = item.title.trim().split(/\s+/)[0] ?? item.title;

  return (
    <motion.li style={{ y: reduce ? 0 : drift }} className="min-w-0 will-change-transform">
      <motion.div
        initial={reduce ? false : { scale: 0.6, rotate: tilt + 8, opacity: 0 }}
        whileInView={{ scale: 1, rotate: tilt, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 17, delay: column * 0.06 }}
        className="relative bg-background p-[clamp(0.5rem,1vw,0.75rem)] pb-[clamp(0.875rem,1.6vw,1.25rem)] shadow-lg ring-1 ring-border"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <ImageScrollParallax imageSrc={item.imageSrc} imageAlt={item.imageAlt ?? item.title} strength={0.12} className="absolute inset-0 aspect-auto h-full rounded-none" />
        </div>
        <div className="flex flex-col gap-[0.75rem] pt-[clamp(0.75rem,1.4vw,1rem)]">
          <h3 className="font-[family-name:var(--font-body)] text-[length:var(--text-body-lg)] font-medium leading-[1.2] tracking-[-0.01em] [overflow-wrap:anywhere]">{item.title}</h3>
          {item.description && (
            <p className="font-mono text-[length:var(--text-label)] uppercase leading-[1.3] tracking-[var(--label-tracking)] text-muted-foreground [overflow-wrap:anywhere]">{item.description}</p>
          )}
        </div>
        <div
          aria-hidden="true"
          className={cn(
            "absolute top-[-0.75rem] flex items-start",
            right ? "right-[-0.5rem] rotate-[8deg] flex-row" : "left-[-0.5rem] -rotate-[8deg] flex-row-reverse",
          )}
        >
          <p className={cn("whitespace-nowrap rounded-full border-[1.5px] border-foreground px-[0.75rem] py-[0.3rem] font-mono text-[length:var(--text-label)] uppercase leading-none", TAGS[tone])}>
            {first}
          </p>
          <svg viewBox="0 0 20 20" className={cn("-mt-[0.5rem] size-[1.1rem] stroke-foreground", ARROWS[tone], right ? "" : "-scale-x-100")} strokeWidth="1.5" strokeLinejoin="round">
            <path d="M18 2 L3 7 L9 9 L11 15 Z" />
          </svg>
        </div>
      </motion.div>
    </motion.li>
  );
};

const TeamPolaroidWall = ({ note = "say hi!", title = "The team", description, items = defaults, ariaLabel, className }: TeamPolaroidWallProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const reduce = !!useReducedMotion();
  const columns = useColumns();
  const { scrollYProgress: pass } = useScroll({ target: listRef, offset: ["start end", "end start"] });

  return (
    <section
      aria-label={ariaLabel ?? title ?? "Team"}
      className={cn("relative z-10 flex min-h-svh flex-col justify-center overflow-x-clip bg-background bg-[linear-gradient(to_right,color-mix(in_srgb,var(--foreground)_5%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--foreground)_5%,transparent)_1px,transparent_1px)] bg-[length:6.25rem_6.25rem] bg-[position:center_top] py-[var(--section-space)] text-foreground", className)}
    >
      <div className="mx-auto w-[var(--container)]">
        <NudgeHeader note={note} title={title} description={description} />
        <ul
          ref={listRef}
          className="mt-[clamp(2.5rem,5vw,4.5rem)] grid grid-cols-2 gap-x-[clamp(1rem,2.5vw,2.5rem)] gap-y-[clamp(2.5rem,5vw,4rem)] pt-[1rem] lg:grid-cols-3 xl:grid-cols-4"
        >
          {items.map((item, index) => (
            <Polaroid key={index} item={item} index={index} columns={columns} pass={pass} reduce={reduce} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamPolaroidWall;
