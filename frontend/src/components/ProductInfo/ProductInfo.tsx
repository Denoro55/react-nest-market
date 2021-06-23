import React from "react";
import { Box, Avatar, Typography, TextField, Fab } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";

import { toPrice } from "helpers";
import { IBasketProduct } from "store/user/types";

import { useStyles } from "./ProductInfo.styles";

interface IProductInfo {
  product: IBasketProduct;
}

export const ProductInfo: React.FC<IProductInfo> = ({ product }) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Box>
        <Avatar
          classes={{ circle: classes.avatar }}
          alt={product.name}
          src={product.image}
        />
      </Box>
      <Box ml={3}>
        <Typography variant="body2">{product.name}</Typography>
      </Box>
      <Box width={96} ml="auto">
        <TextField
          defaultValue={product.count}
          size="small"
          id="outlined-basic"
          variant="outlined"
        />
      </Box>
      <Box width={150} textAlign="right">
        <Typography variant="subtitle2">{toPrice(product.price)}</Typography>
      </Box>
      <Box ml={4} display="flex" alignItems="center">
        <Fab classes={{ root: classes.fab }} disableRipple size="small">
          <DeleteOutline />
        </Fab>
      </Box>
    </Box>
  );
};
