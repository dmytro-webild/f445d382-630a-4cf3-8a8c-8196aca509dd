import { Outlet } from "react-router-dom";
import NavbarTabStrip from "@/components/navbars/NavbarTabStrip";
import FooterRulerIndex from "@/components/sections/footer/FooterRulerIndex";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="default" data-pattern="grid">
      <header data-webild-section="Header">
        <NavbarTabStrip
          brand="Amazing Creations"
          navItems={[
            {
              name: "Home",
              href: "#hero"
            },
            {
              name: "Programs",
              href: "#services"
            },
            {
              name: "Gallery",
              href: "#gallery"
            },
            {
              name: "Learning & Play",
              href: "#learning-play"
            },
            {
              name: "Reviews",
              href: "#testimonial"
            },
            {
              name: "FAQ",
              href: "#faq"
            }
          ]}
          primaryButton={{
            text: "Enroll Now",
            href: "#contact"
          }}
          introDelay={1.6}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="default" data-pattern="grid">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterRulerIndex
          wordmark="Amazing Creations"
          columns={[
            {
              title: "Navigation",
              links: [
                {
                  text: "Home",
                  href: "#hero"
                },
                {
                  text: "Programs & Care",
                  href: "#services"
                },
                {
                  text: "Photo Gallery",
                  href: "#gallery"
                },
                {
                  text: "Learning & Play",
                  href: "#learning-play"
                },
                {
                  text: "Parent Reviews",
                  href: "#testimonial"
                },
                {
                  text: "Contact & Enroll",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Connect",
              links: [
                {
                  text: "Instagram",
                  href: "https://instagram.com/amazingcreations"
                },
                {
                  text: "Get Directions",
                  href: "https://maps.google.com/?q=8114-16+Castor+Ave,+Philadelphia,+PA+19152"
                },
                {
                  text: "Call (215) 609-4499",
                  href: "tel:2156094499"
                },
                {
                  text: "Email Center",
                  href: "mailto:info@amazingcreationsphilly.com"
                }
              ]
            }
          ]}
          city="Philadelphia"
          timeZone="America/New_York"
          copyright="© 2026 Amazing Creations Child Development. All rights reserved."
          backToTop="Back to top"
        />
      </footer>
    </div>
  );
}
