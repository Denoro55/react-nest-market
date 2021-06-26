import React from "react";
import { Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { ShopAccordion, DepartmentInfo } from "components";

import { useUserStore } from "store/hooks";
import { deleteProduct, changeProduct } from "store/user";
import { IProductItem, IShopItem } from "api/types/catalog";
import { IDepartment } from "api/types/user";

export const Basket: React.FC = () => {
  const user = useUserStore();
  const dispatch = useDispatch();

  const handleDeleteProduct = (
    department: IDepartment,
    shop: IShopItem,
    product: IProductItem
  ) => {
    dispatch(deleteProduct({ department, shop, product }));
  };

  const handleChangeProduct = (
    department: IDepartment,
    shop: IShopItem,
    product: IProductItem,
    count: string
  ) => {
    const countNumber = +count || 0;
    const validCount = countNumber > product.max ? product.max : countNumber;

    dispatch(changeProduct({ department, shop, product, count: validCount }));
  };

  return (
    <Box>
      {Object.entries(user.basket).map(([key, value]) => {
        return (
          <Box key={key} mb={4}>
            <Box mb={4}>
              <DepartmentInfo department={value.department} />
            </Box>
            <Box>
              {Object.entries(value.shops).map(([key, shop]) => (
                <ShopAccordion
                  key={key}
                  products={shop.products}
                  shop={shop.shop}
                  onDelete={(product: IProductItem) =>
                    handleDeleteProduct(value.department, shop.shop, product)
                  }
                  onChange={(count: string, product: IProductItem) =>
                    handleChangeProduct(
                      value.department,
                      shop.shop,
                      product,
                      count
                    )
                  }
                />
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
