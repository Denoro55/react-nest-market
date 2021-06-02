import { get } from "api/instance/request";
import { IShopItem } from "./types/catalog";

export const getShops = () => get<IShopItem[]>("shops");
