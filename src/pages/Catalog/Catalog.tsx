import React, { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { routeNames } from "constants/routes";
import { getRoutePath, getQuery } from "helpers";
import { Search } from "components";

import { Provider } from "./context";
import { useGetShops } from "./hooks";
import { Sidebar, ShopList, Categories } from "./components";

export const CatalogPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const { shops, loading } = useGetShops();

  const handleShopClick = useCallback((shop) => {
    const catalogPath = getRoutePath(routeNames.catalog) as string;

    history.push({
      pathname: catalogPath,
      search: `?shop=${shop.id}`,
    });
  }, []);

  const selectedShop = getQuery(location.search).shop;
  const isShopSelected = !!selectedShop;

  if (loading) return <LinearProgress />;

  return (
    <>
      <Box display="flex">
        <Box width={200}>
          <Sidebar
            activeItem={selectedShop}
            onClick={handleShopClick}
            items={shops}
          />
        </Box>
        <Box ml={4} flex={1} minWidth={0}>
          {isShopSelected ? (
            <Box>
              <Search />
              <Categories />
            </Box>
          ) : (
            <ShopList onClick={handleShopClick} items={shops} />
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
