import * as Ui from '@/ui';
import * as Utils from '@/lib/utils';
import * as Page from '@/ui/page';
import * as Types from '@/lib/types';

type FaqsProps = {
  section: Types.FaqsSection;
};

const Faqs: React.FC<FaqsProps> = (props) => {
  return (
    <section
      className={Utils.cx(
        'section faqs-section col-span-full grid grid-cols-subgrid',
        props.section.className
      )}
    >
      <Page.Container className="text-center max-w-[500px] mx-auto">
        <Ui.Heading.CenterStack
          heading={props.section.heading}
          subheading={props.section.subheading}
        />
      </Page.Container>
      <Page.Container className="mt-12 max-w-[1000px] mx-auto">
        <div className="grid grid-cols-12 sm:gap-x-12 lg:gap-x-12 gap-y-12">
          {props.section.faqs.map((faq, index) => (
            <div key={index} className={Utils.cx('col-span-12 sm:col-span-6')}>
              <Ui.SimpleCard heading={faq.question} body={faq.answer} className="h-full" />
            </div>
          ))}
        </div>
      </Page.Container>
    </section>
  );
};

export default Faqs;
