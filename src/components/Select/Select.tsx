import React from "react";

import { Select } from "antd";

import "./select.css";

interface SelectItem {
  label: string;
  key: string | number;
  value?: string | number;
}

interface SelectComponentProps {
  items: SelectItem[];
  value?: string | number;
  placeholder?: string;
  showSearch?: boolean;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
}

export const SelectComponent = ({
  value,
  items,
  disabled,
  showSearch = false,
  placeholder,
  onChange,
}: SelectComponentProps) => {
  return (
    <Select
      showSearch={showSearch}
      onChange={onChange}
      disabled={disabled}
      defaultValue={value}
      options={items}
      placeholder={placeholder}
      className="select-component"
    />
  );
};
