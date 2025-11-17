import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";
import * as Page from "@/ui/page";
import * as Types from "@/lib/types";
import * as Text from "@/ui/text";

type TextHighlightsProps = {
  section: Types.TextHighlightsSection;
};

const TextHighlights: React.FC<TextHighlightsProps> = (props) => {
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
      <Page.Container className="mt-7 max-w-[750px] mx-auto">
        <div className="space-y-6">
          {props.section.highlights.map((highlight) => (
            <div
              key={highlight.heading}
              className="grid grid-cols-12 md:gap-x-12 gap-y-2"
            >
              <Text.Interface16
                bold
                className="text-foreground md:text-right col-span-12 md:col-span-4"
                as="h2"
              >
                {highlight.heading}
              </Text.Interface16>
              <div className="col-span-12 md:col-span-8">
                <Text.Interface16 className="text-foreground">
                  {highlight.body}
                </Text.Interface16>
              </div>
            </div>
          ))}
        </div>
      </Page.Container>
    </div>
  );
};

export default TextHighlights;
