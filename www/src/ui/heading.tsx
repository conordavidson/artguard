import * as Button from "@/ui/button";
import * as Text from "@/ui/text";
import * as Utils from "@/lib/utils";

import Link from "next/link";

type StackProps = {
  heading?: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  body?: string | React.ReactNode;
  auxContent?: React.ReactNode;
  ctas?: Button.VariantProps[];
};

export const Stack: React.FC<React.PropsWithChildren<StackProps>> = (props) => {
  return (
    <div>
      {props.heading && (
        <Text.Display32 as="h2" className="text-pretty">
          {props.heading}
        </Text.Display32>
      )}
      {props.subheading && (
        <div className="mt-3">
          <Text.Interface18 className="text-subtle text-pretty">
            {props.subheading}
          </Text.Interface18>
        </div>
      )}
      {props.body && (
        <div className="mt-4">
          <Text.Interface16 as="div" className="space-y-3">
            {props.body}
          </Text.Interface16>
        </div>
      )}
      {props.auxContent && <div className="mt-4">{props.auxContent}</div>}
      {props.ctas && (
        <div className="mt-6 flex gap-3">
          {props.ctas.map((cta, index) => (
            <Button.Variant key={index} {...cta} />
          ))}
        </div>
      )}
    </div>
  );
};

type CenterStackProps = {
  heading?: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  cta?: {
    label: string;
    href: string;
  };
};

export const CenterStack: React.FC<CenterStackProps> = (props) => {
  return (
    <div>
      {props.heading && (
        <Text.Display32 as="h2" className="text-foreground text-balance">
          {props.heading}
        </Text.Display32>
      )}
      {props.subheading && (
        <div className="mt-5">
          <Text.Interface18 className="text-subtle text-balance">
            {props.subheading}
          </Text.Interface18>
        </div>
      )}
      {props.cta && (
        <div className="mt-6">
          <Link href={props.cta.href}>
            <Text.Interface16
              bold
              className="text-foreground underline decoration-dotted hover:opacity-70 transition-opacity"
            >
              {props.cta.label}
            </Text.Interface16>
          </Link>
        </div>
      )}
    </div>
  );
};
