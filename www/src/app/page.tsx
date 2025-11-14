import * as Paths from "@/lib/paths";
import * as Ui from "@/ui";

import Image from "next/image";

import GalleryRadar from "@images/galleryradar.jpg";
import PrivateCollection from "@images/privatecollection.jpg";
import Sothebys from "@images/sothebys.jpg";
import Technician from "@images/technician.jpg";
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
      <Ui.Sections.TextImageSplit
        section={{
          heading: "Trusted by the World's Most Prestigious Collections",
          body: (
            <>
              <p>
                Art Guard protects collections at the{" "}
                <strong>Museum of Modern Art</strong>,{" "}
                <strong>Sotheby&apos;s</strong>, and leading galleries and
                private collections worldwide. When Sotheby&apos;s needed to
                secure a major exhibition, they chose our MAP Gold System for
                its wireless reliability and minimal installation impact.
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
        }}
      />
      <Ui.Sections.TextImageSplit
        section={{
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
      <Ui.Sections.TextImageSplit
        section={{
          heading: "A Premium Solution for High-Value Clients",
          body: (
            <>
              <p>
                Perimeter security leaves valuable assets vulnerable 8-16 hours
                daily—and that&apos;s where most theft occurs.{" "}
                <strong>Art Guard MAP sensors</strong> provide the
                object-specific protection your clients need for art, antiques,
                and collectibles. With universal compatibility across major
                security platforms and simple enrollment, you can deliver
                comprehensive protection that integrates seamlessly with
                existing systems.
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
    </div>
  );
}
