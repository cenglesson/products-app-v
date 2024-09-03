import React, { useEffect, useState } from "react";
import { useFetchProducts } from "hooks/useFetchProducts";
import { ErrorAlert } from "components/Alert/ErrorAlert";
import { Spinner } from "components/Loading/Spinner";
import { ProductList } from "./ProductList";

import { HeaderCardComponent } from "components/Card/HeaderCard";
import { FilterAndSort } from "components/Filter/FilterAndSort";
import { SearchBox } from "components/Search/SearchBox";

import { PRODUCTS_URL } from "constants/constants";

import "./products.css";

export const Products: React.FC = () => {
  const limit = 20;
  const [skip, setSkip] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [sortOption, setSortOption] = useState<string>("default");
  const [filterCategory, setFilterCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [data, isLoading, error] = useFetchProducts(
    PRODUCTS_URL,
    limit,
    skip,
    sortOption,
    filterCategory,
    searchQuery
  );

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        if (!isFetching && !isLoading) {
          setIsFetching(true);
          setSkip((prevSkip) => prevSkip + limit);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setIsFetching(false);
    }
  }, [isLoading]);

  const handleSortChange = (value: string | number) => {
    setSortOption(value as string);
    setSkip(0);
  };

  const handleFilterChange = (value: string | number) => {
    setFilterCategory(value as string);
    setSkip(0);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setSkip(0);
  };

  return (
    <div className="products-container">
      {isLoading && <Spinner size="lg" />}
      {error && (
        <ErrorAlert
          message="Failed to Load Products"
          description="There was an issue loading the products. Please check your internet connection and try again. If the problem persists, refresh the page or come back later."
        />
      )}

      <HeaderCardComponent
        header={{
          title: "Products",
          subTitle: "Here you can search for all products that are available",
        }}
        leftActions={
          <FilterAndSort
            handleSortChange={handleSortChange}
            handleFilterChange={handleFilterChange}
            sortOption={sortOption}
            filterCategory={filterCategory}
          />
        }
        rightActions={
          <SearchBox placeholder="Search products" onChange={handleSearch} />
        }
      />
      <ProductList products={data} />
    </div>
  );
};
