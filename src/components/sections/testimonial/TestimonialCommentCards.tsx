import { useCallback, useEffect, useRef, useState } from "react";
import { usePreloadImages } from "@/components/kit/kitMotion";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import NudgeHeader from "@/components/kit/NudgeHeader";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type CommentItem = {
  quote: string;
  name: string;
  company?: string;
  rating?: number;
  posted?: string;
  positiveTags?: string[];
  imageSrc?: string;
  imageAlt?: string;
  count?: number;
};

type TestimonialCommentCardsProps = {
  note?: string;
  title?: string;
  description?: string;
  cardLabel?: string;
  items?: CommentItem[];
  ariaLabel?: string;
  className?: string;
};

const DEFAULT_ITEMS: CommentItem[] = [
  { quote: "They rebuilt our brand in six weeks and every screen still feels like us.", name: "Lena Ortiz", company: "Fieldnote", count: 3 },
  { quote: "The design system they left behind saved our team months of work.", name: "Marcus Bell", company: "Harbor Pay", count: 2 },
  { quote: "Sharp thinking, fast prototypes and no ego in the room.", name: "Grace Tan", company: "Loop Health", count: 5 },
];

const TestimonialCommentCards = ({
  note = "kind words",
  title = "Client notes",
  description,
  cardLabel = "Comment",
  items = DEFAULT_ITEMS,
  ariaLabel,
  className,
}: TestimonialCommentCardsProps) => {
  const reduce = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", duration: 30 });
  const sectionRef = useRef<HTMLElement>(null);
  usePreloadImages(sectionRef, "150%");
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    sync();
    emblaApi.on("select", sync).on("reInit", sync);
    return () => {
      emblaApi.off("select", sync).off("reInit", sync);
    };
  }, [emblaApi, sync]);

  return (
    <section ref={sectionRef} aria-label={ariaLabel ?? title} className={cn("relative overflow-x-clip py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto w-[var(--container)]">
        <NudgeHeader note={note} title={title} description={description} />
        <div ref={emblaRef} className="mt-[clamp(2.5rem,5vw,4.5rem)] -mx-[1rem] cursor-grab overflow-hidden px-[1rem] py-[1rem] active:cursor-grabbing">
          <div className="-ml-[var(--gap)] flex touch-pan-y">
            {items.map((item, index) => {
              const tilt = index % 2 === 0 ? -1.5 : 1.5;
              const ratingCount = item.rating ?? 5;

              return (
                <div key={index} className="min-w-0 shrink-0 grow-0 basis-[min(32rem,92%)] pl-[var(--gap)]">
                  <motion.div
                    initial={reduce ? false : { opacity: 0, scale: 0.6, rotate: tilt + (tilt < 0 ? -8 : 8) }}
                    whileInView={{ opacity: 1, scale: 1, rotate: tilt }}
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 16, delay: (index % 4) * 0.06 }}
                    className="flex h-full flex-col rounded-[var(--radius-card)] bg-background p-[1.25rem] shadow-lg ring-1 ring-border"
                  >
                    <div className="flex items-center justify-between gap-2">
                      {cardLabel && <p className="font-mono text-[length:var(--text-small)] font-semibold uppercase text-muted-foreground">{cardLabel}</p>}
                      {item.posted && <p className="font-mono text-[length:var(--text-small)] text-muted-foreground">{item.posted}</p>}
                    </div>
                    <div aria-hidden="true" className="mt-[0.625rem] h-px w-full bg-border" />
                    <div className="mt-[0.875rem] flex grow gap-[1rem]">
                      {item.imageSrc ? (
                        <Media
                          src={item.imageSrc}
                          alt={item.imageAlt ?? item.name}
                          loading="lazy"
                          decoding="async"
                          className="size-[3rem] shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex size-[3rem] shrink-0 items-center justify-center rounded-full bg-accent/20 border border-accent/40 font-mono text-[length:var(--text-body-lg)] font-bold text-accent">
                          {item.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div className="flex min-w-0 grow flex-col">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-[length:var(--text-body-lg)] font-bold leading-[1.3] text-foreground">{item.name}</p>
                          <div className="flex items-center gap-0.5 text-amber-400" aria-label={`${ratingCount} out of 5 stars`}>
                            {Array.from({ length: ratingCount }).map((_, i) => (
                              <Star key={i} className="size-[1.1rem] fill-amber-400 text-amber-500" />
                            ))}
                          </div>
                        </div>

                        {item.company && (
                          <p className="mt-[0.25rem] truncate font-[family-name:var(--font-label)] text-[length:var(--text-small)] uppercase leading-[1.3] text-muted-foreground">
                            {item.company}
                          </p>
                        )}

                        <p className="mt-[0.75rem] grow font-[family-name:var(--font-body)] text-[length:var(--text-body)] leading-[1.5] text-foreground/95 [overflow-wrap:break-word]">
                          "{item.quote}"
                        </p>

                        {item.positiveTags && item.positiveTags.length > 0 && (
                          <div className="mt-[1rem] flex flex-wrap items-center gap-[0.35rem] pt-[0.75rem] border-t border-border/60">
                            <span className="font-mono text-[length:var(--text-small)] font-semibold text-muted-foreground uppercase mr-1">
                              Positive:
                            </span>
                            {item.positiveTags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-accent/15 px-[0.6rem] py-[0.15rem] font-mono text-[length:var(--text-small)] font-medium text-accent"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={cn("mt-[0.5rem] flex justify-end gap-[0.5rem]", !canPrev && !canNext && "hidden")}>
          <button
            type="button"
            aria-label="Previous comments"
            disabled={!canPrev}
            onClick={() => emblaApi?.scrollPrev()}
            className="flex size-[2.75rem] cursor-pointer items-center justify-center bg-primary text-primary-foreground transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ArrowLeft aria-hidden="true" className="size-[1.1rem]" strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Next comments"
            disabled={!canNext}
            onClick={() => emblaApi?.scrollNext()}
            className="flex size-[2.75rem] cursor-pointer items-center justify-center bg-primary text-primary-foreground transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ArrowRight aria-hidden="true" className="size-[1.1rem]" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCommentCards;
