import { createContext, useContext as useReactContext } from "react";

const CatalogContext = createContext<any[]>([]);

export const Provider = CatalogContext.Provider;
export const useContext = () => useReactContext(CatalogContext);
