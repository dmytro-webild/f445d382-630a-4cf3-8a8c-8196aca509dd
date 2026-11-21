import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useCoverNext } from "@/components/kit/sectionNeighbour";
import { useKitMotion } from "@/components/kit/kitMotion";
import NudgeFrame from "@/components/kit/NudgeFrame";
import Media from "@/components/kit/Media";

type Cta = { text: string; href?: string };
type Avatar = { imageSrc: string; imageAlt?: string };

type HeroCanvasNameProps = {
  note?: string;
  title?: string;
  notes?: string[];
  status?: string;
  description?: string;
  primaryButton?: Cta;
  tags?: string[];
  avatars?: Avatar[];
  timeZone?: string;
  introDelay?: number;
  ariaLabel?: string;
  className?: string;
};

const NOTE_SLOTS = [
  { tone: "bg-[color-mix(in_srgb,var(--tint-3)_45%,var(--background))]", place: "left-[-1.5rem] top-[-2.6rem] origin-bottom-left", tilt: 7 },
  { tone: "bg-muted", place: "right-[-1.5rem] top-[-2.4rem] origin-bottom-right", tilt: -4 },
];

const TAG_SLOTS = [
  { tone: "bg-[var(--tint-1)] text-secondary-foreground", place: "left-[6%] top-[62%]", tilt: 5, arrow: "right" as const },
  { tone: "bg-accent text-accent-foreground", place: "right-[20%] top-[55%]", tilt: -12, arrow: "left" as const },
];

const AVATAR_SLOTS = [
  { place: "left-[4%] bottom-[14%] lg:left-[8%] lg:bottom-auto lg:top-[46%]", drift: ["translate3d(0px,0px,0)", "translate3d(1.5rem,-1rem,0)", "translate3d(0.5rem,1.25rem,0)", "translate3d(0px,0px,0)"], duration: 11 },
  { place: "right-[4%] bottom-[22%] lg:right-[9%] lg:bottom-auto lg:top-[60%]", drift: ["translate3d(0px,0px,0)", "translate3d(-1.25rem,1rem,0)", "translate3d(-0.25rem,-1.5rem,0)", "translate3d(0px,0px,0)"], duration: 13 },
];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

const formatTime = (timeZone?: string) => {
  try {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit", timeZone }).format(new Date());
  } catch {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit" }).format(new Date());
  }
};

const Pointer = ({ tone, flip }: { tone: string; flip: boolean }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`size-[1.6rem] ${flip ? "-scale-x-100" : ""}`}>
    <path d="M2 2 22 9l-8.5 3.2L10 21z" className={tone} stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const HeroCanvasName = ({
  note = "we are",
  title = "Bramble",
  notes = ["Now designing for Northwind Health", "Recently shipped with Lumen AI"],
  status = "Booking projects for spring",
  description = "We design apps, websites and design systems for growing companies.",
  primaryButton = { text: "Contact us", href: "#contact" },
  tags = ["Product design", "Chicago, IL"],
  avatars = [],
  timeZone,
  introDelay = 0,
  ariaLabel,
  className = "",
}: HeroCanvasNameProps) => {
  const ref = useRef<HTMLElement>(null);
  useCoverNext(ref);
  const reduce = !!useReducedMotion();
  const live = !reduce;
  const { ease, base } = useKitMotion();
  const [time, setTime] = useState("");
  const chars = Array.from(description);
  const typeStart = introDelay + 0.9;
  const [typed, setTyped] = useState(live ? 0 : chars.length);

  useEffect(() => {
    const tick = () => setTime(formatTime(timeZone));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  useEffect(() => {
    if (!live) {
      setTyped(chars.length);
      return;
    }
    let count = 0;
    let interval = 0;
    const begin = window.setTimeout(() => {
      interval = window.setInterval(() => {
        count += 1;
        setTyped(count);
        if (count >= chars.length) window.clearInterval(interval);
      }, 40);
    }, typeStart * 1000);
    return () => {
      window.clearTimeout(begin);
      window.clearInterval(interval);
    };
  }, [live, chars.length, typeStart]);

  const { scrollYProgress: hold } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const stageScale = useTransform(hold, (v) => (live ? 1 - clamp01(v) * 0.06 : 1));
  const shade = useTransform(hold, (v) => (live ? clamp01(v) * 0.35 : 0));

  const rise = (delay: number) =>
    live ? { initial: { opacity: 0, y: "1rem" }, animate: { opacity: 1, y: "0rem" }, transition: { duration: base, ease, delay } } : {};

  const pop = (delay: number, tilt: number) =>
    live
      ? {
          initial: { scale: 0.6, rotate: tilt + 8, opacity: 0 },
          animate: { scale: 1, rotate: tilt, opacity: 1 },
          transition: { type: "spring" as const, stiffness: 420, damping: 16, delay, opacity: { duration: 0.15, delay } },
        }
      : { style: { rotate: tilt } };

  const size = `min(var(--text-display), ${(118 / Math.max(Array.from(title).length, 6)).toFixed(2)}vw)`;
  const words = description.split(" ");
  const wordStarts = words.map((_, index) => words.slice(0, index).reduce((sum, word) => sum + Array.from(word).length + 1, 0));

  return (
    <section ref={ref} aria-label={ariaLabel || "Hero section"} data-scene className={`${live ? "relative -mb-[100svh] h-[200svh]" : "relative h-svh"} ${className}`}>
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div style={{ scale: stageScale }} className="relative h-full w-full will-change-transform">
          <motion.p
            aria-hidden="true"
            {...rise(introDelay)}
            className="absolute inset-x-0 top-[calc(5.5rem+clamp(1rem,3svh,1.5rem))] text-center font-[family-name:var(--font-label)] text-[length:var(--text-small)] uppercase leading-none tabular-nums"
          >
            {time || " "}
          </motion.p>

          {avatars.slice(0, 2).map((avatar, i) => (
            <motion.div key={`${avatar.imageSrc}-${i}`} {...pop(introDelay + 0.5 + i * 0.08, 0)} className={`absolute z-[2] ${AVATAR_SLOTS[i].place}`}>
              <motion.div
                animate={live ? { transform: AVATAR_SLOTS[i].drift } : undefined}
                transition={{ duration: AVATAR_SLOTS[i].duration, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full rounded-bl-none bg-[color-mix(in_srgb,var(--secondary)_45%,var(--background))] p-[0.3rem]"
              >
                <Media src={avatar.imageSrc} alt={avatar.imageAlt ?? ""} aria-hidden={!avatar.imageAlt} loading="eager" decoding="async" className="size-[2.75rem] rounded-full object-cover lg:size-[3rem]" />
              </motion.div>
            </motion.div>
          ))}

          {tags.slice(0, 2).map((tag, i) => (
            <motion.div key={`${tag}-${i}`} {...pop(introDelay + 0.55 + i * 0.06, TAG_SLOTS[i].tilt)} className={`absolute z-[2] hidden lg:block ${TAG_SLOTS[i].place}`}>
              <div className={`flex items-start ${TAG_SLOTS[i].arrow === "left" ? "flex-row-reverse" : ""}`}>
                <p className={`whitespace-nowrap rounded-full border-2 border-foreground px-[1.4rem] py-[0.65rem] font-[family-name:var(--font-label)] text-[length:var(--text-small)] font-medium uppercase leading-none ${TAG_SLOTS[i].tone}`}>
                  {tag}
                </p>
                <div className={`-mt-[1.2rem] text-foreground ${TAG_SLOTS[i].arrow === "left" ? "-mr-[0.4rem]" : "-ml-[0.4rem]"}`}>
                  <Pointer tone={i === 0 ? "fill-[var(--tint-1)]" : "fill-accent"} flip={TAG_SLOTS[i].arrow === "left"} />
                </div>
              </div>
            </motion.div>
          ))}

          <div className="relative z-[3] mx-auto flex h-full w-[var(--container)] flex-col items-center justify-center pt-[5.5rem] text-center">
            {note && (
              <motion.div {...rise(introDelay + 0.1)} className="mb-[clamp(0.75rem,1.5vw,1rem)] flex flex-col items-center">
                <motion.p
                  initial={live ? { clipPath: "inset(0 100% 0 0)" } : false}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: base, ease, delay: introDelay + 0.2 }}
                  className="font-[family-name:var(--font-script,var(--font-heading))] text-[length:var(--text-h3)] leading-[1.1] -rotate-[3deg]"
                >
                  {note}
                </motion.p>
                <svg viewBox="0 0 80 10" aria-hidden="true" className="h-[0.6rem] w-[4.5rem]" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                  <motion.path d="M2 3.5 C 25 2, 55 2, 78 3" initial={live ? { pathLength: 0 } : false} animate={{ pathLength: 1 }} transition={{ duration: base * 0.6, ease, delay: introDelay + 0.5 }} />
                  <motion.path d="M6 7.5 C 30 6, 52 6.2, 74 7" initial={live ? { pathLength: 0 } : false} animate={{ pathLength: 1 }} transition={{ duration: base * 0.6, ease, delay: introDelay + 0.6 }} />
                </svg>
              </motion.div>
            )}

            <div className="relative max-w-full">
              {notes.slice(0, 2).map((item, i) => (
                <motion.p
                  key={`${item}-${i}`}
                  {...pop(introDelay + 0.45 + i * 0.06, NOTE_SLOTS[i].tilt)}
                  className={`absolute z-[1] hidden max-w-[16rem] px-[1rem] py-[0.6rem] text-left text-[length:var(--text-small)] leading-[1.3] text-foreground lg:block ${NOTE_SLOTS[i].tone} ${NOTE_SLOTS[i].place}`}
                >
                  {item}
                </motion.p>
              ))}
              <NudgeFrame tone="secondary" delay={live ? introDelay : 0} className="px-[clamp(0.6rem,2.4vw,2.25rem)] py-[clamp(0.4rem,1.2vw,1.25rem)]">
                <div className="overflow-hidden pb-[0.15em] -mb-[0.15em]">
                  <motion.h1
                    initial={live ? { y: "105%" } : false}
                    animate={{ y: "0%" }}
                    transition={{ duration: base, ease, delay: introDelay + 0.3 }}
                    style={{ fontSize: size }}
                    className="whitespace-nowrap font-[family-name:var(--font-heading)] uppercase leading-[1]"
                  >
                    {title}
                  </motion.h1>
                </div>
              </NudgeFrame>
            </div>

            {status && (
              <motion.div {...rise(introDelay + 0.6)} className="mt-[clamp(1rem,2vw,1.5rem)] flex items-center gap-[0.6rem]">
                <div aria-hidden="true" className="size-[0.85rem] shrink-0 rounded-full bg-secondary" />
                <p className="font-[family-name:var(--font-label)] text-[length:var(--text-small)] uppercase leading-[1.2]">{status}</p>
              </motion.div>
            )}

            {description && (
              <div className="mt-[clamp(1.5rem,4svh,3rem)] max-w-[34rem] text-balance text-[length:var(--text-h3)] leading-[1.15] tracking-[-0.02em]">
                <p className="sr-only">{description}</p>
                {words.map((word, i) => {
                  const start = wordStarts[i];
                  const visible = Array.from(word).slice(0, Math.max(0, typed - start)).join("");
                  const caret = live && typed < chars.length && typed >= start && typed <= start + Array.from(word).length;
                  return (
                    <div key={`${word}-${i}`} aria-hidden="true" className={`relative inline-block ${i < words.length - 1 ? "mr-[0.25em]" : ""}`}>
                      <div className="invisible">{word}</div>
                      <div className="absolute inset-0 flex whitespace-nowrap">
                        {visible}
                        {caret && <div className="ml-[0.05em] h-[1.05em] w-[2px] self-center bg-foreground" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {primaryButton && (
              <motion.div {...rise(introDelay + 0.75)} className="mt-[clamp(1.5rem,4svh,2.75rem)]">
                <a href={primaryButton.href ?? "#"} className="btn-primary min-h-[3.25rem] gap-[0.75rem] py-[0.4rem] pl-[0.4rem] pr-[1.1rem]">
                  <div aria-hidden="true" className="flex size-[2.4rem] shrink-0 items-center justify-center bg-accent p-[0.2rem]">
                    <div className="flex size-full items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <svg viewBox="0 0 20 20" className="size-[0.95rem]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square">
                        <path d="M4 5l5 5-5 5M11 5l5 5-5 5" />
                      </svg>
                    </div>
                  </div>
                  <p className="btn-label">{primaryButton.text}</p>
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
        {live && <motion.div aria-hidden="true" style={{ opacity: shade }} className="pointer-events-none absolute inset-0 z-[8] bg-black" />}
      </div>
    </section>
  );
};

export default HeroCanvasName;
