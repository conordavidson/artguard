import * as Icons from '@/ui/icons';
import * as NextImage from 'next/image';
import * as Button from '@/ui/button';
import * as Paths from '@/lib/paths';
import * as Sanity from '@/lib/sanity';

export type PortableText = {
  _type: 'block' | string;
  _key?: string;
}[];

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
  type: 'Map';
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
  type: 'TakeoverGrid';
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
      type: 'link';
    }
  | ({
      type: 'button';
    } & Button.VariantProps)
);

export type TakeoverHeadingSection = {
  type: 'TakeoverHeading';
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  icon?: Icon;
  body?: string | React.ReactNode;
  byline?: string | React.ReactNode;
  ctas?: Cta[];
};

export type CtaCardSection = {
  type: 'CtaCard';
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  icon?: Icon;
  body?: string | React.ReactNode;
  byline?: string | React.ReactNode;
  ctas?: Cta[];
};

export type TextImageSplitSection = {
  type: 'TextImageSplit';
  className?: string;
  reversed?: boolean;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  body?: string | React.ReactNode;
  auxContent?: string | React.ReactNode;
  ctas: Cta[];
} & (
  | {
      image: {
        src: NextImage.StaticImageData;
        alt: string;
      };
    }
  | {
      useHomepageHero: true;
    }
);

export type ValueGridSection = {
  type: 'ValueGrid';
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
  type: 'LinkGrid';
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  ctas?: Cta[];
  links: {
    icon?: Icon;
    heading: string;
    body?: string | React.ReactNode;
    href: string;
    ctaLabel: string;
    target?: string;
    eyebrow?: string;
  }[];
};

export type FaqsSection = {
  type: 'Faqs';
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  faqs: {
    question: string;
    answer: string;
  }[];
};

type Video = {
  src: string;
  alt: string;
  type: 'vimeo';
};

export type VideoFeatureSection = {
  type: 'VideoFeature';
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  ctas?: Cta[];
  video: Video;
  cards: {
    heading: string;
    body: string;
    icon?: Icon;
  }[];
};

export type VideoGridSection = {
  type: 'VideoGrid';
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  ctas?: Cta[];
  videos: {
    heading: string;
    video: Video;
  }[];
};

export type SpecTableSection = {
  type: 'SpecTable';
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
  type: 'Text';
  className?: string;
  heading?: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  body: string | React.ReactNode;
};

export type FeatureGridSection = {
  type: 'FeatureGrid';
  className?: string;
  heading?: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  imagePadding?: boolean;
  footerCtas?: Cta[];
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
  type: 'ArticleHero';
  className?: string;
  heading: string | React.ReactNode;
  author: string;
  publishedAt: string;
  tags: string[];
  body?: string | React.ReactNode;
  image: {
    asset?: Sanity.Types.SanityImageAsset | null;
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
  type: 'Team';
  className?: string;
  heading: string | React.ReactNode;
  featuredFounder: TeamMember;
  secondaryFounder: TeamMember;
  boardOfAdvisors: TeamMember[];
};

export type TextHighlightsSection = {
  type: 'TextHighlights';
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  highlights: {
    heading: string;
    body: string | React.ReactNode;
  }[];
};

export type ContactFormSection = {
  type: 'ContactForm';
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  email: string;
  phone: string;
};

export type RecentInsightsSection = {
  type: 'RecentInsights';
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
};

export type QuizAnswers = Record<string, string>;

export type QuizOption = {
  id: string;
  label: string;
  sub?: string;
};

export type QuizQuestionContent = {
  prompt: string;
  options: QuizOption[];
};

export type QuizQuestion = QuizQuestionContent & {
  id: string;
  // Asked only when one of these matches the answers so far. Omit to always ask.
  when?: QuizAnswers[];
  // The first variant whose `when` matches the answers so far replaces the prompt and options.
  variants?: (QuizQuestionContent & { when: QuizAnswers })[];
};

export type QuizOutcomeCopy = {
  title: string;
  summary: string;
  bullets: string[];
  note: {
    label: string;
    body: string;
  };
};

export type QuizOutcome = QuizOutcomeCopy & {
  id: string;
  // Short internal name, used in the lead email.
  label: string;
  // Chosen when one of these matches the answers. Omit on the last outcome to make it the
  // fallback.
  when?: QuizAnswers[];
  cta?: {
    label: string;
    href: Path;
  };
  // The first variant whose `when` matches the answers overrides the copy above.
  variants?: (Partial<QuizOutcomeCopy> & { when: QuizAnswers })[];
};

// Plain data only: a quiz is passed to client components and read by the lead API route.
export type Quiz = {
  id: string;
  // The question whose answer labels the result and picks the background scene.
  segmentQuestionId: string;
  questions: QuizQuestion[];
  // Ordered. The first outcome whose `when` matches wins.
  outcomes: QuizOutcome[];
  copy: {
    eyebrow: string;
    footnote: string;
    // Shown beside the quiz name once the result is on screen.
    matchLabel: string;
    leadHeading: string;
    leadCta: string;
    successHeading: string;
    successBody: string;
  };
};

export type QuizHeroSection = {
  type: 'QuizHero';
  className?: string;
  heading: string;
  subheading?: string;
  body?: string;
  quiz: Quiz;
  // Background image per answer to the quiz's segment question. Starts on the homepage hero.
  scenes: Record<string, NextImage.StaticImageData>;
};

export type Page = {
  className?: string;
  sections: Section[];
  path: Path;
  suppressNewsletterDialog?: boolean;
  theme?: {
    lightGradientBg?: boolean;
  };
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
  | LinkGridSection
  | VideoGridSection
  | ContactFormSection
  | RecentInsightsSection
  | QuizHeroSection;
