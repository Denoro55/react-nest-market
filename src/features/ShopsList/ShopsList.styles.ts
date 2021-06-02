import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: "pointer",
      height: 200,
      borderRadius: theme.shape.borderRadius,
      overflow: "hidden",
    },
    shop: {
      position: "relative",
      height: "100%",
      backgroundSize: "100% auto",
    },
    shopBottom: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: fade(theme.palette.common.white, 0.9),
      padding: theme.spacing(1.5, 2),
    },
  })
);
