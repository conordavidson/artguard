import * as Icons from "@/ui/icons";
import * as Utils from "@/lib/utils";

type IconProps = {
  icon: keyof typeof Icons;
  className?: string;
  size?: 24 | 16 | 20;
};

const Icon: React.FC<IconProps> = (props) => {
  const Icon = Icons[props.icon];

  return (
    <div
      className={Utils.cx(props.className, {
        "w-[24px] h-[24px]": !props.size || props.size === 24,
        "w-[16px] h-[16px]": props.size === 16,
        "w-[20px] h-[20px]": props.size === 20,
      })}
    >
      <Icon />
    </div>
  );
};

export default Icon;
