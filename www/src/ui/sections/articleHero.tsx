import * as Utils from '@/lib/utils';
import * as Types from '@/lib/types';
import * as Text from '@/ui/text';

import SanityImage from '@/ui/sanityImage';

type ArticleHeroProps = {
  section: Types.ArticleHeroSection;
};

const ArticleHero: React.FC<ArticleHeroProps> = (props) => {
  return (
    <section
      className={Utils.cx(
        'article-hero-section section col-span-full grid grid-cols-subgrid',
        props.section.className
      )}
    >
      <div
        className={Utils.cx(
          'relative z-10 row-start-1 row-end-2 pt-12 md:pt-40 md:pb-64 col-start-2 col-end-14 sm:col-end-10 md:col-end-8 lg:col-end-6'
        )}
      >
        <div>
          <div className="flex items-center gap-x-2 justify-between">
            <Text.Interface14 bold className="text-muted text-pretty">
              {Utils.formatDate(props.section.publishedAt)}
            </Text.Interface14>
            <div className="flex items-center gap-x-2">
              {props.section.tags.map((tag) => (
                <div key={tag} className="border border-brand rounded-md px-1 py-0.5">
                  <Text.Interface12 key={tag} bold className="text-brand">
                    {tag.toUpperCase()}
                  </Text.Interface12>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3">
            <Text.Display32 as="h1" className="text-foreground text-pretty italic">
              {props.section.heading}
            </Text.Display32>
          </div>
          <div className="mt-3">
            <Text.Interface18 className="text-subtle text-pretty">
              By {props.section.author}
            </Text.Interface18>
          </div>
        </div>
      </div>
      <div
        className={Utils.cx(
          'z-0 relative md:row-start-1 md:row-end-2 col-start-1 col-end-15 md:col-start-5 h-[500px]'
        )}
      >
        <div
          className={Utils.cx('hidden md:block absolute inset-0 gradient-white-horizontal')}
        ></div>
        <div className="absolute inset-0 gradient-white-vertical"></div>
        {props.section.image.asset && (
          <SanityImage
            image={props.section.image.asset}
            alt={props.section.image.asset.altText || ''}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </section>
  );
};

export default ArticleHero;
