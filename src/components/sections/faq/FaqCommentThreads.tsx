import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";
import NudgeHeader from "@/components/kit/NudgeHeader";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Question = { title: string; description: string; reactions?: number };

type FaqCommentThreadsProps = {
  note?: string;
  title?: string;
  description?: string;
  headerLabel?: string;
  askerLabel?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  items?: Question[];
  ariaLabel?: string;
  className?: string;
};

const AVATARS = [
  "bg-[color-mix(in_srgb,var(--secondary)_45%,var(--background))]",
  "bg-[color-mix(in_srgb,var(--tint-3)_45%,var(--background))]",
  "bg-[color-mix(in_srgb,var(--tint-1)_45%,var(--background))]",
  "bg-[color-mix(in_srgb,var(--accent)_45%,var(--background))]",
];

const CHIPS = [
  "border-secondary bg-[color-mix(in_srgb,var(--secondary)_15%,var(--background))] text-secondary",
  "border-[var(--tint-3)] bg-[color-mix(in_srgb,var(--tint-3)_15%,var(--background))] text-[var(--tint-3)]",
  "border-[var(--tint-1)] bg-[color-mix(in_srgb,var(--tint-1)_15%,var(--background))] text-[var(--tint-1)]",
  "border-accent bg-[color-mix(in_srgb,var(--accent)_15%,var(--background))] text-accent",
];

const Reaction = ({ index }: { index: number }) => {
  const kind = index % 4;
  if (kind === 0)
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="size-[0.875rem] fill-current">
        <path d="M2 7h3v7H2zM6 7l3-5c1.2 0 1.8.8 1.5 2L10 6.5h3.2c.9 0 1.5.8 1.3 1.7l-1.1 4.6c-.2.7-.8 1.2-1.5 1.2H6z" />
      </svg>
    );
  if (kind === 1)
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="size-[0.875rem]">
        <circle cx="8" cy="8" r="7" className="fill-current" />
        <path d="M5 9.5c1.6 1.8 4.4 1.8 6 0" fill="none" stroke="var(--background)" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="5.8" cy="6.2" r="0.9" fill="var(--background)" />
        <circle cx="10.2" cy="6.2" r="0.9" fill="var(--background)" />
      </svg>
    );
  if (kind === 2)
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="size-[0.875rem]" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 13a6 6 0 0 1 12 0M4.5 13a3.5 3.5 0 0 1 7 0M7 13a1 1 0 0 1 2 0" />
      </svg>
    );
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-[0.875rem]">
      <rect x="3" y="3" width="10" height="10" transform="rotate(45 8 8)" className="fill-current" />
      <path d="M8 5.2v3.4M8 10.4v.4" stroke="var(--background)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

const FaqCommentThreads = ({
  note,
  title = "FAQ",
  description,
  headerLabel = "Question",
  askerLabel = "Visitor",
  avatarSrc = "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540302977-kttkecfz.jpg",
  avatarAlt = "Studio lead",
  items = [
    { title: "Do you design websites, or only digital products?", description: "Both. Next to app and dashboard work we design and build marketing sites, with a story first and visuals second." },
    { title: "What does a project with Bramble look like?", description: "A short discovery week, then design in two week sprints with a live prototype you can click at every review." },
    { title: "Do you build design systems, or just screens?", description: "Systems, whenever the product will outlive the launch. A shared library and tokens are what let your team keep shipping." },
    { title: "How soon can we start?", description: "We usually book four to six weeks ahead. Small brand projects can sometimes slot in sooner." },
  ],
  ariaLabel,
  className,
}: FaqCommentThreadsProps) => {
  const reduce = useReducedMotion();
  const { ease, base } = useKitMotion();
  const columns = [0, 1].map((side) => items.map((item, index) => ({ item, index })).filter(({ index }) => index % 2 === side));

  return (
    <section aria-label={ariaLabel ?? title ?? "FAQ"} className={cn("relative py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto w-[var(--container)]">
        <NudgeHeader note={note} title={title} description={description} />
        <div className="mt-[clamp(2.5rem,5vw,4.5rem)] flex flex-col gap-[clamp(1.5rem,3vw,2.5rem)] lg:flex-row lg:items-start lg:gap-[clamp(2rem,6vw,9.5rem)]">
          {columns.map((column, side) => (
            <div key={side} className={`contents lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-[clamp(2rem,6vw,7rem)] ${side === 1 ? "lg:mt-[6rem]" : ""}`}>
              {column.map(({ item, index }) => {
                const tone = index % AVATARS.length;
                const rest = side === 0 ? -8 : 8;
                return (
                  <motion.div
                    key={`${item.title}-${index}`}
                    style={{ order: index }}
                    initial="hidden"
                    whileInView="shown"
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    variants={{
                      hidden: { scale: 0.6, rotate: rest, opacity: 0 },
                      shown: { scale: 1, rotate: 0, opacity: 1, transition: reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 18 } },
                    }}
                    className="flex flex-col gap-[1rem] rounded-[var(--radius-card)] bg-background p-[1rem] shadow-lg ring-1 ring-border"
                  >
                    <p className="border-b border-border pb-[0.875rem] pt-[0.25rem] text-[length:var(--text-small)] leading-none text-muted-foreground">{headerLabel}</p>
                    <div className="flex gap-[1rem]">
                      <div aria-hidden="true" className={`flex size-[3rem] shrink-0 items-center justify-center rounded-full text-foreground ${AVATARS[tone]}`}>
                        <svg viewBox="0 0 16 16" className="size-[1.125rem] fill-current">
                          <circle cx="8" cy="5" r="3" />
                          <path d="M2.5 15c0-3.3 2.4-5.5 5.5-5.5s5.5 2.2 5.5 5.5z" />
                        </svg>
                      </div>
                      <div className="flex min-w-0 flex-col items-start gap-[0.5rem]">
                        <p className="font-[family-name:var(--font-label)] text-[length:var(--text-label)] leading-none text-muted-foreground">{askerLabel}</p>
                        <h3 className="text-balance font-[family-name:var(--font-body)] text-[length:max(var(--text-body-lg),calc(var(--text-h3)*0.6))] font-medium leading-[1.3] tracking-[-0.02em]">{item.title}</h3>
                        <div className={`mt-[0.25rem] flex items-center gap-[0.375rem] border-[1.5px] px-[0.375rem] py-[0.25rem] ${CHIPS[tone]}`}>
                          <Reaction index={tone} />
                          <p className="font-[family-name:var(--font-label)] text-[length:var(--text-small)] leading-none text-foreground">{item.reactions ?? 1}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[0.5rem] flex gap-[1rem]">
                      <Media src={avatarSrc} alt={avatarAlt} loading="lazy" decoding="async" className="size-[3rem] shrink-0 rounded-full object-cover" />
                      <motion.p
                        variants={{ hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" }, shown: { opacity: 1, clipPath: "inset(0 0% 0 0)" } }}
                        transition={reduce ? { duration: 0 } : { duration: base, ease, delay: 0.3 }}
                        className="kit-card min-w-0 flex-1 p-[1rem] text-[length:var(--text-body)] leading-[1.5]"
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqCommentThreads;
