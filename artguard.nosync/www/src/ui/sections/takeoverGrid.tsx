import * as Button from "@/ui/button";
import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";
import * as Page from "@/ui/page";

import Image, { StaticImageData } from "next/image";

type TakeoverGridProps = {
  className?: string;
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  cta?: {
    label: string;
    href: string;
  };
  cards: {
    heading: string;
    body: string;
    icon?: React.ReactNode;
  }[];
};

const TakeoverGrid: React.FC<TakeoverGridProps> = (props) => {
  return (
    <div
      className={Utils.cx(
        "dark-theme col-span-full grid grid-cols-subgrid bg-emphasis pt-16 pb-24",
        props.className
      )}
    >
      <Page.Container className="text-center max-w-[500px] mx-auto">
        <Ui.Heading.CenterStack
          heading={props.heading}
          subheading={props.subheading}
          cta={props.cta}
        />
      </Page.Container>
      <Page.Container className="grid grid-cols-subgrid mt-12 gap-4 auto-rows-fr">
        {props.cards.map((card, index) => (
          <div
            key={index}
            className="col-span-full sm:col-span-6 lg:col-span-4"
          >
            <Ui.PowerCard {...card} className="h-full" />
          </div>
        ))}
      </Page.Container>
    </div>
  );
};

export default TakeoverGrid;
