import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useImageReady, useKitMotion } from "@/components/kit/kitMotion";
import NudgeHeader from "@/components/kit/NudgeHeader";
import NudgeFrame from "@/components/kit/NudgeFrame";
import Media, { MotionMedia } from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Photo = { imageSrc: string; imageAlt?: string };

type ContactFramedWindowProps = {
  title?: string;
  nameLabel?: string;
  emailLabel?: string;
  extraLabel?: string;
  messageLabel?: string;
  submitText?: string;
  successText?: string;
  caption?: string;
  chip?: string;
  images?: Photo[];
  ariaLabel?: string;
  className?: string;
};

const defaults: Photo[] = [
  { imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540302974-qzyxbefs.jpg", imageAlt: "Children engaging in colorful cartoon learning" },
  { imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540302975-196ctxl9.jpg", imageAlt: "Interactive storytime with animated characters" },
];

const ContactFramedWindow = ({
  title = "Say hello",
  nameLabel = "Name",
  emailLabel = "Email",
  extraLabel = "Company",
  messageLabel = "Message",
  submitText = "Send message",
  successText = "Thanks, we will write back within two days",
  caption = "our desk, come by!",
  chip = "IMAGE.JPG",
  images = defaults,
  ariaLabel,
  className,
}: ContactFramedWindowProps) => {
  const reduce = !!useReducedMotion();
  const kit = useKitMotion();
  const windowRef = useRef<HTMLDivElement>(null);
  const ready = useRef<number[]>([0]);
  const inView = useInView(windowRef, { once: true, amount: 0.2 });
  const [sent, setSent] = useState(false);
  const [slide, setSlide] = useState({ current: 0, previous: -1, round: 0 });
  const { scrollYProgress } = useScroll({ target: windowRef, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const count = images.length;

  useEffect(() => {
    if (!inView || count < 2) return;
    const loaders = images.slice(1).map((photo, offset) => {
      const image = new Image();
      image.onload = () => {
        if (!ready.current.includes(offset + 1)) ready.current = [...ready.current, offset + 1].sort((a, b) => a - b);
      };
      image.src = photo.imageSrc;
      return image;
    });
    return () => loaders.forEach((image) => (image.onload = null));
  }, [inView, images, count]);

  useEffect(() => {
    if (!inView || reduce || count < 2) return;
    const id = window.setInterval(() => {
      setSlide((s) => {
        const list = ready.current;
        if (list.length < 2) return s;
        const next = list.find((index) => index > s.current) ?? list[0];
        return next === s.current ? s : { current: next, previous: s.current, round: s.round + 1 };
      });
    }, 4000);
    return () => window.clearInterval(id);
  }, [inView, reduce, count]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  const fields = [
    { name: "name", label: nameLabel, type: "text", wide: false, required: true },
    { name: "email", label: emailLabel, type: "email", wide: false, required: true },
    ...(extraLabel ? [{ name: "extra", label: extraLabel, type: "text", wide: true, required: false }] : []),
  ];
  const current = images[slide.current] ?? images[0];
  const previous = slide.previous >= 0 ? images[slide.previous] : undefined;
  const imgReady = useImageReady(windowRef, inView);
  const play = (inView && imgReady) || reduce;
  const hidden = slide.round === 0 ? "inset(100% 0% 0% 0%)" : "inset(0% 0% 0% 100%)";

  return (
    <section aria-label={ariaLabel ?? title} className={cn("relative py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto grid w-[var(--container)] grid-cols-1 gap-[clamp(3rem,5vw,5rem)] lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col">
          <NudgeHeader title={title} align="left" />
          <motion.form
            onSubmit={onSubmit}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: kit.base, ease: kit.ease, delay: 0.15 }}
            className="mt-[clamp(2.5rem,5vw,4.5rem)] grid grid-cols-1 gap-x-[1rem] gap-y-[1.25rem] sm:grid-cols-2"
          >
            {fields.map((field) => (
              <label key={field.name} className={cn("flex min-w-0 flex-col gap-[0.5rem]", field.wide && "sm:col-span-2")}>
                <p className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)]">{field.label}</p>
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  className="w-full min-w-0 rounded-none bg-card px-[1rem] py-[0.875rem] text-[length:var(--text-body)] text-card-foreground outline-none ring-foreground transition-shadow focus:ring-[1.5px]"
                />
              </label>
            ))}
            <label className="flex min-w-0 flex-col gap-[0.5rem] sm:col-span-2">
              <p className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)]">{messageLabel}</p>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-none bg-card px-[1rem] py-[0.875rem] text-[length:var(--text-body)] text-card-foreground outline-none ring-foreground transition-shadow focus:ring-[1.5px]"
              />
            </label>
            <div className="flex flex-wrap items-center gap-[1rem] pt-[0.5rem] sm:col-span-2">
              <button type="submit" className="btn-primary group gap-[0.75rem] pl-[0.4rem]">
                <div aria-hidden="true" className="grid size-[2.05rem] place-items-center bg-secondary text-secondary-foreground transition-colors duration-[var(--dur-fast)] group-hover:bg-background group-focus-visible:bg-background">
                  <svg viewBox="0 0 16 16" className="size-[0.9rem]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
                    <path d="M3 4l4 4-4 4M8.5 4l4 4-4 4" />
                  </svg>
                </div>
                <p className="btn-label">{submitText}</p>
              </button>
              {sent && <p role="status" className="text-[length:var(--text-small)] text-muted-foreground">{successText}</p>}
            </div>
          </motion.form>
        </div>

        <div className="flex flex-col items-end gap-[1.25rem]">
          <NudgeFrame tone="foreground" delay={0.1} className="h-[24rem] w-full lg:h-auto lg:min-h-[30rem] lg:flex-1">
            <div ref={windowRef} role="img" aria-label={current.imageAlt ?? ""} className="absolute inset-0 overflow-hidden">
              <motion.div style={{ y: reduce ? 0 : drift }} className="absolute inset-x-0 -top-[6%] h-[112%] will-change-transform">
                {previous && <Media src={previous.imageSrc} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />}
                <motion.div
                  key={slide.round}
                  initial={reduce ? false : { clipPath: hidden }}
                  animate={play ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
                  transition={{ duration: kit.slow, ease: kit.easeInOut, delay: slide.round === 0 ? 0.3 : 0 }}
                  className="absolute inset-0 overflow-hidden"
                >
                  <MotionMedia
                    src={current.imageSrc}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    initial={reduce ? false : { scale: 1.08 }}
                    animate={play ? { scale: 1 } : undefined}
                    transition={{ duration: kit.slow, ease: kit.ease, delay: slide.round === 0 ? 0.3 : 0 }}
                    className="absolute inset-0 size-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
            {chip && (
              <div className="absolute right-[0.875rem] top-[0.875rem] flex items-center gap-[0.5rem] bg-deep px-[0.5rem] py-[0.375rem] text-deep-foreground">
                <div aria-hidden="true" className="grid size-[1.1rem] place-items-center bg-secondary">
                  <div className="size-[0.4rem] bg-deep" />
                </div>
                <p className="whitespace-nowrap font-mono text-[length:var(--text-label)] uppercase leading-none">{chip}</p>
              </div>
            )}
          </NudgeFrame>
          {caption && (
            <motion.p
              initial={reduce ? false : { scale: 0.6, rotate: -10, opacity: 0 }}
              whileInView={{ scale: 1, rotate: -2, opacity: 1 }}
              viewport={{ once: true }}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 16, delay: 0.5 }}
              className="mr-[clamp(0.5rem,3vw,2rem)] bg-muted px-[1rem] py-[0.5rem] font-[family-name:var(--font-script,var(--font-heading))] text-[length:var(--text-h3)] leading-[1.1] text-foreground"
            >
              {caption}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFramedWindow;
