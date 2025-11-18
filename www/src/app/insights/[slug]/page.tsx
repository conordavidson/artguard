import * as Navigation from 'next/navigation';
import * as Ui from '@/ui';
import * as Sanity from '@/lib/sanity';
import * as Utils from '@/lib/utils';

export const generateStaticParams = async () => {
  const posts = await Sanity.Posts.index();

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
};

export default async function Insights({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await Sanity.Posts.getBySlug(slug);
  if (!post) return Navigation.notFound();

  return (
    <div className="grid grid-cols-subgrid col-span-full">
      <Ui.Sections.ArticleHero
        section={{
          type: 'ArticleHero',
          className: 'md:-mt-nav-height',
          publishedAt: Utils.formatDate(post.publishedAt),
          heading: post.title,
          author: post.author.name,
          tags: (post.tags || []).map((tag) => tag.title),
          image: post.coverImage,
        }}
      />
      <Ui.Page.Container className="max-w-[575px] mx-auto">
        <Ui.Richtext content={post.content} />
      </Ui.Page.Container>
    </div>
  );
}
