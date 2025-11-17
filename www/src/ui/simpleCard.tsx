import * as Text from "@/ui/text";
import * as Utils from "@/lib/utils";
import * as Types from "@/lib/types";
import * as Button from "@/ui/button";

import Icon from "@/ui/icon";
import Link from "next/link";

type SimpleCardProps = {
  heading: string;
  body?: string | React.ReactNode;
  icon?: Types.Icon;
  className?: string;
  ctas?: Types.Cta[];
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
      {props.body && (
        <div className="mt-4">
          <Text.Interface16 className="text-subtle">
            {props.body}
          </Text.Interface16>
        </div>
      )}
      {props.ctas && (
        <div className="mt-4 flex gap-x-3 flex-wrap gap-y-2 justify-center">
          {props.ctas.map((cta) => {
            if (cta.type === "button") {
              return <Button.Variant key={cta.label} inline {...cta} />;
            }
            return (
              <Link key={cta.label} href={cta.href}>
                <Text.Interface16
                  bold
                  className="text-foreground underline decoration-dotted hover:opacity-70 transition-opacity"
                >
                  {cta.label}
                </Text.Interface16>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SimpleCard;
