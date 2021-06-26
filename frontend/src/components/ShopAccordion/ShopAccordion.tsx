import React from "react";
import {
  Box,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ProductInfo } from "components";
import { IBasketProduct } from "store/user/types";
import { IProductItem } from "api/types/catalog";

import { toPrice, pluralize } from "helpers";
import { IShopItem } from "api/types/catalog";

interface IShopAccordion {
  shop: IShopItem;
  products: Record<string, IBasketProduct>;
  onDelete: (product: IProductItem) => void;
  onChange: (value: string, product: IProductItem) => void;
}

export const ShopAccordion: React.FC<IShopAccordion> = ({
  shop,
  products,
  onDelete,
  onChange,
}) => {
  const productsCount = Object.keys(products).length;
  const productsTotalCost = Object.entries(products).reduce(
    (acc, [key, value]) => {
      return acc + (value.price * value.count);
    },
    0
  );

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box width="100%" display="flex" alignItems="center">
          <Box>
            <Typography variant="h6">{shop.label}</Typography>
          </Box>
          <Box ml="auto">
            {productsCount}{" "}
            {pluralize(productsCount, "позиция", "позиции", "позиций")} на сумму
          </Box>
          <Box ml={5} mr={2}>
            {toPrice(productsTotalCost)}
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box width="100%">
          <Box mt={-1} pb={2}>
            <Divider />
          </Box>
          <Box>
            {Object.entries(products).map(([key, product]) => {
              return (
                <Box key={key} mb={2}>
                  <Box pb={2}>
                    <ProductInfo
                      product={product}
                      onDelete={onDelete}
                      onChange={onChange}
                    />
                  </Box>
                  <Divider />
                </Box>
              );
            })}
          </Box>
          <Box py={1} display="flex" alignItems="center">
            <Box>Всего позиций: {productsCount}</Box>
            <Box ml={3}>
              <Button variant="contained" color="primary">
                Оформить заказ
              </Button>
            </Box>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
