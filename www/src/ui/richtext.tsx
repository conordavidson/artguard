import * as Pt from '@portabletext/react';
import * as Types from '@/lib/types';
import * as Text from '@/ui/text';
import * as Sanity from '@/lib/sanity';

import SanityImage from '@/ui/sanityImage';

type RichtextProps = {
  content: Types.PortableText;
};

const BaseStyles: Partial<Pt.PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <Text.Display18 className="mb-5">{children}</Text.Display18>,
    h2: ({ children }) => (
      <Text.Display32 className="mt-16 first:mt-0 mb-8">{children}</Text.Display32>
    ),
    h3: ({ children }) => (
      <Text.Display24 className="mt-12 first:mt-0 mb-6">{children}</Text.Display24>
    ),
    h4: ({ children }) => (
      <Text.Interface20 bold className="mt-8 first:mt-0 mb-4">
        {children}
      </Text.Interface20>
    ),
  },
  listItem: ({ children }) => (
    <Text.Display18 as="li" className="list-disc list-outside ml-4">
      {children}
    </Text.Display18>
  ),
  list: ({ children }) => <ul className="space-y-3 mb-5">{children}</ul>,
};

type RichtextImage = Extract<Sanity.Types.RichtextWithImages[0], { _type: 'image' }>;

const RichtextComponents: Partial<Pt.PortableTextReactComponents> = {
  ...BaseStyles,
  types: {
    image: ({ value }: { value: RichtextImage }) => {
      return (
        <div className="mt-12 mb-8 w-full">
          <SanityImage image={value.asset!} alt={value.alt || ''} />
          {value.caption && (
            <Text.Interface12 as="caption" className="w-full mt-1 text-subdued">
              {value.caption}
            </Text.Interface12>
          )}
        </div>
      );
    },
  },
};

const Richtext: React.FC<RichtextProps> = (props) => {
  return <Pt.PortableText value={props.content} components={RichtextComponents} />;
};

export default Richtext;
