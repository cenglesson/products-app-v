import React from "react";
import { Input } from "antd";

const { Search } = Input;

interface SearchBoxProps {
  placeholder?: string;
  onChange: (searchTerm: string) => void;
}

export const SearchBox = ({ placeholder, onChange }: SearchBoxProps) => {
  return <Search placeholder={placeholder} onSearch={onChange} enterButton />;
};
