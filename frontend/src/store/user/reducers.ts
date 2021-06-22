import { PayloadAction } from "@reduxjs/toolkit";

import { IProductItem, IShopItem } from "api/types/catalog";
import { IUser, IDepartment } from "api/types/user";

import { IInitialState, IBasketProduct } from "./types";

export default {
  setUser(state: IInitialState, action: PayloadAction<IUser>) {
    state.departments = action.payload.departments;
    state.selectedDepartment = state.departments[0];
  },
  setSelectedDepartment(
    state: IInitialState,
    action: PayloadAction<IDepartment | null>
  ) {
    state.selectedDepartment = action.payload;
  },
  addProduct(
    state: IInitialState,
    action: PayloadAction<{
      shop: IShopItem;
      product: IProductItem;
      department: IDepartment;
    }>
  ) {
    const { shop, product, department } = action.payload;

    const basketProduct: IBasketProduct = {
      ...product,
      count: 1,
    }

    if (!state.basket[department.id]) {
      state.basket[department.id] = {
        department,
        shops: {
          [shop.id]: {
            shop,
            products: {
              [product.id]: basketProduct,
            },
          },
        },
      };
    } else if (!state.basket[department.id].shops[shop.id]) {
      state.basket[department.id].shops[shop.id] = {
        shop,
        products: {
          [product.id]: basketProduct,
        },
      };
    } else if (!state.basket[department.id].shops[shop.id].products[product.id]) {
      state.basket[department.id].shops[shop.id].products[product.id] = basketProduct;
    } else {
      // увеличиваем кол-во товара
      const currentProduct = state.basket[department.id].shops[shop.id].products[product.id];
      currentProduct.count += 1;
    }
  },
};
