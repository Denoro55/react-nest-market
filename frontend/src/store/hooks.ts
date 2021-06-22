import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const useUserStore = () => {
  const user = useSelector((state: RootState) => state.user);

  return user;
};

export const useTotalProducts = () => {
  const user = useUserStore();

  const count = useMemo(() => {
    let result = 0;

    Object.entries(user.basket).forEach(([key, department]) => {
      Object.entries(department.shops).forEach(([key, shop]) => {
        Object.entries(shop.products).forEach(([key, product]) => {
          result += product.count;
        });
      });
    });

    return result;
  }, [user.basket]);

  return count;
};
