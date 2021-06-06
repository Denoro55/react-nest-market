import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2),
      height: 250,
    },
    imageWrapper: {
      display: "flex",
      height: 150,

      "& img": {
        maxHeight: "100%",
        margin: "auto",
      },
    },
    name: {
      marginTop: "auto",
    },
  })
);
