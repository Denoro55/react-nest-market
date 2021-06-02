import React, { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { routeNames } from "constants/routes";
import { getRoutePath, getQuery } from "helpers";
import { Search } from "components";
import { ShopsSidebar, CatalogCategories, ShopsList } from "features";

import { Provider } from "./context";
import { useGetShops, useGetCategories } from "./hooks";

export const CatalogPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const { shops, loading } = useGetShops();

  const selectedShop = getQuery(location.search).shop;
  const isShopSelected = !!selectedShop;

  const { categories, loading: categoriesLoading } =
    useGetCategories(selectedShop);

  const handleShopClick = useCallback(
    (shop) => {
      if (isShopSelected && categoriesLoading) return;

      const catalogPath = getRoutePath(routeNames.catalog) as string;

      history.push({
        pathname: catalogPath,
        search: `?shop=${shop.id}`,
      });
    },
    [isShopSelected, categoriesLoading]
  );

  if (loading) return <LinearProgress />;

  return (
    <>
      <Box display="flex">
        <Box width={200}>
          <ShopsSidebar
            activeItem={selectedShop}
            onClick={handleShopClick}
            shops={shops}
            categories={categories}
            categoriesLoading={categoriesLoading}
          />
        </Box>
        <Box ml={4} flex={1} minWidth={0}>
          {isShopSelected ? (
            <Box>
              <Search />
              <CatalogCategories />
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
