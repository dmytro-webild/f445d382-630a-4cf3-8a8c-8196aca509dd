import HeroCanvasName from "@/components/sections/hero/HeroCanvasName";
import ServicesCanvasBoard from "@/components/sections/features/ServicesCanvasBoard";
import GalleryFolderStack from "@/components/sections/gallery/GalleryFolderStack";
import TeamPolaroidWall from "@/components/sections/team/TeamPolaroidWall";
import TestimonialCommentCards from "@/components/sections/testimonial/TestimonialCommentCards";
import FaqCommentThreads from "@/components/sections/faq/FaqCommentThreads";
import ContactFramedWindow from "@/components/sections/contact/ContactFramedWindow";
import LoaderTypingBubble from "@/components/loaders/LoaderTypingBubble";

export default function HomePage() {
  return (
    <>
      <LoaderTypingBubble
        word="Welcome to Amazing Creations!"
      />

      <div id="hero" data-webild-section="HeroCanvasName" data-webild-section-id="HeroCanvasName-1" data-section="hero" data-scene>
        <HeroCanvasName
          note="Welcome to"
          title="AMAZING"
          notes={[
            "Open daily 6:00 AM – 6:00 PM",
            "Magical daycare in Philly"
          ]}
          status="Now enrolling for all ages"
          description="Magical daycare in Philly where little minds grow and adventures bloom."
          primaryButton={{
            text: "Enroll Now",
            href: "#contact"
          }}
          tags={[
            "Preschool Care",
            "Philadelphia"
          ]}
          avatars={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/smiley-elder-business-woman-out-working-laptop_23-2148661147.jpg",
              imageAlt: "Smiley elder business woman out working on laptop"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/medium-shot-smiley-woman-library_23-2148680199.jpg",
              imageAlt: "Medium shot smiley woman at library"
            }
          ]}
          timeZone="America/New_York"
          introDelay={1.6}
        />
      </div>

      <div id="services" data-webild-section="ServicesCanvasBoard" data-webild-section-id="ServicesCanvasBoard-1" data-section="services">
        <ServicesCanvasBoard
          title="Care & Learning"
          items={[
            {
              title: "Social Bonds",
              description: "Nurturing gentle bonds, empathy, and friendship among children.",
              tags: [
                "Friendship",
                "Empathy",
                "Group Play",
                "Sharing"
              ],
              href: "#contact",
              linkText: "Learn more"
            },
            {
              title: "Early Learning",
              description: "Building math and reading foundations through engaging discovery.",
              tags: [
                "Letters & Numbers",
                "Discovery",
                "Storytelling",
                "Puzzles"
              ],
              href: "#contact",
              linkText: "Learn more"
            },
            {
              title: "Creative Arts",
              description: "Fostering bright imagination with music, painting, and drama.",
              tags: [
                "Painting & Craft",
                "Music & Dance",
                "Role Play",
                "Sensory Art"
              ],
              href: "#contact",
              linkText: "Learn more"
            },
            {
              title: "Active Play",
              description: "Encouraging physical motor skills and joyful games every day.",
              tags: [
                "Motor Skills",
                "Outdoor Games",
                "Building Blocks",
                "Pretend Play"
              ],
              href: "#contact",
              linkText: "Learn more"
            }
          ]}
          linkText="Enroll today"
        />
      </div>

      <div id="gallery" data-webild-section="GalleryFolderStack" data-webild-section-id="GalleryFolderStack-1" data-section="gallery" data-scene>
        <GalleryFolderStack
          note="Magical Moments"
          title="Daycare Life"
          description="Take a peek at everyday learning, play, and creative discovery in Philly."
          tabLabel="Activity"
          linkText="Learn More"
          fileLabel="Photo"
          items={[
            {
              title: "Building Blocks",
              date: "Morning Play",
              description: "Toddlers explore geometry and balance through colorful wooden block stacking.",
              tags: [
                "Early Math",
                "Motor Skills"
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/full-shot-mother-playing-with-kids_23-2150062560.jpg",
              imageAlt: "Full shot mother playing with kids",
              href: "#contact"
            },
            {
              title: "Number Puzzles",
              date: "Learning Time",
              description: "Interactive counting games help preschool children build early literacy and numeracy.",
              tags: [
                "Puzzles",
                "Counting"
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/fidget-pop-it-toy-rainbow-color-antistress-fun-educational_58702-4128.jpg",
              imageAlt: "Fidget pop it toy rainbow color - antistress, fun and educational",
              href: "#contact"
            },
            {
              title: "Group Games",
              date: "Social Hour",
              description: "Active indoor play builds physical balance, turn-taking skills, and strong friendships.",
              tags: [
                "Active Play",
                "Teamwork"
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/young-kids-playing-with-balloons_23-2147782067.jpg",
              imageAlt: "Young kids playing with balloons",
              href: "#contact"
            },
            {
              title: "Creative Play",
              date: "Fun Projects",
              description: "Hands-on problem solving and friendly games encourage social development.",
              tags: [
                "Creativity",
                "Focus"
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/high-angle-mother-son-playing-janga-game_23-2148443208.jpg",
              imageAlt: "High angle mother and son playing janga game",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="team" data-webild-section="TeamPolaroidWall" data-webild-section-id="TeamPolaroidWall-1" data-section="team">
        <TeamPolaroidWall
          note="Our educators"
          title="Meet our loving team"
          items={[
            {
              title: "Fabrina Ross",
              description: "Center Director",
              imageSrc: "https://img.b2bpic.net/free-photo/staying-connected-with-my-customers_329181-11579.jpg",
              imageAlt: "Staying connected with my customers"
            },
            {
              title: "Imogen Murphy",
              description: "Lead Preschool Teacher",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-mother-child-reading-together_23-2149404131.jpg",
              imageAlt: "Portrait of mother and child reading together"
            },
            {
              title: "Ryan Morales",
              description: "Early Learning Teacher",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-teacher-work-educational-system_23-2151737322.jpg",
              imageAlt: "Portrait of teacher at work in the educational system"
            },
            {
              title: "Molly Turner",
              description: "Toddler Care Specialist",
              imageSrc: "https://img.b2bpic.net/free-photo/female-psychologist-helping-girl-speech-therapy_23-2149113890.jpg",
              imageAlt: "Female psychologist helping a girl in speech therapy"
            },
            {
              title: "Daniel Henderson",
              description: "Infant Care Specialist",
              imageSrc: "https://img.b2bpic.net/free-photo/adorable-toddler-playing-with-car-toy-sitting-table-kindergarten_839833-24255.jpg",
              imageAlt: "Adorable toddler playing with car toy sitting on table at kindergarten"
            },
            {
              title: "Holly Coleman",
              description: "Creative Arts Teacher",
              imageSrc: "https://img.b2bpic.net/free-photo/little-girl-painting-easter-eggs-with-mother-kitchen_231208-5.jpg",
              imageAlt: "Little girl painting easter eggs with mother in the kitchen"
            },
            {
              title: "James Fletcher",
              description: "Child Development Lead",
              imageSrc: "https://img.b2bpic.net/free-photo/father-reading-book-daughters_23-2147737590.jpg",
              imageAlt: "Father reading book to daughters"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialCommentCards" data-webild-section-id="TestimonialCommentCards-1" data-section="testimonial">
        <TestimonialCommentCards
          note="Parent reviews"
          title="Philly parent reviews"
          items={[
            {
              quote: "Amazing creations is one of the best daycares in the NE. Fabrina is caring, supportive and nurturing. My two littles adore her!",
              name: "Janice Rollinson",
              company: "Parent, NE Philly",
              imageSrc: "https://img.b2bpic.net/free-photo/cute-possum-reading_23-2151040991.jpg",
              count: 5
            },
            {
              quote: "Amazing Creations is absolutely wonderful in every way! From the moment you walk in, you feel how much care they put into everything. Spotless and bright.",
              name: "Jenna Darwish",
              company: "Parent, NE Philly",
              imageSrc: "https://img.b2bpic.net/free-photo/children-colored-caps-playing-game_23-2147807819.jpg",
              count: 5
            },
            {
              quote: "The staff here are patient with the kids, they build connections every single day. Highly recommend this caring daycare!",
              name: "Hasna A.",
              company: "Parent, NE Philly",
              imageSrc: "https://img.b2bpic.net/free-photo/high-angle-kids-learning-with-toys_23-2149455199.jpg",
              count: 5
            },
            {
              quote: "My daughter loves coming here every day. The magical learning spaces and engaging activities make every morning so exciting!",
              name: "Imogen Murphy",
              company: "Parent, NE Philly",
              imageSrc: "https://img.b2bpic.net/free-photo/medium-shot-camping-woman_23-2148223464.jpg",
              count: 5
            },
            {
              quote: "Highly recommended! So glad we found this amazing daycare facility in Philadelphia. Caring educators and a safe environment.",
              name: "Ryan Morales",
              company: "Parent, NE Philly",
              imageSrc: "https://img.b2bpic.net/free-photo/smiling-daughter-father-looking-photographer_23-2148349787.jpg",
              count: 5
            }
          ]}
          cardLabel="Google Review"
        />
      </div>

      <div id="faq" data-webild-section="FaqCommentThreads" data-webild-section-id="FaqCommentThreads-1" data-section="faq">
        <FaqCommentThreads
          title="Before you visit"
          avatarSrc="https://img.b2bpic.net/free-photo/portrait-photogenic-blonde-woman-wearing-headphones_23-2148397120.jpg"
          avatarAlt="Portrait of photogenic blonde woman wearing headphones"
          items={[
            {
              title: "What are your operating hours?",
              description: "We are open every day from 6:00 AM to 6:00 PM.",
              reactions: 4
            },
            {
              title: "Where are you located in Philadelphia?",
              description: "We are located at 8114-16 Castor Ave, Philadelphia, PA 19152.",
              reactions: 5
            },
            {
              title: "How can I schedule a tour or enroll?",
              description: "Fill out the inquiry form below or call us directly at (215) 609-4499.",
              reactions: 3
            },
            {
              title: "Are you open on weekends?",
              description: "Yes, our doors are open seven days a week from 6:00 AM to 6:00 PM.",
              reactions: 6
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactFramedWindow" data-webild-section-id="ContactFramedWindow-1" data-section="contact">
        <ContactFramedWindow
          title="Enroll Your Child"
          submitText="Send Inquiry"
          successText="Thank you! We will contact you soon."
          caption="Visit our Philly center!"
          chip="ENROLL NOW"
          images={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/girl-building-jenga-tower_23-2147800203.jpg",
              imageAlt: "Girl building jenga tower"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/young-children-with-autism-playing-together_23-2151241959.jpg",
              imageAlt: "Young children with autism playing together"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/happy-family-playing-jenga_23-2147800149.jpg",
              imageAlt: "Happy family playing jenga"
            }
          ]}
          nameLabel="Parent Name"
          emailLabel="Email Address"
          extraLabel="Phone Number"
          messageLabel="Child Details"
        />
      </div>
    </>
  );
}
