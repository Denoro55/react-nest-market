import React from "react";
import { Tabs, Tab, Box, Chip } from "@material-ui/core";

import { routeNames } from "constants/routes";

interface IMenu {
  activeIndex: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  tabs: { id: routeNames; label: string }[];
  counters: Record<routeNames, number>;
}

export const Menu: React.FC<IMenu> = ({
  activeIndex,
  onChange,
  tabs,
  counters,
}) => {
  return (
    <Tabs
      value={activeIndex}
      indicatorColor="primary"
      textColor="primary"
      onChange={onChange}
    >
      {tabs.map(({ id, label }) => {
        const count = counters[id];

        if (count > 0) {
          return (
            <Tab
              key={id}
              label={
                <Box display="flex" alignItems="center">
                  <Box>{label}</Box>
                  <Box ml={1.25}>
                    <Chip size="small" label={count} />
                  </Box>
                </Box>
              }
            />
          );
        }

        return <Tab key={id} label={label} />;
      })}
    </Tabs>
  );
};
