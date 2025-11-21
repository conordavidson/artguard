import * as Ui from '@/ui';
import * as Utils from '@/lib/utils';
import * as Text from '@/ui/text';
import * as Types from '@/lib/types';

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
        <Image
          src={props.section.image.src}
          alt={props.section.image.alt}
          className="w-full h-full object-cover"
        />
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
