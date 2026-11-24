import HeroCanvasName from "@/components/sections/hero/HeroCanvasName";
import ServicesCanvasBoard from "@/components/sections/features/ServicesCanvasBoard";
import CartoonLearningWorld from "@/components/sections/learning/CartoonLearningWorld";
import GalleryFolderStack from "@/components/sections/gallery/GalleryFolderStack";
import ExploreSpaceGallery from "@/components/sections/gallery/ExploreSpaceGallery";
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

      <div id="gallery" data-webild-section="GalleryFolderStack" data-webild-section-id="GalleryFolderStack-1" data-section="gallery" data-scene>
        <GalleryFolderStack
          note="Magical Movie World"
          title="Cartoon Stories & Magical Adventures"
          description="Immerse in timeless animated classic tales, heroic journeys, beloved characters, and fantastical worlds."
          tabLabel="Movie"
          linkText="Enroll at Daycare"
          fileLabel="Movie Card"
          items={[
            {
              title: "Alice in Wonderland",
              date: "Whimsical Classic",
              intro: "Step down the rabbit hole into a wondrous world where curiosity unveils endless magic!",
              description: "Follow brave Alice as she plummets into Wonderland—a realm of singing flowers, upside-down tea parties, and playful mysteries.",
              story: "When curious young Alice follows the White Rabbit, she plummets into Wonderland. Along her journey, she meets the enigmatic Cheshire Cat, joins an unbirthday celebration with the Mad Hatter, and discovers her inner courage while standing tall against the Queen of Hearts.",
              characters: ["Alice", "White Rabbit", "Mad Hatter", "Cheshire Cat", "Queen of Hearts"],
              world: "Wonderland — A vibrant dreamscape of talking flora, labyrinth hedge mazes, floating tea sets, and size-changing magic.",
              funFact: "The Cheshire Cat can vanish into thin air at any moment, leaving only his glowing, floating smile behind!",
              tags: ["Wonderland", "Curiosity", "Tea Party", "Fantasy"],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795541731666-lgqy24pc.jpg",
              imageAlt: "Alice surrounded by Wonderland characters including Mad Hatter, Cheshire Cat, and White Rabbit",
              href: "#contact"
            },
            {
              title: "Frozen",
              date: "Winter Wonder",
              intro: "Journey across shimmering glaciers into an enchanted kingdom bound by sisterly devotion!",
              description: "Embark on an epic winter adventure with Princess Anna, mountain outdoorsman Kristoff, loyal reindeer Sven, and cheerful snowman Olaf.",
              story: "When Elsa's icy powers accidentally plunge Arendelle into an eternal winter, her fearless sister Anna journeys into snowy peaks to bring her home. Guided by friendship and Olaf's warm hugs, they discover that true love dissolves even the frostiest magic.",
              characters: ["Elsa the Snow Queen", "Princess Anna", "Olaf", "Kristoff", "Sven"],
              world: "Arendelle & The Enchanted Forest — A glittering realm of towering ice castles, crystal glaciers, and elemental spirits.",
              funFact: "Olaf was brought to life by Elsa's childhood magic and loves warm hugs more than anything in the world!",
              tags: ["Arendelle", "Sisterhood", "Warm Hugs", "Ice Magic"],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795541731667-bqu497br.jpg",
              imageAlt: "Elsa, Anna, Kristoff, Sven, and Olaf in a magical autumn frozen landscape",
              href: "#contact"
            },
            {
              title: "Zootopia",
              date: "Urban Adventure",
              intro: "Welcome to a thriving animal metropolis where anyone can be anything!",
              description: "Hop into Zootopia alongside optimistic Officer Judy Hopps and quick-witted fox Nick Wilde as they solve a citywide mystery.",
              story: "Determined bunny Judy Hopps becomes Zootopia’s first rabbit police officer. Teaming up with clever fox Nick Wilde, they race across climate-controlled biomes to solve a high-stakes case, proving that trust and teamwork overcome all odds.",
              characters: ["Judy Hopps", "Nick Wilde", "Chief Bogo", "Flash the Sloth", "Bellwether"],
              world: "Zootopia Metropolis — A modern animal city featuring climate zones like Sahara Square, Rainforest District, and Tundratown.",
              funFact: "Flash the Sloth works at the DMV (Department of Mammal Vehicles) and takes full minutes just to stamp one document!",
              tags: ["Metropolis", "Teamwork", "Determination", "Animal World"],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795541731667-weehecsd.jpg",
              imageAlt: "Judy Hopps taking a selfie with Nick Wilde and Zootopia citizens",
              href: "#contact"
            },
            {
              title: "Hercules",
              date: "Mythic Heroism",
              intro: "Soar to legendary heights with a hero of mythic strength and a heart of gold!",
              description: "Follow young Hercules as he trains with Phil the Satyr and rides winged horse Pegasus to prove himself worthy of Mount Olympus.",
              story: "Born with godlike strength, Hercules sets out on a quest to become a true hero. Guided by his witty trainer Phil and soaring on Pegasus, he battles mythical beasts and thwarts Hades' schemes, learning that true heroism comes from the heart.",
              characters: ["Hercules", "Pegasus", "Phil the Satyr", "Megara", "Hades"],
              world: "Ancient Greece & Mount Olympus — A sunlit realm of golden palaces above the clouds, marble temples, and soaring skies.",
              funFact: "Hercules' ultimate victory came not from physical muscle, but from risking everything to protect those he loved!",
              tags: ["Mount Olympus", "Hero Quest", "Pegasus", "Courage"],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795541731668-ioxy3j8u.jpg",
              imageAlt: "Hercules proudly posing with Mount Olympus in the background",
              href: "#contact"
            },
            {
              title: "Moana",
              date: "Ocean Voyage",
              intro: "Set sail across the turquoise ocean on an inspiring voyage to save an island paradise!",
              description: "Embark on an epic sea voyage with brave Moana and demigod Maui as they restore the heart of Te Fiti.",
              story: "Chosen by the living ocean, adventurous teenager Moana sets sail from her island home of Motunui to save her people. Joining forces with shapeshifting demigod Maui, they cross tempestuous seas and restore harmony to nature.",
              characters: ["Moana", "Maui", "Heihei the Rooster", "Pua the Pig", "Te Fiti"],
              world: "Motunui & Pacific Ocean — A tropical wonderland of crystal turquoise waters, bioluminescent reefs, and living ocean waves.",
              funFact: "The ocean itself acts as a gentle, living character, waving to Moana and guiding her wayfaring journey!",
              tags: ["Wayfinding", "Ocean Magic", "Motunui", "Courage"],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795542254866-bkbh0mjt.jpg",
              imageAlt: "Moana and demigod Maui with Heihei and Pua on the beach with parting ocean waves",
              href: "#contact"
            }
          ]}
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

      <div id="explore-space" data-webild-section="ExploreSpaceGallery" data-webild-section-id="ExploreSpaceGallery-1" data-section="explore-space" data-scene>
        <ExploreSpaceGallery
          note="Our Daycare Facilities"
          title="Explore Our Space"
          description="Discover a welcoming, inspiring, and creative environment where children can learn, play, explore, and grow."
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
