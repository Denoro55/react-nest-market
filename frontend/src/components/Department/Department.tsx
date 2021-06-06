import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Chip } from "@material-ui/core";

import { useStyles } from "./Department.styles";

interface IDepartmentProps {
  label: string;
  onClick: () => void;
}

export const Department: React.FC<IDepartmentProps> = ({ label, onClick }) => {
  const classes = useStyles();

  return (
    <Chip
      icon={<LocationOnIcon />}
      label={label}
      onClick={onClick}
      classes={{
        root: classes.root,
      }}
    />
  );
};
