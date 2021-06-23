import React from "react";
import { Box } from "@material-ui/core";
import { ShopAccordion, DepartmentInfo } from "components";

import { useUserStore } from "store/hooks";

export const Basket: React.FC = () => {
  const user = useUserStore();

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
                <ShopAccordion key={key} products={shop.products} shop={shop.shop} />
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
