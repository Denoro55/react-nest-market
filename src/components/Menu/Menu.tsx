import React from "react";
import { Tabs, Tab, Box } from "@material-ui/core";

interface IMenu {
  activeIndex: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  tabs: string[];
}

export const Menu: React.FC<IMenu> = ({ activeIndex, onChange, tabs }) => {
  return (
    <Tabs
      value={activeIndex}
      indicatorColor="primary"
      textColor="primary"
      onChange={onChange}
    >
      {tabs.map((label: string) => (
        <Tab key={label} label={label} />
      ))}
    </Tabs>
  );
};
