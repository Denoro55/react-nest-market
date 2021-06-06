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
  onCategoryClick: (shop: IShopItem, category: ICategoryItem) => void;
  activeShop?: string;
  activeCategory?: string;
}

export const ShopsSidebar: React.FC<ISidebarProps> = ({
  shops,
  categories,
  categoriesLoading,
  onClick,
  onCategoryClick,
  activeShop,
  activeCategory,
}) => {
  const classes = useStyles();

  const renderSubItems = (shop: IShopItem) => {
    if (categoriesLoading) {
      return (
        <Box mb={2} mt={2}>
          <LinearProgress />
        </Box>
      );
    }

    return (
      <Box mb={2} mt={2}>
        {categories.map((category) => {
          const isActive = category.name === activeCategory;
          const clazz = cn({ [classes.activeItem]: isActive });

          return (
            <Box
              onClick={() => onCategoryClick(shop, category)}
              key={category.id}
              mb={1}
            >
              <Paper className={clazz} classes={{ root: classes.subItem }} elevation={1}>
                {category.label}
              </Paper>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Box>
      {shops.map((shop) => {
        const isActive = shop.name === activeShop;
        const clazz = cn({ [classes.activeItem]: isActive });
        const elevation = isActive ? 3 : 1;

        return (
          <Box key={shop.id}>
            <Box onClick={() => onClick(shop)} mb={2}>
              <Paper
                className={clazz}
                classes={{ root: classes.root }}
                elevation={elevation}
              >
                {shop.label}
              </Paper>
            </Box>
            {isActive && renderSubItems(shop)}
          </Box>
        );
      })}
    </Box>
  );
};
