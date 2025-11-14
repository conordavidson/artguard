import * as Text from "@/ui/text";
import * as Utils from "@/lib/utils";
import * as Types from "@/lib/types";

import Icon from "@/ui/icon";

type PowerCardProps = {
  heading: string;
  body: string;
  icon?: Types.Icon;
  className?: string;
};

const PowerCard: React.FC<PowerCardProps> = (props) => {
  return (
    <div
      className={Utils.cx(
        "gradient-power rounded-lg border border-outline shadow-power pt-7 pb-9 px-7",
        props.className
      )}
    >
      {props.icon && (
        <div className="mb-1">
          <Icon icon={props.icon} className="text-brand" />
        </div>
      )}
      <Text.Interface20 bold className="text-foreground">
        {props.heading}
      </Text.Interface20>
      <div className="mt-7">
        <Text.Interface16 className="text-muted">{props.body}</Text.Interface16>
      </div>
    </div>
  );
};

export default PowerCard;
