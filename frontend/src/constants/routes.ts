import { Catalog, Basket, Orders, Delivery } from "pages";

export enum routeNames {
  catalog = "catalog",
  basket = "basket",
  orders = "orders",
  delivery = "delivery",
}

export const routes = [
  {
    name: routeNames.catalog,
    path: "/catalog",
    component: Catalog,
    exact: false,
  },
  {
    name: routeNames.basket,
    path: "/basket",
    component: Basket,
  },
  {
    name: routeNames.orders,
    path: "/orders",
    component: Orders,
  },
  {
    name: routeNames.delivery,
    path: "/delivery",
    component: Delivery,
  },
];
