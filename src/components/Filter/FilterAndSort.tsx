import React from "react";
import { SelectComponent } from "components/Select/Select";
import { useFetchCategories } from "hooks/useFetchCategories";

import { getCategoryOptions, getSortOptions } from "./FilterAndSort.helper";
import { CATEGORIES_URL } from "constants/constants";

import "./filter.css";

interface FilterAndSortProps {
  handleSortChange: (value: string | number) => void;
  handleFilterChange: (value: string | number) => void;
  sortOption: string;
  filterCategory: string;
}

export const FilterAndSort: React.FC<FilterAndSortProps> = ({
  handleSortChange,
  handleFilterChange,
  sortOption,
  filterCategory,
}) => {
  const [categories, categoriesLoading, categoriesError] =
    useFetchCategories(CATEGORIES_URL);

  const sortOptions = getSortOptions();
  const categoryOptions = getCategoryOptions(categories);

  return (
    <div className="products-controls">
      <SelectComponent
        items={sortOptions}
        value={sortOption}
        onChange={handleSortChange}
        placeholder="Sort by"
        showSearch
      />
      <SelectComponent
        items={categoryOptions}
        value={filterCategory}
        onChange={handleFilterChange}
        placeholder={
          categoriesLoading
            ? "Loading categories..."
            : categoriesError
            ? "Error loading categories"
            : "Filter by category"
        }
        showSearch
      />
    </div>
  );
};
