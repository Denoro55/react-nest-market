import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Menu, Department } from "components";
import { getRoutePath } from "helpers";
import { routeNames } from "constants/routes";
import { useUserStore, useTotalProducts } from "store/hooks";
import { setSelectedDepartment } from "store/user";
import { IDepartment } from "api/types/user";

import { HeaderModal } from "./HeaderModal";
import { useStyles } from "./Header.styles";

const ROUTE_INDEX: Record<string, number> = {
  [routeNames.catalog]: 0,
  [routeNames.basket]: 1,
  [routeNames.orders]: 2,
  [routeNames.delivery]: 3,
};

const MAPPING_MENU_INDEXES: Record<number, string> = {
  [ROUTE_INDEX[routeNames.catalog]]: getRoutePath(routeNames.catalog) as string,
  [ROUTE_INDEX[routeNames.basket]]: getRoutePath(routeNames.basket) as string,
  [ROUTE_INDEX[routeNames.orders]]: getRoutePath(routeNames.orders) as string,
  [ROUTE_INDEX[routeNames.delivery]]: getRoutePath(
    routeNames.delivery
  ) as string,
};

const TABS = [
  { id: routeNames.catalog, label: "Товары" },
  { id: routeNames.basket, label: "Корзина" },
  { id: routeNames.orders, label: "Заказы" },
  { id: routeNames.delivery, label: "Доставки" }
];

export const Header: React.FC = () => {
  const user = useUserStore();
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const totalProducts = useTotalProducts();

  const [menuIndex, setMenuIndex] = useState(0);
  const [isModalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    const routeName = history.location.pathname.split("/")[1];
    setMenuIndex(ROUTE_INDEX[routeName]);
  }, []);

  const handleChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    setMenuIndex(newIndex);
    history.push(MAPPING_MENU_INDEXES[newIndex]);
  };

  const handleModalToggle = () => {
    setModalOpened((p) => !p);
  };

  const handleSubmit = (selectedDepartment: IDepartment | null) => {
    handleModalToggle();
    dispatch(setSelectedDepartment(selectedDepartment));
  };

  const counters = {
    [routeNames.catalog]: 0,
    [routeNames.basket]: totalProducts,
    [routeNames.orders]: 0,
    [routeNames.delivery]: 0,
  }

  return (
    <>
      <Box
        className={classes.header}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Menu
          activeIndex={menuIndex}
          tabs={TABS}
          onChange={handleChange}
          counters={counters}
        />
        <Department
          label={user.selectedDepartment?.title || "Подразделение не выбрано"}
          onClick={handleModalToggle}
        />
      </Box>
      <HeaderModal
        open={isModalOpened}
        onClose={handleModalToggle}
        onSubmit={handleSubmit}
      />
    </>
  );
};
