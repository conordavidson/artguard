'use client';

import * as React from 'react';
import * as SanityTypes from '@/lib/sanity/types';
import * as Text from '@/ui/text';
import * as Utils from '@/lib/utils';

import Link from 'next/link';
import Icon from '@/ui/icon';
import SanityImage from '@/ui/sanityImage';

type RecentInsightsCarouselProps = {
  posts: SanityTypes.INDEX_POSTS_QUERYResult;
};

const RecentInsightsCarousel: React.FC<RecentInsightsCarouselProps> = (props) => {
  const [isScrolledToStart, setIsScrolledToStart] = React.useState(true);
  const [isScrolledToEnd, setIsScrolledToEnd] = React.useState(false);

  const carouselRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const carousel = carouselRef.current;
    const handleScroll = () => {
      if (!carousel) return;
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      setIsScrolledToEnd(scrollLeft + clientWidth >= scrollWidth - 10);
      setIsScrolledToStart(scrollLeft === 0);
    };

    if (carousel) carousel.addEventListener('scroll', handleScroll);

    return () => {
      if (carousel) carousel.removeEventListener('scroll', handleScroll);
    };
  }, [carouselRef]);

  return (
    <div className="relative mt-7 col-span-full">
      <div
        className={Utils.cx(
          'pointer-events-none absolute z-20 left-0 top-0 bottom-0 w-[64px] pl-3 pt-[72px] bg-linear-to-l from-transparent to-white to-90% transition-opacity duration-500 ease-in-out',
          {
            'opacity-0': isScrolledToStart,
            'opacity-100': !isScrolledToStart,
          }
        )}
      >
        <Icon icon="BackArrow" size={32} />
      </div>
      <div
        className={Utils.cx(
          'pointer-events-none absolute z-20 right-0 top-0 bottom-0 w-[64px] pr-3 pt-[72px] bg-linear-to-r from-transparent to-white to-90% transition-opacity duration-500 ease-in-out flex justify-end',
          {
            'opacity-0': isScrolledToEnd,
            'opacity-100': !isScrolledToEnd,
          }
        )}
      >
        <Icon icon="BackArrow" size={32} className="rotate-180" />
      </div>

      <div className="flex overflow-x-auto pb-6 gap-x-5 snap-x snap-mandatory" ref={carouselRef}>
        {props.posts.map((post) => {
          const firstTag = post.tags?.[0];
          return (
            <Link
              href={`/insights/${post.slug.current}`}
              key={post._id}
              className={Utils.cx(
                'block w-[300px] cursor-pointer group shrink-0 first:ml-grid-gutter last:mr-grid-gutter snap-start scroll-mx-grid-gutter'
              )}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <SanityImage
                  image={post.coverImage.asset!}
                  alt={post.coverImage.asset?.altText || ''}
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-all duration-200 ease-in-out group-hover:brightness-110"
                />
                <div className="absolute inset-0 gradient-light z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-200 ease-in-out"></div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between gap-x-2">
                  <Text.Interface14
                    bold
                    className="text-subtle group-hover:text-brand transition-colors"
                  >
                    {Utils.formatDate(post.publishedAt)}
                  </Text.Interface14>
                  <div></div>
                  <div className="flex items-center gap-x-2">
                    {firstTag && (
                      <div
                        key={firstTag.slug.current}
                        className="border border-brand rounded-md px-1 py-0.5"
                      >
                        <Text.Interface12 bold className="text-brand">
                          {firstTag.title.toUpperCase()}
                        </Text.Interface12>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <Text.Display24
                    as="h3"
                    className="text-muted italic text-pretty group-hover:text-brand transition-colors"
                  >
                    {post.title}
                  </Text.Display24>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RecentInsightsCarousel;
