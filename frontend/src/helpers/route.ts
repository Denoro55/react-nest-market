import { routes } from "constants/routes";

export const getRoute = (name: string) =>
  routes.find((route) => route.name === name);

export const getRoutePath = (name: string) => getRoute(name)?.path;
