import React from "react";
import { Box, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import { useStyles } from "./ShopList.styles";
import { IShopItem } from "../../types";

interface IShopListProps {
  items: IShopItem[];
  onClick: (shop: IShopItem) => void;
}

export const ShopList: React.FC<IShopListProps> = ({ items, onClick }) => {
  const classes = useStyles();

  return (
    <Box ml={-4} display="flex" flexWrap="wrap">
      {items.map((shop) => (
        <Box pl={4} width="50%" key={shop.id} mb={4}>
          <Paper classes={{ root: classes.root }} elevation={1}>
            <Box
              onClick={() => onClick(shop)}
              className={classes.shop}
              style={{
                backgroundImage: `url(${shop.image})`,
              }}
            >
              <Box className={classes.shopBottom}>
                <Typography variant="subtitle2" component="div">
                  {shop.label}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};
