import React from "react";
import { Box, Typography, LinearProgress } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import cn from "classnames";
import { IShopItem, ICategoryItem } from "api/types/catalog";

import { useStyles } from "./ShopsSidebar.styles";

interface ISidebarProps {
  shops: IShopItem[];
  categories: ICategoryItem[];
  categoriesLoading: boolean;
  onClick: (shop: IShopItem) => void;
  activeItem?: string;
}

export const ShopsSidebar: React.FC<ISidebarProps> = ({
  shops,
  categories,
  categoriesLoading,
  onClick,
  activeItem,
}) => {
  const classes = useStyles();

  const renderSubItems = () => {
    if (categoriesLoading) {
      return (
        <Box mt={1}>
          <LinearProgress />
        </Box>
      );
    }

    return categories.map((category) => (
      <Box key={category.id} mt={1}>
        <Paper classes={{ root: classes.subItem }} elevation={1}>
          {category.label}
        </Paper>
      </Box>
    ));
  };

  return (
    <Box>
      {shops.map((shop) => {
        const isActive = shop.id === activeItem;
        const clazz = cn({ [classes.activeItem]: isActive });
        const elevation = isActive ? 3 : 1;

        return (
          <Box onClick={() => onClick(shop)} key={shop.id} mb={2}>
            <Paper
              className={clazz}
              classes={{ root: classes.root }}
              elevation={elevation}
            >
              <Typography variant="subtitle2">{shop.label}</Typography>
            </Paper>
            {isActive && renderSubItems()}
          </Box>
        );
      })}
    </Box>
  );
};
