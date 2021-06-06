import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, LinearProgress } from "@material-ui/core";
import { Alert, Pagination } from "@material-ui/lab";
import { getQuery } from "helpers";
import { Search } from "components";
import {
  ShopsSidebar,
  CatalogCategories,
  ShopsList,
  ProductsList,
} from "features";
import { ICategoryItem, IShopItem } from "api/types/catalog";

import { Provider } from "./context";
import {
  useGetShops,
  useGetCategories,
  useGetProducts,
  useGetQuery,
} from "./hooks";

export const CatalogPage: React.FC = () => {
  const location = useLocation();

  const {
    shops,
    loading,
    hasError: shopsError,
    isLoaded: isShopsLoaded,
  } = useGetShops();

  const query = getQuery(location.search);
  const {
    shop: queryShop,
    category: queryCategory,
    subCategory: querySubCategory,
    page: queryPage = 1,
  } = query;
  const isShopSelected = !!queryShop;

  const [page, setPage] = useState(+queryPage);
  const [selectedShop, setSelectedShop] = useState(queryShop);
  const [selectedCategory, setSelectedCategory] = useState(queryCategory);
  const [selectedSubCategory, setSelectedSubCategory] =
    useState(querySubCategory);

  useGetQuery(selectedShop, selectedCategory, selectedSubCategory, page);

  const { categories, loading: categoriesLoading } =
    useGetCategories(selectedShop);

  const { products, loading: productsLoading } = useGetProducts(selectedShop);

  const handleChangePagination = useCallback(
    (event: React.ChangeEvent<unknown>, page: number) => {
      setPage(page);
    },
    []
  );

  const handleShopClick = useCallback(
    (shop: IShopItem) => {
      if (isShopSelected && categoriesLoading) return;

      setSelectedShop(shop.name);
      setSelectedCategory("");
      setSelectedSubCategory("");
      setPage(1);
    },
    [isShopSelected, categoriesLoading, setSelectedShop]
  );

  const handleCategoryClick = useCallback(
    (shop: IShopItem, category: ICategoryItem) => {
      setSelectedCategory(category.name);
      setSelectedSubCategory("");
      setPage(1);
    },
    []
  );

  const handleSubCategoryClick = useCallback(
    (category: ICategoryItem) => {
      setSelectedSubCategory(category.name);
      setPage(1);

      const categoryParent = categories.find((c) => {
        return c.name === category.parentName;
      });

      if (categoryParent) {
        setSelectedCategory(categoryParent.name);
      }
    },
    [categories]
  );

  if (loading) return <LinearProgress />;

  if (shopsError)
    return <Alert severity="error">Ошибка загрузки данных!</Alert>;

  const firstCategories = categories.filter((c) => !c.parentName);
  const subCategories = categories.filter((c) => {
    if (!selectedCategory) return c.parentName;
    return c.parentName && c.parentName === selectedCategory;
  });
  const paginationPages = Math.ceil(products.length / 8);

  return (
    <>
      <Box display="flex">
        <Box width={200}>
          <ShopsSidebar
            activeShop={selectedShop}
            activeCategory={selectedCategory}
            onClick={handleShopClick}
            onCategoryClick={handleCategoryClick}
            shops={shops}
            categories={firstCategories}
            categoriesLoading={categoriesLoading}
          />
        </Box>
        <Box ml={4} flex={1} minWidth={0}>
          {isShopSelected ? (
            <Box>
              <Box mb={3}>
                <Search />
              </Box>
              {subCategories.length > 0 && (
                <Box mb={4}>
                  <CatalogCategories
                    categories={subCategories}
                    onClick={handleSubCategoryClick}
                  />
                </Box>
              )}
              <Box mb={4}>
                <Box mb={5}>
                  <ProductsList products={products} />
                </Box>
                {paginationPages > 0 && (
                  <Pagination
                    page={page}
                    count={paginationPages}
                    color="secondary"
                    onChange={handleChangePagination}
                  />
                )}
              </Box>
            </Box>
          ) : (
            <ShopsList onClick={handleShopClick} items={shops} />
          )}
        </Box>
      </Box>
    </>
  );
};

export const Catalog: React.FC = (props) => {
  return (
    <Provider value={[]}>
      <CatalogPage {...props} />
    </Provider>
  );
};
