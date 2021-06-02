import { get } from "api/instance/request";
import { IShopItem } from "./types/catalog";

export const getShops = () => get<IShopItem[]>("shops");

export const getCategories = (shop: string) =>
  get<IShopItem[]>("categories", {
    params: {
      shop
    },
  });
