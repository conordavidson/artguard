import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";
import * as Page from "@/ui/page";
import * as Types from "@/lib/types";

type TakeoverGridProps = {
  section: Types.TakeoverGridSection;
};

const TakeoverGrid: React.FC<TakeoverGridProps> = (props) => {
  return (
    <div
      className={Utils.cx(
        "dark-theme col-span-full grid grid-cols-subgrid bg-emphasis pt-16 pb-24",
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
      <Page.Container className="grid grid-cols-subgrid mt-12 gap-4 auto-rows-fr">
        {props.section.cards.map((card, index) => (
          <div
            key={index}
            className={Utils.cx("col-span-full sm:col-span-6", {
              "lg:col-span-4":
                props.section.cards.length === 3 ||
                props.section.cards.length > 4,
            })}
          >
            <Ui.PowerCard {...card} className="h-full" />
          </div>
        ))}
      </Page.Container>
    </div>
  );
};

export default TakeoverGrid;
