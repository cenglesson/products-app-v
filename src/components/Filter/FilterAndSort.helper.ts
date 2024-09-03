export const getSortOptions = () => [
  { key: "default", label: "Default", value: "default" },
  { key: "price-asc", label: "Price: Low to High", value: "price-asc" },
  { key: "price-desc", label: "Price: High to Low", value: "price-desc" },
  { key: "title-asc", label: "Title: A-Z", value: "title-asc" },
  { key: "title-desc", label: "Title: Z-A", value: "title-desc" },
];

export const getCategoryOptions = (categories: string[]) => [
  { key: "", label: "All Categories", value: "" },
  ...categories.map((category) => ({
    key: category,
    label: category,
    value: category,
  })),
];
