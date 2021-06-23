import React from "react";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import { useUserStore } from "store/hooks";
import { toPrice } from "helpers";
import { IProductItem, IShopItem } from "api/types/catalog";
import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";
import { addProduct } from "store/user";

import { useStyles } from "./ProductsList.styles";

interface IProductsListProps {
  shop: IShopItem | undefined;
  products: IProductItem[];
}

export const ProductsList: React.FC<IProductsListProps> = ({
  products,
  shop,
}) => {
  const dispatch = useDispatch();
  const user = useUserStore();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleAddToBasket = (
    shop: IShopItem | undefined,
    product: IProductItem
  ) => {
    const selectedDepartment = user.selectedDepartment;

    if (!shop || !selectedDepartment) return;

    dispatch(addProduct({ shop, product, department: selectedDepartment }));
    enqueueSnackbar("Товар добавлен в корзину", {
      variant: "success",
    });
  };

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} item xs={4}>
          <Paper className={classes.paper}>
            <Box className={classes.imageWrapper}>
              <img src={product.image} alt="" />
            </Box>
            <Box mb={2} className={classes.name}>
              {product.name}
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">{toPrice(product.price)}</Typography>
              <Button
                onClick={() => handleAddToBasket(shop, product)}
                variant="contained"
                color="primary"
              >
                В корзину
              </Button>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
