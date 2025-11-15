import * as Icons from "@/ui/icons";
import * as NextImage from "next/image";
import * as Button from "@/ui/button";
import * as Paths from "@/lib/paths";

export type Icon = keyof typeof Icons;

export type Path = (typeof Paths)[keyof typeof Paths];

export type MapSection = {
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
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  icon?: Icon;
  body?: string | React.ReactNode;
  byline?: string | React.ReactNode;
  ctas?: Cta[];
};

export type CtaCardSection = {
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  icon?: Icon;
  body?: string | React.ReactNode;
  byline?: string | React.ReactNode;
  ctas?: Cta[];
};

export type TextImageSplitSection = {
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

export type VideoFeatureSection = {
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
  className?: string;
  heading?: string | React.ReactNode;
  body: string | React.ReactNode;
};

export type FeatureGridSection = {
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
