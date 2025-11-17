import * as Icons from "@/ui/icons";
import * as NextImage from "next/image";
import * as Button from "@/ui/button";
import * as Paths from "@/lib/paths";

export type MenuItem = {
  label: string;
} & (
  | {
      submenu: SubmenuItem[];
      href?: string;
    }
  | {
      href: string;
    }
);

export type SubmenuItem = {
  label: string;
  href: string;
  subheading?: string;
};

export type Icon = keyof typeof Icons;

export type Path = (typeof Paths)[keyof typeof Paths];

export type MapSection = {
  type: "Map";
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  columns: {
    heading: string;
    children: string[];
  }[];
  image: {
    src: NextImage.StaticImageData;
    alt: string;
  };
};

export type TakeoverGridSection = {
  type: "TakeoverGrid";
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  ctas?: Cta[];
  cards: {
    heading: string;
    body: string;
    icon?: Icon;
  }[];
};

export type Cta = {
  label: string;
  href: string;
} & (
  | {
      type: "link";
    }
  | ({
      type: "button";
    } & Button.VariantProps)
);

export type TakeoverHeadingSection = {
  type: "TakeoverHeading";
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  icon?: Icon;
  body?: string | React.ReactNode;
  byline?: string | React.ReactNode;
  ctas?: Cta[];
};

export type CtaCardSection = {
  type: "CtaCard";
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  icon?: Icon;
  body?: string | React.ReactNode;
  byline?: string | React.ReactNode;
  ctas?: Cta[];
};

export type TextImageSplitSection = {
  type: "TextImageSplit";
  className?: string;
  reversed?: boolean;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  body?: string | React.ReactNode;
  auxContent?: string | React.ReactNode;
  ctas: Cta[];
  image: {
    src: NextImage.StaticImageData;
    alt: string;
  };
};

export type ValueGridSection = {
  type: "ValueGrid";
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  ctas?: Cta[];
  cards: {
    heading: string;
    body?: string | React.ReactNode;
    icon?: Icon;
    ctas?: Cta[];
  }[];
};

export type LinkGridSection = {
  type: "LinkGrid";
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  ctas?: Cta[];
  links: {
    icon?: Icon;
    label: string;
    href: string;
    ctaLabel: string;
    target?: string;
  }[];
};

export type FaqsSection = {
  type: "Faqs";
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export type VideoFeatureSection = {
  type: "VideoFeature";
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  ctas?: Cta[];
  video: {
    src: string;
    alt: string;
    type: "vimeo";
  };
  cards: {
    heading: string;
    body: string;
    icon?: Icon;
  }[];
};

export type SpecTableSection = {
  type: "SpecTable";
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  ctas?: Cta[];
  rows: {
    heading: string;
    value?: string | React.ReactNode;
    isHeader?: boolean;
  }[];
};

export type TextSection = {
  type: "Text";
  className?: string;
  heading?: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  body: string | React.ReactNode;
};

export type FeatureGridSection = {
  type: "FeatureGrid";
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  items: {
    heading: string;
    subheading?: string | React.ReactNode;
    body: string | React.ReactNode;
    icon?: Icon;
    ctas?: Cta[];
    image?: {
      src: NextImage.StaticImageData;
      alt: string;
    };
  }[];
};

export type ArticleHeroSection = {
  type: "ArticleHero";
  className?: string;
  heading: string | React.ReactNode;
  author: string;
  publishedAt: string;
  tags: string[];
  body?: string | React.ReactNode;
  image: {
    src: NextImage.StaticImageData;
    alt: string;
  };
};

export type TeamMember = {
  name: string;
  title?: string;
  bio: string | React.ReactNode;
  linkedinUrl?: string;
  image?: {
    src: NextImage.StaticImageData;
    alt: string;
  };
};

export type TeamSection = {
  type: "Team";
  className?: string;
  heading: string | React.ReactNode;
  featuredFounder: TeamMember;
  secondaryFounder: TeamMember;
  boardOfAdvisors: TeamMember[];
};

export type TextHighlightsSection = {
  type: "TextHighlights";
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  highlights: {
    heading: string;
    body: string;
  }[];
};

export type Page = {
  className?: string;
  sections: Section[];
  path: Path;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    image?: {
      src: NextImage.StaticImageData;
      alt: string;
    };
  };
};

export type Section =
  | MapSection
  | TakeoverGridSection
  | TakeoverHeadingSection
  | CtaCardSection
  | TextImageSplitSection
  | ValueGridSection
  | VideoFeatureSection
  | SpecTableSection
  | TextSection
  | FeatureGridSection
  | ArticleHeroSection
  | TeamSection
  | TextHighlightsSection
  | FaqsSection
  | LinkGridSection;
