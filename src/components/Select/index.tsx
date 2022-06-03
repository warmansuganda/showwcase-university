/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, forwardRef, useState } from "react";
import dynamic from "next/dynamic";
import type {
  GroupBase,
  OnChangeValue,
  ActionMeta,
  PropsValue,
  OptionsOrGroups,
  SingleValue,
  MultiValue,
  MenuPlacement,
  InputActionMeta,
} from "react-select";
import { useDebouncedCallback } from "use-debounce";

import { ColorVariant, SizeVariant } from "src/utils/types";
import useMounted from "src/hooks/useMounted";

const ReactSelect = dynamic(() => import("react-select"), { ssr: false });

export interface SelectOption {
  value: string | number | null | undefined;
  label: string | number | null | undefined;
  original?: any;
}

export type SelectOptionList = OptionsOrGroups<
  SelectOption,
  GroupBase<SelectOption>
>;

export type SingleValueOption = SingleValue<SelectOption> | undefined;

export type MultipeValueOption = MultiValue<SelectOption> | undefined;

export interface SelectProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> {
  id: string;
  placeholder?: string;
  options: OptionsOrGroups<Option, Group>;
  accessoryLeft?: ReactNode;
  size?: SizeVariant;
  variant?: ColorVariant;
  value?: PropsValue<Option>;
  defaultValue?: PropsValue<Option>;
  disabled?: boolean;
  controlled?: boolean;
  onChange?: (
    newValue: OnChangeValue<Option, IsMulti>,
    actionMeta?: ActionMeta<Option>
  ) => void;
  onBlur?: () => void;
  searchable?: boolean;
  clearable?: boolean;
  autofocus?: boolean;
  multiple?: boolean;
  loading?: boolean;
  debounceTimeout?: number;
  createable?: boolean;
  onCreateOption?: (inputValue: string) => void;
  onSearch?: (keyword: string, actionMeta: InputActionMeta) => void;
  onMenuScrollToBottom?: (event: WheelEvent | TouchEvent) => void;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

const Select = forwardRef(
  (
    {
      id,
      size = "md",
      variant = "light",
      searchable = false,
      clearable = false,
      disabled = false,
      multiple = false,
      options,
      defaultValue,
      value,
      onChange,
      onBlur,
      placeholder,
      autofocus,
      controlled = false,
      loading = false,
      debounceTimeout = 500,
      onSearch,
      onMenuScrollToBottom,
      onMenuOpen,
      onMenuClose,
    }: SelectProps<SelectOption, false, GroupBase<SelectOption>>,
    ref
  ) => {
    const name = id;
    const { mounted } = useMounted();
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleSearch = useDebouncedCallback((keyword, actionMeta) => {
      if (onSearch) onSearch(keyword, actionMeta);
    }, debounceTimeout);

    const handleMenuOpen = () => {
      setMenuIsOpen(true);
      if (onMenuOpen) onMenuOpen();
    };

    const handleMenuClose = () => {
      setMenuIsOpen(false);
      if (onMenuClose) onMenuClose();
    };

    const customElement = {
      IndicatorSeparator: () => null,
    };

    if (!mounted) return null;
    const props = {
      ref: ref as never,
      id,
      name,
      defaultValue,
      onChange: onChange as never,
      onBlur,
      options,
      menuIsOpen,
      components: customElement as never,
      menuPortalTarget: document?.body,
      menuPlacement: "auto" as MenuPlacement,
      classNamePrefix: "react-select",
      className: `react-select--${size} react-select--${variant}`,
      isSearchable: searchable,
      isClearable: clearable,
      isDisabled: disabled,
      placeholder,
      autoFocus: autofocus,
      value,
      isMulti: multiple,
      isLoading: loading,
      onMenuScrollToBottom,
      filterOption: controlled ? () => true : undefined,
      onInputChange: handleSearch,
      onMenuOpen: handleMenuOpen,
      onMenuClose: handleMenuClose,
    };

    return (
      <div>
        <ReactSelect {...props} />
      </div>
    );
  }
);

export default Select;
