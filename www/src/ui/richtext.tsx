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
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
  },
  listItem: ({ children }) => <li>{children}</li>,
  list: ({ children }) => <ul>{children}</ul>,
};

type RichtextImage = Extract<
  NonNullable<Sanity.Types.GET_POST_BY_SLUG_QUERYResult>['content'][0],
  { _type: 'image' }
>;

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
  return (
    <div className="editorial">
      <Pt.PortableText value={props.content} components={RichtextComponents} />
    </div>
  );
};

export default Richtext;
