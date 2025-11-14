import * as Paths from "@/lib/paths";
import * as Ui from "@/ui";

import Image from "next/image";

import GalleryRadar from "@images/galleryradar.jpg";
import PrivateCollection from "@images/privatecollection.jpg";
import CompatibilityLogos from "@images/compatibilitylogos.svg";
import GlobalMap from "@images/globalprotection.svg";

import MapGold from "@images/mapgold.jpg";
import MapSilver from "@images/mapsilver.jpg";
import MapSensors from "@images/mapsensors.jpg";

export default function Home() {
  return (
    <div className="grid grid-cols-subgrid space-y-24 col-span-full">
      <Ui.Sections.TextImageSplit
        section={{
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
        }}
      />

      <Ui.Sections.TextImageSplit
        section={{
          heading: "Designed for Private Collections",
          // subheading="Wireless sensor technology trusted by Sotheby's, MOMA, and leading collectors worldwide"
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
                MAP sensors integrate with all leading security systems
                including <strong>Johnson Controls</strong>,{" "}
                <strong>Honeywell</strong>, <strong>DSC</strong>, and{" "}
                <strong>ADT</strong>. Or deploy them with our award-winning MAP
                System—a complete standalone solution built on the Alula
                Connect+ control panel.
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
        }}
      />
      <Ui.Sections.TakeoverGrid
        section={{
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
        }}
      />
      <Ui.Sections.GlobalMap
        section={{
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
              children: [
                "Tel Aviv",
                "Dubai",
                "Bangkok",
                "Hong Kong",
                "Valletta",
              ],
            },
          ],
          image: {
            src: GlobalMap,
            alt: "Global map with major cities",
          },
        }}
      />
      <Ui.Sections.ValueGrid
        section={{
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
        }}
      />
      <Ui.Sections.SpecTable
        section={{
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
        }}
      />
      <Ui.Sections.TakeoverHeading
        section={{
          icon: "Instituion",
          heading: "Trusted by Leading Institutions",
          subheading:
            "The MAP Gold System has been deployed by Sotheby's, major museums, and discerning private collectors worldwide. When Sotheby's needed to secure a high-value exhibition, they selected our technology for its reliability and ease of deployment.",
          ctas: [
            {
              label: "Read the Sotheby's Case Study",
              href: Paths.SECURITY_PRODUCTS,
              type: "button",
              variant: "primary",
            },
          ],
        }}
      />
      <Ui.Sections.TakeoverHeading
        section={{
          icon: "Instituion",
          heading: "Trusted by Leading Institutions",
          subheading:
            "The MAP Gold System has been deployed by Sotheby's, major museums, and discerning private collectors worldwide. When Sotheby's needed to secure a high-value exhibition, they selected our technology for its reliability and ease of deployment.",
          byline: "—Chief of Security, Major NYC Museum",
        }}
      />
      <Ui.Sections.VideoFeature
        section={{
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
        }}
      />
      <Ui.Sections.Text
        section={{
          heading: "Complete Protection, Simply Deployed",
          body: (
            <>
              <p>
                Museums must balance public engagement with security for
                irreplaceable objects. Traditional perimeter security goes
                offline during operating hours, leaving individual pieces
                vulnerable to the most common threat: grab-and-run theft, which
                accounts for over 50% of art losses. Recovery rates remain at
                just 3-4%.
              </p>
              <p>
                Museum collections present unique challenges. A single gallery
                might contain paintings, small artifacts, documents, and
                sculptures—all requiring different protection approaches.
                Traditional motion sensors can&apos;t distinguish authorized
                handling from theft, and vibration sensors may be too sensitive
                for delicate works or high-traffic environments.
              </p>
              <p>
                Traveling exhibitions, loans between institutions, and special
                displays require flexible protection that adapts quickly to
                changing needs.
              </p>
            </>
          ),
        }}
      />
      <Ui.Sections.Text
        section={{
          heading: "The Solution",
          body: (
            <>
              <p>
                MAP sensors create an invisible security perimeter around each
                individual object. A small rare-earth magnet attaches discreetly
                to the piece using museum-approved adhesives. The sensor is
                placed nearby—behind hanging works or beneath seated objects.
                Both are completely hidden from view. Any unauthorized movement
                triggers an immediate, location-specific alert.
              </p>
              <p>
                Conservators approve MAP because the magnet attachment is less
                invasive than mounting sensors directly on artwork. The system
                scales from protecting vulnerable pieces to comprehensive
                gallery coverage, works for permanent installations or temporary
                exhibitions, and sensors can travel with loaned works to satisfy
                protection requirements.
              </p>
            </>
          ),
        }}
      />
      <Ui.Sections.FeatureGrid
        section={{
          heading: "Choose Your Solution",
          items: [
            {
              heading: "Professional integration for established systems",
              ctas: [
                {
                  type: "button",
                  label: "Explore MAP Sensors",
                  href: Paths.MAP_SENSORS,
                  variant: "primary",
                },
              ],
              body: (
                <>
                  <p>
                    Professional-grade wireless sensors that integrate with all
                    major security platforms. Ideal for museums with existing
                    infrastructure seeking comprehensive object-specific
                    protection.
                  </p>
                  <p>
                    Features:
                    <ul>
                      <li>
                        Integrates with Honeywell, DSC, DMP, Qolsys, 2GIG, and
                        major access control systems
                      </li>
                      <li>345 and 433 MHz options</li>
                      <li>400+ foot range (extendable with repeaters)</li>
                      <li>Museum-tested reliability</li>
                    </ul>
                  </p>
                </>
              ),
            },
            {
              heading: "Complete standalone solution",
              ctas: [
                {
                  type: "button",
                  label: "Explore MAP Gold System",
                  href: Paths.MAP_SYSTEM,
                  variant: "primary",
                },
              ],
              body: (
                <>
                  <p>
                    All-in-one wireless system perfect for special exhibitions,
                    traveling shows, or institutions without existing security
                    infrastructure. Control from your phone, no installer
                    required.
                  </p>
                  <p>
                    Features:
                    <ul>
                      <li>Award-winning Alula Connect+ panel</li>
                      <li>Up to 96 pre-enrolled sensors</li>
                      <li>Dual-path communication (4G LTE + IP)</li>
                      <li>Mobile app management</li>
                    </ul>
                  </p>
                </>
              ),
            },
          ],
        }}
      />
      <Ui.Sections.FeatureGrid
        section={{
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
                  variant: "primary",
                },
              ],
              body: (
                <>
                  <p>
                    Professional-grade wireless sensors that integrate with all
                    major security systems. Ideal for installers and
                    integrators.
                  </p>
                  <p>
                    <ul>
                      <li>Integrates with all major security systems</li>
                      <li>Triple-mode protection for any object</li>
                      <li>Available in 345 and 433 MHz frequencies</li>
                      <li>Museum-tested, conservator-approved</li>
                    </ul>
                  </p>
                </>
              ),
            },
            {
              heading: "MAP Gold System",
              subheading:
                "Complete standalone system with Alula Connect+ panel",
              image: {
                src: MapGold,
                alt: "Image of MAP Gold System",
              },
              ctas: [
                {
                  type: "button",
                  label: "Explore MAP Gold System",
                  href: Paths.MAP_SYSTEM,
                  variant: "primary",
                },
              ],
              body: (
                <>
                  <p>
                    Complete standalone system for private collectors,
                    galleries, and smaller institutions. Control from your
                    phone, no installer required.
                  </p>
                  <p>
                    <ul>
                      <li>
                        Integrates with all major security systemsPlug-and-play
                        standalone solution
                      </li>
                      <li>Supports up to 96 wireless sensors</li>
                      <li>Dual-path communication (4G LTE and Wi-Fi)</li>
                      <li>Built on Alula Connect+ panel</li>
                    </ul>
                  </p>
                </>
              ),
            },
            {
              heading: "MAP Silver System",
              subheading:
                "Complete standalone system with Alula Connect+ panel",
              image: {
                src: MapSilver,
                alt: "Image of MAP Silver System",
              },
              ctas: [
                {
                  type: "button",
                  label: "Explore MAP Silver System",
                  href: Paths.MAP_SYSTEM,
                  variant: "primary",
                },
              ],
              body: (
                <>
                  <p>
                    Complete standalone system for private collectors,
                    galleries, and smaller institutions. Control from your
                    phone, no installer required.
                  </p>
                  <p>
                    <ul>
                      <li>
                        Integrates with all major security systemsPlug-and-play
                        standalone solution
                      </li>
                      <li>Supports up to 96 wireless sensors</li>
                      <li>Dual-path communication (4G LTE and Wi-Fi)</li>
                      <li>Built on Alula Connect+ panel</li>
                    </ul>
                  </p>
                </>
              ),
            },
          ],
        }}
      />
      <Ui.Sections.CtaCard
        section={{
          heading: "Ready to Protect Your Collection?",
          subheading:
            "Contact us for pricing and availability or download complete system specifications",
          ctas: [
            {
              label: "Download System Specs",
              href: Paths.SECURITY_PRODUCTS,
              type: "button",
              variant: "primary",
            },
            {
              label: "Contact Us",
              href: Paths.CONTACT,
              type: "button",
              variant: "secondary",
            },
          ],
        }}
      />
    </div>
  );
}
