import * as Utils from '@/lib/utils';
import * as Page from '@/ui/page';
import * as Sanity from '@/lib/sanity';
import * as Types from '@/lib/types';
import * as Heading from '@/ui/heading';

import Carousel from './carousel';

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
      <Carousel posts={recentPosts} />
    </section>
  );
};

export default RecentInsights;
