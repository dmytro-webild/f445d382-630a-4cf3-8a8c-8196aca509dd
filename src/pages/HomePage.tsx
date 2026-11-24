import HeroCanvasName from "@/components/sections/hero/HeroCanvasName";
import ServicesCanvasBoard from "@/components/sections/features/ServicesCanvasBoard";
import CartoonLearningWorld from "@/components/sections/learning/CartoonLearningWorld";
import GalleryFolderStack from "@/components/sections/gallery/GalleryFolderStack";
import TestimonialCommentCards from "@/components/sections/testimonial/TestimonialCommentCards";
import FaqCommentThreads from "@/components/sections/faq/FaqCommentThreads";
import ContactFramedWindow from "@/components/sections/contact/ContactFramedWindow";
import DaycareLocations from "@/components/sections/contact/DaycareLocations";
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
            "2 Locations in NE Philly",
            "Open daily 6:00 AM – 6:00 PM"
          ]}
          status="Now enrolling at Castor Ave & Ashton Rd"
          description="Magical daycare with two convenient centers in Philadelphia where little minds grow and adventures bloom."
          primaryButton={{
            text: "Enroll Now",
            href: "#contact"
          }}
          tags={[
            "Preschool Care",
            "Philadelphia"
          ]}
          avatars={[
            { imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907729-otbhav9p.jpg?_wi=3", imageAlt: "Cartoon character mascot" },
            { imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907731-z5szt3fr.jpg?_wi=3", imageAlt: "Cartoon character mascot" }
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

      <div id="locations" data-webild-section="DaycareLocations" data-webild-section-id="DaycareLocations-1" data-section="locations">
        <DaycareLocations
          note="Our Philly Centers"
          title="Two Convenient Locations"
          description="Visit our loving centers located at 8114 Castor Ave and 8962 Ashton Rd in Philadelphia, PA."
        />
      </div>

      <div id="learning-play" data-webild-section="CartoonLearningWorld" data-webild-section-id="CartoonLearningWorld-1" data-section="learning-play">
        <CartoonLearningWorld
          note="3D Cartoon World"
          title="Learning, Stories & Interactive Games"
          description="Immerse in magical cartoon stories, 3D character adventures, riddles, and brain teasers across all learning categories."
        />
      </div>

      <div id="gallery" data-webild-section="GalleryFolderStack" data-webild-section-id="GalleryFolderStack-1" data-section="gallery" data-scene>
        <GalleryFolderStack
          note="Magical Moments"
          title="Daycare Life & Photo Gallery"
          description="Take a peek at everyday learning, creative discovery, and fun activities across our Philadelphia centers."
          tabLabel="Photo"
          linkText="Learn More"
          fileLabel="Gallery"
          items={[
            {
              title: "Joyful Learning & Friendships",
              date: "Daily Adventure",
              description: "Children build warm friendships, share smiles, and engage in cooperative play at Amazing Creations.",
              tags: [
                "Friendship",
                "Social Play"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907729-otbhav9p.jpg?_wi=2",
              imageAlt: "Children engaging in joyful play and learning activities",
              href: "#contact"
            },
            {
              title: "Storytelling & Imagination",
              date: "Creative Wonder",
              description: "Immersive story circles and whimsical tales that spark curiosity and nurture young minds every single day.",
              tags: [
                "Story Circles",
                "Imagination"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907731-z5szt3fr.jpg?_wi=2",
              imageAlt: "Children listening to interactive storytime and fairy tales",
              href: "#contact"
            },
            {
              title: "Interactive Group Activities",
              date: "Team Discovery",
              description: "Developing teamwork, empathy, and early motor skills with fun interactive group games.",
              tags: [
                "Group Games",
                "Motor Skills"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907731-eywoyn9b.jpg?_wi=2",
              imageAlt: "Group activity and playful interaction at daycare",
              href: "#contact"
            },
            {
              title: "Creative Arts & Building Blocks",
              date: "Hands-on Craft",
              description: "Hands-on sensory craft, 3D building blocks, and creative arts that empower children to innovate boldly.",
              tags: [
                "Creative Arts",
                "3D Blocks"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907732-769380mm.jpg?_wi=2",
              imageAlt: "Children crafting and building with colorful blocks",
              href: "#contact"
            },
            {
              title: "Nurturing Care & Daily Milestones",
              date: "Milestone Moments",
              description: "Celebrating every milestone with dedicated, loving care in a safe and supportive environment.",
              tags: [
                "Loving Care",
                "Milestones"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795539907732-xpxcdfmm.jpg?_wi=2",
              imageAlt: "Nurturing daycare moment celebrating milestone achievements",
              href: "#contact"
            }
          ]}
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
              title: "Where are your daycare centers located?",
              description: "We have two locations in Northeast Philadelphia, PA: 8114 Castor Ave (PA 19152) and 8962 Ashton Rd (PA 19136). Both locations feature open daily hours.",
              reactions: 8
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
          caption="Visit our Philly centers!"
          chip="ENROLL NOW"
          images={[
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540302974-qzyxbefs.jpg?_wi=3",
              imageAlt: "Children engaging in joyful cartoon daycare learning"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540302975-196ctxl9.jpg?_wi=3",
              imageAlt: "Story circles and interactive cartoon activities"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795540302976-lgxwv9pl.jpg?_wi=3",
              imageAlt: "Creative building and hands-on cartoon play"
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
