import * as React from 'react';
import * as TextUi from '@/ui/text';
import * as Utils from '@/lib/utils';

type TextProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  required?: boolean;
};

const INPUT_CLASSNAME =
  'w-full block rounded-lg bg-emphasis text-background placeholder:text-faint hover:bg-muted focus:bg-muted outline-none transition-colors px-4 py-2 interface-14 font-medium!';

export const Text: React.FC<TextProps> = (props) => {
  return (
    <input
      type="text"
      id={props.id}
      autoComplete={props.autoComplete}
      className={Utils.cx(INPUT_CLASSNAME, 'h-input-height')}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      required={props.required}
    />
  );
};

type TextAreaProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
  rows?: number;
};

export const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      id={props.id}
      rows={props.rows || 4}
      className={Utils.cx(INPUT_CLASSNAME, 'py-3')}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

type SelectProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
  options: { label: string; value: string }[];
};

export const Select: React.FC<SelectProps> = (props) => {
  return (
    <select
      id={props.id}
      className={Utils.cx(INPUT_CLASSNAME)}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    >
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

type InputProps = React.PropsWithChildren<{
  label: string;
  id: string;
  className?: string;
}>;

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={Utils.cx('flex flex-col gap-y-1', props.className)}>
      <label htmlFor={props.id} className="text-muted">
        <TextUi.Interface14 bold>{props.label}</TextUi.Interface14>
      </label>
      <div>{props.children}</div>
    </div>
  );
};
