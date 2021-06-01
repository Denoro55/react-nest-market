import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1.25, 1.5),
      cursor: "pointer",
    },
    activeItem: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);
