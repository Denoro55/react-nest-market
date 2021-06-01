import React from "react";
import { Box } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import cn from 'classnames';

import { useStyles } from "./Sidebar.styles";
import { IShopItem } from "../../types";

interface ISidebarProps {
  items: IShopItem[];
  onClick: (shop: IShopItem) => void;
  activeItem?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ items, onClick, activeItem }) => {
  const classes = useStyles();

  return (
    <Box>
      {items.map(shop => {
        const isActive = shop.id === activeItem;
        const clazz = cn({[classes.activeItem]: isActive });
        const elevation = isActive ? 3 : 1;

        return (
          (
            <Box onClick={() => onClick(shop)} key={shop.id} mb={2}>
              <Paper className={clazz} classes={{ root: classes.root }} elevation={elevation}>
                {shop.label}
              </Paper>
            </Box>
          )
        )
      })}
    </Box>
  );
};
