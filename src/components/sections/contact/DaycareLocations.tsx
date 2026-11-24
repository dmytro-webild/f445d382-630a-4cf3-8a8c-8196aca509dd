import { motion, useReducedMotion } from "motion/react";
import { MapPin, Navigation, Clock, Phone, Instagram, Sparkles, Building2 } from "lucide-react";
import NudgeHeader from "@/components/kit/NudgeHeader";

type LocationItem = {
  id: string;
  name: string;
  badge: string;
  addressLine1: string;
  addressLine2: string;
  fullAddress: string;
  zipCode: string;
  mapUrl: string;
  phone: string;
  hours: string;
  tag: string;
};

const LOCATIONS: LocationItem[] = [
  {
    id: "castor",
    name: "Castor Avenue Center",
    badge: "Location 1",
    addressLine1: "8114 Castor Ave",
    addressLine2: "Philadelphia, PA 19152",
    fullAddress: "8114 Castor Ave, Philadelphia, PA 19152, United States",
    zipCode: "PA 19152",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=8114+Castor+Ave,+Philadelphia,+PA+19152",
    phone: "(215) 609-4499",
    hours: "Open Daily: 6:00 AM – 6:00 PM",
    tag: "Northeast Philly",
  },
  {
    id: "ashton",
    name: "Ashton Road Center",
    badge: "Location 2",
    addressLine1: "8962 Ashton Rd",
    addressLine2: "Philadelphia, PA 19136",
    fullAddress: "8962 Ashton Rd, Philadelphia, PA 19136, United States",
    zipCode: "PA 19136",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=8962+Ashton+Rd,+Philadelphia,+PA+19136",
    phone: "(215) 609-4499",
    hours: "Open Daily: 6:00 AM – 6:00 PM",
    tag: "Ashton / NE Philly",
  },
];

type DaycareLocationsProps = {
  note?: string;
  title?: string;
  description?: string;
  ariaLabel?: string;
  className?: string;
};

export default function DaycareLocations({
  note = "Our Philly Centers",
  title = "Two Convenient Locations",
  description = "We offer two loving, fully-equipped daycare locations in Northeast Philadelphia to serve your family.",
  ariaLabel = "Daycare Locations Section",
  className = "",
}: DaycareLocationsProps) {
  const reduce = !!useReducedMotion();

  return (
    <section
      aria-label={ariaLabel}
      className={`relative z-10 overflow-x-clip py-[var(--section-space)] text-foreground ${className}`}
    >
      <div className="mx-auto w-[var(--container)]">
        <NudgeHeader note={note} title={title} description={description} />

        {/* Locations Grid */}
        <div className="mt-[clamp(2.5rem,5vw,4.5rem)] grid grid-cols-1 gap-[clamp(1.5rem,3vw,3rem)] md:grid-cols-2">
          {LOCATIONS.map((loc, idx) => (
            <motion.article
              key={loc.id}
              initial={reduce ? false : { scale: 0.94, opacity: 0, y: 24 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 22, delay: idx * 0.12 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius,1rem)] bg-card p-[clamp(1.25rem,2.5vw,2.25rem)] shadow-lg ring-1 ring-border/80 transition-shadow hover:shadow-2xl"
            >
              {/* Header Badge & Title */}
              <div>
                <div className="flex items-center justify-between gap-[0.5rem]">
                  <span className="inline-flex items-center gap-[0.35rem] rounded-full border border-foreground/30 bg-secondary px-[0.75rem] py-[0.25rem] font-mono text-[length:var(--text-small)] font-semibold uppercase text-secondary-foreground">
                    <Building2 className="size-[0.85rem]" />
                    {loc.badge}
                  </span>
                  <span className="rounded-md bg-muted px-[0.6rem] py-[0.2rem] font-mono text-[length:var(--text-small)] text-muted-foreground">
                    {loc.tag}
                  </span>
                </div>

                <h3 className="mt-[1.25rem] font-[family-name:var(--font-heading)] text-[length:max(var(--text-body-lg),calc(var(--text-h3)*0.65))] uppercase leading-[1.1] text-foreground">
                  {loc.name}
                </h3>

                {/* Address Box */}
                <div className="mt-[1rem] flex items-start gap-[0.75rem] rounded-xl border border-border/70 bg-background/60 p-[1rem]">
                  <MapPin className="mt-[0.15rem] size-[1.25rem] shrink-0 text-accent" />
                  <div className="flex flex-col">
                    <p className="font-[family-name:var(--font-body)] text-[length:var(--text-body-lg)] font-semibold text-foreground">
                      {loc.addressLine1}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-muted-foreground">
                      {loc.addressLine2}
                    </p>
                    <p className="mt-[0.25rem] font-mono text-[length:var(--text-small)] text-muted-foreground/80">
                      United States
                    </p>
                  </div>
                </div>

                {/* Hours & Phone Info */}
                <div className="mt-[1rem] space-y-[0.5rem] font-mono text-[length:var(--text-small)] text-foreground/90">
                  <div className="flex items-center gap-[0.5rem]">
                    <Clock className="size-[0.9rem] text-accent" />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-[0.5rem]">
                    <Phone className="size-[0.9rem] text-accent" />
                    <a href="tel:2156094499" className="hover:underline">
                      {loc.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-[1.75rem] pt-[1rem] border-t border-border/60">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group/btn inline-flex w-full items-center justify-center gap-[0.75rem] py-[0.75rem] px-[1rem] text-center"
                >
                  <div aria-hidden="true" className="grid size-[2rem] place-items-center bg-secondary text-secondary-foreground transition-colors duration-[var(--dur-fast)] group-hover/btn:bg-background">
                    <Navigation className="size-[0.95rem]" />
                  </div>
                  <span className="btn-label font-mono uppercase tracking-wider text-[length:var(--text-label)]">
                    Get Directions ({loc.addressLine1})
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Instagram Link Banner */}
        <motion.div
          initial={reduce ? false : { scale: 0.96, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 20, delay: 0.2 }}
          className="mt-[clamp(2rem,4vw,3.5rem)] flex flex-col items-center justify-between gap-[1.25rem] rounded-[var(--radius,1rem)] bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-amber-500/10 p-[clamp(1.25rem,2.5vw,2rem)] ring-1 ring-purple-500/30 sm:flex-row"
        >
          <div className="flex items-center gap-[1rem]">
            <div className="flex size-[3rem] shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-md">
              <Instagram className="size-[1.6rem]" />
            </div>
            <div>
              <div className="flex items-center gap-[0.4rem]">
                <Sparkles className="size-[1rem] text-amber-500" />
                <h4 className="font-[family-name:var(--font-heading)] text-[length:var(--text-body-lg)] uppercase text-foreground">
                  Follow Us On Instagram
                </h4>
              </div>
              <p className="mt-[0.2rem] font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-muted-foreground">
                See real daily activities, colorful crafts, and happy moments @ouramazingcreations
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/ouramazingcreations/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary whitespace-nowrap px-[1.25rem] py-[0.75rem] font-mono text-[length:var(--text-label)] uppercase tracking-wider text-foreground hover:bg-muted"
          >
            Visit @ouramazingcreations
          </a>
        </motion.div>
      </div>
    </section>
  );
}
