import * as Sanity from '@/lib/sanity';
import * as Ui from '@/ui';
import * as Utils from '@/lib/utils';

import Link from 'next/link';

export default async function Insights() {
  const posts = await Sanity.Posts.index();

  return (
    <div className="pt-16 grid grid-cols-subgrid col-span-full">
      <Ui.Page.Container className="text-center max-w-[500px] mx-auto">
        <Ui.Heading.CenterStack heading="Insights" subheading="Art & Security News & Trends" />
      </Ui.Page.Container>
      <Ui.Page.Container className="mt-12 max-w-[1000px] mx-auto">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          {posts.map((post, index) => (
            <Link
              href={`/insights/${post.slug.current}`}
              key={index}
              className={Utils.cx('col-span-12 sm:col-span-6 cursor-pointer group')}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Ui.SanityImage
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
                      <Ui.Text.Interface12 key={tag.title} bold>
                        {tag.title.toUpperCase()}
                      </Ui.Text.Interface12>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between gap-x-2">
                  <Ui.Text.Interface14
                    bold
                    className="text-subtle group-hover:text-brand transition-colors"
                  >
                    {Utils.formatDate(post.publishedAt)}
                  </Ui.Text.Interface14>
                  <Ui.Text.Interface14
                    bold
                    className="text-subtle group-hover:text-brand transition-colors"
                  >
                    By {post.author.name}
                  </Ui.Text.Interface14>
                </div>
                <div className="mt-3">
                  <Ui.Text.Display24
                    as="h3"
                    className="text-muted italic text-balance group-hover:text-brand transition-colors"
                  >
                    {post.title}
                  </Ui.Text.Display24>
                </div>
              </div>
              <div className="mt-4">
                <Ui.Text.Interface16
                  bold
                  className="text-brand underline decoration-dotted hover:opacity-70 transition-opacity"
                >
                  Read More
                </Ui.Text.Interface16>
              </div>
            </Link>
          ))}
        </div>
      </Ui.Page.Container>
    </div>
  );
}
