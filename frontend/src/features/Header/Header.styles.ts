import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => {
  console.log(theme);

  return {
    header: {
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
  }
});
