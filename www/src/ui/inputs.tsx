import * as React from "react";

type TextProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  name: string;
};

export const Text: React.FC<TextProps> = (props) => {
  return (
    <input
      type="text"
      name={props.name}
      className="w-full h-input-height rounded-lg bg-emphasis text-background placeholder:text-faint hover:bg-muted focus:bg-muted outline-none transition-colors px-4 py-2"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

type InputProps = React.PropsWithChildren<{
  label: string;
  name: string;
}>;

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={props.name} className="text-foreground">
        {props.label}
      </label>
      <div className="mt-2">{props.children}</div>
    </div>
  );
};
