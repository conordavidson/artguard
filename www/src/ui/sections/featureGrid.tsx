import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";
import * as Page from "@/ui/page";
import * as Types from "@/lib/types";
import * as Heading from "@/ui/heading";

type FeatureGridProps = {
  section: Types.FeatureGridSection;
};

const FeatureGrid: React.FC<FeatureGridProps> = (props) => {
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
        />
      </Page.Container>
      <Page.Container
        className={Utils.cx("mt-14", {
          "max-w-[1000px] mx-auto": props.section.items.length < 3,
        })}
      >
        <div
          className={Utils.cx(
            "flex flex-col md:flex-row md:flex-wrap gap-x-16 gap-y-16 items-stretch"
          )}
        >
          {props.section.items.map((item, index) => (
            <div key={index} className="flex-1 md:max-w-[400px]">
              <Heading.Stack
                heading={item.heading}
                body={item.body}
                ctas={item.ctas}
                image={item.image}
                ctasSlammed
                className="h-full"
                headingClassName={Utils.cx({
                  "md:text-center": props.section.items.length > 2,
                })}
                imageClassName={Utils.cx("h-[175px]", {
                  "object-left lg:object-center":
                    props.section.items.length > 2,
                  "object-center md:object-center":
                    props.section.items.length < 3,
                })}
              />
            </div>
          ))}
        </div>
      </Page.Container>
    </div>
  );
};

export default FeatureGrid;
