import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    avatar: {
      width: 40,
      height: 40,
    },
    fab: {
      boxShadow: "none",
    },
  };
});
