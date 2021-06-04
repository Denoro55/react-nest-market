import React from "react";
import { IProductItem } from "api/types/catalog";
import { Box, Grid, Paper } from "@material-ui/core";

import { useStyles } from "./ProductsList.styles";

interface IProductsListProps {
  products: IProductItem[];
}

export const ProductsList: React.FC<IProductsListProps> = ({ products }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Box className={classes.imageWrapper}>
              <img src={product.image} alt="" />
            </Box>
            <Box className={classes.name}>{product.name}</Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
