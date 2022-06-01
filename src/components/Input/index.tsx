import { forwardRef, Ref, ReactNode, ChangeEvent, FocusEvent } from "react";

import { ColorVariant, SizeVariant } from "src/utils/types";

import { InputWrapper, InputStyle, TextareaStyle } from "./InputStyles";

export type TextElement = HTMLInputElement | HTMLTextAreaElement;

interface InputProps {
  id?: string;
  name: string;
  placeholder?: string;
  leftAccessory?: ReactNode;
  rightAccessory?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  type?: "text" | "textarea" | "email" | "password" | "number";
  size?: SizeVariant;
  variant?: ColorVariant;
  bold?: boolean;
  block?: boolean;
  controlled?: boolean;
  value?: string | number | undefined;
  defaultValue?: string | number | undefined;
  max?: string | number | undefined;
  min?: string | number | undefined;
  step?: string;
  autofocus?: boolean;
  onChange?: (e: ChangeEvent<TextElement>) => void;
  onFocus?: (e: FocusEvent<TextElement>) => void;
  onBlur?: (e: FocusEvent<TextElement>) => void;
  maxLength?: number;
}

const Input = forwardRef<TextElement, InputProps>(
  (
    {
      id,
      name,
      placeholder = "",
      leftAccessory = null,
      rightAccessory = null,
      disabled = false,
      readOnly = false,
      type = "text",
      size = "md",
      variant = "neutral",
      bold = false,
      block = false,
      controlled = false,
      value = "",
      defaultValue = "",
      max = "",
      min = "",
      step = "",
      onChange = () => undefined,
      onFocus = () => undefined,
      onBlur = () => undefined,
      maxLength = 255,
    }: InputProps,
    ref: Ref<TextElement>
  ) => {
    return (
      <InputWrapper block={block} variant={variant} size={size} bold={bold}>
        {leftAccessory}
        {type === "textarea" ? (
          <TextareaStyle
            id={id}
            name={name}
            ref={ref as Ref<HTMLTextAreaElement>}
            placeholder={placeholder}
            autoComplete="off"
            disabled={disabled}
            readOnly={readOnly}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            maxLength={maxLength}
            {...(controlled ? { value } : { defaultValue })}
          />
        ) : (
          <InputStyle
            id={id}
            name={name}
            ref={ref as Ref<HTMLInputElement>}
            type={type}
            max={max}
            min={min}
            step={step}
            placeholder={placeholder}
            autoComplete="off"
            disabled={disabled}
            readOnly={readOnly}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            maxLength={maxLength}
            {...(controlled ? { value } : { defaultValue })}
          />
        )}
        {rightAccessory}
      </InputWrapper>
    );
  }
);

export default Input;
