import * as Button from "@/ui/button";
import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";

import Image, { StaticImageData } from "next/image";

type TextImageSplitProps = {
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  body?: string | React.ReactNode;
  auxContent?: string | React.ReactNode;
  ctas: Button.VariantProps[];
  image: {
    src: StaticImageData;
    alt: string;
  };
  reversed?: boolean;
};

const TextImageSplit: React.FC<TextImageSplitProps> = (props) => {
  return (
    <div
      className={Utils.cx(
        "col-span-full grid grid-cols-subgrid",
        props.className
      )}
    >
      <div
        className={Utils.cx(
          "relative z-10 row-start-1 row-end-2 pt-16 md:pt-40 md:pb-64 col-start-2 col-end-14",
          {
            "sm:col-end-10 md:col-end-8 lg:col-end-6": !props.reversed,
            "sm:col-start-6 md:col-start-8 lg:col-start-9": !!props.reversed,
          }
        )}
      >
        <Ui.Heading.Stack
          heading={props.heading}
          subheading={props.subheading}
          body={props.body}
          ctas={props.ctas}
          auxContent={props.auxContent}
        />
      </div>
      <div
        className={Utils.cx(
          "z-0 relative md:row-start-1 md:row-end-2 col-start-1 col-end-15  md:mt-0",
          {
            "md:col-start-5": !props.reversed,
            "md:col-end-11": !!props.reversed,
          }
        )}
      >
        <div
          className={Utils.cx(
            "hidden md:block absolute inset-0 gradient-white-horizontal",
            {
              "rotate-180": !!props.reversed,
            }
          )}
        ></div>
        <div className="absolute inset-0 gradient-white-vertical"></div>
        <Image
          src={props.image.src}
          alt={props.image.alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TextImageSplit;
