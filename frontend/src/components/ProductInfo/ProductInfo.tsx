import React from "react";
import { Box, Avatar, Typography, TextField, Fab } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";

import { toPrice } from "helpers";
import { IBasketProduct } from "store/user/types";
import { IProductItem } from "api/types/catalog";

import { useStyles } from "./ProductInfo.styles";

interface IProductInfo {
  product: IBasketProduct;
  onDelete: (product: IProductItem) => void;
  onChange: (value: string, product: IProductItem) => void;
}

export const ProductInfo: React.FC<IProductInfo> = ({
  product,
  onDelete,
  onChange,
}) => {
  const classes = useStyles();

  const { count, max } = product;

  const renderPrice = () => {
    return (
      <Box>
        <Box>
          <Typography variant="subtitle1">
            {toPrice(product.price * count)}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">{toPrice(product.price)}</Typography>
        </Box>
      </Box>
    );
  };

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
      <Box ml="auto">
        {count >= max && (
          <Typography color="secondary" variant="body2">
            Максимум
          </Typography>
        )}
      </Box>
      <Box width={96} ml={3}>
        <TextField
          type="number"
          InputProps={{
            inputProps: {
              min: 0,
              max,
            },
          }}
          value={count}
          size="small"
          id="outlined-basic"
          variant="outlined"
          onChange={(e) => onChange(e.target.value, product)}
        />
      </Box>
      <Box width={150} textAlign="right">
        {renderPrice()}
      </Box>
      <Box ml={4} display="flex" alignItems="center">
        <Fab
          onClick={() => onDelete(product)}
          classes={{ root: classes.fab }}
          disableRipple
          size="small"
        >
          <DeleteOutline />
        </Fab>
      </Box>
    </Box>
  );
};
