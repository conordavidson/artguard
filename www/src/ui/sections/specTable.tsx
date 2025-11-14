import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";
import * as Page from "@/ui/page";
import * as Types from "@/lib/types";
import * as Text from "@/ui/text";

type SpecTableProps = {
  section: Types.SpecTableSection;
};

const SpecTable: React.FC<SpecTableProps> = (props) => {
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
      <Page.Container className="mt-7 max-w-[800px] mx-auto">
        <div className="gradient-dark dark-theme divide-y divide-outline rounded-xl overflow-hidden">
          {props.section.rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-x-12 gap-y-2 py-6 pl-7 pr-12"
            >
              <div className="col-span-12 sm:col-span-5">
                {row.isHeader ? (
                  <Text.Interface20 bold className="text-foreground" as="h2">
                    {row.heading}
                  </Text.Interface20>
                ) : (
                  <Text.Interface16 bold className="text-faint" as="h3">
                    {row.heading}
                  </Text.Interface16>
                )}
              </div>
              {row.value && (
                <div className="col-span-12 sm:col-span-7">
                  <Text.Interface16 className="text-foreground">
                    {row.value}
                  </Text.Interface16>
                </div>
              )}
            </div>
          ))}
        </div>
      </Page.Container>
    </div>
  );
};

export default SpecTable;
