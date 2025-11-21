import * as Ui from '@/ui';
import * as Utils from '@/lib/utils';
import * as Page from '@/ui/page';
import * as Types from '@/lib/types';

type ValueGridProps = {
  section: Types.ValueGridSection;
};

const ValueGrid: React.FC<ValueGridProps> = (props) => {
  return (
    <section
      className={Utils.cx(
        'section value-grid-section col-span-full grid grid-cols-subgrid',
        props.section.className
      )}
    >
      <Page.Container className="text-center max-w-[500px] mx-auto">
        <Ui.Heading.CenterStack
          heading={props.section.heading}
          subheading={props.section.subheading}
          ctas={props.section.ctas}
        />
      </Page.Container>
      <Page.Container className="mt-12 max-w-[1000px] mx-auto">
        <div className="grid grid-cols-12 sm:gap-x-12 lg:gap-x-12 gap-y-16 auto-rows-fr">
          {props.section.cards.map((card, index) => (
            <div
              key={index}
              className={Utils.cx('col-span-12 sm:col-span-6', {
                'lg:col-span-4': props.section.cards.length === 3 || props.section.cards.length > 4,
              })}
            >
              <Ui.SimpleCard {...card} className="h-full" />
            </div>
          ))}
        </div>
      </Page.Container>
    </section>
  );
};

export default ValueGrid;
