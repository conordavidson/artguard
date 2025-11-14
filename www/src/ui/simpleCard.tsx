import * as Text from "@/ui/text";
import * as Utils from "@/lib/utils";
import * as Types from "@/lib/types";

import Icon from "@/ui/icon";

type SimpleCardProps = {
  heading: string;
  body: string;
  icon?: Types.Icon;
  className?: string;
};

const SimpleCard: React.FC<SimpleCardProps> = (props) => {
  return (
    <div className={Utils.cx(props.className)}>
      {props.icon && (
        <div className="mb-1">
          <Icon icon={props.icon} className="text-brand" />
        </div>
      )}
      <Text.Interface20 bold className="text-foreground">
        {props.heading}
      </Text.Interface20>
      <div className="mt-4">
        <Text.Interface16 className="text-subtle">
          {props.body}
        </Text.Interface16>
      </div>
    </div>
  );
};

export default SimpleCard;
