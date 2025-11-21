import * as Utils from '@/lib/utils';
import * as Page from '@/ui/page';
import * as Sanity from '@/lib/sanity';
import * as Types from '@/lib/types';
import * as Heading from '@/ui/heading';
import * as Text from '@/ui/text';

import Marquee from 'react-fast-marquee';

import Link from 'next/link';
import SanityImage from '@/ui/sanityImage';

type RecentInsightsProps = {
  section: Types.RecentInsightsSection;
};

const RecentInsights: React.FC<RecentInsightsProps> = async (props) => {
  const posts = await Sanity.Posts.index();
  const recentPosts = posts.slice(0, 20);

  return (
    <section
      className={Utils.cx(
        'section recent-insights-section col-span-full grid grid-cols-subgrid',
        props.section.className
      )}
    >
      <Page.Container>
        <Heading.Stack heading={props.section.heading} />
      </Page.Container>
      <div className="mt-7 col-span-full">
        <Marquee autoFill speed={20} pauseOnHover>
          <div className="flex">
            {recentPosts.map((post) => (
              <Link
                href={`/insights/${post.slug.current}`}
                key={post._id}
                className={Utils.cx('block w-[300px] cursor-pointer group mr-12')}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <SanityImage
                    image={post.coverImage.asset!}
                    alt={post.coverImage.asset?.altText || ''}
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-all duration-200 ease-in-out group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 gradient-light z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-200 ease-in-out"></div>

                  <div className="absolute top-4 right-4 z-20 flex items-center gap-x-2">
                    {post.tags?.map((tag) => (
                      <div
                        key={tag.title}
                        className="bg-brand text-white rounded-md px-1 py-0.5 text-nowrap shadow-md"
                      >
                        <Text.Interface12 key={tag.title} bold>
                          {tag.title.toUpperCase()}
                        </Text.Interface12>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between gap-x-2">
                    <Text.Interface14
                      bold
                      className="text-subtle group-hover:text-brand transition-colors"
                    >
                      {Utils.formatDate(post.publishedAt)}
                    </Text.Interface14>
                    <Text.Interface14
                      bold
                      className="text-subtle group-hover:text-brand transition-colors"
                    >
                      By {post.author.name}
                    </Text.Interface14>
                  </div>
                  <div className="mt-3">
                    <Text.Display24
                      as="h3"
                      className="text-muted italic text-balance group-hover:text-brand transition-colors"
                    >
                      {post.title}
                    </Text.Display24>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default RecentInsights;
