import * as Ui from "@/ui";
import * as Content from "@/lib/content";
import * as Navigation from "next/navigation";

const slugAsPath = (slug: string | string[] | undefined) => {
  if (!slug) return "/";
  if (typeof slug === "string") return `/${slug}`;
  return `/${slug.join("/")}`;
};

const pageForSlug = (slug: string | string[] | undefined) => {
  const path = slugAsPath(slug);
  return Content.Pages.find((page) => page.path === path);
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
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

// export const generateStaticParams = async () => {
//   return Content.Pages.map((page) => ({
//     slug: page.path,
//   }));
// };

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("slug", slug);
  const page = pageForSlug(slug);
  if (!page) return Navigation.notFound();
  return <Ui.Page.Sections page={page} />;
}
