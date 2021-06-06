import React from "react";
import Typography from "@material-ui/core/Typography";
import MaterialBreadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

interface IBreadcrumbsProps {
  items: { label: string; link: string }[];
}

export const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ items }) => {
  const lastItem = items[items.length - 1];

  return (
    <MaterialBreadcrumbs aria-label="breadcrumb">
      {items.slice(0, items.length - 1).map(({ label, link }) => (
        <Link key={label} color="inherit" href={link} onClick={handleClick}>
          {label}
        </Link>
      ))}
      <Typography color="textPrimary">{lastItem.label}</Typography>
    </MaterialBreadcrumbs>
  );
};
