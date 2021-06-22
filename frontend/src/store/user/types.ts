import { IProductItem, IShopItem } from "api/types/catalog";
import { IDepartment } from "api/types/user";

export type BasketType = Record<
  string,
  {
    department: IDepartment;
    shops: Record<
      string,
      {
        shop: IShopItem;
        products: Record<string, IBasketProduct>;
      }
    >;
  }
>;

export interface IInitialState {
  departments: IDepartment[];
  selectedDepartment: IDepartment | null;
  basket: BasketType;
}

export interface IBasketProduct extends IProductItem {
  count: number;
}
