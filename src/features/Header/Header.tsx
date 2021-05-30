import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Menu, Department } from "components";
import { getRoutePath, getRouteIndex } from "helpers";
import { routeNames } from "constants/routes";

import { useStyles } from "./Header.styles";

const MAPPING_MENU_INDEXES: Record<number, string> = {
  [getRouteIndex(routeNames.catalog)]: getRoutePath(
    routeNames.catalog
  ) as string,
  [getRouteIndex(routeNames.basket)]: getRoutePath(routeNames.basket) as string,
  [getRouteIndex(routeNames.orders)]: getRoutePath(routeNames.orders) as string,
  [getRouteIndex(routeNames.delivery)]: getRoutePath(
    routeNames.delivery
  ) as string,
};

export const Header: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [menuIndex, setMenuIndex] = React.useState(0);

  useEffect(() => {
    const routeName = history.location.pathname.split("/")[1];
    setMenuIndex(getRouteIndex(routeName));
  }, []);

  const handleChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    setMenuIndex(newIndex);
    history.push(MAPPING_MENU_INDEXES[newIndex]);
  };

  return (
    <Box
      className={classes.header}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Menu activeIndex={menuIndex} onChange={handleChange} />
      <Department />
    </Box>
  );
};
