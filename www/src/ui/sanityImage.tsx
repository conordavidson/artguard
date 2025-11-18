import * as React from 'react';
import * as Sanity from '@/lib/sanity';

import Image from 'next/image';

// Use the urlFor function to build URLs
type SanityImageProps = {
  image: Sanity.Types.SanityImageAsset;
  alt: string;
} & Omit<React.ComponentProps<typeof Image>, 'src' | 'alt' | 'width' | 'height'>;

const SanityImage: React.FC<SanityImageProps> = (props) => {
  return (
    <Image
      {...props}
      alt={props.alt}
      width={props.image.metadata?.dimensions?.width}
      height={props.image.metadata?.dimensions?.height}
      src={Sanity.imageBuilder.image(props.image).url()}
    />
  );
};

export default SanityImage;
