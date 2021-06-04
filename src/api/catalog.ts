import { get } from "api/instance/request";
import { IShopItem, IProductItem } from "./types/catalog";

export const getShops = () => get<IShopItem[]>("shops");

export const getCategories = (shop: string) =>
  get<IShopItem[]>("categories", {
    params: {
      shop,
    },
  });

export const getProducts = (shop: string) =>
  get<IProductItem[]>("products", {
    params: {
      shop,
    },
  });
