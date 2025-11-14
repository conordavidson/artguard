import * as React from "react";
import * as Utils from "@/lib/utils";

type TextProps = {
  bold?: boolean;
  className?: string;
  as?: keyof React.ReactElement;
  [x: string]: unknown;
};

type TextComponent = React.FC<React.PropsWithChildren<TextProps>>;

const baseClasses = "text-current";

const Base: React.FC<
  React.PropsWithChildren<TextProps & { defaultClasses: string }>
> = ({ as = "p", children, className, defaultClasses, ...props }) => {
  return React.createElement(
    as,
    {
      className: Utils.cx(baseClasses, defaultClasses, className),
      ...props,
    },
    children
  );
};

type TextStyle = {
  baseWeight: string;
  boldWeight: string;
};

const TextStyle = ({ bold, ...props }: TextProps, style: TextStyle) => {
  return (
    <Base
      defaultClasses={`${bold ? style.boldWeight : style.baseWeight}`}
      {...props}
    />
  );
};

export const Display24: TextComponent = (props) =>
  TextStyle(props, {
    baseWeight: "display-24",
    boldWeight: "display-24-bold",
  });

export const Display32: TextComponent = (props) =>
  TextStyle(props, {
    baseWeight: "display-32",
    boldWeight: "display-32-bold",
  });

export const Interface12: TextComponent = (props) =>
  TextStyle(props, {
    baseWeight: "interface-12",
    boldWeight: "interface-12-bold",
  });

export const Interface14: TextComponent = (props) =>
  TextStyle(props, {
    baseWeight: "interface-14",
    boldWeight: "interface-14-bold",
  });

export const Interface16: TextComponent = (props) =>
  TextStyle(props, {
    baseWeight: "interface-16",
    boldWeight: "interface-16-bold",
  });

export const Interface18: TextComponent = (props) =>
  TextStyle(props, {
    baseWeight: "interface-18",
    boldWeight: "interface-18-bold",
  });

export const Interface20: TextComponent = (props) =>
  TextStyle(props, {
    baseWeight: "interface-20",
    boldWeight: "interface-20-bold",
  });
