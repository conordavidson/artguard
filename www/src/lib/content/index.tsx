import * as Paths from '@/lib/paths';
import * as Types from '@/lib/types';
import * as PageContent from './pages';

const WHITEPAPER_ANNOUNCEMENT = {
  publishedAt: '2025-11-16',
  message: (
    <>
      <i>Whitepaper:</i> Object-specific Protection, The Untapped Market in Home Security
    </>
  ),
  cta: {
    label: 'Read the Whitepaper',
    href: '/whitepaper',
  },
};

export const CURRENT_ANNOUNCEMENT = WHITEPAPER_ANNOUNCEMENT;

export const NAVIGATION_MENU: Types.MenuItem[] = [
  {
    label: 'Solutions',
    submenu: [
      {
        label: 'Security Products',
        href: Paths.SECURITY_PRODUCTS,
        subheading: 'For Fine Art And Valuable Assets',
      },
      {
        label: 'MAP Sensors',
        href: Paths.MAP_SENSORS,
        subheading: 'MAP v3 Wireless Sensors',
      },
      {
        label: 'MAP Gold System',
        href: Paths.MAP_SYSTEM_GOLD,
        subheading: 'A Complete System for Art and Asset Protection',
      },
      {
        label: 'MAP Silver System',
        href: Paths.MAP_SYSTEM_SILVER,
        subheading: 'Security Peace of Mind for Galleries & Small Museums',
      },
    ],
  },
  {
    label: 'Museums & Galleries',
    submenu: [
      {
        label: 'Museums',
        href: Paths.MUSEUMS,
        subheading: 'Object-Specific Protection for Collections of Any Size',
      },
      {
        label: 'Galleries',
        href: Paths.GALLERIES,
        subheading: 'Security for Rotating Collections',
      },
      {
        label: 'Historic Homes',
        href: Paths.HISTORIC_HOMES,
        subheading: 'Fortify Historically Accurate Displays',
      },
    ],
  },
  {
    label: 'Private Collections',
    submenu: [
      {
        label: 'Private Collections',
        href: Paths.PRIVATE_COLLECTIONS,
        subheading: 'Private Art Collections and Valuable Stationary Assets',
      },
      {
        label: 'Hotels',
        href: Paths.HOTELS,
        subheading: 'Public Spaces and Guest Rooms',
      },
      {
        label: 'Auction Houses',
        href: Paths.AUCTION_HOUSES,
        subheading: 'For Continuously Changing Inventory',
      },
    ],
  },
  {
    label: 'Partners',
    submenu: [
      {
        label: 'Security Installers & Integrators',
        subheading: 'Beyond Intrusion and Fire',
        href: Paths.SECURITY_INSTALLERS,
      },
      {
        label: 'Partner Program',
        href: Paths.PARTNER_PROGRAM,
        subheading: 'Toward Satisfied Clients',
      },
      {
        label: 'Insurers & Brokers',
        href: Paths.INSURERS_BROKERS,
        subheading: 'Risk Mitigation through Object-Specific Protection',
      },
    ],
  },
  {
    label: 'Resources',
    submenu: [
      {
        label: 'FAQs',
        href: Paths.FAQS,
      },
      {
        label: 'Product Sheets',
        href: Paths.PRODUCT_SHEETS,
      },
      {
        label: 'Videos',
        href: Paths.SUPPORT_VIDEOS,
      },
      {
        label: 'Accessories',
        href: Paths.ACCESSORIES,
      },
    ],
  },
  {
    label: 'About',
    submenu: [
      {
        label: 'Our Story',
        href: Paths.OUR_STORY,
      },
      {
        label: 'Team',
        href: Paths.TEAM,
      },
      {
        label: 'Insights',
        href: Paths.INSIGHTS,
      },
      {
        label: 'Press',
        href: Paths.PRESS,
      },
      {
        label: 'Satisfied Customers',
        href: Paths.SATISFIED_CUSTOMERS,
      },
      {
        label: 'Contact Us',
        href: Paths.CONTACT,
      },
    ],
  },
];

export const FOOTER_MENU: Types.MenuItem[] = [
  {
    label: 'Privacy Policy',
    href: Paths.PRIVACY_POLICY,
  },
  {
    label: 'Contact Us',
    href: Paths.CONTACT,
  },
  {
    label: 'FAQs',
    href: Paths.FAQS,
  },
];

export const Pages = Object.values(PageContent);

export const FACEBOOK_LINK = 'https://www.facebook.com/ArtGuardAssetProtection';
export const TWITTER_LINK = 'https://twitter.com/artguardus';
export const LINKEDIN_LINK = 'https://www.linkedin.com/company/art-guard';
