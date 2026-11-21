import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";
import NudgeHeader from "@/components/kit/NudgeHeader";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Service = { title: string; description?: string; tags?: string[]; href?: string; linkText?: string };

type ServicesCanvasBoardProps = {
  note?: string;
  title?: string;
  description?: string;
  items?: Service[];
  linkText?: string;
  ariaLabel?: string;
  className?: string;
};

const FOLDERS = [
  "bg-[var(--tint-3)] text-secondary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-[var(--tint-1)] text-secondary-foreground",
  "bg-accent text-accent-foreground",
];

const NOTES = [
  "bg-[color-mix(in_srgb,var(--tint-3)_45%,var(--background))]",
  "bg-[color-mix(in_srgb,var(--secondary)_45%,var(--background))]",
  "bg-[color-mix(in_srgb,var(--tint-1)_45%,var(--background))]",
  "bg-[color-mix(in_srgb,var(--accent)_30%,var(--background))]",
];

const TILTS = [-6, 2, -9, 6, 7, -4, 9, -2, 5, -7, 3, -5];
const OFFSETS = [
  "mt-[1.5rem] ml-[0.5rem]",
  "mt-[3rem] ml-[1.5rem]",
  "mt-0 ml-[2.5rem]",
  "mt-[2.25rem] ml-[1rem]",
  "mt-[0.75rem] ml-[3rem]",
  "mt-[2.75rem] ml-0",
  "mt-[0.5rem] ml-[2rem]",
  "mt-[1.75rem] ml-[1.25rem]",
];

const ServicesCanvasBoard = ({
  note,
  title = "Core capabilities",
  description,
  items = [
    { title: "Strategy", description: "We find the real problem before anyone opens a design file.", tags: ["Product Strategy", "Research", "Design Strategy", "User Flows", "Information Architecture"] },
    { title: "Design", description: "Interfaces and brands that feel obvious the first time.", tags: ["UX Design", "UI Design", "Interaction Design", "Web Design", "Prototyping"] },
    { title: "Systems", description: "Libraries your team can keep building with after we leave.", tags: ["Design Systems", "Component Libraries", "Design Tokens", "Responsive Design"] },
    { title: "Motion", description: "Small moments that make a product feel alive.", tags: ["Micro-interactions", "Transitions", "Motion Direction", "Brand Animation"] },
  ],
  linkText = "Learn more",
  ariaLabel,
  className,
}: ServicesCanvasBoardProps) => {
  const reduce = useReducedMotion();
  const { ease, base } = useKitMotion();
  const line = reduce ? { duration: 0 } : { duration: base * 1.4, ease };
  const pop = (rest: number, index: number) => ({
    hidden: { scale: 0.6, rotate: rest + (rest < 0 ? -8 : 8), opacity: 0 },
    shown: {
      scale: 1,
      rotate: rest,
      opacity: 1,
      transition: reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 420, damping: 17, delay: 0.1 + index * 0.06 },
    },
  });

  return (
    <section aria-label={ariaLabel ?? title ?? "Services"} className={cn("relative py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto w-[var(--container)]">
        <NudgeHeader note={note} title={title} description={description} />
        <motion.div
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          className="relative mt-[clamp(2.5rem,5vw,4.5rem)] grid grid-cols-1 lg:grid-cols-2"
        >
          {items.map((item, index) => {
            const tone = index % FOLDERS.length;
            return (
              <motion.div
                key={`${item.title}-${index}`}
                initial="hidden"
                whileInView="shown"
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                className="relative flex flex-col gap-[1.5rem] px-0 py-[clamp(2rem,4vw,3.5rem)] lg:px-[clamp(1.5rem,4vw,3.5rem)]"
              >
                {index > 0 && (
                  <motion.div
                    aria-hidden="true"
                    variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1 } }}
                    transition={line}
                    className={`absolute inset-x-0 top-0 h-px origin-center bg-foreground ${index < 2 ? "lg:hidden" : ""}`}
                  />
                )}
                {index % 2 === 1 && (
                  <motion.div
                    aria-hidden="true"
                    variants={{ hidden: { scaleY: 0 }, shown: { scaleY: 1 } }}
                    transition={line}
                    className="absolute inset-y-0 left-0 hidden w-px origin-center bg-foreground lg:block"
                  />
                )}
                <motion.div variants={pop(0, 0)} className="flex flex-col items-start self-start">
                  <div aria-hidden="true" className={`ml-[0.5rem] h-[0.625rem] w-[2.25rem] [clip-path:polygon(0_100%,0.625rem_0,calc(100%-0.625rem)_0,100%_100%)] ${FOLDERS[tone]}`} />
                  <h3 className={`px-[0.5rem] py-[0.375rem] font-[family-name:var(--font-label)] text-[length:var(--text-label)] font-medium uppercase leading-none tracking-[-0.03em] whitespace-nowrap ${FOLDERS[tone]}`}>{item.title}</h3>
                </motion.div>
                {item.description && <p className="max-w-[32rem] text-[length:var(--text-body)] leading-[1.5] text-balance text-muted-foreground">{item.description}</p>}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap items-start pb-[1rem] lg:px-[1.5rem]">
                    {item.tags.map((tag, tagIndex) => (
                      <motion.p
                        key={`${tag}-${tagIndex}`}
                        variants={pop(TILTS[(tagIndex + index * 3) % TILTS.length], tagIndex + 1)}
                        className={`mr-[clamp(0.75rem,2vw,1.75rem)] p-[1rem] text-[length:var(--text-small)] font-medium leading-[1.4] whitespace-nowrap ${OFFSETS[(tagIndex + index) % OFFSETS.length]} ${NOTES[tone]}`}
                      >
                        {tag}
                      </motion.p>
                    ))}
                  </div>
                )}
                {item.href && (
                  <a href={item.href} className="btn-link self-start">
                    {item.linkText ?? linkText}
                    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-[0.875rem]" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCanvasBoard;
