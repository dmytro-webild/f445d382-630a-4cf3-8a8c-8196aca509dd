import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Sparkles, Maximize2, X, MapPin, Building2, ShieldCheck, Heart } from "lucide-react";
import NudgeHeader from "@/components/kit/NudgeHeader";
import Media from "@/components/kit/Media";

type SpaceItem = {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
};

const SPACE_ITEMS: SpaceItem[] = [
  {
    id: "exterior-play Yard",
    title: "Outdoor Playground & Play Yard",
    category: "Exterior & Outdoor Play",
    badge: "Building Exterior & Yard",
    description: "Secure, colorful outdoor play yard featuring custom play structures, red spiral slides, interactive number games, and vibrant crayon fencing for safe outdoor physical play.",
    features: ["Spiral Slide & Play Fort", "Crayon Safety Fence", "Number Games", "Spacious Outdoor Area"],
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795542410927-o7540ajs.jpg",
    imageAlt: "Colorful outdoor daycare playground with red spiral slide and crayon painted fence",
  },
  {
    id: "classroom-learning",
    title: "Bright & Creative Classrooms",
    category: "Classrooms",
    badge: "Learning Spaces",
    description: "Sunlit activity rooms equipped with colorful checkered floors, small group tables, play kitchen sets, reading nooks, and curated early learning supplies.",
    features: ["Interactive Play Kitchen", "Group Activity Tables", "Reading Nook", "Rainbow Window Drapes"],
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795542410925-ptgqrdyk.jpg",
    imageAlt: "Bright daycare classroom with bright checkered floor and colorful activity tables",
  },
  {
    id: "creative-activity",
    title: "Hands-on Craft & Activity Zone",
    category: "Creative Play Area",
    badge: "Craft & Activity Rooms",
    description: "Dedicated creative activity tables stocked with seasonal crafts, Easter & holiday art projects, painting supplies, and engaging group discovery games.",
    features: ["Seasonal Craft Supplies", "Egg Hunt & Art Projects", "Hands-on Discovery", "Creative Group Tables"],
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795542410927-45re7r3l.jpg",
    imageAlt: "Child activity table filled with colorful craft supplies, egg hunt baskets, and art materials",
  },
  {
    id: "festive-community",
    title: "Festive Party & Celebration Space",
    category: "Gathering Area",
    badge: "Event & Celebration Room",
    description: "Warm, welcoming gathering space designed for holiday events, family celebrations, birthday parties, healthy snack times, and community milestones.",
    features: ["Family Event Station", "Holiday Celebrations", "Nutritious Snack Area", "Community Atmosphere"],
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795542410926-7o7allxj.jpg",
    imageAlt: "Festive daycare party table filled with healthy snacks, cupcakes, treats, and holiday decorations",
  },
  {
    id: "reception-entrance",
    title: "Welcoming Reception & Main Entrance",
    category: "Interior & Reception",
    badge: "Entrance & Main Lobby",
    description: "Clean, cheerful, and secure reception hall welcoming parents and children each day into a warm, nurturing environment.",
    features: ["Secure Check-in", "Warm Welcome Area", "Family-Friendly Decor", "Clean & Sanitized"],
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795542410928-7brxo8i0.jpg",
    imageAlt: "Welcoming daycare main entrance and reception hall",
  },
];

type ExploreSpaceGalleryProps = {
  note?: string;
  title?: string;
  description?: string;
  ariaLabel?: string;
  className?: string;
};

export default function ExploreSpaceGallery({
  note = "Our Daycare Facilities",
  title = "Explore Our Space",
  description = "Discover a welcoming, inspiring, and creative environment where children can learn, play, explore, and grow.",
  ariaLabel = "Explore Our Space Photo Gallery",
  className = "",
}: ExploreSpaceGalleryProps) {
  const reduce = !!useReducedMotion();
  const [selectedPhoto, setSelectedPhoto] = useState<SpaceItem | null>(null);

  const featuredItem = SPACE_ITEMS[0];
  const gridItems = SPACE_ITEMS.slice(1);

  return (
    <section
      aria-label={ariaLabel}
      className={`relative z-10 overflow-x-clip py-[var(--section-space)] text-foreground ${className}`}
    >
      <div className="mx-auto w-[var(--container)] space-y-12">
        {/* Section Header */}
        <NudgeHeader
          note={note}
          title={title}
          description={description}
          align="center"
        />

        {/* Featured Card (Outdoor & Exterior) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[var(--radius-card)] bg-card border border-border shadow-lg"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:col-span-7 lg:aspect-[16/10]">
              <Media
                src={featuredItem.imageSrc}
                alt={featuredItem.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <button
                type="button"
                onClick={() => setSelectedPhoto(featuredItem)}
                className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                aria-label={`Enlarge photo of ${featuredItem.title}`}
              >
                <Maximize2 className="h-3.5 w-3.5" />
                <span>View Photo</span>
              </button>
              <div className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1 font-mono text-xs font-medium text-secondary-foreground">
                {featuredItem.badge}
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 lg:col-span-5 lg:p-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <Building2 className="h-4 w-4 text-accent" />
                <span>{featuredItem.category}</span>
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-[length:max(var(--text-h3),calc(var(--text-h2)*0.55))] leading-tight text-foreground">
                {featuredItem.title}
              </h3>

              <p className="font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-muted-foreground leading-relaxed">
                {featuredItem.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {featuredItem.features.map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center gap-1 rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-foreground"
                  >
                    <Sparkles className="h-3 w-3 text-tint-1" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4-Item Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {gridItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-card border border-border shadow-md transition-all duration-300 hover:shadow-xl hover:border-primary/30"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Media
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 font-mono text-xs font-medium text-foreground backdrop-blur-sm border border-border">
                  {item.badge}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(item)}
                  className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                  aria-label={`Enlarge photo of ${item.title}`}
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5 space-y-3">
                <div className="space-y-2">
                  <h3 className="font-[family-name:var(--font-heading)] text-[length:max(var(--text-body-lg),calc(var(--text-h3)*0.6))] leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[length:var(--text-small)] text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
                  {item.features.map((feat) => (
                    <span
                      key={feat}
                      className="rounded bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground border border-border/80"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust banner footer note */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-muted/60 p-6 text-center text-sm font-medium text-foreground border border-border/60"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-tint-3" />
            <span>Clean, Sanitized & Safe Facilities</span>
          </div>
          <div className="hidden sm:block text-muted-foreground">•</div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            <span>2 Philadelphia Locations: Castor Ave & Ashton Rd</span>
          </div>
          <div className="hidden sm:block text-muted-foreground">•</div>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-secondary-foreground" />
            <span>Open Daily 6:00 AM – 6:00 PM</span>
          </div>
        </motion.div>
      </div>

      {/* Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-background border border-border shadow-2xl flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/90"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black max-h-[60vh]">
                <Media
                  src={selectedPhoto.imageSrc}
                  alt={selectedPhoto.imageAlt}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-6 space-y-2">
                <div className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                  {selectedPhoto.badge}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                  {selectedPhoto.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground">
                  {selectedPhoto.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
