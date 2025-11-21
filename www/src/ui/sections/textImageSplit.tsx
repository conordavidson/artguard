import * as Ui from '@/ui';
import * as Utils from '@/lib/utils';
import * as Types from '@/lib/types';

import Image from 'next/image';

import GalleryHero from '@images/galleryhero.webp';

type TextImageSplitProps = {
  section: Types.TextImageSplitSection;
};

const TextImageSplit: React.FC<TextImageSplitProps> = (props) => {
  return (
    <section
      className={Utils.cx(
        'section text-image-split-section col-span-full grid grid-cols-subgrid',
        props.section.className
      )}
    >
      <div
        className={Utils.cx(
          'relative z-10 row-start-1 row-end-2 md:pt-40 md:pb-32 col-start-2 col-end-14',
          {
            'sm:col-end-10 md:col-end-8 lg:col-end-6': !props.section.reversed,
            'sm:col-start-6 md:col-start-8 lg:col-start-9': !!props.section.reversed,
          }
        )}
      >
        <Ui.Heading.Stack
          heading={props.section.heading}
          subheading={props.section.subheading}
          body={props.section.body}
          ctas={props.section.ctas}
          auxContent={props.section.auxContent}
        />
      </div>
      <div
        className={Utils.cx(
          'h-[400px] md:h-[600px] z-0 relative md:row-start-1 md:row-end-2 col-start-1 col-end-15 mt-4 md:mt-0',
          {
            'md:col-start-5': !props.section.reversed,
            'md:col-end-11': !!props.section.reversed,
          }
        )}
      >
        <div
          className={Utils.cx('hidden md:block z-10 absolute inset-0 gradient-white-horizontal', {
            'rotate-180': !!props.section.reversed,
          })}
        ></div>
        <div className="z-10 absolute inset-0 gradient-white-vertical"></div>
        {'image' in props.section && (
          <Image
            src={props.section.image.src}
            alt={props.section.image.alt}
            className="w-full h-full object-cover"
          />
        )}
        {'useHomepageHero' in props.section && (
          <>
            <Image
              src={GalleryHero}
              alt="Image of gallery with active alarm sensors"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <svg
              id="homepage-hero-svg"
              className="absolute z-30 inset-0 w-full h-full"
              viewBox="0 0 2200 1467"
              preserveAspectRatio="xMidYMid slice"
            >
              <filter id="blurMe">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
              </filter>
              <SvgBeacon cx={875} cy={750} radius={250} numberOfWaves={4} className="text-lime" />
              <SvgBeacon
                cx={1700}
                cy={700}
                radius={300}
                numberOfWaves={4}
                delay={1}
                className="text-lime"
              />
            </svg>
          </>
        )}
      </div>
    </section>
  );
};

type SvgBeaconProps = {
  cx: number;
  cy: number;
  radius: number;
  numberOfWaves: number;
  className?: string;
  delay?: number;
};

const SvgBeacon: React.FC<SvgBeaconProps> = (props) => {
  return (
    <g className={props.className}>
      {Array.from({ length: props.numberOfWaves }).map((_, i) => {
        const startScale = i === 0 ? 0.05 : 0.15 + i * 0.2;
        const endScale = 0.35 + i * 0.2;

        return (
          <circle
            key={i}
            cx={props.cx}
            cy={props.cy}
            r={props.radius}
            filter="url(#blurMe)"
            fill="#faffee0c"
            stroke="currentColor"
            strokeWidth={1}
            strokeDasharray={150}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            className={`alarm-ring alarm-ring-${i}`}
            style={
              {
                opacity: 0,
                transformOrigin: `${props.cx}px ${props.cy}px`,
                '--start-scale': startScale,
                '--end-scale': endScale,
                '--wave-index': i,
                '--delay': props.delay ? `${props.delay}s` : '0s',
              } as React.CSSProperties
            }
          />
        );
      })}
    </g>
  );
};

export default TextImageSplit;
