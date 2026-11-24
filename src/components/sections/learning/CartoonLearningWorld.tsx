import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles, Heart, Puzzle, Star, Compass, Sun, CheckCircle2 } from "lucide-react";
import ImageScrollParallax from "@/components/animation/ImageScrollParallax";
import NudgeHeader from "@/components/kit/NudgeHeader";

type LearningFeature = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
  highlights: string[];
  colorTone: string;
  icon: typeof Sparkles;
};

type CartoonLearningWorldProps = {
  note?: string;
  title?: string;
  description?: string;
  ariaLabel?: string;
  className?: string;
};

const FEATURES: LearningFeature[] = [
  {
    id: "friendship",
    title: "Laughter, Friendship & Social Bonds",
    category: "Social Development",
    description: "Children build warm friendships, develop empathy, and learn kindness through shared cartoon adventures and cooperative play.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907729-otbhav9p.jpg?_wi=1",
    imageAlt: "Animated cartoon children playing and laughing together in harmony",
    badge: "Joy & Empathy",
    highlights: ["Group Co-Operation", "Empathetic Play", "Sharing & Care"],
    colorTone: "bg-[var(--tint-1)] text-secondary-foreground",
    icon: Heart,
  },
  {
    id: "exploration",
    title: "Storytelling & Magical Wonder",
    category: "Curiosity & Discovery",
    description: "Immersive story circles and nature discovery spark boundless wonder, turning every learning moment into a magical expedition.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907731-z5szt3fr.jpg?_wi=1",
    imageAlt: "Magical cartoon storytime scene with whimsical characters",
    badge: "Magical Wonder",
    highlights: ["Story Circles", "Nature Discovery", "Guided Wonder"],
    colorTone: "bg-accent text-accent-foreground",
    icon: Compass,
  },
  {
    id: "expression",
    title: "Emotional Growth & Self-Expression",
    category: "Mind & Heart",
    description: "A safe, supportive space for little ones to express their feelings, build emotional resilience, and feel valued every single day.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907731-eywoyn9b.jpg?_wi=1",
    imageAlt: "Vibrant cartoon characters expressing emotions with colorful magic",
    badge: "Emotional Intelligence",
    highlights: ["Self-Expression", "Resilience", "Mindful Moments"],
    colorTone: "bg-[var(--tint-3)] text-secondary-foreground",
    icon: Sparkles,
  },
  {
    id: "toys",
    title: "Creative Building & Hands-on Play",
    category: "Hands-on Discovery",
    description: "Interactive puzzles, 3D building blocks, and hands-on toy crafting empower children to problem-solve and innovate boldly.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907732-769380mm.jpg?_wi=1",
    imageAlt: "Playful 3D cartoon building blocks and creative play tools",
    badge: "Creative Building",
    highlights: ["Motor Skills", "Problem Solving", "3D Block Play"],
    colorTone: "bg-secondary text-secondary-foreground",
    icon: Puzzle,
  },
  {
    id: "adventure",
    title: "Endless Daily Milestones",
    category: "Playful Adventure",
    description: "Every morning brings exciting new activities, sensory games, and milestone celebrations tailored for growing minds.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907732-xpxcdfmm.jpg?_wi=1",
    imageAlt: "Whimsical cartoon adventure world with joyful activities",
    badge: "Daily Milestones",
    highlights: ["Outdoor Fun", "Sensory Art", "Milestone Badges"],
    colorTone: "bg-[var(--tint-2)] text-secondary-foreground",
    icon: Sun,
  },
];

const TILTS = [-2, 2.5, -3, 2, -1.5];

export default function CartoonLearningWorld({
  note = "Magical World",
  title = "Learning, Creativity & Play",
  description = "Explore an animated world where curiosity sparks, friendships bloom, and every day brings new discovery.",
  ariaLabel = "Children's Learning and Play Section",
  className = "",
}: CartoonLearningWorldProps) {
  const reduce = !!useReducedMotion();
  const [activeTab, setActiveTab] = useState<string>("all");

  const filtered = activeTab === "all" ? FEATURES : FEATURES.filter((f) => f.id === activeTab);

  return (
    <section
      aria-label={ariaLabel}
      className={`relative z-10 flex min-h-svh flex-col justify-center overflow-x-clip bg-background bg-[linear-gradient(to_right,color-mix(in_srgb,var(--foreground)_4%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--foreground)_4%,transparent)_1px,transparent_1px)] bg-[length:5rem_5rem] bg-[position:center_top] py-[var(--section-space)] text-foreground ${className}`}
    >
      <div className="mx-auto w-[var(--container)]">
        <NudgeHeader note={note} title={title} description={description} />

        {/* Filter / Category Selector Bar */}
        <div className="mt-[clamp(2rem,4vw,3.5rem)] flex flex-wrap items-center justify-center gap-[0.6rem]">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`cursor-pointer rounded-full border-2 border-foreground px-[1.25rem] py-[0.55rem] font-mono text-[length:var(--text-label)] font-medium uppercase transition-all duration-200 ${
              activeTab === "all" ? "bg-foreground text-background shadow-md scale-105" : "bg-card text-foreground hover:bg-muted"
            }`}
          >
            🌟 All Adventures ({FEATURES.length})
          </button>
          {FEATURES.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`flex cursor-pointer items-center gap-[0.4rem] rounded-full border-2 border-foreground px-[1.1rem] py-[0.55rem] font-mono text-[length:var(--text-label)] font-medium uppercase transition-all duration-200 ${
                  active ? `${item.colorTone} shadow-md scale-105` : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                <Icon className="size-[0.9rem]" />
                <span>{item.category}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Animated Cards Grid */}
        <div className="mt-[clamp(2.5rem,5vw,4.5rem)] grid grid-cols-1 gap-[clamp(1.5rem,3vw,3rem)] md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => {
            const tilt = TILTS[index % TILTS.length];
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={reduce ? false : { scale: 0.88, rotate: tilt * 2, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, rotate: tilt, opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 20, delay: index * 0.08 }}
                whileHover={reduce ? undefined : { scale: 1.03, rotate: 0, transition: { duration: 0.25 } }}
                className="group relative flex flex-col overflow-hidden rounded-[var(--radius,1rem)] bg-card p-[clamp(1rem,2vw,1.5rem)] shadow-lg ring-1 ring-border/80 transition-shadow hover:shadow-2xl"
              >
                {/* Image Container with Parallax Effect */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[calc(var(--radius,1rem)-0.25rem)] bg-muted">
                  <ImageScrollParallax
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    strength={0.15}
                    className="absolute inset-0 aspect-auto h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Floating Badge on Image */}
                  <div className="absolute top-[0.75rem] left-[0.75rem] flex items-center gap-[0.35rem] rounded-full border border-foreground/20 bg-background/90 px-[0.75rem] py-[0.3rem] backdrop-blur-md">
                    <Icon className="size-[0.85rem] text-accent" />
                    <span className="font-mono text-[length:var(--text-small)] font-semibold uppercase leading-none text-foreground">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex flex-1 flex-col pt-[1.25rem]">
                  <div className="flex items-center justify-between gap-[0.5rem] pb-[0.4rem]">
                    <span className={`inline-block rounded-full border border-foreground/30 px-[0.65rem] py-[0.2rem] font-mono text-[length:var(--text-small)] uppercase ${item.colorTone}`}>
                      {item.category}
                    </span>
                    <Star className="size-[1.1rem] fill-amber-400 text-amber-500" />
                  </div>

                  <h3 className="mt-[0.5rem] font-[family-name:var(--font-heading)] text-[length:max(var(--text-body-lg),calc(var(--text-h3)*0.6))] uppercase leading-[1.15] text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-[0.65rem] font-[family-name:var(--font-body)] text-[length:var(--text-body)] leading-[1.45] text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Feature Highlights List */}
                  <ul className="mt-[1.25rem] flex flex-wrap gap-[0.4rem] pt-[0.75rem] border-t border-border/60">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-[0.3rem] rounded-md bg-muted/70 px-[0.6rem] py-[0.25rem] font-mono text-[length:var(--text-small)] text-foreground/90">
                        <CheckCircle2 className="size-[0.75rem] text-emerald-600" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
