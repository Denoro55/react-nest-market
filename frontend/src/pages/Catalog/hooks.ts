import { IProductItem } from './../../api/types/catalog';
import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { IShopItem, ICategoryItem } from "api/types/catalog";
import { getShops, getCategories, getProducts } from "api/catalog";
import { useSafeAsync } from "hooks";

export const useGetShops = () => {
  const { enqueueSnackbar } = useSnackbar();
  const safeAsync = useSafeAsync();

  const [shops, setShops] = useState<IShopItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    safeAsync<IShopItem[]>(getShops())
      .then((response) => {
        setShops(response.data);
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
  }, []);

  return { shops, loading };
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