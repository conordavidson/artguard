import * as Types from '@/lib/types';
import * as Paths from '@/lib/paths';

import Image from 'next/image';

import GalleryRadar from '@images/galleryradar.jpg';
import PrivateCollection from '@images/privatecollection.jpg';
import Sothebys from '@images/sothebys.jpg';
import Technician from '@images/technician.jpg';
import CompatibilityLogos from '@images/compatibilitylogos.svg';
import GlobalMap from '@images/globalprotection.svg';

const STANDARD_SPACING_CLASSNAME = 'space-y-42';
const TEXT_HERO_CLASSNAME = 'pt-8 md:pt-16';
const NUDGED_UP_CLASSNAME = '-mt-6';

const STANDARD_CTA_CARD: Types.CtaCardSection = {
  type: 'CtaCard',
  heading: 'Protect Your Collection',
  subheading: 'Contact us to discuss security solutions for your institution',
  ctas: [
    {
      label: 'Contact Us',
      href: Paths.CONTACT,
      type: 'button',
      variant: 'primary',
    },
  ],
};

export const HOME_PAGE: Types.Page = {
  className: `${STANDARD_SPACING_CLASSNAME}`,
  path: Paths.HOME,
  metadata: {
    title: 'Art Guard',
    description: 'Museum-Grade Art Protection for Any Environment',
    keywords: ['Art Guard', 'Home', 'Home page'],
    image: {
      src: GalleryRadar,
      alt: 'Image of gallery with active alarm sensors',
    },
  },
  sections: [
    {
      type: 'TextImageSplit',
      className: 'md:-mt-nav-height',
      heading: 'Museum-Grade Art Protection for Any Environment',
      subheading:
        "Wireless sensor technology trusted by Sotheby's, MOMA, and leading collectors worldwide",
      ctas: [
        {
          type: 'button',
          label: 'Explore Solutions',
          variant: 'primary',
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: 'button',
          label: 'For Integrators',
          variant: 'secondary',
          href: Paths.SECURITY_INSTALLERS,
        },
      ],
      image: {
        src: GalleryRadar,
        alt: 'Image of gallery with active alarm sensors',
      },
    },
    {
      type: 'RecentInsights',
      heading: 'Recent Insights',
      className: '-mt-24',
    },
    {
      type: 'TakeoverGrid',
      className: '-mt-8',
      heading: 'Advanced Protection Without Compromise',
      subheading: "Wireless sensor technology designed for the world's most valuable collections.",
      ctas: [
        {
          label: 'Explore our systems',
          href: Paths.SECURITY_PRODUCTS,
          type: 'link',
        },
      ],
      cards: [
        {
          heading: 'Universal Compatibility',
          body: 'Protects objects of any shape, size, or material—from sculpture to paintings to installations. A single sensor solution for your entire collection.',
          icon: 'Plugs',
        },
        {
          heading: 'Instant Detection',
          body: 'Real-time alerts for theft and tampering with wireless reliability. Know immediately when your collection is at risk, anywhere in the world.',
          icon: 'Alert',
        },
        {
          heading: 'Seamless Integration',
          body: 'Works within existing security infrastructure or as a standalone system. Professional-grade protection that adapts to your environment.',
          icon: 'TouchPanel',
        },
      ],
    },
    {
      type: 'TextImageSplit',
      heading: "Trusted by the World's Most Prestigious Collections",
      body: (
        <>
          <p>
            Art Guard protects collections at the <strong>Museum of Modern Art</strong>,{' '}
            <strong>Sotheby&apos;s</strong>, and leading galleries and private collections
            worldwide. When Sotheby&apos;s needed to secure a major exhibition, they chose our MAP
            Gold System for its wireless reliability and minimal installation impact.
          </p>
        </>
      ),
      ctas: [
        {
          label: "Read the Sotheby's Case Study",
          variant: 'primary',
          href: '/test',
          type: 'button',
        },
      ],
      image: {
        src: Sothebys,
        alt: "Image of Sotheby's gallery",
      },
    },
    {
      type: 'TextImageSplit',
      heading: 'Designed for Private Collections',
      reversed: true,
      body: (
        <>
          <p>
            Protecting art in private residences requires discretion and reliability.{' '}
            <strong>Art Guard&apos;s wireless MAP sensors deliver</strong> museum-grade security
            without compromising your home&apos;s aesthetics or requiring invasive installation.
          </p>
          <p>
            MAP sensors integrate with all leading security systems including{' '}
            <strong>Johnson Controls</strong>, <strong>Honeywell</strong>, <strong>DSC</strong>, and{' '}
            <strong>ADT</strong>. Or deploy them with our award-winning MAP System—a complete
            standalone solution built on the Alula Connect+ control panel.
          </p>
        </>
      ),
      auxContent: (
        <Image src={CompatibilityLogos} alt="Johnson Controls, Honeywell, DSC, and ADT logos" />
      ),
      ctas: [
        {
          label: 'Explore Solutions',
          variant: 'primary',
          href: Paths.SECURITY_PRODUCTS,
          type: 'button',
        },
        {
          label: 'For Integrators',
          variant: 'secondary',
          href: Paths.SECURITY_INSTALLERS,
          type: 'button',
        },
      ],
      image: {
        src: PrivateCollection,
        alt: 'Image of private collection with active alarm sensors',
      },
    },
    {
      type: 'TextImageSplit',
      heading: 'A Premium Solution for High-Value Clients',
      body: (
        <>
          <p>
            Perimeter security leaves valuable assets vulnerable 8-16 hours daily—and that&apos;s
            where most theft occurs. <strong>Art Guard MAP sensors</strong> provide the
            object-specific protection your clients need for art, antiques, and collectibles. With
            universal compatibility across major security platforms and simple enrollment, you can
            deliver comprehensive protection that integrates seamlessly with existing systems.
          </p>
        </>
      ),
      ctas: [
        {
          label: 'Learn More',
          variant: 'primary',
          href: Paths.SECURITY_INSTALLERS,
          type: 'button',
        },
        {
          label: 'Join Our Partner Program',
          variant: 'secondary',
          href: Paths.PARTNER_PROGRAM,
          type: 'button',
        },
      ],
      image: {
        src: Technician,
        alt: 'Image of technician installing MAP sensors',
      },
    },
    {
      type: 'Map',
      heading: 'Global Protection for Global Collections',
      subheading: 'Trusted in major cities across five continents',
      columns: [
        {
          heading: 'North America',
          children: ['New York', 'Chicago', 'Los Angeles', 'Toronto', 'Montreal'],
        },
        {
          heading: 'Europe',
          children: ['London', 'Paris', 'Amsterdam', 'Brussels', 'Berlin', 'Madrid'],
        },
        {
          heading: 'Middle East & Asia',
          children: ['Tel Aviv', 'Dubai', 'Bangkok', 'Hong Kong', 'Valletta'],
        },
      ],
      image: {
        src: GlobalMap,
        alt: 'Global map with major cities',
      },
    },
  ],
};

import BillAnderson from '@images/billanderson.jpg';

export const TEAM_PAGE: Types.Page = {
  className: `${STANDARD_SPACING_CLASSNAME} ${TEXT_HERO_CLASSNAME}`,
  path: Paths.TEAM,
  metadata: {
    title: 'Our Team',
    description: 'Meet the team behind Art Guard',
    keywords: ['Art Guard', 'Team', 'Meet the team'],
    image: {
      src: BillAnderson,
      alt: 'Image of Bill Anderson',
    },
  },
  sections: [
    {
      type: 'Team',
      heading: 'Our Team',
      featuredFounder: {
        name: 'Bill Anderson',
        title: 'Founder/Managing Partner',
        bio: 'Bill co-founded Art Guard in 2006 and has led product development, market strategy, and sales since inception. He co-developed the MAP sensor technology and brings decades of entrepreneurial experience across technology, media, and energy sectors. Prior roles include President/Publisher of The Atlantic Monthly and founder of database media and online ticketing companies.',
        image: {
          src: BillAnderson,
          alt: 'Image of Bill Anderson',
        },
        linkedinUrl: 'https://www.linkedin.com/in/billanderson4/',
      },
      secondaryFounder: {
        name: 'Scott Richter',
        title: 'Founder/Partner',
        bio: 'Scott’s formal training is in industrial design. He worked for IBM for  eight years in that capacity and then turned to making art. Scott  invented, designed and patented the original Art Guard Safe Hook and  joined with Bill Anderson to launch Art Guard. Scott was the predominant influence for Art Guard’s development and patenting of the MAP  technology. Scott’s talent as an artist is evidenced by the national  museum and gallery display of his work that spans a 30-year career.  Among other awards, he received grants from the National Endowment for  the Arts in 1984 and 1986.',
      },
      boardOfAdvisors: [
        {
          name: 'Peter Giacalone',
          bio: 'Peter is a security industry consultant specializing in operational  structuring, strategic planning, market expansion, acquisitions, private equity capital placement and financial restructuring of security  related business. He works with notable global brands in the creation  and implementation of national dealer and affiliate programs,  specializing in central station services and monitoring of PERS  (Personal Emergency Response Systems) and remote video monitoring and  management. His 35 years of experience covers product and compliance  system design, DIY business deployment restructuring, access control  branding, business and sales management and acquisitions.',
        },
        {
          name: 'Anthony Amore',
          bio: 'An internationally recognized expert in the field of art theft and  security, Anthony has also worked in the homeland security field at the  federal level having worked in aviation and facility security as well as immigration enforcement. He has lectured in homeland security at the  college level in and provides commentary on security and terrorism  issues for a wide-range of local and national media outlets. Anthony is  the best-selling author of “Stealing Rembrandts” (2011). His second  book, “The Art of the Con,” was published in 2015 and was a New York  Times Best Seller in Crime. He is currently the Director of Security at  Boston’s Isabella Gardner Museum.',
        },
        {
          name: 'Greg Smith',
          bio: 'Greg is Executive VP at Berkley Asset protection. Continuing a family  legacy, Greg Smith started in the loss adjusting and loss control  business in 1987. He was trained by his world-renowned father, Harold J. Smith, in a firm called Smith Adjusters. For over 20 years, Greg has  been enhancing and refining his knowledge in the niche markets of fine  art, jewelers block, armored car, and crime from both the loss control  and adjusting perspectives. He has been instrumental in settling many of the most notable insurance claims and property recoveries in his fields of expertise over the past two decades. His experiences have enabled  him to foster extensive contacts in the International fine art &  jewelry communities and in law enforcement.',
        },
        {
          name: 'Louis Parks',
          bio: 'Louis is the Founder and CEO of SecureRF, a CT based company  specializing in the development of security technologies for the  “billions” of ultra-low resource things now connecting to the Internet  and whose futures will be significantly challenged by current advances  in quantum computing that will render almost all of our current security methods ineffective. SecureRF has developed an agreement protocol that  performs significantly better than ECC and RSA in both software and  hardware, allowing it to address the security needs of the smallest IoT  things. SecureRF is providing identification, authentication and data  protection to address advanced credentialing, sensors, and embedded  systems that will play an increasingly important role for security in  private and institutional settings.',
        },
        {
          name: 'Chris Cummings',
          bio: 'Chris is a senior executive with extensive international and domestic  experience in M&A transactions, corporate restructuring, public and  private venture and debt financing and IPO’s. Prior to his current  operating role as SVP of Corporate Development & Finance at an HR  cloud software company (Worktap) Chris advised the senior management and boards of companies, ranging from multinationals to early stage  businesses, on strategic, financial and operational initiatives. His 20+ year investment banking career included serving as head of Solomon,  Smith Barney’s Asia Pacific Industrial Development Banking Group in Hong Kong. Chris has a B.A. from Yale and an M.B.A from Harvard Business  School.',
        },
      ],
    },
  ],
};

import MapGold from '@images/mapgold.jpg';
import MapSilver from '@images/mapsilver.jpg';
import MapSensors from '@images/mapsensors.jpg';

export const SECURITY_PRODUCTS_PAGE: Types.Page = {
  className: 'space-y-24',
  path: Paths.SECURITY_PRODUCTS,
  metadata: {
    title: 'Security Products',
    description: 'Protect your art and valuable assets with our security solutions',
    keywords: ['Art Guard', 'Security', 'Products'],
    image: {
      src: MapSensors,
      alt: 'Image of MAP Sensors',
    },
  },
  sections: [
    {
      type: 'FeatureGrid',
      className: 'pt-16',
      heading: 'Art Guard Security Solutions',
      subheading: 'Choose the right protection for your needs',
      items: [
        {
          heading: 'MAP Sensors',
          subheading: 'Triple-mode wireless sensor in 345 and 433 MHz',
          image: {
            src: MapSensors,
            alt: 'Image of MAP Sensors',
          },
          ctas: [
            {
              type: 'button',
              label: 'Explore MAP Sensors',
              href: Paths.MAP_SENSORS,
              variant: 'secondary',
            },
          ],
          body: (
            <>
              <p>
                Professional-grade wireless sensors that integrate with all major security systems.
                Ideal for installers and integrators.
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
          heading: 'MAP Gold System',
          subheading: 'Complete standalone system with Alula Connect+ panel',
          image: {
            src: MapGold,
            alt: 'Image of MAP Gold System',
          },
          ctas: [
            {
              type: 'button',
              label: 'Explore MAP Gold System',
              href: Paths.MAP_SYSTEM_GOLD,
              variant: 'secondary',
            },
          ],
          body: (
            <>
              <p>
                Complete standalone system for private collectors, galleries, and smaller
                institutions. Control from your phone, no installer required.
              </p>
              <ul>
                <li>Integrates with all major security systemsPlug-and-play standalone solution</li>
                <li>Supports up to 96 wireless sensors</li>
                <li>Dual-path communication (4G LTE and Wi-Fi)</li>
                <li>Built on Alula Connect+ panel</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'MAP Silver System',
          subheading: 'Complete standalone system with Alula Connect+ panel',
          image: {
            src: MapSilver,
            alt: 'Image of MAP Silver System',
          },
          ctas: [
            {
              type: 'button',
              label: 'Explore MAP Silver System',
              href: Paths.MAP_SYSTEM_SILVER,
              variant: 'secondary',
            },
          ],
          body: (
            <>
              <p>
                Complete standalone system for private collectors, galleries, and smaller
                institutions. Control from your phone, no installer required.
              </p>
              <ul>
                <li>Integrates with all major security systemsPlug-and-play standalone solution</li>
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
      type: 'CtaCard',
      heading: 'Let’s talk',
      subheading:
        "Whether you're ready to order, need technical specifications, or have questions about the right solution for your needs, we're here to help.",
      ctas: [
        {
          label: '(212) 989-1494',
          href: 'tel:+12129891494',
          type: 'link',
        },
        {
          label: 'info@artguard.net',
          href: 'mailto:info@artguard.net',
          type: 'link',
        },
      ],
    },
  ],
};

import MapSensorsHero from '@images/mapsensorshero.jpg';

export const MAP_SENSORS_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.MAP_SENSORS,
  metadata: {
    title: 'MAP Wireless Sensors',
    description: 'Universal protection for art and valuable assets',
    keywords: ['Art Guard', 'MAP', 'Wireless Sensors'],
  },
  sections: [
    {
      type: 'TextImageSplit',
      className: 'md:-mt-nav-height',
      heading: 'MAP Wireless Sensors',
      subheading: 'Universal protection for art and valuable assets',
      body: "MAP sensors provide object-specific security for artwork, antiques, and collectibles of any size or shape. Using patented magnetometer technology, MAP detects unauthorized movement and triggers immediate alerts—delivering museum-grade protection that's completely hidden from view.",
      ctas: [
        {
          type: 'button',
          label: 'Download Datasheet',
          variant: 'primary',
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'secondary',
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: MapSensorsHero,
        alt: 'Image of MAP sensors',
      },
    },
    {
      type: 'VideoFeature',
      className: 'md:-mt-36',
      heading: 'Complete Protection, Simply Deployed',
      video: {
        src: 'https://player.vimeo.com/video/1130331510?h=4a9f97b82c',
        alt: 'Video of the MAP Gold System',
        type: 'vimeo',
      },
      cards: [
        {
          heading: 'Wireless Sensors',
          body: 'Up to 96 MAP v3 sensors protect your entire collection. Each piece gets individual monitoring.',
          icon: 'Instituion',
        },
        {
          heading: 'Alula Connect+ Panel',
          body: 'Award-winning control panel manages all sensors. Place anywhere—no wiring required.',
          icon: 'Instituion',
        },
        {
          heading: 'Mobile Control',
          body: 'Arm, disarm, and monitor your system from your phone or web portal. Complete remote access.',
          icon: 'Instituion',
        },
      ],
    },
    {
      type: 'TakeoverGrid',
      heading: 'Flexible Protection for Any Environment',
      subheading:
        'Three user-friendly modes of operation to optimize protection in different environments and situations.',
      cards: [
        {
          heading: 'Magnetometer (Hanging)',
          body: 'Detects movement of magnet on hanging artwork. Sensor placed behind the piece.',
          icon: 'Instituion',
        },
        {
          heading: 'Magnetometer (Seated)',
          body: 'Detects movement of magnet on sculptures and objects. Sensor placed beneath.',
          icon: 'SpringInMotion',
        },
        {
          heading: 'Accelerometer',
          body: 'Direct tilt detection without magnet. Sensor mounted on back of hanging work.',
          icon: 'SpringInMotion',
        },
      ],
    },
    {
      type: 'ValueGrid',
      heading: 'Why MAP Sensors',
      subheading: 'Built for professional installation, trusted by leading institutions',
      cards: [
        {
          heading: 'Museum-Grade Reliability',
          body: 'Trusted by leading institutions and top national integrators worldwide.',
          icon: 'Instituion',
        },
        {
          heading: 'Universal Compatibility',
          body: 'Integrates with Honeywell, DSC, DMP, Qolsys, 2GIG, and all major security platforms.',
          icon: 'SpringInMotion',
        },
        {
          heading: 'Completely Hidden',
          body: 'Both sensors and magnets invisible to viewers. Maintains aesthetic integrity.',
          icon: 'Instituion',
        },
        {
          heading: 'Museum-Grade Reliability',
          body: 'Trusted by leading institutions and top national integrators worldwide.',
          icon: 'Instituion',
        },
        {
          heading: 'Universal Compatibility',
          body: 'Integrates with Honeywell, DSC, DMP, Qolsys, 2GIG, and all major security platforms.',
          icon: 'SpringInMotion',
        },
        {
          heading: 'Completely Hidden',
          body: 'Both sensors and magnets invisible to viewers. Maintains aesthetic integrity.',
          icon: 'Instituion',
        },
      ],
    },
    {
      type: 'TextHighlights',
      heading: 'Ideal For',
      highlights: [
        {
          heading: 'Private Collections',
          body: 'Discreet protection for home collections with complete privacy and mobile convenience',
        },
        {
          heading: 'Galleries',
          body: 'Flexible system for rotating exhibitions with easy setup and no installation costs',
        },
        {
          heading: 'Museums',
          body: 'Perfect for special exhibitions and temporary displays that require portable, self-contained security',
        },
        {
          heading: 'Corporate Collections',
          body: 'Comprehensive security for office art installations with professional monitoring options',
        },
      ],
    },
    {
      type: 'SpecTable',
      heading: 'Technical Specifications',
      rows: [
        {
          heading: 'Sensor Dimensions',
          value: '2" × 2" × ½"',
        },
        {
          heading: 'Power',
          value: '2 × CR2450 lithium coin cell batteries',
        },
        {
          heading: 'Battery Life',
          value: '4-5 years typical operation',
        },
        {
          heading: 'RF Frequency',
          value: '345 MHz or 433 MHz',
        },
        {
          heading: 'Range',
          value: '400+ feet (extendable with repeaters)',
        },
        {
          heading: 'Check-in',
          value: 'Industry standard 60 minutes',
        },
        {
          heading: 'Compatibility',
          isHeader: true,
        },
        {
          heading: 'MAP 345',
          value: 'Honeywell/Ademco, DMP, Qolsys, 2GIG, Resideo, Elk, Alula panels',
        },
        {
          heading: 'MAP 433',
          value: 'DSC Neo (with HSM2164RF), CCure 9000, Kantech, DSC legacy panels',
        },
      ],
    },
    {
      type: 'TakeoverHeading',
      icon: 'Instituion',
      heading: 'Trusted by Leading Institutions',
      subheading:
        "The MAP Gold System has been deployed by Sotheby's, major museums, and discerning private collectors worldwide. When Sotheby's needed to secure a high-value exhibition, they selected our technology for its reliability and ease of deployment.",
      byline: '—Chief of Security, Major NYC Museum',
    },
    {
      type: 'CtaCard',
      heading: 'Specify MAP Sensors for Your Next Installation',
      subheading: 'Download technical specifications or contact our team for integration support',
      ctas: [
        {
          label: 'Download Datasheet',
          href: Paths.SECURITY_PRODUCTS,
          type: 'button',
          variant: 'primary',
        },
        {
          label: 'Contact Our Team',
          href: Paths.CONTACT,
          type: 'button',
          variant: 'secondary',
        },
      ],
    },
  ],
};

import Museum from '@images/museum.jpg';

export const MUSEUMS_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.MUSEUMS,
  metadata: {
    title: 'Security Solutions for Museums',
    description: 'Museum-grade protection for your collection',
    keywords: ['Art Guard', 'Museums', 'Museum-grade protection'],
    image: {
      src: Museum,
      alt: 'Image of museum',
    },
  },
  sections: [
    {
      type: 'TextImageSplit',
      className: 'md:-mt-nav-height',
      heading: 'Security for Museums and Galleries',
      subheading: 'Object-specific protection for collections of any size',
      body: 'MAP sensors deliver comprehensive, discreet security for artwork, artifacts, and exhibits—from masterpiece paintings to small historical objects.',
      ctas: [
        {
          type: 'button',
          label: 'Explore Solutions',
          variant: 'primary',
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'secondary',
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: Museum,
        alt: 'Image of museum',
      },
    },
    {
      type: 'Text',
      heading: 'Complete Protection, Simply Deployed',
      className: NUDGED_UP_CLASSNAME,
      body: (
        <>
          <p>
            Museums must balance public engagement with security for irreplaceable objects.
            Traditional perimeter security goes offline during operating hours, leaving individual
            pieces vulnerable to the most common threat: grab-and-run theft, which accounts for over
            50% of art losses. Recovery rates remain at just 3-4%.
          </p>
          <p>
            Museum collections present unique challenges. A single gallery might contain paintings,
            small artifacts, documents, and sculptures—all requiring different protection
            approaches. Traditional motion sensors can&apos;t distinguish authorized handling from
            theft, and vibration sensors may be too sensitive for delicate works or high-traffic
            environments.
          </p>
          <p>
            Traveling exhibitions, loans between institutions, and special displays require flexible
            protection that adapts quickly to changing needs.
          </p>
        </>
      ),
    },
    {
      type: 'Text',
      heading: 'The Solution',
      className: NUDGED_UP_CLASSNAME,
      body: (
        <>
          <p>
            MAP sensors create an invisible security perimeter around each individual object. A
            small rare-earth magnet attaches discreetly to the piece using museum-approved
            adhesives. The sensor is placed nearby—behind hanging works or beneath seated objects.
            Both are completely hidden from view. Any unauthorized movement triggers an immediate,
            location-specific alert.
          </p>
          <p>
            Conservators approve MAP because the magnet attachment is less invasive than mounting
            sensors directly on artwork. The system scales from protecting vulnerable pieces to
            comprehensive gallery coverage, works for permanent installations or temporary
            exhibitions, and sensors can travel with loaned works to satisfy protection
            requirements.
          </p>
        </>
      ),
    },
    {
      type: 'TakeoverGrid',
      heading: 'Why Museums Choose MAP',
      cards: [
        {
          heading: 'A Favorite of Conservators',
          body: "MAP's unique technology serves the demands for safety of the object, which often limits the use of other motion or vibration sensors. A small rare earth magnet is affixed to the object with inert museum wax or even wheat or rice paste. The MAP sensor is placed in close proximity. Affixing a tiny magnet instead of the sensor significantly decreases the affect on the fabric of the object and eliminates any danger of battery leakage.",
          icon: 'ShieldLock',
        },
        {
          heading: 'Dedicated and Versatile',
          body: "MAP is installed in some of the country's most prestigious museums, protecting nearly every conceivable type of asset from masterpiece paintings to small pieces of jewelry and from wall-mounted to seated pieces to the doors of cabinets and vitrines.",
          icon: 'Instituion',
        },
        {
          heading: 'Flexible and Scalable',
          body: 'It can be used on just a few vulnerable works of art, as an added layer of protection for works on loan or to alarm entire rooms. Registrars should be aware of the ability of a MAP system to travel with works loaned out, satisfying any legal concerns for protection.',
          icon: 'Move',
        },
      ],
    },
    {
      type: 'ValueGrid',
      heading: 'MAP for Museums',
      cards: [
        {
          heading: 'Reliable',
          body: 'Employed by some of the most highly regarded institutions in the U.S. Effective and discreet coverage with minimal false alarms. Industry standard check-in and 4-5 year battery life with low battery alert.',
          icon: 'CheckRibbon',
        },
        {
          heading: 'Comprehensive',
          body: 'No means of object-specific protection is as versatile as MAP. Can be applied to any stationary object, as well as to cabinet doors and vitrines.',
          icon: 'Layered',
        },
        {
          heading: 'Safety',
          body: 'The tiny magnet can be attached with an inert adhesive or buffered with another material.',
          icon: 'Leaf',
        },
        {
          heading: 'Flexible',
          body: 'MAP can be deployed throughout a museum or in specific locations. A MAP system can be designed to travel with a show or works on loan. MAP systems are completely scalable.',
          icon: 'Move',
        },
        {
          heading: 'Affordable',
          body: 'No other security system as comprehensive in its coverage costs as little initially and over the course of its life as MAP.',
          icon: 'Coins',
        },
      ],
    },
    {
      type: 'TakeoverHeading',
      icon: 'Quote',
      heading: 'Trusted by Leading Institutions',
      body: (
        <>
          &quot;We are a large mid-western museum and have used both Art Guard Safe Hook and the MAP
          sensors for several years now. MAP in particular has been most helpful in applications
          where stealth, dependability, and sensitivity to the art material being protected is
          required. It&apos;s versatility and dependability have helped us protect masterpieces and
          meet the requirements of lenders from museums around the world.&quot;
        </>
      ),
      byline: '—Director of Security, Large Midwest Museum',
    },
    {
      type: 'CtaCard',
      heading: 'Protect Your Collection',
      subheading: 'Contact us to discuss security solutions for your institution',
      ctas: [
        {
          label: 'Contact Us',
          href: Paths.CONTACT,
          type: 'button',
          variant: 'primary',
        },
      ],
    },
  ],
};

import Gallery from '@images/gallery.jpg';

export const GALLERIES_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.GALLERIES,
  metadata: {
    title: 'Security Solutions for Art Galleries and Dealers | Art Guard',
    description:
      'Museum-grade protection for continuously changing works in galleries and dealer spaces.',
    keywords: ['gallery security', 'art dealer security', 'MAP sensors', 'wireless art protection'],
    image: {
      src: Gallery,
      alt: 'Image of art gallery',
    },
  },
  sections: [
    {
      type: 'TextImageSplit',
      className: 'md:-mt-nav-height',
      heading: 'Security Solutions for Art Galleries and Dealers',
      subheading: 'Museum-grade protection for continuously changing works',
      body: 'Art galleries have different security needs from museums or other facilities that display art. Shows change frequently so flexibility and ease of use in a security apparatus is critical. Entrances are open for free movement and often poorly supervised. Works for special or group shows increasingly require special security demands by the lender.',
      ctas: [
        {
          type: 'button',
          label: 'Explore Solutions',
          variant: 'primary',
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'secondary',
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: Gallery,
        alt: 'Gallery exhibits and visitors',
      },
    },
    {
      type: 'Text',
      heading: 'The Reality of Gallery Theft',
      className: NUDGED_UP_CLASSNAME,
      body: (
        <>
          <p>
            Whether &quot;grab and run&quot; or more surreptitious thefts, galleries suffer from
            particular vulnerability. Very few have guards or cameras. Works hanging near the
            entrance are often an invitation to theft, especially when gallery personnel are engaged
            with a client or on the phone at some distance from the front door.
          </p>
          <p>Art Guard offers flexible solutions designed specifically for these challenges.</p>
        </>
      ),
    },
    {
      type: 'ValueGrid',
      heading: 'Art Guard Solutions for Galleries',

      cards: [
        {
          heading: 'Flexible Protection',
          body: 'MAP sensors can be moved to other works or changed completely for other shows. Systems can be moved in their entirety to another facility for traveling shows without re-enrolling sensors or losing settings.',
          icon: 'Move',
        },
        {
          heading: 'Ready Out of the Box',
          body: 'MAP sensors are pre-enrolled and ready to apply right out of the box. Whether standalone MAP Systems or integration with existing security platforms.',
          icon: 'Box',
        },
        {
          heading: 'Demonstrate Security Standards',
          body: 'Show artists, lenders, and insurers that your gallery employs the latest technology for protection of any works—hanging or seated—entrusted to your care.',
          icon: 'ShieldLock',
        },
      ],
    },

    {
      type: 'TakeoverHeading',
      icon: 'Quote',
      heading: 'Trusted by Leading Galleries',
      body: (
        <>
          &quot;The Art Guard MAP System was the perfect solution for securing high value works on
          loan. It did exactly what we wanted, and we were able to provide absolute assurance to the
          lenders.&quot;
        </>
      ),
      byline: '—Amy Hussey, Nahmad Contemporary',
    },
    STANDARD_CTA_CARD,
  ],
};

import HistoricHome from '@images/historichome.jpg';

export const HISTORIC_HOMES_PAGE: Types.Page = {
  className: 'space-y-24',
  path: Paths.HISTORIC_HOMES,
  metadata: {
    title: 'Historic Houses',
    description:
      'Wireless protection that preserves historic architecture while securing collections.',
    keywords: ['historic house security', 'history museum', 'wireless sensors', 'MAP sensors'],
  },
  sections: [
    {
      type: 'TextImageSplit',
      className: 'md:-mt-nav-height',
      heading: 'Security for Historic Houses and History Museums',
      subheading: 'Protect collections without compromising historic architecture',
      body: 'Historic houses and history museums face unique security challenges. Collections often include furniture, decorative arts, documents, and personal artifacts spread across multiple rooms in buildings where traditional hardwired systems would require damaging original architecture.',
      ctas: [
        {
          type: 'button',
          label: 'Explore Solutions',
          variant: 'primary',
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'secondary',
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: HistoricHome,
        alt: 'Historic house interior',
      },
    },

    {
      type: 'Text',
      heading: 'The Challenge',
      className: NUDGED_UP_CLASSNAME,
      body: (
        <>
          <p>
            Historic houses present layered security challenges. Buildings designed for private life
            now serve as public museums. Original layouts create blind spots and multiple access
            points. Period rooms contain dozens of small, valuable objects—any of which could be
            removed without triggering perimeter alarms.
          </p>
          <p>
            Installing traditional hardwired security systems means running conduit through historic
            walls, drilling into original woodwork, and compromising the architectural integrity
            these institutions exist to preserve. Wireless solutions eliminate infrastructure
            damage, but most motion sensors can&apos;t distinguish between authorized docent
            movement and theft attempts.
          </p>
        </>
      ),
    },

    {
      type: 'Text',
      heading: 'The Solution',
      className: NUDGED_UP_CLASSNAME,
      body: (
        <>
          <p>
            MAP wireless sensors provide object-specific protection without any permanent
            installation. Each piece receives individual monitoring—furniture, decorative objects,
            documents, textiles, even cabinet doors. The system operates during public hours,
            alerting staff immediately if any object is moved without authorization.
          </p>
          <p>
            Because MAP is completely wireless and sensors attach directly to objects rather than
            architecture, historic fabric remains untouched. Small magnets affix to pieces using
            museum-approved adhesives. Sensors place nearby—behind frames, beneath furniture, inside
            cabinets—completely hidden from visitors. The entire system installs without drilling,
            wiring, or structural modification.
          </p>
        </>
      ),
    },

    {
      type: 'TakeoverGrid',
      heading: 'Why Historic Sites Choose MAP',
      cards: [
        {
          heading: 'Zero Architectural Impact',
          body: 'No drilling, no wiring, no damage to historic fabric. Wireless system installs without touching original architecture.',
          icon: 'Home',
        },
        {
          heading: 'Protects During Operating Hours',
          body: "Object-specific alerts work while visitors tour rooms. Doesn't rely on perimeter security that must be disabled for public access.",
          icon: 'Schedule',
        },
        {
          heading: 'Room-by-Room Coverage',
          body: 'Protect entire period rooms or individual significant pieces. Scales from a few vulnerable objects to comprehensive site coverage.',
          icon: 'Grid',
        },
        {
          heading: 'Hidden from View',
          body: 'Sensors and magnets completely invisible to visitors. Maintains the historic atmosphere and period aesthetic.',
          icon: 'Hidden',
        },
      ],
    },

    {
      type: 'TextHighlights',
      heading: 'Common Applications',
      highlights: [
        {
          heading: 'Period Furnishings',
          body: 'Protect chairs, tables, cabinets, and decorative furniture in room settings. Sensors beneath pieces detect any movement.',
        },
        {
          heading: 'Decorative Objects',
          body: 'Secure ceramics, silver, clocks, and small artifacts on tables and shelves. Individual protection for each piece.',
        },
        {
          heading: 'Documents and Books',
          body: 'Protect papers, letters, rare books, and manuscripts. Sensors on shelves or in display cases detect removal.',
        },
        {
          heading: 'Textiles and Costumes',
          body: 'Monitor quilts, samplers, clothing, and fabric artifacts. Gentle magnetic attachment approved for delicate materials.',
        },
      ],
    },
    STANDARD_CTA_CARD,
  ],
};

import HotelLobby from '@images/hotellobby.jpg';

export const HOTELS_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.HOTELS,
  metadata: {
    title: 'Hotels',
    description:
      'Discreet protection for artwork and decorative objects in hotel public spaces and guest rooms.',
    keywords: ['hotel security', 'hotel art protection', 'MAP sensors', 'hospitality security'],
  },
  sections: [
    {
      type: 'TextImageSplit',
      className: 'md:-mt-nav-height',
      heading: 'Asset Protection for Hotels Against Theft',
      subheading: 'Protection from theft for any art and decorative object',
      body: "Being the perfect host with imperfect guests, hotels and resorts strive to create an environment that elevates their guests' feelings of privilege and comfort. This is achieved through original artwork and designer fixtures, which have become commonplace in many properties. However, hotels are not museums, and guests are given the benefit of the doubt. This approach, while beneficial for guests, poses a liability for hotels.",
      ctas: [
        {
          type: 'button',
          label: 'Explore Solutions',
          variant: 'primary',
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'secondary',
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: HotelLobby, // **IMAGE NEEDED: Hotel lobby with artwork displayed**
        alt: 'Hotel lobby with artwork',
      },
    },

    {
      type: 'Text',
      heading: 'The Challenge',
      className: NUDGED_UP_CLASSNAME,
      body: (
        <>
          <p>
            Discreet protection for any valuable object is essential, especially in public spaces
            where there is little control over who enters and exits. Art Guard security devices are
            designed to discreetly alarm objects on display, providing 24/7 protection. Conventional
            systems and practices have limitations:
          </p>
          <ul>
            <li>Hotel personnel cannot be constantly vigilant.</li>
            <li>Security guards can be costly, obtrusive, and limited in their effectiveness.</li>
            <li>Cameras can document theft but not prevent it.</li>
            <li>Standard motion and vibration sensors have size and performance limitations.</li>
          </ul>
        </>
      ),
    },

    {
      type: 'Text',
      heading: 'Art Guard MAP: Discreet, Museum-Grade Protection',
      className: NUDGED_UP_CLASSNAME,
      body: (
        <>
          <p>
            Art Guard&apos;s MAP wireless sensor is used in prestigious museums, galleries, and
            homes of high-end collectors. MAP Sensors can protect nearly any stationary object,
            regardless of size. MAP can be used to secure decorative items in the lobby, art in
            public spaces, and even artwork in guest rooms. MAP can discreetly alert the front desk
            or any other designated party in the hotel of any object movement.
          </p>
        </>
      ),
    },

    {
      type: 'ValueGrid',
      heading: 'Hotel Applications',
      cards: [
        {
          heading: 'Lobby and Public Spaces',
          body: 'Secure decorative items, sculpture, and artwork in high-traffic areas where constant monitoring is impractical.',
          icon: 'Lounge',
        },
        {
          heading: 'Corridors and Common Areas',
          body: 'Protect artwork along hallways and in shared spaces throughout the property with wireless, hidden sensors.',
          icon: 'Hallway',
        },
        {
          heading: 'Guest Rooms',
          body: 'Discreetly secure artwork in premium suites and guest rooms without impacting the guest experience.',
          icon: 'Door',
        },
      ],
    },

    STANDARD_CTA_CARD,
  ],
};

import AuctionHouse from '@images/auctionhouse.jpg';

export const AUCTION_HOUSES_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.AUCTION_HOUSES,
  metadata: {
    title: 'Auction Houses',
    description:
      'Flexible, comprehensive protection for continuously changing inventory in auction previews and sales.',
    keywords: ['auction house security', 'auction security', 'MAP sensors', 'lot protection'],
  },
  sections: [
    {
      type: 'TextImageSplit',
      className: 'md:-mt-nav-height',
      heading: 'Asset Security for Auction Houses',
      subheading: 'Flexible protection for continuously changing inventory',
      body: 'Auction houses are unique in placing demands for flexibility on any security system designed to protect objects. Objects of enormous variety are continuously being moved and changed, maybe more so than in any other facility displaying valuable assets. Ease-of-use should be a hallmark. And a system has to be equally adept at securing a painting and a piece of jewelry.',
      ctas: [
        {
          type: 'button',
          label: 'Explore Solutions',
          variant: 'primary',
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'secondary',
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: AuctionHouse,
        alt: 'Auction house preview room',
      },
    },

    {
      type: 'Text',
      heading: 'Comprehensive Protection for Every Lot',
      className: NUDGED_UP_CLASSNAME,
      body: (
        <p>
          Art Guard MAP offers the most comprehensive protection for stationary objects of any
          technology or security measure. This is MAP&apos;s hallmark. Exhibiting objects
          individually or in lots as openly as possible to prospective buyers while discreetly
          protecting them is paramount. Employing MAP is equal to having a separate guard on every
          lot, watching every painting, every sculpture, every snuff box and every pendant.
        </p>
      ),
    },

    {
      type: 'ValueGrid',
      heading: 'A Balance of Flexibility and Presentation with Protection',
      cards: [
        {
          heading: 'System Flexibility',
          body: 'MAP sensors can be employed in a host of currently-installed or dedicated security panels, as well as in the MAP System, which offers the ultimate convenience in set-up and management.',
          icon: 'NetworkCloud',
        },
        {
          heading: 'Easy Installation',
          body: 'MAP sensors are easy to install to accommodate changing displays. Sensors can be temporarily by-passed to move individual pieces.',
          icon: 'Move',
        },
        {
          heading: 'Configurable Alerts',
          body: 'Responses to an event can be anything from a local alarm (loud or subtle) to a cell phone text.',
          icon: 'Alert',
        },
        {
          heading: 'Universal Coverage',
          body: 'No other object-specific security is capable of protecting each and every asset, no matter the size.',
          icon: 'ShieldLock',
        },
      ],
    },
    {
      type: 'TakeoverHeading',
      icon: 'Quote',
      heading: 'Trusted by Leading Auction Houses',
      body: "Art Guard MAP provided the added security we needed for one of the largest exhibitions we've ever put on. We were very pleased with the ease of set-up and use, and the fantastic service. We felt we had the right amount of protection for such an important collection and will be using the system again and again.",
      byline: '—Prominent Canadian Gallery/Auction House',
    },

    STANDARD_CTA_CARD,
  ],
};

export const PRIVATE_COLLECTIONS_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.PRIVATE_COLLECTIONS,
  metadata: {
    title: 'Private Collections',
    description:
      '24/7 dedicated, discreet protection for art and valuable assets in private residences.',
    keywords: [
      'private art collection security',
      'home art security',
      'MAP sensors',
      'residential security',
    ],
  },
  sections: [
    {
      type: 'TextImageSplit',
      className: 'md:-mt-nav-height',
      heading:
        'Asset Protection for Private Art Collections and Valuable Stationary Assets Against Theft',
      subheading: '24/7, dedicated, discreet and pinpoint security for art and assets',
      body: 'No home is immune to theft. Because many homeowners believe their perimeter security system offers adequate protection they are particularly vulnerable. In fact over 50% of art thefts are from private residences. And once valuable art is stolen the chance that it will ever be recovered is just 4%.',
      ctas: [
        {
          type: 'button',
          label: 'Explore Solutions',
          variant: 'primary',
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'secondary',
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: PrivateCollection, // Using existing image from home page
        alt: 'Private art collection',
      },
    },

    {
      type: 'Text',
      heading: 'Best Practices in Art Security',
      className: NUDGED_UP_CLASSNAME,
      body: (
        <p>
          Best practices in art security highly recommend a dedicated system for art and valuable
          assets in a redundant, blended approach to security. Art Guard MAP provides unparalleled
          around-the-clock protection to individual objects, whether perimeter/intrusion security is
          on or off to allow for the daily activities of a home&apos;s residents, staff, workers and
          guests or is compromised.
        </p>
      ),
    },

    {
      type: 'Text',
      heading: 'Protection for Each and Every Stationary Object',
      className: NUDGED_UP_CLASSNAME,
      body: (
        <p>
          MAP provides museum-grade security for nearly any stationary object in the home, including
          art, jewelry, tapestry, antiques, collectibles, memorabilia, wine and firearms. MAP
          sensors can even tell if a car is moved. Sensors and magnets are completely hidden from
          view. Real-time alerts allow for a quick response during those crucial seconds before a
          priceless object is lost forever.
        </p>
      ),
    },

    {
      type: 'FeatureGrid',
      heading: 'Choose Your Solution',
      items: [
        {
          heading: 'Complete Standalone Solution',
          subheading: 'MAP Gold System',
          body: (
            <>
              <p>
                All-in-one wireless system perfect for special exhibitions, traveling shows, or
                institutions without existing security infrastructure. Control from your phone, no
                installer required.
              </p>
              <p>
                <strong>Features:</strong>
              </p>
              <ul>
                <li>Award-winning Alula Connect+ panel</li>
                <li>Up to 96 pre-enrolled sensors</li>
                <li>Dual-path communication (4G LTE + IP)</li>
                <li>Mobile app management</li>
              </ul>
            </>
          ),
          image: {
            src: MapGold,
            alt: 'MAP Gold System',
          },
          ctas: [
            {
              type: 'button',
              label: 'Explore MAP Gold System',
              href: Paths.MAP_SYSTEM_GOLD,
              variant: 'secondary',
            },
          ],
        },
        {
          heading: 'Professional Integration for Established Systems',
          subheading: 'MAP Sensors',
          body: (
            <>
              <p>
                Professional-grade wireless sensors that integrate with all major security
                platforms. Ideal for museums with existing infrastructure seeking comprehensive
                object-specific protection.
              </p>
              <p>
                <strong>Features:</strong>
              </p>
              <ul>
                <li>
                  Integrates with Honeywell, DSC, DMP, Qolsys, 2GIG, and major access control
                  systems
                </li>
                <li>345 and 433 MHz options</li>
                <li>400+ foot range (extendable with repeaters)</li>
                <li>Museum-tested reliability</li>
              </ul>
            </>
          ),
          image: {
            src: MapSensors,
            alt: 'MAP Sensors',
          },
          ctas: [
            {
              type: 'button',
              label: 'Explore MAP Sensors',
              href: Paths.MAP_SENSORS,
              variant: 'secondary',
            },
          ],
        },
      ],
    },

    {
      type: 'TakeoverHeading',
      icon: 'Tools',
      heading: 'Installation and Support',
      body: (
        <>
          <p>
            In any case, sensors and magnets should be applied by a qualified art handler working
            with the security installer. Whichever system is employed, no other security solution
            provides the unique ability to protect nearly any object of value and do so with such
            reliability, safety for the asset, flexibility and affordability, offering the ultimate
            peace of mind for any private collector.
          </p>
          <p>
            <em>
              Art Guard sells only the MAP sensor and magnets and the MAP System. Art Guard does not
              do installations. MAP System DIY installations are completely supported by Art Guard
              with video and telephone customer support. Standard security panels and associated
              equipment, installation and monitoring are provided by your local security installer.
              If you would like information on local installers, please contact us.
            </em>
          </p>
        </>
      ),
      ctas: [
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'secondary',
          href: Paths.CONTACT,
        },
      ],
    },

    {
      type: 'ValueGrid',
      heading: 'Why Private Collectors Choose MAP',
      cards: [
        {
          heading: 'Reliability',
          body: "Museum-grade and used by the world's most prestigious institutions. Movement of either the sensor or magnet triggers a customized alert. Backed by the insurance industry. Supervised sensors with 4-5 year battery life and low battery alert. Any attempt to tamper with the sensor produces an alert. Cellular backup immediately takes over in case of Internet interruption. Programmed to minimize false alarms.",
          icon: 'ShieldLock',
        },
        {
          heading: 'Comprehensive',
          body: 'Object-specific protection for any piece of art and valuable asset, no matter how small. 400 ft. wireless sensor transmission can be extended with the use of inexpensive repeaters to cover any size home. MAP can be used just as easily for outdoor sculpture or objects within 400 ft. of the home.',
          icon: 'Layered',
        },
        {
          heading: 'Flexible',
          body: 'Completely scalable for any size collection or application. Multiple objects can be protected by a single sensor. Alerts are completely customizable to suit your alarm and response needs, including audio alarm, emails, text or calls to multiple parties, a relay to a central station or triggering a camera or lights.',
          icon: 'Settings',
        },
        {
          heading: 'Affordable',
          body: 'No other system compares in initial and life-cycle cost.',
          icon: 'Coins',
        },
      ],
    },
    STANDARD_CTA_CARD,
  ],
};

export const OUR_STORY_PAGE: Types.Page = {
  className: `${STANDARD_SPACING_CLASSNAME} ${TEXT_HERO_CLASSNAME}`,
  path: Paths.OUR_STORY,
  metadata: {
    title: 'Our Story',
    description: 'Two decades of innovation in art and asset protection technology.',
    keywords: ['Art Guard', 'about', 'company history', 'MAP sensors'],
  },
  sections: [
    {
      type: 'Text',
      heading: 'About Art Guard',
      subheading: 'Consistently refining asset protection',
      body: (
        <p>
          Art Guard has been a leader in providing innovative, cost-effective security solutions for
          the protection of art and cultural assets in a wide array of institutions, facilities and
          private collections around the world.
        </p>
      ),
    },

    {
      type: 'VideoFeature',
      heading: 'Our Story',
      className: `-mt-20`,
      video: {
        src: 'https://player.vimeo.com/video/183547629?title=0&byline=0&portrait=0',
        alt: 'Art Guard company video',
        type: 'vimeo',
      },
      cards: [
        {
          heading: '2006',
          body: 'Art Guard founded in response to dramatic increases in art valuations and corresponding rise in grab-and-run theft. Safe Hook introduced to alarm hanging art.',
          icon: 'Flag',
        },
        {
          heading: '2012',
          body: 'Began development on wireless sensor to protect seated objects as well as hanging, 24/7 and regardless of size.',
          icon: 'Lightbulb',
        },
        {
          heading: '2014',
          body: 'Introduced MAP (Magnetic Asset Protection), patented wireless technology providing object-specific theft protection for nearly any stationary object.',
          icon: 'CheckRibbon',
        },
      ],
    },

    {
      type: 'Text',
      heading: 'Continued Innovation',
      body: (
        <p>
          Art Guard continues to innovate with additional features, its own DIY systems and the
          development of MAP sensors in multiple security protocols, with the goal being to make MAP
          available anywhere in the world and on most major security panels and access control
          systems.
        </p>
      ),
    },
    {
      type: 'CtaCard',
      heading: 'Learn More About Our Team',
      subheading: "Meet the people behind Art Guard's innovative security solutions",
      className: NUDGED_UP_CLASSNAME,
      ctas: [
        {
          label: 'Meet Our Team',
          href: Paths.TEAM,
          type: 'button',
          variant: 'primary',
        },
        {
          label: 'Contact Us',
          href: Paths.CONTACT,
          type: 'button',
          variant: 'secondary',
        },
      ],
    },
  ],
};

export const FAQS_PAGE: Types.Page = {
  className: `${STANDARD_SPACING_CLASSNAME} ${TEXT_HERO_CLASSNAME}`,
  path: Paths.FAQS,
  metadata: {
    title: 'FAQs',
    description: 'Frequently asked questions about Art Guard and MAP.',
    keywords: ['Art Guard', 'FAQs', 'MAP'],
  },
  sections: [
    {
      type: 'Faqs',
      heading: 'MAP v2 Sensor FAQ’s',
      faqs: [
        {
          question: 'How is Art Guard’s MAP v3 sensor different from other technologies?',
          answer:
            'The MAP v3 triple mode is truly universal. It offers the combination of a unique technology with the broadest of  applications, safety for the asset and better economics than other object-specific security solutions, including video and motion/vibration sensors, either on RFID or standard security systems. Three easily changeable modes — two for hanging objects and one for seated objects — offer optimal performance on nearly any object in any environment.  MAP’s patented use of a small rare earth magnet to indicate movement of an asset makes protecting almost any stationary object, regardless of size, possible. MAP is also agnostic in its integration into a broad array of panels and systems.',
        },
        {
          question: 'How safe is MAP for delicate objects?',
          answer:
            'Seated objects in particular often demand extreme care because of the delicacy of their surface, whether a parchment, porcelain, tapestry or other. The choice of benign adhesives (see next) or opposing magnets held in place by their attraction, possibly with a small piece of velum to avoid contact, or placing a magnet in foam and resting it inside a vessel may be called for.',
        },
        {
          question: 'What adhesives do we recommend?',
          answer:
            ' MAP sensor comes with a strip of 3M tape that can be used whole or cut into smaller pieces. We also recommend 3M Command tape or conservation tape, both available in MAP Sensor Accessories. To affix the magnet, painter’s or conservation tape is usually used. A small piece of the 3M tape can also be used. Museum Wax can be used in certain situations but its effectiveness is compromised by certain surfaces and  temperatures. In the most extreme cases where a tiny magnet can be used on a very delicate surface, wheat or rice paste can be used. In any case make sure surfaces are clean before affixing either sensor or magnet.',
        },
        {
          question: 'What is the lifespan of a MAP sensor?',
          answer:
            'Two coin-cell batteries last 4-5 yrs. with normal usage and can be replaced. Batteries are available in MAP Sensor Accessories.',
        },
        {
          question: 'How do I know which magnet to use?',
          answer:
            'This will be dictated by the situation and each is different. Magnets come in all shapes and sizes, again viewable and available on in MAP Sensor Accessories. Art Guard ships a small disk-shaped magnet with each sensor for hanging works unless otherwise instructed. We are available to help you determine the best fit and placement.',
        },
        {
          question: 'How far can MAP transmit?',
          answer:
            'Transmission distance often depends on a number of factors. The average range to a panel/receiver is over 400 ft. In open air it can be far greater but can also be shorter depending on configurations of a space and construction materials. Repeaters can easily be added to boost signals making coverage in a large facility, even between floors, possible.',
        },
        {
          question: 'Why are there no prices on your site?',
          answer:
            'Since every situation is different we prefer to discuss the particulars of what is being protected, the type of features and performance guidelines for every client and whether you are an end-user of installer/integrator.',
        },
        {
          question: 'What if I want to move or replace a piece or send it out on loan?',
          answer:
            'The sensor and magnet can simply be removed and placed on another piece. If the sensor has the name of the object associated with it that can be changed. If the sensor is no longer attached to a piece, it can be by-passed or deleted from the system and re-enrolled when needed.',
        },
        {
          question: 'What is the return policy?',
          answer:
            'Contact Art Guard for details. Unused and undamaged goods may be returned for a full refund within 30 days of customer receipt of product, confirmed by UPS records of delivery.',
        },
        {
          question: 'What applications might present problems?',
          answer:
            'There are very few but there may be situations where a seated object doesn’t allow discreet placement of the magnet or the supporting surface prevents placement of the sensor. Art Guard is happy to help explore alternative solutions.',
        },
      ],
    },
    {
      type: 'Faqs',
      heading: "MAP Gold System FAQ's",
      faqs: [
        {
          question: 'How does the MAP Gold System differ from other security systems?',
          answer:
            'Gold is a fully interactive and completely dedicated wireless system with unparalleled flexibility. It acts in stand-alone mode, operating 24/7 in the background with no connection to activities on the main security system, particularly arming, disarming and troubles. The panel can be set up anywhere internet, wi-fi or cellular are available and affixed to the wall or sitting in its own stand. Gold can be moved without any interruption. Gold is a hybrid of a standard security system with the ease of a home automation system.',
        },
        {
          question: 'Does Art Guard install the system? ',
          answer:
            'We do installations in the NYC tri-state area. Otherwise, we ship Gold as a dedicated, plug-and-play system throughout the world with full, no-cost support.',
        },
        {
          question: 'Can Gold be interfaced with my main security?',
          answer:
            'No. Gold is completed dedicated and cannot be integrated with any other systems. There are no outputs for hard wiring. Most art security advisers recommend a dedicated system because it is unaffected by the arming/disarming and any compromises of the main security.',
        },
        {
          question: 'Can I move the system?',
          answer:
            ' The Gold system is completely portable and can be moved within a facility or from one facility to another, as with traveling exhibitions.',
        },
        {
          question:
            'Can I deactivate the system and reactivate it at a later date? What’s involved?',
          answer:
            'Many institutions use Gold for special exhibits because of this flexibility. The system can be deactivated and monitoring stopped and brought back into service at any time without affecting the enrolled sensors. We will simply turn off monitoring and deactivate the system and reactive both at your direction.',
        },
        {
          question: 'What kind of response can I get to alarms or troubles?',
          answer:
            'The panel has a built-in siren that can be deactivated. A remote siren is also available. Normal data response includes push notifications from a mobile app or sms texts and emails. Phone calls to the system user, police or other physical response service can be added.',
        },
        {
          question: 'Can I use my own monitoring company?',
          answer:
            'No, Art Guard uses Alula’s back-end for delivery of texts and emails. If central station monitoring for phone calls and physical response is requested, Art Guard uses Rapid Response, a leading national monitoring service.',
        },
        {
          question: 'How many people can be notified of an event?',
          answer:
            'Any number of people can be added as users with various access and managing privileges.',
        },
        {
          question: 'What happens if the internet goes down?',
          answer:
            'The system quickly transitions to cellular. If the Internet is prone to interruptions an option is to operate on wi-fi with a cellular back up.',
        },
        {
          question: 'Can I get a reduction on my insurance by installing Gold?',
          answer:
            'Insurance companies will often suggest purchasing the Gold system but will not advertise discounts for doing so. However, inquiries after the fact with proof of installation from Art Guard may result in a discount.',
        },
        {
          question: 'Are there any other charges associated with the system?',
          answer:
            'Aside from the original equipment costs and monthly monitoring, there are no other fees.',
        },
      ],
    },
  ],
};

const PRODUCT_SHEETS = [
  {
    heading: 'Art Guard MAP Sensor Data Sheet',
    href: 'https://www.artguard.net/resources/Art-Guard-MAP-345-sensor.pdf',
  },
  {
    heading: 'Art Guard MAP System Data Sheet',
    href: 'https://www.artguard.net/resources/Art-Guard-MAP-system-Gold.pdf',
  },
  {
    heading: 'Art Guard MAP Conservationist Curator Notes',
    href: 'https://www.artguard.net/resources/ArtGuard-MAPConservationist-curator-notes.pdf',
  },
  {
    heading: 'Art Guard MAP for Historical Museums and Houses',
    href: 'https://www.artguard.net/resources/ArtGuard-MAPforHistoricalMuseumsAndHouses.pdf',
  },
  {
    heading: 'Enroll MAP sensors into DMP',
    href: 'https://www.artguard.net/resources/Enroll-MAP-sensors-into-DMP.pdf',
  },
  {
    heading: 'Object-Specific Protection: The Untapped Market in Home Security (2025)',
    href: 'https://www.artguard.net/resources/Art-Guard-White-Paper_OSP.pdf',
  },
];

export const PRODUCT_SHEETS_PAGE: Types.Page = {
  className: `${STANDARD_SPACING_CLASSNAME} ${TEXT_HERO_CLASSNAME}`,
  path: Paths.PRODUCT_SHEETS,
  metadata: {
    title: 'Product Sheets',
    description: 'Product sheets for Art Guard security products',
    keywords: ['Art Guard', 'Product Sheets', 'Security Products'],
  },
  sections: [
    {
      type: 'LinkGrid',
      heading: 'Data Sheets and Product Information Sheets',
      links: PRODUCT_SHEETS.map((product) => ({
        heading: product.heading,
        icon: 'Pdf',
        href: product.href,
        ctaLabel: 'Download',
        target: '_blank',
      })),
    },
  ],
};

const PRESS_ITEMS = [
  {
    heading: 'Artnet News, July 2021',
    body: 'Foiled! How Advanced Technology Is Stopping Art Thieves, Looters, and Fraudsters From Hatching Their Schemes',
    href: 'https://news.artnet.com/art-world/technology-art-theft-1990767',
  },
  {
    heading: 'Butera Art Advisory Newsletter, June 2021',
    body: 'Common Myths in Art Protection',
    href: 'https://www.buteraartadvisory.com/monthly-newsletter/2021/6/28/art-theft',
  },
  {
    heading: 'ArtRatio, March 2021',
    body: '“The State of Art Protection” Bill Anderson of ArtGuard looks at the current state of art protection technologies for museums and private collections.',
    href: 'https://www.artratio.co.uk/state-of-art-protection',
  },
  {
    heading: 'The Hack Post, January 2020',
    body: 'Latest High Tech Safety Features That Improve Home and Personal Security',
    href: 'https://thehackpost.com/latest-high-tech-safety-features-that-improve-home-and-personal-security.html',
  },
  {
    heading: 'Robb Report, August 2019',
    body: ' “Forget Panic Rooms and Alarms, State-of-the-Art Security Is Now Insanely High-Tech—and Nearly Invisible“',
    href: 'https://robbreport.com/shelter/home-design/home-security-modern-world-2859018/',
  },
  {
    heading: 'ArtWork Archive, June 2019',
    body: '4 Questions with an Art Collection Security Expert.',
    href: 'https://www.artworkarchive.com/blog/4-questions-with-an-art-collection-security-expert',
  },
  {
    heading: 'Security Sales & Integration, April 2019 Issue',
    body: '“Canvass Art Customers About Object-Specific Protection Possibilities“',
    href: 'https://www.artguard.net/wp-content/uploads/2019/04/Sec.-Sales-Int-article.tiff',
  },
  {
    heading: 'SDM April 1, 2019',
    body: 'Alula + Art Guard: Protecting the Priceless',
    href: 'https://www.sdmmag.com/articles/96415-alula-art-guard-protecting-the-priceless',
  },
  {
    heading: 'Insurance Innovation Reporter, October 5, 2017',
    body: 'Art Guard Launches Security Tech Program for Insurers of Fine Art',
    href: 'http://iireporter.com/art-guard-launches-security-tech-program-for-insurers-of-fine-art/',
  },
  {
    heading: 'Rough Notes, June 2017',
    body: 'Managing Risk for High Net Worth Clients',
    href: 'https://www.artguard.net/Managing_Risk_for_High-Net-Worth_Clients_Rough_Notes_June_2017_50-54_1.pdf',
  },
  {
    heading: 'Insurance Journal, April 2017',
    body: 'Q&A: Art Theft and Its Impact on the Insurance Industry',
    href: 'http://www.insurancejournal.com/news/east/2017/04/11/446866.htm',
  },
];

export const PRESS_PAGE: Types.Page = {
  className: `${STANDARD_SPACING_CLASSNAME} ${TEXT_HERO_CLASSNAME}`,
  path: Paths.PRESS,
  metadata: {
    title: 'Press',
    description: 'Press releases and media coverage for Art Guard',
    keywords: ['Art Guard', 'Press', 'Media Coverage'],
  },
  sections: [
    {
      type: 'LinkGrid',
      heading: 'Art Risks Press Releases and Published Articles',
      links: PRESS_ITEMS.map((press) => ({
        heading: press.heading,
        body: press.body,
        href: press.href,
        ctaLabel: 'Read Article',
        target: '_blank',
      })),
    },
  ],
};

import SecurityPartnersLogos from '@images/securitypartnerslogos.png';

export const SATISFIED_CUSTOMERS_PAGE: Types.Page = {
  className: `${STANDARD_SPACING_CLASSNAME}`,
  path: Paths.SATISFIED_CUSTOMERS,
  metadata: {
    title: 'Satisfied Customers',
    description:
      'Trusted by museums, galleries, private collectors, and security professionals worldwide.',
    keywords: ['Art Guard', 'testimonials', 'clients', 'museums', 'galleries'],
  },
  sections: [
    {
      type: 'TakeoverHeading',
      className: '-mt-nav-height pt-42',
      heading: 'The Art Guard Team',
      body: "The Art Guard team is made up of professionals from both the art market and veterans from the security industry and fine art insurance. Art Guard's engineers have over 60 years of cumulative experience in developing sensor technologies for GE, DSC and other leaders in the security component sector. Advisors include museum security directors and art conservators. Nothing has been left to chance in addressing the needs of the industry.",
      ctas: [
        {
          label: 'Meet Our Team',
          href: Paths.TEAM,
          type: 'button',
          variant: 'secondary',
        },
      ],
    },
    {
      type: 'Text',
      heading: 'Clients',
      className: NUDGED_UP_CLASSNAME,
      body: (
        <>
          <p>
            <strong>Private Collectors:</strong> Throughout the US and in Mexico, Canada, U.K.,
            France, UAE, Israel, Hong Kong and Bangkok
          </p>
          <p>
            <strong>Museums:</strong> Isabella Gardner, The Morgan Library, MOMA, SF Asian Art
            Museum, Minneapolis Inst. of Art, The Hammer Museum, Peabody Essex, Orlando Museum,
            Portland Museum
          </p>
          <p>
            <strong>Galleries:</strong> Sotheby&apos;s, Pace, Gagosian NY and Paris, Nahmad
            Contemporary, Booth School London
          </p>
          <p>
            <strong>Corporate Collections:</strong> Pt 72, Deutsche Bank NY and London, UBS, AT&T,
            Norfolk Southern
          </p>
        </>
      ),
    },

    {
      type: 'TextHighlights',
      heading: 'What Our Clients Say',
      highlights: [
        {
          heading: "—Michael Seremetis, former Director of Security, Sotheby's Worldwide",
          body: "“The UK's incomparable Chatsworth House collection presented at Sotheby's NY would not have happened without Art Guard's MAP Gold System.”",
        },
        {
          heading: '—Jack Quigley, former Director of Security, The Morgan Library, NYC',
          body: "“Art Guard's MAP sensor has given both security and the conservators a genuine sense of comfort that no other security product has been able to. Providing this type of object-specific security is vital for museums and private collectors looking for a heightened level of protection.”",
        },
        {
          heading: '—Matt Townsend, TriStar Commercial',
          body: "“The Art Guard sensors have been extremely useful for us in commercial installations where accommodating the limitations of existing security systems makes the availability of dependable and comprehensive sensors slim. We have enrolled MAP in a way that other sensors won't. Their utility is unique. And Art Guard's support has been superb.”",
        },
        {
          heading: '—Madan Devaiah, The Crescent Group for private collector, Dubai, UAE',
          body: '“The Art Guard Gold System is straightforward and quick. The way it communicates between its components is seamless and easy to set up. And the system allows the flexibility to create multiple arming options in different zones of the home. Gold is ideal for high-end clients.”',
        },
      ],
    },
    {
      type: 'Text',
      heading: 'Security Partners',
      body: (
        <>
          <p>
            Art Guard MAP sensors integrate with all major security platforms and work with leading
            security installers and integrators worldwide.
          </p>
          <Image
            src={SecurityPartnersLogos}
            alt="Security partners logos"
            width={1000}
            height={1000}
          />
        </>
      ),
    },
    STANDARD_CTA_CARD,
  ],
};

export const VIDEO_PAGE: Types.Page = {
  className: TEXT_HERO_CLASSNAME,
  path: Paths.SUPPORT_VIDEOS,
  metadata: {
    title: 'Support Videos',
    description: 'Support videos for Art Guard',
    keywords: ['Art Guard', 'Support Videos', 'Security Products'],
  },
  sections: [
    {
      type: 'VideoGrid',
      heading: 'Support Videos',
      videos: [
        {
          heading: 'Introduction to MAP Sensor',
          video: {
            src: 'https://player.vimeo.com/video/993060821?badge=0&autopause=0&player_id=0&app_id=58479',
            alt: 'Introduction to MAP Sensor',
            type: 'vimeo',
          },
        },
        {
          heading: 'MAP for Seated Works',
          video: {
            src: 'https://player.vimeo.com/video/178490352?title=0&byline=0&portrait=0',
            alt: 'MAP for Seated Works',
            type: 'vimeo',
          },
        },
        {
          heading: 'MAP for Hanging Works',
          video: {
            src: 'https://player.vimeo.com/video/178490351?title=0&byline=0&portrait=0',
            alt: 'MAP for Hanging Works',
            type: 'vimeo',
          },
        },
      ],
    },
  ],
};

export const CONTACT_PAGE: Types.Page = {
  className: `${TEXT_HERO_CLASSNAME}`,
  path: Paths.CONTACT,
  theme: {
    lightGradientBg: true,
  },
  metadata: {
    title: 'Contact',
    description: 'Contact us for Art Guard',
    keywords: ['Art Guard', 'Contact', 'Contact Us'],
  },
  sections: [
    {
      type: 'ContactForm',
      heading: 'Contact Us',
      subheading:
        'Art Guard is pleased to announce that the MAP security solution is available for international applications. We welcome inquiries and  invite you to complete this form.',
      email: 'info@artguard.net',
      phone: '+1 (212) 989-1494',
    },
  ],
};

import CompatiblePanels from '@images/compatiblepanels.png';
import CompatibleAccessControls from '@images/compatileaccesscontrols.png';

export const SECURITY_INSTALLERS_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.SECURITY_INSTALLERS,
  metadata: {
    title: 'Security Installers & Integrators',
    description:
      'Expand your services with museum-grade object-specific protection for high-value clients.',
    keywords: ['security installers', 'integrators', 'MAP sensors', 'asset protection'],
  },
  sections: [
    {
      type: 'TextImageSplit',
      heading: 'Think Beyond Intrusion and Fire',
      className: 'md:-mt-nav-height',
      image: {
        src: Technician,
        alt: 'Image of technician installing MAP sensors',
      },
      body: (
        <>
          <p>
            Intrusion security is not art and asset protection. And that&apos;s good for installers
            and integrators, because it gives you the opportunity to sell and install 2nd and 3rd
            layers of protection in any facility with valuable objects.
          </p>
          <p>
            Whether large museums or high-end residences and anything in between, perimeter security
            is off anywhere from 8-16 hours of the day. Even if cameras or personnel on watch are
            employed, the ultimate protection comes down to an object-specific alert.
          </p>
        </>
      ),
      ctas: [
        {
          type: 'button',
          label: 'Download Datasheet',
          variant: 'primary',
          href: '/resources/ArtGuard-MAPsensor-DataSheet.pdf',
        },
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'secondary',
          href: Paths.CONTACT,
        },
      ],
    },

    {
      type: 'Text',
      heading: 'Asset Protection Made Easy',
      body: (
        <>
          <p>
            Art Guard&apos;s MAP (Magnetic Asset Protection) sensor is the end point in the process
            of securing art, antiques, jewelry, collectibles, memorabilia, cases, safes, books,
            tapestries and even wine—anything that is portable and of value, large or small, indoors
            or out. With easy enrollment and application.
          </p>
        </>
      ),
    },

    {
      type: 'ValueGrid',
      heading: 'Why MAP for Your Clients?',
      cards: [
        {
          heading: 'Why Object-Specific Protection?',
          body: "$6 Billion! That's the value of just art stolen annually, to say nothing of other assets. Homes are particularly vulnerable because they depend almost entirely on perimeter security and 50% of art theft occurs there, usually by people already in the home. The rest is from institutions whose job it is to safeguard the art.",
          icon: 'Alert',
        },
        {
          heading: 'Why MAP?',
          body: "It's Universal. It's Simple. Both you and your client want a means of protection that doesn't depend on what the object is or what the system is. MAP protects anything. And it can be integrated into the majority of popular intrusion panels and interface with the majority of access controls.",
          icon: 'Plugs',
        },
      ],
    },

    {
      type: 'TextHighlights',
      heading: 'What Installers Say',
      highlights: [
        {
          heading: 'MAP is Trusted',
          body: (
            <>
              <p>
                &quot;I&apos;ve used standard motion sensors in prior installs and nothing compares
                with the MAP sensor in ease of use, flexibility and its ability to cover any item my
                clients want to protect.&quot;
              </p>
              <p className="mt-2">
                <strong>—Top 10 National Integrator</strong>
              </p>
            </>
          ),
        },
        {
          heading: 'MAP is Simple and Time Saving',
          body: (
            <>
              <p>
                &quot;I just wanted to take a minute to let you know that the install of the MAP
                sensors could not have gone better. They were very easy to setup and install and
                worked wonderfully. The art curator was so impressed with the system they are going
                to recommend them to all their clients. In a matter of 4 hours we had protected 25
                pieces valued in the millions. Simply amazing! Everyone was ecstatic on how well
                things went.&quot;
              </p>
              <p className="mt-2">
                <strong>—Chris Svendsen, Vantage Security, VA</strong>
              </p>
            </>
          ),
        },
      ],
    },

    {
      type: 'FeatureGrid',
      heading: 'Compatible Systems',
      subheading: 'MAP integrates with all major security platforms and access control systems',
      imagePadding: true,
      footerCtas: [
        {
          label: 'Download All Interface Options',
          href: '/wp-content/uploads/2020/02/integrations2.pdf',
          type: 'button',
          variant: 'primary',
        },
      ],
      items: [
        {
          heading: 'Panels',
          subheading: 'Honeywell/Ademco, DMP, Qolsys, 2GIG, Resideo, Elk, Alula, DSC',
          body: ' MAP sensors are available in 345 MHz and 433 MHz frequencies to ensure compatibility with the security panels your clients already use. DSC Neo requires HSM2164RF module.',
          image: {
            src: CompatiblePanels,
            alt: 'Compatible security panel brands',
          },
        },
        {
          heading: 'Access Controls',
          subheading: 'CCure 9000, Kantech, and major access control systems',
          body: ' MAP sensors interface seamlessly with leading access control platforms, providing object-specific protection alongside your existing perimeter and access security infrastructure.',
          image: {
            src: CompatibleAccessControls,
            alt: 'Compatible access control brands',
          },
        },
      ],
    },
    {
      type: 'TakeoverHeading',
      icon: 'Handshake', // OPTIONS: users, handshake, award
      heading: 'MAP Partner Program',
      subheading: 'Build a competitive advantage with a recognized solution',
      body: 'Join our partner program for preferred pricing, engineering support, co-branding opportunities, and digital marketing support. We provide the knowledge and dedication to ensure your clients are satisfied with results.',
      ctas: [
        {
          label: 'Learn About Partner Program',
          href: Paths.PARTNER_PROGRAM,
          type: 'button',
          variant: 'primary',
        },
      ],
    },

    {
      type: 'CtaCard',
      heading: 'How to Order',
      subheading: 'Contact Art Guard for pricing and any further information',
      body: 'At Art Guard we provide installers and integrators the chance to increase revenue with reliable security products, backed by personal support and trusted by some of the most prestigious museums, galleries and collectors in the world.',
      ctas: [
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'primary',
          href: Paths.CONTACT,
        },
      ],
    },
  ],
};

export const PARTNER_PROGRAM_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.PARTNER_PROGRAM,
  metadata: {
    title: 'Partner Program',
    description:
      'Join the Art Guard Partner Program for preferred pricing, engineering support, and co-branding opportunities.',
    keywords: ['partner program', 'security partners', 'MAP sensors', 'installer program'],
  },
  sections: [
    {
      type: 'TakeoverHeading',
      className: 'md:-mt-nav-height pt-40',
      heading: 'Partner Program: Toward Satisfied Clients',
      icon: 'Handshake',
      body: 'Art Guard recognizes that selecting a security partner is a major decision and a commitment — and the best partnerships are built on competencies and trust. When you partner with Art Guard, you benefit from the years of experience and knowledge gained from our long-standing relationships with galleries, major museums and high-end private collectors.',
    },

    {
      type: 'Text',
      heading: 'A Competitive Advantage with a Recognized Solution',
      body: (
        <p>
          The Art Guard Partner Program provides not only opportunities for upselling and increased
          revenue but our personal dedication to go the extra mile to make certain that your client
          is satisfied with the end result and knowing it came from you. Our technology is not a
          one-size-tries-to-fit-all solution, so it requires our knowledge of the equipment and
          systems you&apos;re working with to provide a seamless interface.
        </p>
      ),
    },

    {
      type: 'FeatureGrid',
      heading: 'Program Benefits',
      items: [
        {
          heading: 'For Your Company',
          icon: 'Briefcase',
          body: (
            <>
              <ul>
                <li>New and existing customer contact initiatives</li>
                <li>Increased revenue opportunities from product, service and monitoring</li>
                <li>Engineering support to work toward easiest and most attractive solution</li>
                <li>Preferred pricing</li>
                <li>Co-branding opportunities</li>
                <li>Digital marketing support with social media outreach</li>
                <li>Demo kits</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'For Your Clients',
          icon: 'UserGroup',
          body: (
            <>
              <ul>
                <li>Peace of mind with layered 24/7 protection</li>
                <li>New and innovative protective coverage, whether primary or secondary</li>
                <li>Minimal impact on the art with maximum coverage</li>
                <li>State of the art technology with ever expanding features</li>
                <li>Knowledge of best practices in handling art</li>
                <li>Certificate of protection for insurers</li>
              </ul>
            </>
          ),
        },
      ],
    },

    {
      type: 'CtaCard',
      heading: 'Join The Art Guard Partner Program',
      subheading: (
        <>
          Call us at{' '}
          <a
            className="underline decoration-dotted hover:opacity-70 transition-opacity"
            href="tel:+12129891594"
          >
            (212) 989-1594
          </a>{' '}
          or get in touch below
        </>
      ),
      ctas: [
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'primary',
          href: Paths.CONTACT,
        },
      ],
    },
  ],
};

import GalleryInterior from '@images/galleryinterior.jpg';

export const INSURERS_BROKERS_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.INSURERS_BROKERS,
  metadata: {
    title: 'For Insurers & Brokers',
    description:
      'Risk mitigation solutions for fine art insurers and brokers with object-specific protection technology.',
    keywords: ['art insurance', 'insurance brokers', 'MAP sensors', 'risk mitigation'],
  },
  sections: [
    {
      type: 'TextImageSplit',
      className: 'md:-mt-nav-height',
      heading: 'Fine Art Insurers and Insurance Brokers',
      subheading: 'Risk mitigation through object-specific protection',
      body: 'Risk mitigation in the art market is becoming a catch phrase for insurers as the price of art rises and cost of covering losses becomes more prohibitive, especially in the face of fierce competition to capture and retain clients. The paradox of lower margins and higher payouts necessitates a program to educate and induce clients, both private and public, to appreciate the value of protection.',
      ctas: [
        {
          type: 'button',
          label: 'Explore Solutions',
          variant: 'primary',
          href: Paths.SECURITY_PRODUCTS,
        },
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'secondary',
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: GalleryInterior,
        alt: 'Gallery interior',
      },
    },

    {
      type: 'Text',
      heading: 'Object-Specific Protection Reduces Risk',
      body: (
        <>
          <p>
            For art and other valuable assets, whether antiques, jewelry, collectibles, memorabilia,
            tapestries, coins, wine and even wall safes, a solution that consists not just of
            perimeter/intrusion security but one that adds a layer or layers of object-specific
            protection will dramatically reduce the threat of monetary loss for both insurer and
            insured, the chance of litigation for insurer and emotional loss for the client. After
            all, only 3-5% of stolen art is ever recovered.
          </p>
        </>
      ),
    },

    {
      type: 'VideoFeature',
      heading: 'Art Guard Solutions for Risk Mitigation',
      subheading: 'Patented technology for 24/7 object-specific protection',
      video: {
        src: 'https://player.vimeo.com/video/212981006',
        alt: 'Video for insurers of fine art and assets',
        type: 'vimeo',
      },
      cards: [
        {
          heading: 'MAP Sensors',
          body: 'Integrate into existing security systems in homes, providing 24/7 protection when intrusion security is off or compromised.',
          icon: 'ShieldLock',
        },
        {
          heading: 'MAP Gold System',
          body: 'Plug-and-play standalone solution ideal for protecting individual objects of any size or shape.',
          icon: 'CheckRibbon',
        },
        {
          heading: 'Flexible Coverage',
          body: 'In museum settings, MAP covers entire collections, special shows, or works on loan with unmatched flexibility.',
          icon: 'Layered',
        },
      ],
    },
    {
      type: 'ValueGrid',
      heading: 'Resources for Insurers',
      cards: [
        {
          heading: 'Webinar Video',
          body: 'Webinar video for insurers and brokers of fine art and assets',
          ctas: [
            {
              type: 'button',
              label: 'Watch Webinar',
              variant: 'secondary',
              href: 'https://www.artguard.net/insurance/insurance-industry-webinar/',
            },
          ],
        },
        {
          heading: 'Art Guard Launches Security Tech Program for Insurers of Fine Art',
          body: '—Insurance Innovation Reporter',
          ctas: [
            {
              type: 'button',
              label: 'Read Article',
              variant: 'secondary',
              href: 'http://iireporter.com/art-guard-launches-security-tech-program-for-insurers-of-fine-art/',
            },
          ],
        },
        {
          heading: 'Q&A: Art Theft and Its Impact on the Insurance Industry',
          body: '—Insurance Journal',
          ctas: [
            {
              type: 'button',
              label: 'Read Article',
              variant: 'secondary',
              href: 'http://www.insurancejournal.com/news/east/2017/04/11/446866.htm',
            },
          ],
        },
        {
          heading: 'Managing Risk for High Net Worth Clients',
          body: '—Rough Notes, June 2017',
          ctas: [
            {
              type: 'button',
              label: 'Download PDF',
              variant: 'secondary',
              href: 'https://www.artguard.net/Managing_Risk_for_High-Net-Worth_Clients_Rough_Notes_June_2017_50-54_1.pdf',
            },
          ],
        },
      ],
    },
    {
      type: 'CtaCard',
      heading: 'Partner with Art Guard',
      subheading: 'Learn about our rebate program for insurance partners',
      ctas: [
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'primary',
          href: Paths.CONTACT,
        },
      ],
    },
  ],
};

export const MAP_SYSTEM_GOLD_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.MAP_SYSTEM_GOLD,
  metadata: {
    title: 'MAP System Gold',
    description:
      'User-friendly DIY solution for high-end art and asset protection with award-winning Alula Connect+ panel.',
    keywords: ['MAP System Gold', 'Alula Connect+', 'wireless security', 'art protection'],
  },
  sections: [
    {
      type: 'TextImageSplit',
      className: 'md:-mt-nav-height',
      heading: 'MAP System Gold',
      subheading: 'A Complete System for Art and Asset Protection',
      body: "The MAP Gold System is the ultimate in dedicated, stand-alone protection for art and valuable stationary assets of any kind. It is the easiest and most effective way for collectors of any stripe to confidently secure their art against theft. It's also an indispensable tool for prominent galleries and museums with rotating protection needs to offer guarantees to lenders of their works' safety. For smaller museums Gold can provide comprehensive security.",
      ctas: [
        {
          type: 'button',
          label: 'Download Datasheet',
          variant: 'primary',
          href: 'https://www.artguard.net/wp-content/uploads/2019/07/Art-Guard-MAP-System-Gold.pdf',
        },
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'secondary',
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: MapGold,
        alt: 'MAP System Gold with sensors',
      },
    },

    {
      type: 'VideoFeature',
      heading: 'Complete Protection, Simply Deployed',
      className: 'md:-mt-36',
      video: {
        src: 'https://player.vimeo.com/video/844027380',
        alt: 'MAP System Gold video',
        type: 'vimeo',
      },
      cards: [
        {
          heading: 'Ease-of-Use',
          body: 'The hallmarks are ease of installation and management and full range of alerts with the convenience of home automation.',
          icon: 'TouchPanel',
        },
        {
          heading: 'Tested and Trusted',
          body: 'For over 10 years Gold has been used by high-end private collectors with multiple homes, corporations with multiple floors of art, art institutions with varying demands and insurers with the highest standards for protection worldwide.',
          icon: 'CheckRibbon',
        },
        {
          heading: 'Flexible',
          body: 'The control hub can be placed anywhere, operates 24/7 in the background as a permanent, fully monitored separate layer of protection for art or taken in and out of service as needed for changing exhibits.',
          icon: 'Move',
        },
        {
          heading: 'Comprehensive',
          body: 'Unlike other solutions that target certain applications Gold is capable of protecting hanging and seated assets of any size, from art to memorabilia to jewelry.',
          icon: 'ShieldLock',
        },
        {
          heading: 'Affordable',
          body: 'Without the need for costly professional installation and running wires Gold is priced for any private residence or institution. It offers the highest level of security at a low initial investment and negligible lifetime costs.',
          icon: 'Coins',
        },
      ],
    },

    {
      type: 'SpecTable',
      heading: 'Technical Specifications',
      rows: [
        {
          heading: 'Control Panel',
          value: 'Alula Connect+ (BAT-Connect+)',
        },
        {
          heading: 'Sensor Capacity',
          value: 'Up to 96 MAP v3 wireless sensors (pre-enrolled)',
        },
        {
          heading: 'Communication',
          value: 'Dual-path: Ethernet (IP) and 4G LTE cellular, Wi-Fi optional',
        },
        {
          heading: 'Backup Battery',
          value: '24-hour panel battery backup',
        },
        {
          heading: 'Management',
          value: 'Mobile app and web portal for arming, disarming, and monitoring',
        },
        {
          heading: 'Notifications',
          value: 'Siren, push notifications, text, email, phone calls to multiple parties',
        },
        {
          heading: 'Monitoring',
          value: 'Low battery alerts, sensor tamper, signal loss condition reports',
        },
        {
          heading: 'Security',
          value: 'Encrypted communication with system portability for traveling shows',
        },
      ],
    },

    {
      type: 'TextHighlights',
      heading: 'Ideal For',
      highlights: [
        {
          heading: 'Private Collectors',
          body: 'High-end collectors with multiple homes requiring comprehensive protection',
        },
        {
          heading: 'Galleries',
          body: 'Prominent galleries with rotating protection needs offering guarantees to lenders',
        },
        {
          heading: 'Museums',
          body: 'Smaller museums requiring comprehensive security and larger institutions with varying demands',
        },
        {
          heading: 'Corporate Collections',
          body: 'Corporations with multiple floors of art requiring flexible protection',
        },
      ],
    },

    {
      type: 'Text',
      heading: 'Other Integrations',
      body: (
        <p>
          For integration of MAP Sensors into your existing security system, contact your security
          installer or integrator.
        </p>
      ),
    },

    {
      type: 'CtaCard',
      heading: 'How to Order',
      subheading: 'Contact Art Guard directly to purchase the MAP System.',
      ctas: [
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'primary',
          href: Paths.CONTACT,
        },
      ],
    },
  ],
};

export const MAP_SYSTEM_SILVER_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.MAP_SYSTEM_SILVER,
  metadata: {
    title: 'MAP System Silver',
    description:
      'Security peace of mind for galleries and small museums. Affordable daytime theft protection with audible alerts.',
    keywords: ['MAP System Silver', 'Resideo', 'gallery security', 'museum protection'],
  },
  sections: [
    {
      type: 'TextImageSplit',
      className: 'md:-mt-nav-height',
      heading: 'MAP System Silver',
      subheading: 'Security peace of mind for galleries & small museums',
      body: "The MAP Silver System provides small institutions protection from exposure to daytime grab-and-run theft. With a panel siren that can be heard by anyone in audible range if an asset is moved without authorization Silver offers reliable security at an affordable price for budget-minded facilities that don't have sophisticated security apparatus.",
      ctas: [
        {
          type: 'button',
          label: 'Download Datasheet',
          variant: 'primary',
          href: '/wp-content/uploads/Art_Guard_MAP_Silver_System.pdf',
        },
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'secondary',
          href: Paths.CONTACT,
        },
      ],
      image: {
        src: MapSilver,
        alt: 'MAP System Silver with sensors',
      },
    },
    {
      type: 'Text',
      heading: 'Flexible Protection for Lenders and Insurers',
      className: 'md:-mt-36',
      body: (
        <p>
          Silver offers the flexibility to be deployed whenever and wherever the need arises. Silver
          is the solution for any museum with questions from lenders and insurers who are not
          comfortable with security that has to be turned off during daytime hours, leaving objects
          completely vulnerable.
        </p>
      ),
    },
    {
      type: 'TakeoverGrid',
      heading: 'Why Museums and Galleries Choose Silver',
      subheading:
        'Silver provides lenders with the assurance that their works have the requisite primary layer of protection.',
      cards: [
        {
          heading: 'Dependability',
          body: "With Honeywell/Resideo panel and Art Guard's latest MAP sensors Silver is a most effective way to alert responders to unauthorized movement and daytime theft attempts. And it has a 24-hr back-up battery.",
          icon: 'ShieldLock',
        },
        {
          heading: 'Marketability',
          body: 'Silver provides lenders with the assurance that their works have the requisite primary layer of protection.',
          icon: 'CheckRibbon',
        },
        {
          heading: 'Ease-of-Use',
          body: 'Simply plug the touchscreen panel into AC power and install up to 127 pre-enrolled sensors for quick deployment.',
          icon: 'TouchPanel',
        },
        {
          heading: 'Versatility',
          body: 'Use from show-to-show and gallery-to-gallery in special exhibits and traveling exhibitions and for permanent protection in galleries, small museums, libraries and historic houses.',
          icon: 'Move',
        },
        {
          heading: 'Coverage',
          body: 'Like all solutions with the MAP v3 sensor theft protection can be applied to nearly any valuable stationary object, regardless of size, shape or placement.',
          icon: 'Grid',
        },
      ],
    },

    {
      type: 'SpecTable',
      heading: 'Technical Specifications',
      rows: [
        {
          heading: 'Control Panel',
          value: 'Honeywell/Resideo ProSeries touchscreen panel (UL tested)',
        },
        {
          heading: 'Sensor Capacity',
          value: 'Up to 127 MAP v3 wireless sensors (pre-enrolled)',
        },
        {
          heading: 'Alert Type',
          value: 'Panel alarm siren, supports remote wireless sirens and strobes',
        },
        {
          heading: 'Backup Battery',
          value: '24-hour panel battery backup',
        },
        {
          heading: 'Management',
          value: 'Touch screen panel operation, plugs into any standard power source',
        },
        {
          heading: 'Portability',
          value: 'Completely portable. Use from show to show or gallery to gallery',
        },
        {
          heading: 'Sensor Details',
          isHeader: true,
        },
        {
          heading: 'Sensor Dimensions',
          value: '2" × 2" × ¼"',
        },
        {
          heading: 'Power',
          value: '2 × CR2450 Lithium coin cell batteries',
        },
        {
          heading: 'Battery Life',
          value: '4-5 years typical operation',
        },
        {
          heading: 'Range',
          value: '400+ feet (extendable with repeaters)',
        },
        {
          heading: 'Operation Modes',
          value: '3 modes optimize for any hanging and seated objects',
        },
      ],
    },

    {
      type: 'TextHighlights',
      heading: 'Ideal For',
      highlights: [
        {
          heading: 'Galleries',
          body: 'Primary daytime protection from grab-and-run theft with audible alerts',
        },
        {
          heading: 'Small Museums & Historic Houses',
          body: 'Budget-minded facilities without sophisticated security apparatus',
        },
        {
          heading: 'Special Exhibitions',
          body: 'Temporary exhibits or traveling shows requiring flexible deployment',
        },
        {
          heading: 'Libraries',
          body: 'Protection for rare books, manuscripts, and valuable collections',
        },
      ],
    },

    {
      type: 'Text',
      heading: 'Other Integrations',
      body: (
        <p>
          For integration of MAP Sensors into your existing security system, contact your security
          installer or integrator.
        </p>
      ),
    },

    {
      type: 'CtaCard',
      heading: 'How to Order',
      subheading: 'Contact Art Guard directly to purchase the MAP Silver System.',
      ctas: [
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'primary',
          href: Paths.CONTACT,
        },
      ],
    },
  ],
};

import Cr2450 from '@images/cr2450.jpg';
import CommandStrips from '@images/commandstripes.jpg';
import RareEarthMagnets from '@images/rareearthmagnets.jpg';
import TssartArtTape from '@images/tsarttape.jpg';

export const ACCESSORIES_PAGE: Types.Page = {
  className: STANDARD_SPACING_CLASSNAME,
  path: Paths.ACCESSORIES,
  metadata: {
    title: 'Accessories',
    description: 'Accessories for MAP Sensors including batteries, magnets, and mounting supplies.',
    keywords: ['MAP accessories', 'sensor batteries', 'neodymium magnets', 'mounting supplies'],
  },
  sections: [
    {
      type: 'TakeoverHeading',
      className: '-mt-nav-height pt-42',
      heading: 'Accessories for the MAP Sensor',
      subheading: 'Click the direct link to order',
    },
    {
      type: 'FeatureGrid',
      imagePadding: true,
      className: '-mt-24',
      items: [
        {
          heading: 'Panasonic CR2450 Lithium 3v Battery (2-pack)',
          body: 'Replacement batteries for MAP sensors with 4-5 year typical life.',
          image: {
            src: Cr2450,
            alt: 'Panasonic CR2450 batteries',
          },
          ctas: [
            {
              type: 'button',
              label: 'Order on Amazon',
              variant: 'secondary',
              href: 'https://www.amazon.com/gp/product/B00K5Z0AIM/ref=oh_aui_search_detailpage?ie=UTF8&psc=1',
              target: '_blank',
            },
          ],
        },
        {
          heading: 'Command Hanging Strips',
          body: 'Removable adhesive strips for mounting sensors without damaging surfaces.',
          image: {
            src: CommandStrips,
            alt: 'Command hanging strips',
          },
          ctas: [
            {
              type: 'button',
              variant: 'secondary',
              label: 'Order on Amazon',
              href: 'https://www.amazon.com/s?k=command+strips&ref=pd_sl_6ipzf1wxkb_e',
              target: '_blank',
            },
          ],
        },
        {
          heading: 'Neodymium (Rare Earth) Magnets',
          body: 'Small rare earth magnets for attaching to artwork and valuable objects.',
          image: {
            src: RareEarthMagnets,
            alt: 'Neodymium rare earth magnets',
          },
          ctas: [
            {
              type: 'button',
              variant: 'secondary',
              label: 'Order from Magnet4Less',
              href: 'https://www.magnet4less.com/neodymium-disc-cylinder-rare-earth-magnets',
              target: '_blank',
            },
          ],
        },
        {
          heading: 'TSSART Art Tape',
          body: 'Museum-quality tape for safely attaching magnets to artwork.',
          image: {
            src: TssartArtTape,
            alt: 'TSSART art tape',
          },
          ctas: [
            {
              type: 'button',
              variant: 'secondary',
              label: 'Order on Amazon',
              href: 'https://www.amazon.com/dp/B09H62X81B?ref=ppx_yo2ov_dt_b_product_details&th=1',
              target: '_blank',
            },
          ],
        },
      ],
    },

    {
      type: 'CtaCard',
      heading: 'Questions About Accessories?',
      subheading: 'Contact us for recommendations on the right supplies for your installation',
      ctas: [
        {
          type: 'button',
          label: 'Contact Us',
          variant: 'primary',
          href: Paths.CONTACT,
        },
      ],
    },
  ],
};
