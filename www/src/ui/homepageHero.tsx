import Image from 'next/image';

import GalleryHero from '@images/galleryhero.webp';

/*
The homepage hero photo with its animated sensor beacons.
Fills its nearest positioned ancestor.
*/
const HomepageHero: React.FC = () => {
  return (
    <>
      <Image
        src={GalleryHero}
        alt="Image of gallery with active alarm sensors"
        className="w-full h-full object-cover"
        loading="eager"
        placeholder="blur"
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
        <SvgBeacon
          cx={875}
          cy={750}
          radius={250}
          numberOfWaves={4}
          className="text-[#dfff03]"
        />
        <SvgBeacon
          cx={1700}
          cy={700}
          radius={300}
          numberOfWaves={4}
          delay={1}
          className="text-[#dfff03]"
        />
      </svg>
    </>
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
            fill="#faffee10"
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

export default HomepageHero;
