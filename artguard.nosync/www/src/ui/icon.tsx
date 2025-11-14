import * as Icons from "@/ui/icons";
import * as Utils from "@/lib/utils";

type IconProps = {
  icon: keyof typeof Icons;
  className?: string;
  size?: 24;
};

const Icon: React.FC<IconProps> = (props) => {
  const Icon = Icons[props.icon];

  return (
    <div
      className={Utils.cx(props.className, {
        "w-[24px] h-[24px]": !props.size || props.size === 24,
      })}
    >
      <Icon />
    </div>
  );
};

export default Icon;
