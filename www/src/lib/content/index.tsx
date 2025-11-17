import * as Paths from "@/lib/paths";
import * as Types from "@/lib/types";
import * as PageContent from "./pages";

const WHITEPAPER_ANNOUNCEMENT = {
  publishedAt: "2025-11-16",
  message: (
    <>
      <i>Whitepaper:</i> Object-specific Protection, The Untapped Market in Home
      Security
    </>
  ),
  cta: {
    label: "Read the Whitepaper",
    href: "/whitepaper",
  },
};

export const CURRENT_ANNOUNCEMENT = WHITEPAPER_ANNOUNCEMENT;

export const NAVIGATION_MENU: Types.MenuItem[] = [
  {
    label: "Solutions",
    submenu: [
      {
        label: "Security Products",
        href: Paths.SECURITY_PRODUCTS,
        subheading: "For Fine Art And Valuable Assets",
      },
      {
        label: "MAP Sensors",
        href: Paths.MAP_SENSORS,
        subheading: "MAP v3 Wireless Sensors",
      },
      {
        label: "MAP System",
        href: Paths.MAP_SYSTEM,
        subheading: "Complete Standalone Protection",
      },
      {
        label: "Accessories",
        href: Paths.ACCESSORIES,
        subheading: "For Map Systems & Sensors",
      },
    ],
  },
  {
    label: "Museums & Galleries",
    submenu: [
      {
        label: "Museums",
        href: Paths.MUSEUMS,
        subheading: "Object-Specific Protection for Collections of Any Size",
      },
      {
        label: "Galleries",
        href: Paths.GALLERIES,
        subheading: "Security for Rotating Collections",
      },
      {
        label: "Historic Homes",
        href: Paths.HISTORIC_HOMES,
        subheading: "Fortify Historically Accurate Displays",
      },
    ],
  },
  {
    label: "Private Collections",
    submenu: [
      {
        label: "Private Collections",
        href: Paths.PRIVATE_COLLECTIONS,
        subheading: "Private Art Collections and Valuable Stationary Assets",
      },
      {
        label: "Hotels",
        href: Paths.HOTELS,
        subheading: "Public Spaces and Guest Rooms",
      },
      {
        label: "Auction Houses",
        href: Paths.AUCTION_HOUSES,
        subheading: "For continuously changing inventory",
      },
    ],
  },
  {
    label: "Partners",
    submenu: [
      {
        label: "Security Installers & Integrators",
        href: Paths.SECURITY_INSTALLERS,
      },
      {
        label: "Partner Program",
        href: Paths.PARTNER_PROGRAM,
      },
      {
        label: "Insurers & Brokers",
        href: Paths.INSURERS_BROKERS,
      },
    ],
  },
  {
    label: "Resources",
    submenu: [
      {
        label: "FAQs",
        href: Paths.FAQS,
      },
      {
        label: "Product Sheets",
        href: Paths.PRODUCT_SHEETS,
      },
      {
        label: "Videos",
        href: Paths.SUPPORT_VIDEOS,
      },
    ],
  },
  {
    label: "Insights",
    href: Paths.INSIGHTS,
  },
  {
    label: "About",
    submenu: [
      {
        label: "Contact Us",
        href: Paths.CONTACT,
      },
      {
        label: "Our Story",
        href: Paths.OUR_STORY,
      },
      {
        label: "Team",
        href: Paths.TEAM,
      },
      {
        label: "Press",
        href: Paths.PRESS,
      },
      {
        label: "Satisfied Customers",
        href: Paths.SATISFIED_CUSTOMERS,
      },
    ],
  },
];

export const FOOTER_MENU: Types.MenuItem[] = [
  {
    label: "Privacy Policy",
    href: Paths.PRIVACY_POLICY,
  },
  {
    label: "Contact Us",
    href: Paths.CONTACT,
  },
  {
    label: "FAQs",
    href: Paths.FAQS,
  },
];

export const Pages = Object.values(PageContent);
