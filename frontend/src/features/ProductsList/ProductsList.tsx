import React from "react";
import { IProductItem } from "api/types/catalog";
import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";

import { useStyles } from "./ProductsList.styles";

interface IProductsListProps {
  products: IProductItem[];
}

export const ProductsList: React.FC<IProductsListProps> = ({ products }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Box className={classes.imageWrapper}>
              <img src={product.image} alt="" />
            </Box>
            <Box mb={2} className={classes.name}>
              {product.name}
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">
                {Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "rub",
                }).format(product.price)}
              </Typography>
              <Button variant="contained" color="primary">
                В корзину
              </Button>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
