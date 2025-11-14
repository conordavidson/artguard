import * as Paths from "@/lib/paths";

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

type MenuItem = {
  label: string;
  href?: string;
  submenu?: MenuItem[];
};

export const NAVIGATION_MENU: MenuItem[] = [
  {
    label: "Solutions",
    submenu: [
      {
        label: "Security Products",
        href: Paths.SECURITY_PRODUCTS,
      },
      {
        label: "MAP Sensors",
        href: Paths.MAP_SENSORS,
      },
      {
        label: "MAP System",
        href: Paths.MAP_SYSTEM,
      },
      {
        label: "Accessories",
        href: Paths.ACCESSORIES,
      },
    ],
  },
  {
    label: "Museums & Galleries",
    submenu: [
      {
        label: "Museums",
        href: Paths.MUSEUMS,
      },
      {
        label: "Galleries",
        href: Paths.GALLERIES,
      },
      {
        label: "Historic Homes",
        href: Paths.HISTORIC_HOMES,
      },
    ],
  },
  {
    label: "Private Collections",
    submenu: [
      {
        label: "Private Collections",
        href: Paths.PRIVATE_COLLECTIONS,
      },
      {
        label: "Hotels",
        href: Paths.HOTELS,
      },
      {
        label: "Auction Houses",
        href: Paths.AUCTION_HOUSES,
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
