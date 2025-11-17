import * as Utils from "@/lib/utils";
import * as Page from "@/ui/page";
import * as Types from "@/lib/types";
import * as Text from "@/ui/text";

type TextSectionProps = {
  section: Types.TextSection;
};

const TextSection: React.FC<TextSectionProps> = (props) => {
  return (
    <div
      className={Utils.cx(
        "col-span-full grid grid-cols-subgrid",
        props.section.className
      )}
    >
      <Page.Container className="max-w-[575px] mx-auto">
        {props.section.heading && (
          <Text.Display32
            as="h2"
            className="text-center text-foreground text-balance max-w-[450px] mx-auto"
          >
            {props.section.heading}
          </Text.Display32>
        )}
        {props.section.subheading && (
          <div className="mt-3 text-center">
            <Text.Interface18 className="text-subtle text-pretty">
              {props.section.subheading}
            </Text.Interface18>
          </div>
        )}
        <div className="mt-8 editorial">{props.section.body}</div>
      </Page.Container>
    </div>
  );
};

export default TextSection;
