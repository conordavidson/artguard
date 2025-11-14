import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";
import * as Page from "@/ui/page";
import * as Types from "@/lib/types";

type CtaCardProps = {
  section: Types.CtaCardSection;
};

const CtaCard: React.FC<CtaCardProps> = (props) => {
  return (
    <div
      className={Utils.cx(
        "col-span-full grid grid-cols-subgrid",
        props.section.className
      )}
    >
      <Page.Container className="text-center max-w-[550px] mx-auto">
        <div className="border border-outline rounded-xl pt-16 pb-18 px-12">
          <Ui.Heading.CenterStack
            heading={props.section.heading}
            subheading={props.section.subheading}
            ctas={props.section.ctas}
            icon={props.section.icon}
            body={props.section.body}
            byline={props.section.byline}
          />
        </div>
      </Page.Container>
    </div>
  );
};

export default CtaCard;
