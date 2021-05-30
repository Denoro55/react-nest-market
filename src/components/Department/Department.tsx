import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Chip } from "@material-ui/core";

import { useStyles } from "./Department.styles";

export const Department: React.FC = () => {
  const classes = useStyles();

  return (
    <Chip
      icon={<LocationOnIcon />}
      label="Подразделение: Московское отделение № 2954"
      onClick={() => undefined}
      classes={{
        root: classes.root,
      }}
    />
  );
};
