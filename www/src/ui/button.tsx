import * as React from "react";
import * as Utils from "../lib/utils";
import * as Text from "./text";

import Link from "next/link";

export type BaseProps = React.PropsWithChildren<
  {
    disabled?: boolean;
    label?: string | React.ReactNode;
    className?: string;
    inline?: boolean;
  } & (SubmitButtonProps | ButtonProps | LinkProps)
>;

type ButtonProps = {
  type?: "button";
  onClick: () => void;
};

type SubmitButtonProps = {
  type: "submit";
  onClick?: () => void;
};

type LinkProps = {
  href: HTMLAnchorElement["href"];
  target?: HTMLAnchorElement["target"];
};

const Base: React.FC<BaseProps> = (props) => {
  const className = Utils.cx(
    `inline-flex justify-center items-center h-button-height whitespace-nowrap enabled:cursor-pointer transition-colors disabled:pointer-events-none px-3 rounded-full min-w-[160px]`,
    {
      "w-full": !props.inline,
    },
    props.className
  );

  const label = () => {
    if (!props.label) return null;

    if (typeof props.label === "string") {
      return (
        <Text.Interface16 className="font-medium!" key="label">
          {props.label}
        </Text.Interface16>
      );
    }

    return props.label;
  };

  const children = () => {
    if (!props.children) return null;

    if (typeof props.children === "string") {
      return (
        <Text.Interface16 className="font-medium!" key="children">
          {props.children}
        </Text.Interface16>
      );
    }

    return props.children;
  };

  if ("href" in props) {
    return (
      <Link
        href={props.href}
        target={props.target || "_self"}
        className={className}
      >
        {children() || label()}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { inline, ...propsWithoutAttrs } = props;

  return (
    <button
      {...propsWithoutAttrs}
      type={props.type || "button"}
      className={className}
      disabled={props.disabled}
      onClick={() => {
        if (props.disabled) return;
        if (props.onClick) props.onClick();
      }}
    >
      {props.children || label()}
    </button>
  );
};

export const Primary: React.FC<BaseProps> = (props) => {
  return (
    <Base
      {...props}
      className={Utils.cx(
        "text-white bg-brand hover:opacity-70 transition-opacity",
        props.className
      )}
    />
  );
};

export const Secondary: React.FC<BaseProps> = (props) => {
  return (
    <Base
      {...props}
      className={Utils.cx(
        "text-white bg-emphasis hover:opacity-70 transition-opacity",
        props.className
      )}
    />
  );
};

export type VariantProps = BaseProps & {
  variant: "primary" | "secondary";
};

export const Variant: React.FC<VariantProps> = (props) => {
  if (props.variant === "primary") return <Primary {...props} />;
  if (props.variant === "secondary") return <Secondary {...props} />;
  return null;
};
