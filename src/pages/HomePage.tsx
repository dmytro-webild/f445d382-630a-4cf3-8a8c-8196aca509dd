import HeroCanvasName from "@/components/sections/hero/HeroCanvasName";
import ServicesCanvasBoard from "@/components/sections/features/ServicesCanvasBoard";
import GalleryFolderStack from "@/components/sections/gallery/GalleryFolderStack";
import CartoonLearningWorld from "@/components/sections/learning/CartoonLearningWorld";
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
          title="Daycare Life & Adventures"
          description="Take a peek at everyday learning, storybook fantasy, and creative discovery in Philly."
          tabLabel="Activity"
          linkText="Learn More"
          fileLabel="Photo"
          items={[
            {
              title: "Frozen Kingdom & Storytime",
              date: "Magical World",
              description: "Children enter magical realms of fantasy, learning courage, teamwork, and friendship with beloved storybook heroes.",
              tags: [
                "Fantasy & Stories",
                "Imagination"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795291390616-tq0ab557.jpg",
              imageAlt: "Magical Frozen characters in storybook world",
              href: "#contact"
            },
            {
              title: "Wonderland Discovery",
              date: "Curious Minds",
              description: "Exploring wonder-filled lands of curiosity, colorful logic puzzles, and playful adventures every single day.",
              tags: [
                "Curiosity",
                "Creative Logic"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795291390618-4e9uj1lh.jpg",
              imageAlt: "Alice in wonderland animated fairy tale scene",
              href: "#contact"
            },
            {
              title: "Zootopia Friendships",
              date: "Friendship & Play",
              description: "Developing empathy, kindness, and strong social bonds through interactive group games and playful activities.",
              tags: [
                "Social Bonds",
                "Empathy & Play"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795291390618-hecmaq09.jpg",
              imageAlt: "Zootopia animated friends selfie scene",
              href: "#contact"
            },
            {
              title: "Heroic Dreams & Growth",
              date: "Confidence Building",
              description: "Encouraging every young learner to discover their inner strength, confidence, and passion to reach for the stars.",
              tags: [
                "Confidence",
                "Character Building"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795291390619-fibhpwdp.jpg",
              imageAlt: "Hercules animated character standing in clouds",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="learning-play" data-webild-section="CartoonLearningWorld" data-webild-section-id="CartoonLearningWorld-1" data-section="learning-play">
        <CartoonLearningWorld
          note="Magical World"
          title="Learning, Creativity & Play"
          description="Step into an animated 3D cartoon world designed for children's imagination, emotional growth, and joyful discovery."
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialCommentCards" data-webild-section-id="TestimonialCommentCards-1" data-section="testimonial">
        <TestimonialCommentCards
          note="Parent reviews"
          title="Philly parent reviews"
          cardLabel="Google Review"
          items={[
            {
              quote: "Amazing creations is one of the best daycares in the NE. My kids been going here for a couple years now! Fabrina is absolutely amazing, caring, supportive and nurturing. My two littles adore her! They really do go above and beyond to protect your little ones. I’m blessed to find such an amazing daycare! If you’re looking for great hours and a team who treat your babies like their own, this is the place to be!",
              name: "Janice Rollinson",
              rating: 5,
              posted: "8 months ago",
              company: "Parent Reviewer"
            },
            {
              quote: "Absolutely love this daycare center. My son has been going here for a few months now and they are nothing short of amazing. The staff is so patient, nurturing and loving towards my son and the center always looks and smells clean so I have no worries when I drop him off everyday. I love that they take the initiative to wipe the kids face clean and change their shirts when they get dirty from snot and food. Many centers don’t do this, so I’m thankful that they do this extra step because I am a picky mom lol. I truly love this daycare and plan to keep my son here until he attends kindergarten, so if your hesitant about putting your child here, don’t be, they are GREAT!!!",
              name: "Tyeasha Stanton",
              rating: 5,
              posted: "8 years ago",
              company: "Parent Reviewer"
            },
            {
              quote: "A place where a child can go, and be a child. My son feels Loved, he feels cared for, and he is building his confidence through creative curriculum. Amazing creations is amazingly creating an honest, thoughtful and unique young man. These unbelievable care takers of my son are beyond words to describe. Each one unique and professional in ways that this society would be better if mimicked. My review is way over due. I Love and thank everyone who works in this establishment for the commitment and precision care given to not only my child but to all that grace your space. Continue to live in love and creating Amazing little human beings.",
              name: "GrnIdBndt",
              rating: 5,
              posted: "5 years ago",
              company: "Parent Reviewer",
              positiveTags: ["Responsiveness", "Reliability", "Quality", "Professionalism", "Value"]
            }
          ]}
        />
      </div>

      <div id="faq" data-webild-section="FaqCommentThreads" data-webild-section-id="FaqCommentThreads-1" data-section="faq">
        <FaqCommentThreads
          title="Before you visit"
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
