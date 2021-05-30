import React from "react";
import { Tabs, Tab, Box } from "@material-ui/core";

interface IMenu {
  activeIndex: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

export const Menu: React.FC<IMenu> = ({ activeIndex, onChange }) => {
  return (
    <Tabs
      value={activeIndex}
      indicatorColor="primary"
      textColor="primary"
      onChange={onChange}
    >
      <Tab label="Каталог" />
      <Tab label="Корзина" />
      <Tab label="Заказы" />
      <Tab label="Доставки" />
    </Tabs>
  );
};
