import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { IShopItem, ICategoryItem } from "api/types/catalog";
import { getShops, getCategories, getProducts } from "api/catalog";
import { useSafeAsync } from "hooks";
import { useHistory, useLocation } from "react-router-dom";
import { routeNames } from "constants/routes";
import { getRoutePath, stringifyQuery } from "helpers";

import { IProductItem } from "./../../api/types/catalog";

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

export const useGetProducts = (shop: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const safeAsync = useSafeAsync();

  const [products, setProducts] = useState<IProductItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setProducts([]);

    if (shop) {
      setLoading(true);

      safeAsync<IProductItem[]>(getProducts(shop))
        .then((response) => {
          setProducts(response.data);
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

  return { products, loading };
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
