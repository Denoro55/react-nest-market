import { get } from "api/instance/request";
import { IShopItem, IProductItem } from "./types/catalog";

export const getShops = () => get<IShopItem[]>("catalog/shops");

export const getCategories = (shop: string) =>
  get<IShopItem[]>("catalog/categories", {
    params: {
      shop,
    },
  });

export const getProducts = (shop: string) =>
  get<IProductItem[]>("catalog/products", {
    params: {
      shop,
    },
  });
