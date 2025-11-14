import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";
import * as Page from "@/ui/page";
import * as Types from "@/lib/types";

type TakeoverGridProps = {
  section: Types.ValueGridSection;
};

const TakeoverGrid: React.FC<TakeoverGridProps> = (props) => {
  return (
    <div
      className={Utils.cx(
        "col-span-full grid grid-cols-subgrid",
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
        <div className="grid grid-cols-12 gap-x-12 gap-y-16 auto-rows-fr">
          {props.section.cards.map((card, index) => (
            <div key={index} className="col-span-6 lg:col-span-4">
              <Ui.SimpleCard {...card} className="h-full" />
            </div>
          ))}
        </div>
      </Page.Container>
    </div>
  );
};

export default TakeoverGrid;
