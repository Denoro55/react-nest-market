import { useState, useEffect } from "react";
import { MOCK_SHOPS } from "./mocks";
import { IShopItem } from "./types";

export const useGetShops = () => {
  const [shops, setShops] = useState<IShopItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShops(MOCK_SHOPS);
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return { shops, loading };
};
