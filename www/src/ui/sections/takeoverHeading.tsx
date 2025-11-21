import * as Ui from '@/ui';
import * as Utils from '@/lib/utils';
import * as Page from '@/ui/page';
import * as Types from '@/lib/types';

type TakeoverHeadingProps = {
  section: Types.TakeoverHeadingSection;
};

const TakeoverHeading: React.FC<TakeoverHeadingProps> = (props) => {
  return (
    <section
      className={Utils.cx(
        'section takeover-heading-section col-span-full grid grid-cols-subgrid pt-16 pb-24 bg-panel',
        props.section.className
      )}
    >
      <Page.Container className="text-center max-w-[500px] mx-auto">
        <Ui.Heading.CenterStack
          heading={props.section.heading}
          subheading={props.section.subheading}
          ctas={props.section.ctas}
          icon={props.section.icon}
          body={props.section.body}
          byline={props.section.byline}
        />
      </Page.Container>
    </section>
  );
};

export default TakeoverHeading;
