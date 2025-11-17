import * as Types from "@/lib/types";
import * as Paths from "@/lib/paths";

import Image from "next/image";

import GalleryRadar from "@images/galleryradar.jpg";
import PrivateCollection from "@images/privatecollection.jpg";
import Sothebys from "@images/sothebys.jpg";
import Technician from "@images/technician.jpg";
import CompatibilityLogos from "@images/compatibilitylogos.svg";
import GlobalMap from "@images/globalprotection.svg";

const STANDARD_SPACING_CLASSNAME = "space-y-42";
const TEXT_HERO_CLASSNAME = "pt-8 md:pt-16";
const NUDGED_UP_CLASSNAME = "-mt-6";

const STANDARD_CTA_CARD: Types.CtaCardSection = {
  type: "CtaCard",
  heading: "Protect Your Collection",
  subheading: "Contact us to discuss security solutions for your institution",
  ctas: [
    {
      label: "Contact Us",
      href: Paths.CONTACT,
      type: "button",
      variant: "primary",
    },
  ],
};

export const HOME_PAGE: Types.Page = {
  className: `${STANDARD_SPACING_CLASSNAME}`,
  path: Paths.HOME,
  metadata: {
    title: "Home",
    description: "Home page",
    keywords: ["Art Guard", "Home", "Home page"],
    image: {
      src: GalleryRadar,
      alt: "Image of gallery with active alarm sensors",
    },
  },
  sections: [
    {
      type: "TextImageSplit",
      className: "md:-mt-nav-height",
      heading: "Museum-Grade Art Protection for Any Environment",
      subheading:
        "Wireless sensor technology trusted by Sotheby's, MOMA, and leading collectors worldwide",
      ctas: [
        {
          type: "button",
          label: "Explore Solutions",
          variant: "primary",
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: "button",
          label: "For Integrators",
          variant: "secondary",
          href: Paths.SECURITY_INSTALLERS,
        },
      ],
      image: {
        src: GalleryRadar,
        alt: "Image of gallery with active alarm sensors",
      },
    },
    {
      type: "TakeoverGrid",
      heading: "Advanced Protection Without Compromise",
      subheading:
        "Wireless sensor technology designed for the world's most valuable collections.",
      ctas: [
        {
          label: "Explore our systems",
          href: Paths.SECURITY_PRODUCTS,
          type: "link",
        },
      ],
      cards: [
        {
          heading: "Universal Compatibility",
          body: "Protects objects of any shape, size, or material—from sculpture to paintings to installations. A single sensor solution for your entire collection.",
          icon: "Instituion",
        },
        {
          heading: "Instant Detection",
          body: "Real-time alerts for theft and tampering with wireless reliability. Know immediately when your collection is at risk, anywhere in the world.",
          icon: "SpringInMotion",
        },
        {
          heading: "Seamless Integration",
          body: "Works within existing security infrastructure or as a standalone system. Professional-grade protection that adapts to your environment.",
          icon: "Instituion",
        },
      ],
    },
    {
      type: "TextImageSplit",
      heading: "Trusted by the World's Most Prestigious Collections",
      body: (
        <>
          <p>
            Art Guard protects collections at the{" "}
            <strong>Museum of Modern Art</strong>,{" "}
            <strong>Sotheby&apos;s</strong>, and leading galleries and private
            collections worldwide. When Sotheby&apos;s needed to secure a major
            exhibition, they chose our MAP Gold System for its wireless
            reliability and minimal installation impact.
          </p>
        </>
      ),
      ctas: [
        {
          label: "Read the Sotheby's Case Study",
          variant: "primary",
          href: "/test",
          type: "button",
        },
      ],
      image: {
        src: Sothebys,
        alt: "Image of Sotheby's gallery",
      },
    },
    {
      type: "TextImageSplit",
      heading: "Designed for Private Collections",
      reversed: true,
      body: (
        <>
          <p>
            Protecting art in private residences requires discretion and
            reliability.{" "}
            <strong>Art Guard&apos;s wireless MAP sensors deliver</strong>{" "}
            museum-grade security without compromising your home&apos;s
            aesthetics or requiring invasive installation.
          </p>
          <p>
            MAP sensors integrate with all leading security systems including{" "}
            <strong>Johnson Controls</strong>, <strong>Honeywell</strong>,{" "}
            <strong>DSC</strong>, and <strong>ADT</strong>. Or deploy them with
            our award-winning MAP System—a complete standalone solution built on
            the Alula Connect+ control panel.
          </p>
        </>
      ),
      auxContent: (
        <Image
          src={CompatibilityLogos}
          alt="Johnson Controls, Honeywell, DSC, and ADT logos"
        />
      ),
      ctas: [
        {
          label: "Explore Solutions",
          variant: "primary",
          href: Paths.SECURITY_PRODUCTS,
          type: "button",
        },
        {
          label: "For Integrators",
          variant: "secondary",
          href: Paths.SECURITY_INSTALLERS,
          type: "button",
        },
      ],
      image: {
        src: PrivateCollection,
        alt: "Image of private collection with active alarm sensors",
      },
    },
    {
      type: "TextImageSplit",
      heading: "A Premium Solution for High-Value Clients",
      body: (
        <>
          <p>
            Perimeter security leaves valuable assets vulnerable 8-16 hours
            daily—and that&apos;s where most theft occurs.{" "}
            <strong>Art Guard MAP sensors</strong> provide the object-specific
            protection your clients need for art, antiques, and collectibles.
            With universal compatibility across major security platforms and
            simple enrollment, you can deliver comprehensive protection that
            integrates seamlessly with existing systems.
          </p>
        </>
      ),
      ctas: [
        {
          label: "Learn More",
          variant: "primary",
          href: Paths.SECURITY_INSTALLERS,
          type: "button",
        },
        {
          label: "Join Our Partner Program",
          variant: "secondary",
          href: Paths.PARTNER_PROGRAM,
          type: "button",
        },
      ],
      image: {
        src: Technician,
        alt: "Image of technician installing MAP sensors",
      },
    },
    {
      type: "Map",
      heading: "Global Protection for Global Collections",
      subheading: "Trusted in major cities across five continents",
      columns: [
        {
          heading: "North America",
          children: [
            "New York",
            "Chicago",
            "Los Angeles",
            "Toronto",
            "Montreal",
          ],
        },
        {
          heading: "Europe",
          children: [
            "London",
            "Paris",
            "Amsterdam",
            "Brussels",
            "Berlin",
            "Madrid",
          ],
        },
        {
          heading: "Middle East & Asia",
          children: ["Tel Aviv", "Dubai", "Bangkok", "Hong Kong", "Valletta"],
        },
      ],
      image: {
        src: GlobalMap,
        alt: "Global map with major cities",
      },
    },
  ],
};

import BillAnderson from "@images/billanderson.jpg";

export const TEAM_PAGE: Types.Page = {
  className: `${STANDARD_SPACING_CLASSNAME} ${TEXT_HERO_CLASSNAME}`,
  path: Paths.TEAM,
  metadata: {
    title: "Our Team",
    description: "Meet the team behind Art Guard",
    keywords: ["Art Guard", "Team", "Meet the team"],
    image: {
      src: BillAnderson,
      alt: "Image of Bill Anderson",
    },
  },
  sections: [
    {
      type: "Team",
      heading: "Our Team",
      featuredFounder: {
        name: "Bill Anderson",
        title: "Founder/Managing Partner",
        bio: "Bill co-founded Art Guard in 2006 and has led product development, market strategy, and sales since inception. He co-developed the MAP sensor technology and brings decades of entrepreneurial experience across technology, media, and energy sectors. Prior roles include President/Publisher of The Atlantic Monthly and founder of database media and online ticketing companies.",
        image: {
          src: BillAnderson,
          alt: "Image of Bill Anderson",
        },
        linkedinUrl: "https://www.linkedin.com/in/billanderson4/",
      },
      secondaryFounder: {
        name: "Scott Richter",
        title: "Founder/Partner",
        bio: "Scott’s formal training is in industrial design. He worked for IBM for  eight years in that capacity and then turned to making art. Scott  invented, designed and patented the original Art Guard Safe Hook and  joined with Bill Anderson to launch Art Guard. Scott was the predominant influence for Art Guard’s development and patenting of the MAP  technology. Scott’s talent as an artist is evidenced by the national  museum and gallery display of his work that spans a 30-year career.  Among other awards, he received grants from the National Endowment for  the Arts in 1984 and 1986.",
      },
      boardOfAdvisors: [
        {
          name: "Peter Giacalone",
          bio: "Peter is a security industry consultant specializing in operational  structuring, strategic planning, market expansion, acquisitions, private equity capital placement and financial restructuring of security  related business. He works with notable global brands in the creation  and implementation of national dealer and affiliate programs,  specializing in central station services and monitoring of PERS  (Personal Emergency Response Systems) and remote video monitoring and  management. His 35 years of experience covers product and compliance  system design, DIY business deployment restructuring, access control  branding, business and sales management and acquisitions.",
        },
        {
          name: "Anthony Amore",
          bio: "An internationally recognized expert in the field of art theft and  security, Anthony has also worked in the homeland security field at the  federal level having worked in aviation and facility security as well as immigration enforcement. He has lectured in homeland security at the  college level in and provides commentary on security and terrorism  issues for a wide-range of local and national media outlets. Anthony is  the best-selling author of “Stealing Rembrandts” (2011). His second  book, “The Art of the Con,” was published in 2015 and was a New York  Times Best Seller in Crime. He is currently the Director of Security at  Boston’s Isabella Gardner Museum.",
        },
        {
          name: "Greg Smith",
          bio: "Greg is Executive VP at Berkley Asset protection. Continuing a family  legacy, Greg Smith started in the loss adjusting and loss control  business in 1987. He was trained by his world-renowned father, Harold J. Smith, in a firm called Smith Adjusters. For over 20 years, Greg has  been enhancing and refining his knowledge in the niche markets of fine  art, jewelers block, armored car, and crime from both the loss control  and adjusting perspectives. He has been instrumental in settling many of the most notable insurance claims and property recoveries in his fields of expertise over the past two decades. His experiences have enabled  him to foster extensive contacts in the International fine art &  jewelry communities and in law enforcement.",
        },
        {
          name: "Louis Parks",
          bio: "Louis is the Founder and CEO of SecureRF, a CT based company  specializing in the development of security technologies for the  “billions” of ultra-low resource things now connecting to the Internet  and whose futures will be significantly challenged by current advances  in quantum computing that will render almost all of our current security methods ineffective. SecureRF has developed an agreement protocol that  performs significantly better than ECC and RSA in both software and  hardware, allowing it to address the security needs of the smallest IoT  things. SecureRF is providing identification, authentication and data  protection to address advanced credentialing, sensors, and embedded  systems that will play an increasingly important role for security in  private and institutional settings.",
        },
        {
          name: "Chris Cummings",
          bio: "Chris is a senior executive with extensive international and domestic  experience in M&A transactions, corporate restructuring, public and  private venture and debt financing and IPO’s. Prior to his current  operating role as SVP of Corporate Development & Finance at an HR  cloud software company (Worktap) Chris advised the senior management and boards of companies, ranging from multinationals to early stage  businesses, on strategic, financial and operational initiatives. His 20+ year investment banking career included serving as head of Solomon,  Smith Barney’s Asia Pacific Industrial Development Banking Group in Hong Kong. Chris has a B.A. from Yale and an M.B.A from Harvard Business  School.",
        },
      ],
    },
  ],
};

import MapGold from "@images/mapgold.jpg";
import MapSilver from "@images/mapsilver.jpg";
import MapSensors from "@images/mapsensors.jpg";

export const SECURITY_PRODUCTS_PAGE: Types.Page = {
  className: "space-y-24",
  path: Paths.SECURITY_PRODUCTS,
  metadata: {
    title: "Security Products",
    description:
      "Protect your art and valuable assets with our security solutions",
    keywords: ["Art Guard", "Security", "Products"],
    image: {
      src: MapSensors,
      alt: "Image of MAP Sensors",
    },
  },
  sections: [
    {
      type: "FeatureGrid",
      className: "pt-16",
      heading: "Art Guard Security Solutions",
      subheading: "Choose the right protection for your needs",
      items: [
        {
          heading: "MAP Sensors",
          subheading: "Triple-mode wireless sensor in 345 and 433 MHz",
          image: {
            src: MapSensors,
            alt: "Image of MAP Sensors",
          },
          ctas: [
            {
              type: "button",
              label: "Explore MAP Sensors",
              href: Paths.MAP_SENSORS,
              variant: "secondary",
            },
          ],
          body: (
            <>
              <p>
                Professional-grade wireless sensors that integrate with all
                major security systems. Ideal for installers and integrators.
              </p>
              <ul>
                <li>Integrates with all major security systems</li>
                <li>Triple-mode protection for any object</li>
                <li>Available in 345 and 433 MHz frequencies</li>
                <li>Museum-tested, conservator-approved</li>
              </ul>
            </>
          ),
        },
        {
          heading: "MAP Gold System",
          subheading: "Complete standalone system with Alula Connect+ panel",
          image: {
            src: MapGold,
            alt: "Image of MAP Gold System",
          },
          ctas: [
            {
              type: "button",
              label: "Explore MAP Gold System",
              href: Paths.MAP_SYSTEM,
              variant: "secondary",
            },
          ],
          body: (
            <>
              <p>
                Complete standalone system for private collectors, galleries,
                and smaller institutions. Control from your phone, no installer
                required.
              </p>
              <ul>
                <li>
                  Integrates with all major security systemsPlug-and-play
                  standalone solution
                </li>
                <li>Supports up to 96 wireless sensors</li>
                <li>Dual-path communication (4G LTE and Wi-Fi)</li>
                <li>Built on Alula Connect+ panel</li>
              </ul>
            </>
          ),
        },
        {
          heading: "MAP Silver System",
          subheading: "Complete standalone system with Alula Connect+ panel",
          image: {
            src: MapSilver,
            alt: "Image of MAP Silver System",
          },
          ctas: [
            {
              type: "button",
              label: "Explore MAP Silver System",
              href: Paths.MAP_SYSTEM,
              variant: "secondary",
            },
          ],
          body: (
            <>
              <p>
                Complete standalone system for private collectors, galleries,
                and smaller institutions. Control from your phone, no installer
                required.
              </p>
              <ul>
                <li>
                  Integrates with all major security systemsPlug-and-play
                  standalone solution
                </li>
                <li>Supports up to 96 wireless sensors</li>
                <li>Dual-path communication (4G LTE and Wi-Fi)</li>
                <li>Built on Alula Connect+ panel</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      type: "CtaCard",
      heading: "Let’s talk",
      subheading:
        "Whether you're ready to order, need technical specifications, or have questions about the right solution for your needs, we're here to help.",
      ctas: [
        {
          label: "(212) 989-1494",
          href: "tel:+12129891494",
          type: "link",
        },
        {
          label: "info@artguard.net",
          href: "mailto:info@artguard.net",
          type: "link",
        },
      ],
    },
  ],
};

import MapSensorsHero from "@images/mapsensorshero.jpg";

export const MAP_SENSORS_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.MAP_SENSORS,
  metadata: {
    title: "MAP Wireless Sensors",
    description: "Universal protection for art and valuable assets",
    keywords: ["Art Guard", "MAP", "Wireless Sensors"],
  },
  sections: [
    {
      type: "TextImageSplit",
      className: "md:-mt-nav-height",
      heading: "MAP Wireless Sensors",
      subheading: "Universal protection for art and valuable assets",
      body: "MAP sensors provide object-specific security for artwork, antiques, and collectibles of any size or shape. Using patented magnetometer technology, MAP detects unauthorized movement and triggers immediate alerts—delivering museum-grade protection that's completely hidden from view.",
      ctas: [
        {
          type: "button",
          label: "Download Datasheet",
          variant: "primary",
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: "button",
          label: "Contact Us",
          variant: "secondary",
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: MapSensorsHero,
        alt: "Image of MAP sensors",
      },
    },
    {
      type: "VideoFeature",
      className: "md:-mt-36",
      heading: "Complete Protection, Simply Deployed",
      video: {
        src: "https://player.vimeo.com/video/1130331510?h=4a9f97b82c",
        alt: "Video of the MAP Gold System",
        type: "vimeo",
      },
      cards: [
        {
          heading: "Wireless Sensors",
          body: "Up to 96 MAP v3 sensors protect your entire collection. Each piece gets individual monitoring.",
          icon: "Instituion",
        },
        {
          heading: "Alula Connect+ Panel",
          body: "Award-winning control panel manages all sensors. Place anywhere—no wiring required.",
          icon: "Instituion",
        },
        {
          heading: "Mobile Control",
          body: "Arm, disarm, and monitor your system from your phone or web portal. Complete remote access.",
          icon: "Instituion",
        },
      ],
    },
    {
      type: "TakeoverGrid",
      heading: "Flexible Protection for Any Environment",
      subheading:
        "Three user-friendly modes of operation to optimize protection in different environments and situations.",
      cards: [
        {
          heading: "Magnetometer (Hanging)",
          body: "Detects movement of magnet on hanging artwork. Sensor placed behind the piece.",
          icon: "Instituion",
        },
        {
          heading: "Magnetometer (Seated)",
          body: "Detects movement of magnet on sculptures and objects. Sensor placed beneath.",
          icon: "SpringInMotion",
        },
        {
          heading: "Accelerometer",
          body: "Direct tilt detection without magnet. Sensor mounted on back of hanging work.",
          icon: "SpringInMotion",
        },
      ],
    },
    {
      type: "ValueGrid",
      heading: "Why MAP Sensors",
      subheading:
        "Built for professional installation, trusted by leading institutions",
      cards: [
        {
          heading: "Museum-Grade Reliability",
          body: "Trusted by leading institutions and top national integrators worldwide.",
          icon: "Instituion",
        },
        {
          heading: "Universal Compatibility",
          body: "Integrates with Honeywell, DSC, DMP, Qolsys, 2GIG, and all major security platforms.",
          icon: "SpringInMotion",
        },
        {
          heading: "Completely Hidden",
          body: "Both sensors and magnets invisible to viewers. Maintains aesthetic integrity.",
          icon: "Instituion",
        },
        {
          heading: "Museum-Grade Reliability",
          body: "Trusted by leading institutions and top national integrators worldwide.",
          icon: "Instituion",
        },
        {
          heading: "Universal Compatibility",
          body: "Integrates with Honeywell, DSC, DMP, Qolsys, 2GIG, and all major security platforms.",
          icon: "SpringInMotion",
        },
        {
          heading: "Completely Hidden",
          body: "Both sensors and magnets invisible to viewers. Maintains aesthetic integrity.",
          icon: "Instituion",
        },
      ],
    },
    {
      type: "TextHighlights",
      heading: "Ideal For",
      highlights: [
        {
          heading: "Private Collections",
          body: "Discreet protection for home collections with complete privacy and mobile convenience",
        },
        {
          heading: "Galleries",
          body: "Flexible system for rotating exhibitions with easy setup and no installation costs",
        },
        {
          heading: "Museums",
          body: "Perfect for special exhibitions and temporary displays that require portable, self-contained security",
        },
        {
          heading: "Corporate Collections",
          body: "Comprehensive security for office art installations with professional monitoring options",
        },
      ],
    },
    {
      type: "SpecTable",
      heading: "Technical Specifications",
      rows: [
        {
          heading: "Sensor Dimensions",
          value: '2" × 2" × ½"',
        },
        {
          heading: "Power",
          value: "2 × CR2450 lithium coin cell batteries",
        },
        {
          heading: "Battery Life",
          value: "4-5 years typical operation",
        },
        {
          heading: "RF Frequency",
          value: "345 MHz or 433 MHz",
        },
        {
          heading: "Range",
          value: "400+ feet (extendable with repeaters)",
        },
        {
          heading: "Check-in",
          value: "Industry standard 60 minutes",
        },
        {
          heading: "Compatibility",
          isHeader: true,
        },
        {
          heading: "MAP 345",
          value:
            "Honeywell/Ademco, DMP, Qolsys, 2GIG, Resideo, Elk, Alula panels",
        },
        {
          heading: "MAP 433",
          value:
            "DSC Neo (with HSM2164RF), CCure 9000, Kantech, DSC legacy panels",
        },
      ],
    },
    {
      type: "TakeoverHeading",
      icon: "Instituion",
      heading: "Trusted by Leading Institutions",
      subheading:
        "The MAP Gold System has been deployed by Sotheby's, major museums, and discerning private collectors worldwide. When Sotheby's needed to secure a high-value exhibition, they selected our technology for its reliability and ease of deployment.",
      byline: "—Chief of Security, Major NYC Museum",
    },
    {
      type: "CtaCard",
      heading: "Specify MAP Sensors for Your Next Installation",
      subheading:
        "Download technical specifications or contact our team for integration support",
      ctas: [
        {
          label: "Download Datasheet",
          href: Paths.SECURITY_PRODUCTS,
          type: "button",
          variant: "primary",
        },
        {
          label: "Contact Our Team",
          href: Paths.CONTACT,
          type: "button",
          variant: "secondary",
        },
      ],
    },
  ],
};

import Museum from "@images/museum.jpg";

export const MUSEUMS_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.MUSEUMS,
  metadata: {
    title: "Security Solutions for Museums",
    description: "Museum-grade protection for your collection",
    keywords: ["Art Guard", "Museums", "Museum-grade protection"],
    image: {
      src: Museum,
      alt: "Image of museum",
    },
  },
  sections: [
    {
      type: "TextImageSplit",
      className: "md:-mt-nav-height",
      heading: "Security for Museums and Galleries",
      subheading: "Object-specific protection for collections of any size",
      body: "MAP sensors deliver comprehensive, discreet security for artwork, artifacts, and exhibits—from masterpiece paintings to small historical objects.",
      ctas: [
        {
          type: "button",
          label: "Explore Solutions",
          variant: "primary",
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: "button",
          label: "Contact Us",
          variant: "secondary",
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: Museum,
        alt: "Image of museum",
      },
    },
    {
      type: "Text",
      heading: "Complete Protection, Simply Deployed",
      className: NUDGED_UP_CLASSNAME,
      body: (
        <>
          <p>
            Museums must balance public engagement with security for
            irreplaceable objects. Traditional perimeter security goes offline
            during operating hours, leaving individual pieces vulnerable to the
            most common threat: grab-and-run theft, which accounts for over 50%
            of art losses. Recovery rates remain at just 3-4%.
          </p>
          <p>
            Museum collections present unique challenges. A single gallery might
            contain paintings, small artifacts, documents, and sculptures—all
            requiring different protection approaches. Traditional motion
            sensors can&apos;t distinguish authorized handling from theft, and
            vibration sensors may be too sensitive for delicate works or
            high-traffic environments.
          </p>
          <p>
            Traveling exhibitions, loans between institutions, and special
            displays require flexible protection that adapts quickly to changing
            needs.
          </p>
        </>
      ),
    },
    {
      type: "Text",
      heading: "The Solution",
      className: NUDGED_UP_CLASSNAME,
      body: (
        <>
          <p>
            MAP sensors create an invisible security perimeter around each
            individual object. A small rare-earth magnet attaches discreetly to
            the piece using museum-approved adhesives. The sensor is placed
            nearby—behind hanging works or beneath seated objects. Both are
            completely hidden from view. Any unauthorized movement triggers an
            immediate, location-specific alert.
          </p>
          <p>
            Conservators approve MAP because the magnet attachment is less
            invasive than mounting sensors directly on artwork. The system
            scales from protecting vulnerable pieces to comprehensive gallery
            coverage, works for permanent installations or temporary
            exhibitions, and sensors can travel with loaned works to satisfy
            protection requirements.
          </p>
        </>
      ),
    },
    {
      type: "TakeoverGrid",
      heading: "Why Museums Choose MAP",
      cards: [
        {
          heading: "A Favorite of Conservators",
          body: "MAP's unique technology serves the demands for safety of the object, which often limits the use of other motion or vibration sensors. A small rare earth magnet is affixed to the object with inert museum wax or even wheat or rice paste. The MAP sensor is placed in close proximity. Affixing a tiny magnet instead of the sensor significantly decreases the affect on the fabric of the object and eliminates any danger of battery leakage.",
          icon: "ShieldLock",
        },
        {
          heading: "Dedicated and Versatile",
          body: "MAP is installed in some of the country's most prestigious museums, protecting nearly every conceivable type of asset from masterpiece paintings to small pieces of jewelry and from wall-mounted to seated pieces to the doors of cabinets and vitrines.",
          icon: "Instituion",
        },
        {
          heading: "Flexible and Scalable",
          body: "It can be used on just a few vulnerable works of art, as an added layer of protection for works on loan or to alarm entire rooms. Registrars should be aware of the ability of a MAP system to travel with works loaned out, satisfying any legal concerns for protection.",
          icon: "Move",
        },
      ],
    },
    {
      type: "ValueGrid",
      heading: "MAP for Museums",
      cards: [
        {
          heading: "Reliable",
          body: "Employed by some of the most highly regarded institutions in the U.S. Effective and discreet coverage with minimal false alarms. Industry standard check-in and 4-5 year battery life with low battery alert.",
          icon: "CheckRibbon",
        },
        {
          heading: "Comprehensive",
          body: "No means of object-specific protection is as versatile as MAP. Can be applied to any stationary object, as well as to cabinet doors and vitrines.",
          icon: "Layered",
        },
        {
          heading: "Safety",
          body: "The tiny magnet can be attached with an inert adhesive or buffered with another material.",
          icon: "Leaf",
        },
        {
          heading: "Flexible",
          body: "MAP can be deployed throughout a museum or in specific locations. A MAP system can be designed to travel with a show or works on loan. MAP systems are completely scalable.",
          icon: "Move",
        },
        {
          heading: "Affordable",
          body: "No other security system as comprehensive in its coverage costs as little initially and over the course of its life as MAP.",
          icon: "Coins",
        },
      ],
    },
    {
      type: "TakeoverHeading",
      icon: "Quote",
      heading: "Trusted by Leading Institutions",
      body: (
        <>
          &quot;We are a large mid-western museum and have used both Art Guard
          Safe Hook and the MAP sensors for several years now. MAP in particular
          has been most helpful in applications where stealth, dependability,
          and sensitivity to the art material being protected is required.
          It&apos;s versatility and dependability have helped us protect
          masterpieces and meet the requirements of lenders from museums around
          the world.&quot;
        </>
      ),
      byline: "—Director of Security, Large Midwest Museum",
    },
    {
      type: "CtaCard",
      heading: "Protect Your Collection",
      subheading:
        "Contact us to discuss security solutions for your institution",
      ctas: [
        {
          label: "Contact Us",
          href: Paths.CONTACT,
          type: "button",
          variant: "primary",
        },
      ],
    },
  ],
};

import Gallery from "@images/gallery.jpg";

export const GALLERIES_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.GALLERIES,
  metadata: {
    title: "Security Solutions for Art Galleries and Dealers | Art Guard",
    description:
      "Museum-grade protection for continuously changing works in galleries and dealer spaces.",
    keywords: [
      "gallery security",
      "art dealer security",
      "MAP sensors",
      "wireless art protection",
    ],
    image: {
      src: Gallery,
      alt: "Image of art gallery",
    },
  },
  sections: [
    {
      type: "TextImageSplit",
      className: "md:-mt-nav-height",
      heading: "Security Solutions for Art Galleries and Dealers",
      subheading: "Museum-grade protection for continuously changing works",
      body: "Art galleries have different security needs from museums or other facilities that display art. Shows change frequently so flexibility and ease of use in a security apparatus is critical. Entrances are open for free movement and often poorly supervised. Works for special or group shows increasingly require special security demands by the lender.",
      ctas: [
        {
          type: "button",
          label: "Explore Solutions",
          variant: "primary",
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: "button",
          label: "Contact Us",
          variant: "secondary",
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: Gallery,
        alt: "Gallery exhibits and visitors",
      },
    },
    {
      type: "Text",
      heading: "The Reality of Gallery Theft",
      className: NUDGED_UP_CLASSNAME,
      body: (
        <>
          <p>
            Whether &quot;grab and run&quot; or more surreptitious thefts,
            galleries suffer from particular vulnerability. Very few have guards
            or cameras. Works hanging near the entrance are often an invitation
            to theft, especially when gallery personnel are engaged with a
            client or on the phone at some distance from the front door.
          </p>
          <p>
            Art Guard offers flexible solutions designed specifically for these
            challenges.
          </p>
        </>
      ),
    },
    {
      type: "ValueGrid",
      heading: "Art Guard Solutions for Galleries",

      cards: [
        {
          heading: "Flexible Protection",
          body: "MAP sensors can be moved to other works or changed completely for other shows. Systems can be moved in their entirety to another facility for traveling shows without re-enrolling sensors or losing settings.",
          icon: "Move",
        },
        {
          heading: "Ready Out of the Box",
          body: "MAP sensors are pre-enrolled and ready to apply right out of the box. Whether standalone MAP Systems or integration with existing security platforms.",
          icon: "Box",
        },
        {
          heading: "Demonstrate Security Standards",
          body: "Show artists, lenders, and insurers that your gallery employs the latest technology for protection of any works—hanging or seated—entrusted to your care.",
          icon: "ShieldLock",
        },
      ],
    },

    {
      type: "TakeoverHeading",
      icon: "Quote",
      heading: "Trusted by Leading Galleries",
      body: (
        <>
          &quot;The Art Guard MAP System was the perfect solution for securing
          high value works on loan. It did exactly what we wanted, and we were
          able to provide absolute assurance to the lenders.&quot;
        </>
      ),
      byline: "—Amy Hussey, Nahmad Contemporary",
    },
    STANDARD_CTA_CARD,
  ],
};

import HistoricHome from "@images/historichome.jpg";

export const HISTORIC_HOMES_PAGE: Types.Page = {
  className: "space-y-24",
  path: Paths.HISTORIC_HOMES,
  metadata: {
    title: "Historic Houses",
    description:
      "Wireless protection that preserves historic architecture while securing collections.",
    keywords: [
      "historic house security",
      "history museum",
      "wireless sensors",
      "MAP sensors",
    ],
  },
  sections: [
    {
      type: "TextImageSplit",
      className: "md:-mt-nav-height",
      heading: "Security for Historic Houses and History Museums",
      subheading:
        "Protect collections without compromising historic architecture",
      body: "Historic houses and history museums face unique security challenges. Collections often include furniture, decorative arts, documents, and personal artifacts spread across multiple rooms in buildings where traditional hardwired systems would require damaging original architecture.",
      ctas: [
        {
          type: "button",
          label: "Explore Solutions",
          variant: "primary",
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: "button",
          label: "Contact Us",
          variant: "secondary",
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: HistoricHome,
        alt: "Historic house interior",
      },
    },

    {
      type: "Text",
      heading: "The Challenge",
      className: NUDGED_UP_CLASSNAME,
      body: (
        <>
          <p>
            Historic houses present layered security challenges. Buildings
            designed for private life now serve as public museums. Original
            layouts create blind spots and multiple access points. Period rooms
            contain dozens of small, valuable objects—any of which could be
            removed without triggering perimeter alarms.
          </p>
          <p>
            Installing traditional hardwired security systems means running
            conduit through historic walls, drilling into original woodwork, and
            compromising the architectural integrity these institutions exist to
            preserve. Wireless solutions eliminate infrastructure damage, but
            most motion sensors can&apos;t distinguish between authorized docent
            movement and theft attempts.
          </p>
        </>
      ),
    },

    {
      type: "Text",
      heading: "The Solution",
      className: NUDGED_UP_CLASSNAME,
      body: (
        <>
          <p>
            MAP wireless sensors provide object-specific protection without any
            permanent installation. Each piece receives individual
            monitoring—furniture, decorative objects, documents, textiles, even
            cabinet doors. The system operates during public hours, alerting
            staff immediately if any object is moved without authorization.
          </p>
          <p>
            Because MAP is completely wireless and sensors attach directly to
            objects rather than architecture, historic fabric remains untouched.
            Small magnets affix to pieces using museum-approved adhesives.
            Sensors place nearby—behind frames, beneath furniture, inside
            cabinets—completely hidden from visitors. The entire system installs
            without drilling, wiring, or structural modification.
          </p>
        </>
      ),
    },

    {
      type: "TakeoverGrid",
      heading: "Why Historic Sites Choose MAP",
      cards: [
        {
          heading: "Zero Architectural Impact",
          body: "No drilling, no wiring, no damage to historic fabric. Wireless system installs without touching original architecture.",
          icon: "Home",
        },
        {
          heading: "Protects During Operating Hours",
          body: "Object-specific alerts work while visitors tour rooms. Doesn't rely on perimeter security that must be disabled for public access.",
          icon: "Schedule",
        },
        {
          heading: "Room-by-Room Coverage",
          body: "Protect entire period rooms or individual significant pieces. Scales from a few vulnerable objects to comprehensive site coverage.",
          icon: "Grid",
        },
        {
          heading: "Hidden from View",
          body: "Sensors and magnets completely invisible to visitors. Maintains the historic atmosphere and period aesthetic.",
          icon: "Hidden",
        },
      ],
    },

    {
      type: "TextHighlights",
      heading: "Common Applications",
      highlights: [
        {
          heading: "Period Furnishings",
          body: "Protect chairs, tables, cabinets, and decorative furniture in room settings. Sensors beneath pieces detect any movement.",
        },
        {
          heading: "Decorative Objects",
          body: "Secure ceramics, silver, clocks, and small artifacts on tables and shelves. Individual protection for each piece.",
        },
        {
          heading: "Documents and Books",
          body: "Protect papers, letters, rare books, and manuscripts. Sensors on shelves or in display cases detect removal.",
        },
        {
          heading: "Textiles and Costumes",
          body: "Monitor quilts, samplers, clothing, and fabric artifacts. Gentle magnetic attachment approved for delicate materials.",
        },
      ],
    },
    STANDARD_CTA_CARD,
  ],
};
