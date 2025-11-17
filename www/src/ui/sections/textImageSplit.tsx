import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";
import * as Types from "@/lib/types";

import Image from "next/image";

type TextImageSplitProps = {
  section: Types.TextImageSplitSection;
};

const TextImageSplit: React.FC<TextImageSplitProps> = (props) => {
  return (
    <div
      className={Utils.cx(
        "col-span-full grid grid-cols-subgrid",
        props.section.className
      )}
    >
      <div
        className={Utils.cx(
          "relative z-10 row-start-1 row-end-2 pt-16 md:pt-48 md:pb-64 col-start-2 col-end-14",
          {
            "sm:col-end-10 md:col-end-8 lg:col-end-6": !props.section.reversed,
            "sm:col-start-6 md:col-start-8 lg:col-start-9":
              !!props.section.reversed,
          }
        )}
      >
        <Ui.Heading.Stack
          heading={props.section.heading}
          subheading={props.section.subheading}
          body={props.section.body}
          ctas={props.section.ctas}
          auxContent={props.section.auxContent}
        />
      </div>
      <div
        className={Utils.cx(
          "z-0 relative md:row-start-1 md:row-end-2 col-start-1 col-end-15 md:mt-0 max-h-[800px]",
          {
            "md:col-start-5": !props.section.reversed,
            "md:col-end-11": !!props.section.reversed,
          }
        )}
      >
        <div
          className={Utils.cx(
            "hidden md:block absolute inset-0 gradient-white-horizontal",
            {
              "rotate-180": !!props.section.reversed,
            }
          )}
        ></div>
        <div className="absolute inset-0 gradient-white-vertical"></div>
        <Image
          src={props.section.image.src}
          alt={props.section.image.alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TextImageSplit;
