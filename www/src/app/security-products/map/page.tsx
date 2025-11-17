import * as Paths from "@/lib/paths";
import * as Ui from "@/ui";

import MapSensorsHero from "@images/mapsensorshero.jpg";

export default function MapSensorsPage() {
  return (
    <div className="grid grid-cols-subgrid space-y-24 col-span-full">
      <Ui.Sections.TextImageSplit
        section={{
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
        }}
      />
      <Ui.Sections.VideoFeature
        section={{
          className: "md:-mt-24",
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
      <Ui.Sections.TakeoverGrid
        section={{
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
      <Ui.Sections.TextHighlights
        section={{
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
          byline: "—Chief of Security, Major NYC Museum",
        }}
      />
      <Ui.Sections.CtaCard
        section={{
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
        }}
      />
    </div>
  );
}
