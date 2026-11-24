import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Sparkles,
  Heart,
  Puzzle,
  Star,
  Compass,
  CheckCircle2,
  BookOpen,
  Gamepad2,
  Trophy,
  HelpCircle,
  RefreshCw,
  Eye,
  BrainCircuit,
  ShieldCheck,
  Zap,
} from "lucide-react";
import ImageScrollParallax from "@/components/animation/ImageScrollParallax";
import NudgeHeader from "@/components/kit/NudgeHeader";

export type CategoryKey = "all" | "social" | "curiosity" | "mind";

interface CategoryMeta {
  key: CategoryKey;
  label: string;
  badge: string;
  icon: typeof Sparkles;
  description: string;
  tone: string;
}

const CATEGORIES: CategoryMeta[] = [
  {
    key: "all",
    label: "All Adventures",
    badge: "Fantasy & Fun",
    icon: Zap,
    description: "Exciting animated adventures with magical creatures, fantasy worlds, and fun challenges.",
    tone: "bg-primary text-primary-foreground",
  },
  {
    key: "social",
    label: "Social Development",
    badge: "Friendship & Kindness",
    icon: Heart,
    description: "Cartoon characters learn about friendship, teamwork, kindness, and helping others.",
    tone: "bg-[var(--tint-1)] text-secondary-foreground",
  },
  {
    key: "curiosity",
    label: "Curiosity & Discovery",
    badge: "Science & Wonder",
    icon: Compass,
    description: "Children follow cartoon explorers who discover mysterious places, nature, science, and new things.",
    tone: "bg-accent text-accent-foreground",
  },
  {
    key: "mind",
    label: "Mind & Heart",
    badge: "Brain Games & Growth",
    icon: Puzzle,
    description: "A little character enters a magical world of puzzles, brain games, riddles, and problem-solving challenges.",
    tone: "bg-[var(--tint-3)] text-secondary-foreground",
  },
];

interface LearningStory {
  id: string;
  categoryKey: CategoryKey;
  categoryLabel: string;
  title: string;
  character: string;
  story: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
  highlights: string[];
  colorTone: string;
  icon: typeof Sparkles;
}

const STORIES: LearningStory[] = [
  {
    id: "social-kindness-circle",
    categoryKey: "social",
    categoryLabel: "Social Development",
    title: "Leo & Pip's Friendship Circle",
    character: "Leo the Lion & Pip the Bunny",
    story: "Leo and Pip discover that by sharing their enchanted building blocks and listening to one another, they can build the grandest castle in the kingdom and make every friend feel loved!",
    description: "Children build warm friendships, practice empathy, and learn genuine kindness through shared 3D cartoon adventures and cooperative group games.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540952609-n9wmvwps.jpg?_wi=1",
    imageAlt: "Colorful 3D cartoon characters holding hands and building a friendship circle",
    badge: "Friendship & Empathy",
    highlights: ["Teamwork & Sharing", "Empathetic Play", "Kindness Circles"],
    colorTone: "bg-[var(--tint-1)] text-secondary-foreground",
    icon: Heart,
  },
  {
    id: "curiosity-enchanted-expedition",
    categoryKey: "curiosity",
    categoryLabel: "Curiosity & Discovery",
    title: "Maya's Nature & Science Quest",
    character: "Explorer Maya & Barnaby Owl",
    story: "Equipped with a magic glowing magnifying glass, Maya and Barnaby trek through mysterious forests to discover secret glowing plants, star constellations, and scientific wonders!",
    description: "Young minds follow animated explorers into nature, hands-on science experiments, and intriguing world mysteries that spark lifelong inquisitiveness.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540952610-qe2sv0bs.jpg?_wi=1",
    imageAlt: "3D cartoon explorer child discovering magical glowing nature elements",
    badge: "Nature & Science",
    highlights: ["Nature Discovery", "Science Riddles", "Guided Wonder"],
    colorTone: "bg-accent text-accent-foreground",
    icon: Compass,
  },
  {
    id: "mind-puzzle-kingdom",
    categoryKey: "mind",
    categoryLabel: "Mind & Heart",
    title: "Sparky's Crystal Puzzle Realm",
    character: "Sparky the Mindful Dragon",
    story: "Sparky enters a floating crystal realm filled with brain teasers, pattern challenges, and heart-centered emotional puzzles, learning that patience turns every problem into a triumph!",
    description: "A supportive space where children tackle fun brain games, sharpen critical thinking, and nurture emotional self-expression every day.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540952610-ob88opwe.jpg?_wi=1",
    imageAlt: "Vibrant 3D cartoon character solving glowing crystal puzzles in a fantasy realm",
    badge: "Puzzles & Mindset",
    highlights: ["Brain Teasers", "Emotional Growth", "Critical Thinking"],
    colorTone: "bg-[var(--tint-3)] text-secondary-foreground",
    icon: Puzzle,
  },
  {
    id: "all-cosmic-fantasy",
    categoryKey: "all",
    categoryLabel: "All Adventures",
    title: "The Cosmic Fantasy Realm",
    character: "The Rainbow Realm Explorers",
    story: "Soar across rainbow starlight bridges and floating island castles with friendly magical creatures who guide young heroes through heroic team challenges!",
    description: "High-energy 3D animated fantasy adventures that inspire boundless creative imagination, storytelling, and energetic group activity.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540952611-76jqr7qr.jpg?_wi=1",
    imageAlt: "Whimsical 3D fantasy world with animated characters and rainbow castles",
    badge: "Fantasy Adventure",
    highlights: ["Fantasy Worlds", "Heroic Quests", "Magical Creatures"],
    colorTone: "bg-primary text-primary-foreground",
    icon: Zap,
  },
  {
    id: "all-magical-playground",
    categoryKey: "all",
    categoryLabel: "All Adventures",
    title: "Endless Adventure World",
    character: "The Playful Adventure Squad",
    story: "Every day brings a brand-new adventure map filled with obstacle courses, interactive story circles, sensory craft workshops, and joyous team games!",
    description: "A vibrant daily landscape where every single morning unfolds exciting new sensory games, milestones, and shared laughter.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540952611-smukvyou.jpg",
    imageAlt: "Joyful 3D cartoon characters engaging in dynamic outdoor playground games",
    badge: "Daily Milestones",
    highlights: ["Sensory Art", "Obstacle Fun", "Daily Badges"],
    colorTone: "bg-[var(--tint-2)] text-secondary-foreground",
    icon: Star,
  },
  {
    id: "curiosity-storytelling-circles",
    categoryKey: "curiosity",
    categoryLabel: "Curiosity & Discovery",
    title: "Whimsical Story Circles",
    character: "Professor Barnaby",
    story: "Professor Barnaby opens the Big Book of Secrets, revealing interactive tales of distant galaxies, underwater cities, and ancient animal kingdoms.",
    description: "Immersive storytelling sessions that expand vocabulary, imaginative horizons, and active listening skills.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907731-z5szt3fr.jpg?_wi=1",
    imageAlt: "3D cartoon story circle with interactive book elements",
    badge: "Story Magic",
    highlights: ["Interactive Stories", "Vocabulary", "Global Wonders"],
    colorTone: "bg-accent text-accent-foreground",
    icon: BookOpen,
  },
  {
    id: "mind-hands-on-blocks",
    categoryKey: "mind",
    categoryLabel: "Mind & Heart",
    title: "3D Block Building & Logic",
    character: "Master Builder Milo",
    story: "Milo tests balance, symmetry, and architectural strength by stacking glowing 3D geometric shapes to solve bridge-building challenges.",
    description: "Hands-on spatial reasoning, fine motor coordination, and early STEM problem solving through playful block creation.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907732-769380mm.jpg?_wi=1",
    imageAlt: "Playful 3D cartoon building blocks and problem-solving puzzles",
    badge: "Spatial Logic",
    highlights: ["STEM Foundations", "Motor Skills", "Spatial Puzzles"],
    colorTone: "bg-secondary text-secondary-foreground",
    icon: BrainCircuit,
  },
];

interface Riddle {
  id: string;
  categoryKey: CategoryKey;
  question: string;
  hint: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const RIDDLES: Riddle[] = [
  {
    id: "r1",
    categoryKey: "mind",
    question: "I have a heart that doesn't beat, but I help you care when friends you meet. I grow larger when shared with others. What am I?",
    hint: "Think about how you feel when helping a friend!",
    options: ["A Secret Toy", "Kindness & Love", "A Magic Clock", "A Flying Kite"],
    correctIndex: 1,
    explanation: "Kindness & Love! When you share kindness, it grows and brings joy to everyone around you.",
  },
  {
    id: "r2",
    categoryKey: "curiosity",
    question: "I have no wings, yet I can take you to distant stars, ancient jungles, and deep oceans whenever you open me. What am I?",
    hint: "You listen to these during story circle time!",
    options: ["A Storybook", "A Bicycle", "A Sandbox", "A Lunchbox"],
    correctIndex: 0,
    explanation: "A Storybook! Reading opens doors to endless magical worlds and discoveries.",
  },
  {
    id: "r3",
    categoryKey: "social",
    question: "When two friends want to play with the very same blue truck, what is the best magical key to make both friends happy?",
    hint: "It starts with taking turns...",
    options: ["Hiding the truck", "Sharing & Taking Turns", "Running away", "Playing alone"],
    correctIndex: 1,
    explanation: "Sharing & Taking Turns! Cooperative play turns every game into a double-fun adventure.",
  },
  {
    id: "r4",
    categoryKey: "all",
    question: "If Sparky has 3 glowing crystal blocks and Pip gives him 2 more crystal blocks, how many glowing blocks can they build with?",
    hint: "Count 3 + 2 on your fingers!",
    options: ["4 Blocks", "5 Blocks", "6 Blocks", "10 Blocks"],
    correctIndex: 1,
    explanation: "5 Blocks! Great math skills! Together they can build a magnificent 5-block tower.",
  },
];

interface MemoryCard {
  id: number;
  character: string;
  imageSrc: string;
  icon: typeof Sparkles;
  isFlipped: boolean;
  isMatched: boolean;
}

const MEMORY_CARDS_RAW = [
  {
    character: "Leo the Lion",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540952609-n9wmvwps.jpg?_wi=2",
    icon: Heart,
  },
  {
    character: "Explorer Maya",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540952610-qe2sv0bs.jpg?_wi=2",
    icon: Compass,
  },
  {
    character: "Sparky Dragon",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540952610-ob88opwe.jpg?_wi=2",
    icon: Puzzle,
  },
  {
    character: "Cosmic Explorer",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540952611-76jqr7qr.jpg?_wi=2",
    icon: Zap,
  },
];

const TILTS = [-2, 2.5, -3, 2, -1.5, 1.8];

function initMemoryGame(): MemoryCard[] {
  const doubled = [...MEMORY_CARDS_RAW, ...MEMORY_CARDS_RAW].map((item, idx) => ({
    id: idx,
    character: item.character,
    imageSrc: item.imageSrc,
    icon: item.icon,
    isFlipped: false,
    isMatched: false,
  }));
  return doubled.sort((a, b) => (a.id * 7 % 13) - (b.id * 7 % 13));
}

type CartoonLearningWorldProps = {
  note?: string;
  title?: string;
  description?: string;
  ariaLabel?: string;
  className?: string;
};

export default function CartoonLearningWorld({
  note = "3D Cartoon World",
  title = "Stories, Adventures & Learning Games",
  description = "Explore interactive stories, 3D animated characters, riddles, and brain games tailored for curious young minds.",
  ariaLabel = "3D Cartoon Stories and Educational Activities",
  className = "",
}: CartoonLearningWorldProps) {
  const reduce = !!useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  // Riddle game state
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);

  // Memory Game State
  const [memoryCards, setMemoryCards] = useState<MemoryCard[]>(() => initMemoryGame());
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [matchesCount, setMatchesCount] = useState(0);

  const handleCardClick = (id: number) => {
    if (flippedIds.length === 2) return;
    const clickedCard = memoryCards.find((c) => c.id === id);
    if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) return;

    const nextCards = memoryCards.map((c) => (c.id === id ? { ...c, isFlipped: true } : c));
    setMemoryCards(nextCards);

    const nextFlipped = [...flippedIds, id];
    setFlippedIds(nextFlipped);

    if (nextFlipped.length === 2) {
      const card1 = memoryCards.find((c) => c.id === nextFlipped[0]);
      const card2 = memoryCards.find((c) => c.id === nextFlipped[1]);

      if (card1 && card2 && card1.character === card2.character) {
        setTimeout(() => {
          setMemoryCards((prev) =>
            prev.map((c) => (c.id === card1.id || c.id === card2.id ? { ...c, isMatched: true } : c))
          );
          setMatchesCount((m) => m + 1);
          setFlippedIds([]);
        }, 500);
      } else {
        setTimeout(() => {
          setMemoryCards((prev) =>
            prev.map((c) => (c.id === nextFlipped[0] || c.id === nextFlipped[1] ? { ...c, isFlipped: false } : c))
          );
          setFlippedIds([]);
        }, 1000);
      }
    }
  };

  const resetMemoryGame = () => {
    setMemoryCards(initMemoryGame());
    setFlippedIds([]);
    setMatchesCount(0);
  };

  const filteredStories =
    activeCategory === "all"
      ? STORIES
      : STORIES.filter((s) => s.categoryKey === activeCategory);

  const activeCategoryMeta = CATEGORIES.find((c) => c.key === activeCategory) || CATEGORIES[0];

  const filteredRiddles =
    activeCategory === "all"
      ? RIDDLES
      : RIDDLES.filter((r) => r.categoryKey === activeCategory);

  const activeRiddle = filteredRiddles[currentRiddleIndex % filteredRiddles.length] || RIDDLES[0];

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === activeRiddle.correctIndex) {
      setScore((s) => s + 10);
    }
  };

  const handleNextRiddle = () => {
    setSelectedOption(null);
    setShowHint(false);
    setCurrentRiddleIndex((prev) => (prev + 1) % filteredRiddles.length);
  };

  return (
    <section
      id="learning-play"
      aria-label={ariaLabel}
      className={`relative z-10 flex min-h-svh flex-col justify-center overflow-x-clip bg-background bg-[linear-gradient(to_right,color-mix(in_srgb,var(--foreground)_4%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--foreground)_4%,transparent)_1px,transparent_1px)] bg-[length:5rem_5rem] bg-[position:center_top] py-[var(--section-space)] text-foreground ${className}`}
    >
      <div className="mx-auto w-[var(--container)]">
        <NudgeHeader note={note} title={title} description={description} />

        {/* Category Selection Tabs */}
        <div className="mt-[clamp(2rem,4vw,3.5rem)] flex flex-wrap items-center justify-center gap-[0.75rem]">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.key);
                  setCurrentRiddleIndex(0);
                  setSelectedOption(null);
                  setShowHint(false);
                }}
                className={`flex cursor-pointer items-center gap-[0.5rem] rounded-full border-2 border-foreground px-[1.25rem] py-[0.65rem] font-mono text-[length:var(--text-label)] font-semibold uppercase transition-all duration-200 ${
                  isActive
                    ? `${cat.tone} shadow-lg scale-105 ring-2 ring-primary/40`
                    : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                <Icon className="size-[1rem]" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <motion.div
          key={activeCategory}
          initial={reduce ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-[1.75rem] mx-auto max-w-3xl rounded-[var(--radius,1rem)] bg-card/90 p-[1.25rem] text-center shadow-md border border-border/80 backdrop-blur-sm"
        >
          <div className="flex items-center justify-center gap-[0.5rem] text-primary font-mono text-[length:var(--text-small)] uppercase font-semibold">
            <Sparkles className="size-[1rem]" />
            <span>Category Story Spotlight: {activeCategoryMeta.badge}</span>
          </div>
          <p className="mt-[0.5rem] font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-muted-foreground">
            {activeCategoryMeta.description}
          </p>
        </motion.div>

        {/* 3D Story Cards Grid */}
        <div className="mt-[clamp(2.5rem,5vw,4.5rem)] grid grid-cols-1 gap-[clamp(1.5rem,3vw,3rem)] md:grid-cols-2 lg:grid-cols-3">
          {filteredStories.map((storyItem, index) => {
            const tilt = TILTS[index % TILTS.length];
            const Icon = storyItem.icon;
            return (
              <motion.article
                key={storyItem.id}
                initial={reduce ? false : { scale: 0.9, rotate: tilt * 1.5, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, rotate: tilt, opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 340, damping: 22, delay: index * 0.08 }
                }
                whileHover={
                  reduce ? undefined : { scale: 1.03, rotate: 0, transition: { duration: 0.25 } }
                }
                className="group relative flex flex-col overflow-hidden rounded-[var(--radius,1rem)] bg-card p-[clamp(1rem,2vw,1.5rem)] shadow-lg ring-1 ring-border/80 transition-shadow hover:shadow-2xl"
              >
                {/* 3D Image Frame with Parallax */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[calc(var(--radius,1rem)-0.25rem)] bg-muted">
                  <ImageScrollParallax
                    imageSrc={storyItem.imageSrc}
                    imageAlt={storyItem.imageAlt}
                    strength={0.15}
                    className="absolute inset-0 aspect-auto h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70"
                  />

                  {/* Character & Badge Tag */}
                  <div className="absolute top-[0.75rem] left-[0.75rem] flex items-center gap-[0.4rem] rounded-full border border-white/20 bg-black/60 px-[0.8rem] py-[0.35rem] text-white backdrop-blur-md">
                    <Icon className="size-[0.85rem] text-amber-400" />
                    <span className="font-mono text-[length:var(--text-small)] font-bold uppercase tracking-wider">
                      {storyItem.badge}
                    </span>
                  </div>

                  {/* Character Tag at bottom of image */}
                  <div className="absolute bottom-[0.75rem] left-[0.75rem] right-[0.75rem]">
                    <span className="inline-block rounded-md bg-background/90 px-[0.7rem] py-[0.25rem] font-mono text-[length:var(--text-small)] font-bold text-foreground shadow-sm backdrop-blur-md">
                      ✨ {storyItem.character}
                    </span>
                  </div>
                </div>

                {/* Content & Story Details */}
                <div className="flex flex-1 flex-col pt-[1.25rem]">
                  <div className="flex items-center justify-between gap-[0.5rem] pb-[0.35rem]">
                    <span
                      className={`inline-block rounded-full border border-foreground/20 px-[0.7rem] py-[0.2rem] font-mono text-[length:var(--text-small)] uppercase ${storyItem.colorTone}`}
                    >
                      {storyItem.categoryLabel}
                    </span>
                    <Star className="size-[1.1rem] fill-amber-400 text-amber-500" />
                  </div>

                  <h3 className="mt-[0.5rem] font-[family-name:var(--font-heading)] text-[length:max(var(--text-body-lg),calc(var(--text-h3)*0.6))] uppercase leading-[1.15] text-foreground">
                    {storyItem.title}
                  </h3>

                  {/* Mini Story Narrative */}
                  <div className="mt-[0.75rem] rounded-lg bg-muted/60 p-[0.75rem] border border-border/50">
                    <p className="font-[family-name:var(--font-body)] text-[length:var(--text-small)] italic leading-[1.4] text-foreground">
                      "{storyItem.story}"
                    </p>
                  </div>

                  <p className="mt-[0.75rem] font-[family-name:var(--font-body)] text-[length:var(--text-body)] leading-[1.45] text-muted-foreground">
                    {storyItem.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-[1.25rem] flex flex-wrap gap-[0.4rem] pt-[0.75rem] border-t border-border/60">
                    {storyItem.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-[0.3rem] rounded-md bg-muted/80 px-[0.6rem] py-[0.25rem] font-mono text-[length:var(--text-small)] text-foreground/90"
                      >
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

        {/* INTERACTIVE EDUCATIONAL ACTIVITIES SECTION */}
        <div className="mt-[clamp(3.5rem,6vw,6rem)] rounded-[var(--radius,1.25rem)] border-2 border-foreground bg-card p-[clamp(1.5rem,4vw,3rem)] shadow-xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-[0.4rem] rounded-full border border-foreground/30 bg-accent px-[0.9rem] py-[0.35rem] font-mono text-[length:var(--text-small)] font-bold uppercase text-accent-foreground">
              <Gamepad2 className="size-[0.95rem]" /> Interactive Activity Zone
            </span>
            <h2 className="mt-[0.75rem] font-[family-name:var(--font-heading)] text-[length:max(var(--text-h3),calc(var(--text-h2)*0.6))] uppercase font-bold text-foreground">
              Children's Brain Teasers, Riddles & Memory Games
            </h2>
            <p className="mt-[0.4rem] max-w-2xl mx-auto font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-muted-foreground">
              Test your creative thinking, solve interactive 3D cartoon riddles, and play character memory puzzles right here!
            </p>
          </div>

          <div className="mt-[2.5rem] grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
            {/* Activity 1: Cartoon Riddles & Quizzes */}
            <div className="flex flex-col justify-between rounded-[var(--radius,1rem)] bg-background p-[1.5rem] border border-border shadow-md">
              <div>
                <div className="flex items-center justify-between border-b border-border pb-[0.75rem]">
                  <div className="flex items-center gap-[0.5rem]">
                    <HelpCircle className="size-[1.25rem] text-primary" />
                    <span className="font-mono text-[length:var(--text-label)] font-bold uppercase text-foreground">
                      3D Cartoon Riddle Quest
                    </span>
                  </div>
                  <div className="flex items-center gap-[0.4rem] rounded-full bg-amber-100 dark:bg-amber-900/40 px-[0.75rem] py-[0.25rem] font-mono text-[length:var(--text-small)] font-bold text-amber-700 dark:text-amber-300">
                    <Trophy className="size-[0.85rem]" />
                    <span>Score: {score} pts</span>
                  </div>
                </div>

                <div className="mt-[1.25rem]">
                  <div className="flex items-center justify-between text-xs font-mono uppercase text-muted-foreground">
                    <span>Question {currentRiddleIndex + 1} of {filteredRiddles.length}</span>
                    <span className="capitalize">{activeRiddle.categoryKey} Category</span>
                  </div>

                  <h3 className="mt-[0.5rem] font-[family-name:var(--font-heading)] text-[length:max(var(--text-body-lg),calc(var(--text-h3)*0.55))] uppercase leading-[1.3] text-foreground">
                    "{activeRiddle.question}"
                  </h3>

                  {/* Options */}
                  <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.6rem] sm:grid-cols-2">
                    {activeRiddle.options.map((option, idx) => {
                      const isChosen = selectedOption === idx;
                      const isCorrect = idx === activeRiddle.correctIndex;
                      let btnStyle = "bg-card hover:bg-muted text-foreground border-border";

                      if (selectedOption !== null) {
                        if (isCorrect) {
                          btnStyle = "bg-emerald-600 text-white border-emerald-700 font-bold scale-[1.02]";
                        } else if (isChosen) {
                          btnStyle = "bg-rose-600 text-white border-rose-700";
                        } else {
                          btnStyle = "bg-card opacity-50 border-border";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleOptionSelect(idx)}
                          disabled={selectedOption !== null}
                          className={`flex items-center justify-between rounded-lg border-2 p-[0.75rem] text-left font-mono text-[length:var(--text-small)] transition-all cursor-pointer ${btnStyle}`}
                        >
                          <span>{option}</span>
                          {selectedOption !== null && isCorrect && <CheckCircle2 className="size-[1rem]" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback & Hint */}
                  <AnimatePresence mode="wait">
                    {selectedOption !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`mt-[1rem] rounded-lg p-[0.75rem] font-mono text-[length:var(--text-small)] border ${
                          selectedOption === activeRiddle.correctIndex
                            ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-800 dark:text-emerald-200"
                            : "bg-amber-50 dark:bg-amber-950/40 border-amber-300 text-amber-800 dark:text-amber-200"
                        }`}
                      >
                        <p className="font-bold">
                          {selectedOption === activeRiddle.correctIndex ? "🎉 Correct! You solved the riddle!" : "💡 Nice try!"}
                        </p>
                        <p className="mt-[0.25rem] font-sans text-xs">{activeRiddle.explanation}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {showHint && selectedOption === null && (
                    <div className="mt-[0.75rem] rounded-lg bg-amber-50 dark:bg-amber-950/40 p-[0.6rem] border border-amber-200 text-amber-800 dark:text-amber-300 font-mono text-xs">
                      <strong>Hint:</strong> {activeRiddle.hint}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-[1.5rem] flex items-center justify-between border-t border-border pt-[1rem]">
                <button
                  type="button"
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-[0.35rem] font-mono text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  <Eye className="size-[0.85rem]" />
                  <span>{showHint ? "Hide Hint" : "Need a Hint?"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextRiddle}
                  className="flex cursor-pointer items-center gap-[0.4rem] rounded-full bg-primary px-[1rem] py-[0.45rem] font-mono text-[length:var(--text-small)] font-bold uppercase text-primary-foreground transition-transform hover:scale-105"
                >
                  <span>Next Riddle</span>
                  <RefreshCw className="size-[0.85rem]" />
                </button>
              </div>
            </div>

            {/* Activity 2: 3D Character Memory Match Game */}
            <div className="flex flex-col justify-between rounded-[var(--radius,1rem)] bg-background p-[1.5rem] border border-border shadow-md">
              <div>
                <div className="flex items-center justify-between border-b border-border pb-[0.75rem]">
                  <div className="flex items-center gap-[0.5rem]">
                    <BrainCircuit className="size-[1.25rem] text-accent" />
                    <span className="font-mono text-[length:var(--text-label)] font-bold uppercase text-foreground">
                      3D Character Memory Flip
                    </span>
                  </div>
                  <div className="flex items-center gap-[0.4rem] rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-[0.75rem] py-[0.25rem] font-mono text-[length:var(--text-small)] font-bold text-emerald-700 dark:text-emerald-300">
                    <ShieldCheck className="size-[0.85rem]" />
                    <span>Pairs: {matchesCount} / 4</span>
                  </div>
                </div>

                <p className="mt-[0.75rem] font-[family-name:var(--font-body)] text-[length:var(--text-small)] text-muted-foreground">
                  Click cards to flip them and find matching pairs of 3D cartoon characters!
                </p>

                {/* Cards Grid */}
                <div className="mt-[1.25rem] grid grid-cols-4 gap-[0.5rem]">
                  {memoryCards.map((card) => {
                    const isShown = card.isFlipped || card.isMatched;
                    const Icon = card.icon;
                    return (
                      <button
                        key={card.id}
                        type="button"
                        onClick={() => handleCardClick(card.id)}
                        className={`relative aspect-square cursor-pointer overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                          card.isMatched
                            ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 scale-95"
                            : isShown
                            ? "border-primary bg-card"
                            : "border-foreground/30 bg-muted hover:bg-muted/80 hover:scale-105"
                        }`}
                      >
                        {isShown ? (
                          <div className="relative h-full w-full flex flex-col items-center justify-center p-[0.25rem]">
                            <img
                              src={card.imageSrc}
                              alt={card.character}
                              className="h-full w-full object-cover rounded"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-1">
                              <span className="font-mono text-[10px] font-bold text-white text-center leading-tight drop-shadow">
                                {card.character}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-card to-muted">
                            <Icon className="size-[1.25rem] text-primary/60" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {matchesCount === 4 && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mt-[1rem] rounded-lg bg-emerald-600 p-[0.75rem] text-center text-white font-mono text-[length:var(--text-small)] font-bold shadow-md"
                  >
                    🎉 Amazing! You matched all 3D cartoon character pairs!
                  </motion.div>
                )}
              </div>

              <div className="mt-[1.5rem] flex items-center justify-end border-t border-border pt-[1rem]">
                <button
                  type="button"
                  onClick={resetMemoryGame}
                  className="flex cursor-pointer items-center gap-[0.4rem] rounded-full bg-secondary px-[1rem] py-[0.45rem] font-mono text-[length:var(--text-small)] font-bold uppercase text-secondary-foreground transition-transform hover:scale-105"
                >
                  <RefreshCw className="size-[0.85rem]" />
                  <span>Restart Memory Game</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
