import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useKitMotion } from "@/components/kit/kitMotion";
import NudgeFrame from "@/components/kit/NudgeFrame";

type FooterLink = { text: string; href?: string };
type FooterColumn = { title: string; links: FooterLink[] };

type FooterRulerIndexProps = {
  wordmark?: string;
  columns?: FooterColumn[];
  city?: string;
  timeZone?: string;
  copyright?: string;
  backToTop?: string;
  ariaLabel?: string;
  className?: string;
};

const RULER = Array.from({ length: 30 }, (_, i) => i);

const defaultColumns: FooterColumn[] = [
  { title: "Pages", links: [{ text: "Home", href: "#" }, { text: "Work", href: "#gallery" }, { text: "Services", href: "#services" }, { text: "Contact", href: "#contact" }] },
  { title: "Social", links: [{ text: "Instagram", href: "#" }, { text: "LinkedIn", href: "#" }, { text: "Dribbble", href: "#" }] },
];

const formatTime = (timeZone?: string) => {
  try {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit", timeZone }).format(new Date());
  } catch {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit" }).format(new Date());
  }
};

const FooterRulerIndex = ({
  wordmark = "Bramble",
  columns = defaultColumns,
  city = "Chicago",
  timeZone,
  copyright = "©2026 Bramble Studio",
  backToTop = "Back to top",
  ariaLabel,
  className = "",
}: FooterRulerIndexProps) => {
  const reduce = useReducedMotion();
  const { ease, base, slow } = useKitMotion();
  const footerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const measure = () => setHeight(el.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const tick = () => setTime(formatTime(timeZone));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  const rise = (delay: number) => ({
    initial: false as const,
    animate: { opacity: 1, y: "0rem" },
    transition: reduce ? { duration: 0 } : { duration: base, ease, delay },
  });

  return (
    <section
      aria-label={ariaLabel ?? "Footer"}
      style={{ height: height ? `${height}px` : "auto", clipPath: "inset(0 0 0 0)" }}
      className={`relative w-full [--frame:var(--secondary)] ${className}`}
    >
      <div className={height ? "fixed inset-x-0 bottom-0" : "relative"}>
        <footer ref={footerRef} data-tone="deep" className="relative w-full overflow-hidden bg-background pb-[clamp(1.25rem,2.5vw,2rem)] text-foreground">
          <div aria-hidden="true" className="relative h-[2.5rem] overflow-hidden border-b border-border">
            <div className="absolute inset-x-0 top-0 h-[0.7rem] bg-[linear-gradient(to_right,color-mix(in_srgb,var(--deep-foreground)_40%,transparent)_1px,transparent_1px)] bg-[length:3.125rem_100%]" />
            <div className="absolute inset-x-0 top-0 h-[1.1rem] bg-[linear-gradient(to_right,color-mix(in_srgb,var(--deep-foreground)_40%,transparent)_1px,transparent_1px)] bg-[length:6.25rem_100%]" />
            {RULER.map((n) => (
              <p key={n} style={{ left: `${n * 6.25}rem` }} className="absolute top-[1.35rem] -translate-x-1/2 font-[family-name:var(--font-label)] text-[length:calc(var(--text-small)*0.6)] leading-none text-[color-mix(in_srgb,var(--deep-foreground)_40%,transparent)]">
                {n * 100}
              </p>
            ))}
          </div>

          <div className="mx-auto mt-[clamp(3rem,7vw,6rem)] flex w-[var(--container)] flex-col gap-[clamp(3rem,6vw,5rem)]">
            <div className="flex flex-col gap-[clamp(2.5rem,5vw,4rem)] lg:flex-row lg:items-start lg:justify-between lg:gap-[var(--gap)]">
              <div className="min-w-0 [--secondary:var(--frame)]">
                <NudgeFrame tone="secondary" className="inline-block px-[clamp(0.6rem,1.6vw,1.5rem)] py-[clamp(0.4rem,1vw,1rem)]">
                  <div className="overflow-hidden pb-[0.15em] -mb-[0.15em]">
                    <motion.p
                      variants={{ hidden: { y: "105%" }, shown: { y: "0%" } }}
                      transition={reduce ? { duration: 0 } : { duration: slow, ease, delay: 0.15 }}
                      style={{ fontSize: `min(12vw, ${(78 / Math.max(Array.from(wordmark).length, 6)).toFixed(2)}vw)` }}
                      className="whitespace-nowrap font-[family-name:var(--font-heading)] font-bold uppercase leading-[1]"
                    >
                      {wordmark}
                    </motion.p>
                  </div>
                </NudgeFrame>
              </div>

              <div className="flex flex-wrap gap-x-[clamp(3rem,6vw,6rem)] gap-y-[2.5rem]">
                {columns.map((column, index) => (
                  <motion.div key={`${column.title}-${index}`} {...rise(0.1 + index * 0.08)} className="flex flex-col gap-[1rem]">
                    <p className="whitespace-nowrap font-[family-name:var(--font-label)] text-[length:var(--text-label)] uppercase leading-[1.2] text-muted-foreground">{column.title}</p>
                    <ul className="flex flex-col gap-[0.4rem]">
                      {column.links.map((link, i) => (
                        <li key={`${link.text}-${i}`}>
                          <a href={link.href ?? "#"} className="whitespace-nowrap text-[length:var(--text-body-lg)] leading-[1.35] transition-opacity duration-300 hover:opacity-60">
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div {...rise(0.2)} className="flex flex-col gap-[1rem] border-t border-border pt-[clamp(1.25rem,2vw,1.75rem)] lg:flex-row lg:items-center lg:justify-between">
              <p aria-hidden="true" className="whitespace-nowrap font-[family-name:var(--font-label)] text-[length:var(--text-label)] uppercase leading-[1.2] tabular-nums">
                {city} {time}
              </p>
              <p className="whitespace-nowrap font-[family-name:var(--font-label)] text-[length:var(--text-label)] uppercase leading-[1.2] text-muted-foreground">{copyright}</p>
              {backToTop && (
                <a href="#" className="btn-link self-start lg:self-auto">
                  <p>{backToTop}</p>
                  <svg viewBox="0 0 12 12" aria-hidden="true" className="size-[0.7rem]" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M6 11V1M1.5 5.5 6 1l4.5 4.5" />
                  </svg>
                </a>
              )}
            </motion.div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FooterRulerIndex;
