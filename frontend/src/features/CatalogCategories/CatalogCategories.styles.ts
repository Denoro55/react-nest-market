import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    slide: {
      height: 100,
      backgroundColor: theme.palette.grey[600],
      borderRadius: theme.shape.borderRadius,
      padding: 10,
      color: theme.palette.common.white,
      cursor: "pointer",
    },
  };
});
