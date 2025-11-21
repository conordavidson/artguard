import * as Ui from '@/ui';
import * as Utils from '@/lib/utils';
import * as Text from '@/ui/text';
import * as Types from '@/lib/types';

import MapImage from '@images/mapgraphic.svg';

import Image from 'next/image';

type MapSectionProps = {
  section: Types.MapSection;
};

const MapSection: React.FC<MapSectionProps> = (props) => {
  return (
    <section
      className={Utils.cx(
        'section map-section col-span-full grid grid-cols-subgrid',
        props.section.className
      )}
    >
      <Ui.Page.Container className="text-center max-w-[500px] mx-auto">
        <Ui.Heading.CenterStack
          heading={props.section.heading}
          subheading={props.section.subheading}
        />
      </Ui.Page.Container>
      <Ui.Page.Container className="mt-10 text-center max-w-[900px] mx-auto">
        <div className="relative">
          <MapGraphic />
          <MapPins />
        </div>
      </Ui.Page.Container>
      <Ui.Page.Container className="mt-10">
        <div className="max-w-[800px] mx-auto grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8 [&>*:last-child:nth-child(odd)]:col-span-2 [&>*:last-child:nth-child(odd)]:justify-self-center sm:[&>*:last-child:nth-child(odd)]:col-span-1">
          {props.section.columns.map((column) => (
            <div key={column.heading} className="text-center">
              <Text.Interface16 bold className="text-faint uppercase" as="h3">
                {column.heading}
              </Text.Interface16>
              <div className="mt-3 space-y-2">
                {column.children.map((child) => (
                  <Text.Interface16 key={child}>{child}</Text.Interface16>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Ui.Page.Container>
    </section>
  );
};

export default MapSection;

export const MapGraphic = () => {
  return <Image src={MapImage} alt="Map graphic" className="w-full h-full object-cover" />;
};

const Coordinates = {
  // West Coast North America
  Seattle: {
    x: 70,
    y: 120,
  },
  Portland: {
    x: 75,
    y: 128,
  },
  SanFrancisco: {
    x: 75,
    y: 145,
  },
  LosAngeles: {
    x: 80,
    y: 160,
  },

  // Central/South USA
  Dallas: {
    x: 165,
    y: 160,
  },
  Houston: {
    x: 170,
    y: 170,
  },
  Chicago: {
    x: 190,
    y: 136,
  },

  // East Coast North America
  Miami: {
    x: 210,
    y: 185,
  },
  Toronto: {
    x: 215,
    y: 130,
  },
  Boston: {
    x: 225,
    y: 132,
  },
  NewYork: {
    x: 220,
    y: 140,
  },
  Montreal: {
    x: 235,
    y: 125,
  },

  // Western Europe
  Madrid: {
    x: 445,
    y: 145,
  },
  London: {
    x: 450,
    y: 115,
  },
  Paris: {
    x: 465,
    y: 125,
  },
  Brussels: {
    x: 468,
    y: 120,
  },
  Amsterdam: {
    x: 470,
    y: 115,
  },

  // Central/Northern Europe
  Berlin: {
    x: 485,
    y: 115,
  },
  Copenhagen: {
    x: 488,
    y: 105,
  },

  // Southern Europe
  Valletta: {
    x: 485,
    y: 150,
  },
  Rome: {
    x: 488,
    y: 138,
  },
  Venice: {
    x: 490,
    y: 132,
  },

  // Middle East
  TelAviv: {
    x: 540,
    y: 160,
  },
  Dubai: {
    x: 620,
    y: 175,
  },
  AbuDhabi: {
    x: 615,
    y: 178,
  },

  // Asia
  Bangkok: {
    x: 760,
    y: 240,
  },
  HongKong: {
    x: 810,
    y: 220,
  },
  Tokyo: {
    x: 860,
    y: 160,
  },
};

export const MapPins = () => {
  return (
    <div className="absolute inset-0">
      <svg className="w-full h-full" height="100%" width="100%" viewBox="0 0 921 484">
        <defs>
          <filter id="map-pin-shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodOpacity="0.5" />
          </filter>
        </defs>
        {Object.entries(Coordinates).map(([key, value], index: number) => (
          <MapPin key={key} coordinates={value} delay={index * 0.1} />
        ))}
      </svg>
    </div>
  );
};

type MapPinProps = {
  coordinates: {
    x: number;
    y: number;
  };
  delay?: number;
};

export const MapPin: React.FC<MapPinProps> = (props) => {
  return (
    <g>
      <MapPinRings
        cx={props.coordinates.x}
        cy={props.coordinates.y}
        radius={25}
        numberOfWaves={4}
        delay={props.delay}
      />
      <circle
        cx={props.coordinates.x}
        cy={props.coordinates.y}
        r="12"
        fill="white"
        opacity={0.9}
        filter="url(#map-pin-shadow)"
      />
      <circle cx={props.coordinates.x} cy={props.coordinates.y} r="5" fill="#B7DD70" />
    </g>
  );
};

type MapPinRingsProps = {
  cx: number;
  cy: number;
  radius: number;
  numberOfWaves: number;
  className?: string;
  delay?: number;
};

const MapPinRings: React.FC<MapPinRingsProps> = (props) => {
  return (
    <>
      {Array.from({ length: props.numberOfWaves }).map((_, i) => {
        const startScale = i === 0 ? 0.05 : 0.15 + i * 0.2;
        const endScale = 0.35 + i * 0.2;

        return (
          <circle
            key={i}
            cx={props.cx}
            cy={props.cy}
            r={props.radius}
            fill="#faffee0c"
            stroke="#e8fda1"
            strokeWidth={1}
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
    </>
  );
};
