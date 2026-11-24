import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";
import NudgeHeader from "@/components/kit/NudgeHeader";
import NudgeFrame from "@/components/kit/NudgeFrame";
import ImageScrollParallax from "@/components/animation/ImageScrollParallax";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Project = {
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  imageSrc: string;
  imageAlt?: string;
  href?: string;
};

type GalleryFolderStackProps = {
  note?: string;
  title?: string;
  description?: string;
  tabLabel?: string;
  linkText?: string;
  fileLabel?: string;
  items?: Project[];
  ariaLabel?: string;
  className?: string;
};

const DEFAULT_ITEMS: Project[] = [
  { title: "Kroma — Identity & motion system", date: "2024", description: "A comprehensive brand system with adaptive typography, kinetic graphics, and generative patterns.", tags: ["Brand Identity", "Motion", "Design System"], imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907729-otbhav9p.jpg?_wi=1", imageAlt: "Animated cartoon children playing", href: "#" },
  { title: "Velo — Spatial Audio Interface", date: "2023", description: "Next-generation audio suite featuring real-time spatial positioning and reactive UI nodes.", tags: ["UI/UX", "Audio", "3D Web"], imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907731-z5szt3fr.jpg?_wi=1", imageAlt: "Magical cartoon storytime scene", href: "#" },
  { title: "Aura — Generative Light Sculpture", date: "2024", description: "Interactive installation driven by environmental sensors and procedural shaders.", tags: ["Installation", "WebGL", "Sensors"], imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907731-eywoyn9b.jpg", imageAlt: "Group activity and cartoon play", href: "#" },
  { title: "Orbit — Autonomous Data Engine", date: "2023", description: "Real-time analytics dashboard with predictive node mapping and fluid layouts.", tags: ["Dashboard", "Analytics", "Data Vis"], imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907732-769380mm.jpg", imageAlt: "Children crafting with cartoon building blocks", href: "#" },
];

const TONES = [
  { card: "bg-secondary text-secondary-foreground", chip: "bg-deep text-secondary", frame: "foreground" as const, deep: false },
  { card: "bg-deep text-deep-foreground", chip: "bg-foreground text-background", frame: "foreground" as const, deep: true },
  { card: "bg-[var(--tint-1)] text-secondary-foreground", chip: "bg-deep text-[var(--tint-1)]", frame: "foreground" as const, deep: false },
  { card: "bg-accent text-accent-foreground", chip: "bg-background text-accent", frame: "background" as const, deep: false },
];

const TAB_PLACE = [
  "lg:ml-0 lg:pl-[1.5rem] lg:pr-[5.5rem] lg:[clip-path:polygon(0_0,calc(100%-4.5rem)_0,100%_100%,0_100%)]",
  "lg:ml-[18%] lg:px-[5.5rem] lg:[clip-path:polygon(4.5rem_0,calc(100%-4.5rem)_0,100%_100%,0_100%)]",
  "lg:ml-[44%] lg:px-[5.5rem] lg:[clip-path:polygon(4.5rem_0,calc(100%-4.5rem)_0,100%_100%,0_100%)]",
  "lg:ml-auto lg:mr-[5%] lg:px-[5.5rem] lg:[clip-path:polygon(4.5rem_0,calc(100%-4.5rem)_0,100%_100%,0_100%)]",
];

const SHRINK = 0.05;
const TILT = 8;
const PEEK = 14;

type CardProps = { item: Project; index: number; total: number; progress: MotionValue<number>; tabLabel: string; linkText: string; fileLabel: string };

const FolderCard = ({ item, index, total, progress, tabLabel, linkText, fileLabel }: CardProps) => {
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const tone = TONES[index % TONES.length];
  const deepTone = tone.deep ? "deep" : undefined;
  const lastIndex = total - 1;
  const segment = 1 / Math.max(lastIndex, 1);
  const start = Math.min(index * segment, 0.999);
  const behind = lastIndex - index;
  const scale = useTransform(progress, [start, 1], [1, 1 - behind * SHRINK]);
  const rotateX = useTransform(progress, [start, Math.min(start + segment, 1)], [0, behind ? TILT : 0]);
  const dim = useTransform(progress, [start, 1], [0, Math.min(behind * 0.16, 0.5)]);
  const still = reduce || !behind;
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="sticky [perspective:1600px]" style={{ top: `calc(clamp(4.5rem, 10svh, 7rem) + ${index * PEEK}px)` }}>
      <motion.article style={still ? undefined : { scale, rotateX }} className="relative flex w-full origin-top flex-col will-change-transform">
        <div
          data-tone={deepTone}
          className={cn(
            "relative -mb-px flex h-[2.75rem] w-fit items-center gap-[0.5rem] pl-[1.25rem] pr-[3.75rem] [clip-path:polygon(0_0,calc(100%-2.75rem)_0,100%_100%,0_100%)] lg:h-[4.5rem]",
            TAB_PLACE[index % TAB_PLACE.length],
            tone.card,
          )}
        >
          <svg viewBox="0 0 12 12" aria-hidden="true" className="size-[0.75rem] flex-none" fill="currentColor">
            <path d="M0 8h4v4H0zM4 4h4v8H4zM8 0h4v12H8z" />
          </svg>
          <p aria-hidden="true" className="whitespace-nowrap font-[family-name:var(--font-label)] text-[length:var(--text-label)] uppercase leading-none">
            {tabLabel} {number}
          </p>
          {!still && <motion.div aria-hidden="true" style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />}
        </div>
        <div
          data-tone={deepTone}
          className={cn(
            "relative flex h-[calc(100svh-clamp(4.5rem,10svh,7rem)-5.5rem)] max-h-[48rem] flex-col gap-[1.25rem] p-[0.75rem] lg:grid lg:h-[min(calc(100svh-clamp(4.5rem,10svh,7rem)-8rem),44rem)] lg:grid-cols-2 lg:gap-0 lg:p-[1rem]",
            tone.card,
          )}
        >
          <div className="flex min-w-0 flex-none flex-col gap-[1.25rem] px-[0.5rem] pt-[0.75rem] lg:h-full lg:justify-between lg:px-[1rem] lg:pb-[1rem] lg:pt-[2rem]">
            <div className="flex flex-col gap-[0.75rem] lg:gap-[1.25rem]">
              {item.date && (
                <div className="flex items-center gap-[0.625rem]">
                  <div aria-hidden="true" className="size-[0.5rem] flex-none rounded-full bg-current" />
                  <p className="whitespace-nowrap font-[family-name:var(--font-label)] text-[length:var(--text-small)] uppercase leading-none">{item.date}</p>
                </div>
              )}
              <h3 className="text-balance font-[family-name:var(--font-body)] text-[length:var(--text-h2)] font-medium leading-[1.05] tracking-[-0.03em] [overflow-wrap:anywhere]">{item.title}</h3>
              {item.description && <p className="max-w-[26rem] text-balance text-[length:var(--text-body)] leading-[1.4]">{item.description}</p>}
              {item.href && (
                <a href={item.href} className="btn-link mt-[0.25rem] self-start text-inherit">
                  {linkText}
                  <svg viewBox="0 0 12 12" aria-hidden="true" className="size-[0.625rem]" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 10 L10 2 M4 2 H10 V8" />
                  </svg>
                </a>
              )}
            </div>
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-[0.75rem]">
                {item.tags.map((tag, tagIndex) => (
                  <motion.div
                    key={`${tag}-${tagIndex}`}
                    initial={reduce ? false : { scale: 0.6, rotate: -8, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 440, damping: 17 }}
                    className={cn("pb-[0.375rem] pl-[0.5rem] pr-[0.625rem] pt-[0.75rem] [clip-path:polygon(0_0,1.25rem_0,1.625rem_0.375rem,100%_0.375rem,100%_100%,0_100%)]", tone.chip)}
                  >
                    <p className="whitespace-nowrap font-[family-name:var(--font-label)] text-[length:var(--text-small)] uppercase leading-none">{tag}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          <NudgeFrame tone={tone.frame} delay={0.1} className="min-h-[10rem] flex-1 lg:h-full lg:flex-none">
            <motion.div
              variants={{ hidden: { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 }, shown: { clipPath: "inset(0% 0% 0% 0%)", scale: 1 } }}
              transition={reduce ? { duration: 0 } : { duration: kit.base, ease: kit.easeInOut }}
              className="absolute inset-0 overflow-hidden"
            >
              <ImageScrollParallax imageSrc={item.imageSrc} imageAlt={item.imageAlt ?? item.title} strength={index % 2 ? 0.16 : 0.1} className="absolute inset-0 aspect-auto h-full rounded-none" />
            </motion.div>
            {fileLabel && (
              <div className={cn("absolute right-[1rem] top-[1rem] flex items-center gap-[0.5rem] p-[0.375rem] pr-[0.625rem]", tone.chip)}>
                <svg viewBox="0 0 20 20" aria-hidden="true" className="size-[1.25rem] flex-none" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 1 H19 V19 H1 Z M4 15 L8.5 9 L12 12.5 L16 6" />
                </svg>
                <p className="whitespace-nowrap font-[family-name:var(--font-label)] text-[length:var(--text-small)] uppercase leading-none">{fileLabel}</p>
              </div>
            )}
          </NudgeFrame>
          {!still && <motion.div aria-hidden="true" style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />}
        </div>
      </motion.article>
    </li>
  );
};

const GalleryFolderStack = ({
  note = "explore our work!",
  title = "Featured works",
  description = "A showcase of what happens when curiosity drives the process.",
  tabLabel = "Project",
  linkText = "View project",
  fileLabel = "Image.jpg",
  items = DEFAULT_ITEMS,
  ariaLabel,
  className,
}: GalleryFolderStackProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.0005 });

  return (
    <section data-scene aria-label={ariaLabel ?? title ?? "Featured works"} className={cn("relative overflow-x-clip py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto w-[var(--container)]">
        <NudgeHeader note={note} title={title} description={description} />
        <ul ref={listRef} className="mt-[clamp(2.5rem,5vw,4.5rem)] flex flex-col gap-[12svh]">
          {items.map((item, index) => (
            <FolderCard key={index} item={item} index={index} total={items.length} progress={progress} tabLabel={tabLabel} linkText={linkText} fileLabel={fileLabel} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GalleryFolderStack;
