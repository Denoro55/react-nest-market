import { IProductItem, IShopItem } from "api/types/catalog";
import { IDepartment } from "api/types/user";

export type BasketShopType = {
  shop: IShopItem;
  products: Record<string, IBasketProduct>;
};

export type BasketDepartmentType = {
  department: IDepartment;
  shops: Record<string, BasketShopType>;
};

export type BasketType = Record<string, BasketDepartmentType>;

export interface IInitialState {
  departments: IDepartment[];
  selectedDepartment: IDepartment | null;
  basket: BasketType;
}

export interface IBasketProduct extends IProductItem {
  count: number;
}
