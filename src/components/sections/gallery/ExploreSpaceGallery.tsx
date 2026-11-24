import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Maximize2, X, MapPin, Building2, ShieldCheck, Heart } from "lucide-react";
import NudgeHeader from "@/components/kit/NudgeHeader";
import Media from "@/components/kit/Media";

type SpaceItem = {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const SPACE_ITEMS: SpaceItem[] = [
  {
    id: "exterior-playyard",
    title: "Outdoor Playground & Play Yard",
    category: "Exterior & Play Yard",
    badge: "Building Exterior",
    description: "Secure outdoor play area with custom play fort, spiral slide, and crayon fencing.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795542410927-o7540ajs.jpg",
    imageAlt: "Colorful outdoor daycare playground with red spiral slide and crayon painted fence",
  },
  {
    id: "classroom-learning",
    title: "Bright & Creative Classrooms",
    category: "Classrooms",
    badge: "Learning Spaces",
    description: "Sunlit activity rooms with group tables, play kitchen, and reading nooks.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795542410925-ptgqrdyk.jpg",
    imageAlt: "Bright daycare classroom with bright checkered floor and colorful activity tables",
  },
  {
    id: "creative-activity",
    title: "Hands-on Craft & Activity Zone",
    category: "Creative Play Area",
    badge: "Craft Rooms",
    description: "Dedicated activity tables stocked for seasonal art projects and group discovery.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795542410927-45re7r3l.jpg",
    imageAlt: "Child activity table filled with colorful craft supplies and art materials",
  },
  {
    id: "festive-community",
    title: "Festive Party & Celebration Space",
    category: "Gathering Area",
    badge: "Event Space",
    description: "Welcoming space for holiday events, birthday celebrations, and snack time.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795542410926-7o7allxj.jpg",
    imageAlt: "Festive daycare party table filled with treats and holiday decorations",
  },
  {
    id: "reception-entrance",
    title: "Welcoming Reception & Main Entrance",
    category: "Interior & Reception",
    badge: "Main Entrance",
    description: "Clean, cheerful reception hall welcoming parents and children each day.",
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
  description = "Discover a welcoming, inspiring, and creative environment where children learn, play, and grow.",
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
      <div className="mx-auto w-[var(--container)] space-y-8 sm:space-y-12">
        {/* Section Header */}
        <NudgeHeader
          note={note}
          title={title}
          description={description}
          align="center"
        />

        {/* Featured Card (Exterior & Playground) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-[var(--radius-card)] bg-card border border-border shadow-md transition-all duration-300 hover:shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center">
            <div
              className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-muted cursor-pointer lg:col-span-7"
              onClick={() => setSelectedPhoto(featuredItem)}
            >
              <Media
                src={featuredItem.imageSrc}
                alt={featuredItem.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 font-mono text-xs font-semibold text-foreground backdrop-blur-sm border border-border shadow-sm">
                {featuredItem.badge}
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto(featuredItem);
                }}
                className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-sm transition-colors hover:bg-black/85"
                aria-label={`Enlarge photo of ${featuredItem.title}`}
              >
                <Maximize2 className="h-3.5 w-3.5" />
                <span>Enlarge</span>
              </button>
            </div>

            <div className="flex flex-col justify-center p-4 sm:p-6 lg:col-span-5 lg:p-8 space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <Building2 className="h-3.5 w-3.5 text-accent" />
                <span>{featuredItem.category}</span>
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-[length:max(var(--text-body-lg),calc(var(--text-h3)*0.75))] leading-snug text-foreground">
                {featuredItem.title}
              </h3>

              <p className="font-[family-name:var(--font-body)] text-[length:var(--text-small)] text-muted-foreground leading-relaxed">
                {featuredItem.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4-Item Gallery Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
          {gridItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-card border border-border shadow-md transition-all duration-300 hover:shadow-xl hover:border-primary/30"
            >
              <div
                className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-muted cursor-pointer"
                onClick={() => setSelectedPhoto(item)}
              >
                <Media
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 font-mono text-xs font-semibold text-foreground backdrop-blur-sm border border-border shadow-sm">
                  {item.badge}
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhoto(item);
                  }}
                  className="absolute right-3 top-3 rounded-full bg-black/65 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/85"
                  aria-label={`Enlarge photo of ${item.title}`}
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 space-y-1.5">
                <h3 className="font-[family-name:var(--font-heading)] text-[length:max(var(--text-body-lg),calc(var(--text-h3)*0.65))] leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[length:var(--text-small)] text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust banner footer note */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 rounded-2xl bg-muted/60 p-4 sm:p-6 text-center text-xs sm:text-sm font-medium text-foreground border border-border/60"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-tint-3" />
            <span>Clean & Safe Facilities</span>
          </div>
          <div className="hidden sm:block text-muted-foreground">•</div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
            <span>Castor Ave & Ashton Rd Locations</span>
          </div>
          <div className="hidden sm:block text-muted-foreground">•</div>
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-foreground" />
            <span>Mon–Fri 6:00 AM – 6:00 PM</span>
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
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-background border border-border shadow-2xl flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/90"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-black max-h-[65vh]">
                <Media
                  src={selectedPhoto.imageSrc}
                  alt={selectedPhoto.imageAlt}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-4 sm:p-6 space-y-1.5">
                <div className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                  {selectedPhoto.badge}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-foreground">
                  {selectedPhoto.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-xs sm:text-sm text-muted-foreground">
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
