import React, { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { routeNames } from "constants/routes";
import { getRoutePath, getQuery } from "helpers";
import { Search } from "components";
import {
  ShopsSidebar,
  CatalogCategories,
  ShopsList,
  ProductsList,
} from "features";
import { ICategoryItem, IShopItem } from "api/types/catalog";

import { Provider } from "./context";
import { useGetShops, useGetCategories, useGetProducts } from "./hooks";

export const CatalogPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const { shops, loading } = useGetShops();

  const query = getQuery(location.search);
  const { shop: selectedShop, category: selectedCategory } = query;
  const isShopSelected = !!selectedShop;

  const catalogPath = getRoutePath(routeNames.catalog) as string;

  const { categories, loading: categoriesLoading } =
    useGetCategories(selectedShop);

  const { products, loading: productsLoading } = useGetProducts(selectedShop);

  const handleShopClick = useCallback(
    (shop) => {
      if (isShopSelected && categoriesLoading) return;

      history.push({
        pathname: catalogPath,
        search: `?shop=${shop.name}`,
      });
    },
    [isShopSelected, categoriesLoading]
  );

  const handleCategoryClick = useCallback(
    (shop: IShopItem, category: ICategoryItem) => {
      history.push({
        pathname: catalogPath,
        search: `?shop=${shop.name}&category=${category.name}`,
      });
    },
    []
  );

  const handleChildCategoryClick = useCallback(
    (category: ICategoryItem) => {
      const categoryParent = categories.find((c) => {
        return c.name === category.parentName;
      });

      if (categoryParent) {
        history.push({
          pathname: catalogPath,
          search: `?shop=${selectedShop}&category=${categoryParent.name}`,
        });
      }
    },
    [categories]
  );

  const firstCategories = categories.filter((c) => !c.parentName);
  const childCategories = categories.filter((c) => {
    if (!selectedCategory) return c.parentName;
    return c.parentName && c.parentName === selectedCategory;
  });

  if (loading) return <LinearProgress />;

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
              <Box mb={2}>
                <Search />
              </Box>
              <Box mb={4}>
                <CatalogCategories
                  categories={childCategories}
                  onClick={handleChildCategoryClick}
                />
              </Box>
              <ProductsList products={products} />
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
