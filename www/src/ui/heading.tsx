import * as Button from "@/ui/button";
import * as Text from "@/ui/text";
import * as Types from "@/lib/types";
import * as NextImage from "next/image";
import * as Utils from "@/lib/utils";

import Icon from "@/ui/icon";
import Link from "next/link";
import Image from "next/image";

type StackProps = {
  className?: string;
  heading?: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  body?: string | React.ReactNode;
  auxContent?: React.ReactNode;
  ctas?: Types.Cta[];
  image?: {
    src: NextImage.StaticImageData;
    alt: string;
  };
  ctasSlammed?: boolean;
  imageClassName?: string;
  headingClassName?: string;
};

export const Stack: React.FC<React.PropsWithChildren<StackProps>> = (props) => {
  return (
    <div
      className={Utils.cx("flex flex-col", props.className, {
        "justify-between": !!props.ctasSlammed,
      })}
    >
      <div>
        {props.heading && (
          <Text.Display32
            as="h2"
            className={Utils.cx("text-pretty", props.headingClassName)}
          >
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
        {props.image && (
          <div className="mt-2 h-[175px]">
            <Image
              src={props.image.src}
              alt={props.image.alt}
              className={Utils.cx(
                "w-full h-full object-contain object-center",
                props.imageClassName
              )}
            />
          </div>
        )}
        {props.body && (
          <div className="mt-4 max-w-[500px]">
            <Text.Interface16 as="div" className="space-y-3">
              {props.body}
            </Text.Interface16>
          </div>
        )}
        {props.auxContent && <div className="mt-4">{props.auxContent}</div>}
      </div>
      {props.ctas && (
        <div
          className={Utils.cx("mt-6 flex flex-wrap gap-3", {
            "mt-6": !props.ctasSlammed,
            "mt-8": !!props.ctasSlammed,
          })}
        >
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

type CenterStackProps = {
  heading?: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  ctas?: Types.Cta[];
  icon?: Types.Icon;
  body?: string | React.ReactNode;
  byline?: string | React.ReactNode;
};

export const CenterStack: React.FC<CenterStackProps> = (props) => {
  return (
    <div>
      {props.icon && (
        <div className="mb-2 flex justify-center">
          <Icon icon={props.icon} className="text-brand" />
        </div>
      )}
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
      {props.body && (
        <div className="mt-4">
          <Text.Interface16 className="text-subtle space-y-3">
            {props.body}
          </Text.Interface16>
        </div>
      )}
      {props.byline && (
        <div className="mt-6">
          <Text.Interface16 bold className="text-muted">
            {props.byline}
          </Text.Interface16>
        </div>
      )}
      {props.ctas && (
        <div className="mt-7 flex gap-x-3 flex-wrap gap-y-2 justify-center">
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
