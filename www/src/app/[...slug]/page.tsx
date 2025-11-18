import * as Ui from '@/ui';
import * as Content from '@/lib/content';
import * as Navigation from 'next/navigation';

const slugAsPath = (slug: string | string[] | undefined) => {
  if (!slug) return '/';
  if (typeof slug === 'string') return `/${slug}`;
  return `/${slug.join('/')}`;
};

const pageForSlug = (slug: string | string[] | undefined) => {
  const path = slugAsPath(slug);
  return Content.Pages.find((page) => page.path === path);
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const page = pageForSlug(slug);
  if (!page) return Navigation.notFound();
  return {
    title: page.metadata.title,
    description: page.metadata.description,
    keywords: page.metadata.keywords,
    image: page.metadata.image?.src,
  };
};

const formatSlug = (slug: string): string[] | null => {
  if (slug === '/') return null;
  const withoutLeadingSlash = slug.startsWith('/') ? slug.slice(1) : slug;
  return withoutLeadingSlash.split('/').filter(Boolean);
};

export const generateStaticParams = async () => {
  const formattedSlugs = Content.Pages.map((page) => formatSlug(page.path)).filter(Boolean);
  return formattedSlugs.map((slug) => ({
    slug,
  }));
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageForSlug(slug);
  if (!page) return Navigation.notFound();
  return <Ui.Page.Sections page={page} />;
}
