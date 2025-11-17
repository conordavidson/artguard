import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";
import * as Page from "@/ui/page";
import * as Types from "@/lib/types";

type VideoFeatureProps = {
  section: Types.VideoFeatureSection;
};

const VideoFeature: React.FC<VideoFeatureProps> = (props) => {
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
      <Page.Container className="mt-8">
        <div className="max-w-[600px] mx-auto w-full p-2 rounded-xl overflow-hidden border border-outline">
          <div className="aspect-video">
            <iframe
              src={props.section.video.src}
              className="w-full h-full outline-none rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title={props.section.video.alt}
            />
          </div>
        </div>
      </Page.Container>
      <Page.Container className="mt-12 max-w-[1000px] mx-auto">
        <div className="grid grid-cols-12 sm:gap-x-12 lg:gap-x-12 gap-y-16 auto-rows-fr">
          {props.section.cards.map((card, index) => (
            <div
              key={index}
              className="col-span-12 sm:col-span-6 lg:col-span-4"
            >
              <Ui.SimpleCard {...card} className="h-full" />
            </div>
          ))}
        </div>
      </Page.Container>
    </div>
  );
};

export default VideoFeature;
