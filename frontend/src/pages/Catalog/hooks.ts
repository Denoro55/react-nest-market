import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { IShopItem, ICategoryItem } from "api/types/catalog";
import { getShops, getCategories, getProducts } from "api/catalog";
import { useSafeAsync } from "hooks";
import { useHistory } from "react-router-dom";
import { routeNames } from "constants/routes";
import { getRoutePath, stringifyQuery } from "helpers";

import { IProductResponse } from "./../../api/types/catalog";

const INITIAL_PRODUCTS_DATA: IProductResponse = {
  products: [],
  total: 0,
};

export const useGetShops = () => {
  const { enqueueSnackbar } = useSnackbar();
  const safeAsync = useSafeAsync();

  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shops, setShops] = useState<IShopItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setHasError(false);
    setIsLoaded(false);

    safeAsync<IShopItem[]>(getShops())
      .then((response) => {
        setShops(response.data);
        setLoading(false);
        setIsLoaded(true);
      })
      .catch((err) => {
        enqueueSnackbar(err.message, {
          variant: "error",
        });
        setHasError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { shops, loading, hasError, isLoaded };
};

export const useGetCategories = (shop: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const safeAsync = useSafeAsync();

  const [categories, setCategories] = useState<ICategoryItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCategories([]);

    if (shop) {
      setLoading(true);

      safeAsync<ICategoryItem[]>(getCategories(shop))
        .then((response) => {
          setCategories(response.data);
          setLoading(false);
        })
        .catch((err) => {
          enqueueSnackbar(err.message, {
            variant: "error",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [shop]);

  return { categories, loading };
};

export const useGetProducts = (
  shop: string,
  page: number,
  category: string,
  subCategory: string
) => {
  const { enqueueSnackbar } = useSnackbar();
  const safeAsync = useSafeAsync();

  const [response, setResponse] = useState<IProductResponse>(
    INITIAL_PRODUCTS_DATA
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setResponse(INITIAL_PRODUCTS_DATA);

    if (shop) {
      setLoading(true);

      safeAsync<IProductResponse>(
        getProducts(shop, page, category, subCategory)
      )
        .then((response) => {
          setResponse(response.data);
          setLoading(false);
        })
        .catch((err) => {
          enqueueSnackbar(err.message, {
            variant: "error",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [shop, page, category, subCategory]);

  const { products, total } = response;

  return { products, loading, total };
};

export const useGetQuery = (
  shop: string,
  category: string,
  subCategory: string,
  page: number
) => {
  const history = useHistory();

  const catalogPath = getRoutePath(routeNames.catalog) as string;
  const currentPage = shop ? page : null;

  useEffect(() => {
    history.push({
      pathname: catalogPath,
      search: stringifyQuery({
        shop,
        category,
        subCategory,
        page: currentPage,
      }),
    });
  }, [shop, category, subCategory, page]);
};
