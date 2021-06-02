import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { IShopItem } from "api/types/catalog";
import { getShops } from "api/catalog";
import { useSafeAsync } from "hooks";

export const useGetShops = () => {
  const { enqueueSnackbar } = useSnackbar();
  const safeAsync = useSafeAsync();

  const [shops, setShops] = useState<IShopItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
