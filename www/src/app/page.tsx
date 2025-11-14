import * as Paths from "@/lib/paths";
import * as Ui from "@/ui";

import Image from "next/image";

import GalleryRadar from "@images/galleryradar.jpg";
import PrivateCollection from "@images/privatecollection.jpg";
import CompatibilityLogos from "@images/compatibilitylogos.svg";

export default function Home() {
  return (
    <>
      <Ui.Sections.TextImageSplit
        className="md:-mt-nav-height"
        heading="Museum-Grade Art Protection for Any Environment"
        subheading="Wireless sensor technology trusted by Sotheby's, MOMA, and leading collectors worldwide"
        ctas={[
          {
            label: "Explore Solutions",
            variant: "primary",
            href: Paths.SECURITY_PRODUCTS,
          },
          {
            label: "For Integrators",
            variant: "secondary",
            href: Paths.SECURITY_INSTALLERS,
          },
        ]}
        image={{
          src: GalleryRadar,
          alt: "Image of gallery with active alarm sensors",
        }}
      />

      <Ui.Sections.TextImageSplit
        heading="Designed for Private Collections"
        // subheading="Wireless sensor technology trusted by Sotheby's, MOMA, and leading collectors worldwide"
        reversed
        body={
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
              <strong>DSC</strong>, and <strong>ADT</strong>. Or deploy them
              with our award-winning MAP System—a complete standalone solution
              built on the Alula Connect+ control panel.
            </p>
          </>
        }
        auxContent={
          <Image
            src={CompatibilityLogos}
            alt="Johnson Controls, Honeywell, DSC, and ADT logos"
          />
        }
        ctas={[
          {
            label: "Explore Solutions",
            variant: "primary",
            href: Paths.SECURITY_PRODUCTS,
          },
          {
            label: "For Integrators",
            variant: "secondary",
            href: Paths.SECURITY_INSTALLERS,
          },
        ]}
        image={{
          src: PrivateCollection,
          alt: "Image of private collection with active alarm sensors",
        }}
      />
      <Ui.Sections.TakeoverGrid
        heading="Advanced Protection Without Compromise"
        subheading="Wireless sensor technology designed for the world's most valuable collections."
        cta={{
          label: "Explore our systems",
          href: Paths.SECURITY_PRODUCTS,
        }}
        cards={[
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
        ]}
      />
    </>
  );
}
