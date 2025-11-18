import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";
import * as Page from "@/ui/page";
import * as Types from "@/lib/types";
import * as Text from "@/ui/text";

type VideoGridProps = {
  section: Types.VideoGridSection;
};

const VideoGrid: React.FC<VideoGridProps> = (props) => {
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
      <Page.Container className="mt-12">
        <div className="max-w-[1000px] mx-auto grid grid-cols-12 gap-x-6 gap-y-12">
          {props.section.videos.map((video, index) => (
            <div key={index} className="col-span-12 sm:col-span-6">
              <Text.Interface20 className="text-muted text-center">
                {video.heading}
              </Text.Interface20>
              <div className="mt-3 w-full p-2 rounded-xl overflow-hidden border border-outline aspect-video">
                <iframe
                  src={video.video.src}
                  className="w-full h-full outline-none rounded-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title={video.video.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </Page.Container>
    </div>
  );
};

export default VideoGrid;
