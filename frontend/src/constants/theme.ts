import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        ".MuiAlert-root .MuiAlert-message": {
          paddingTop: 9,
        },
      },
    },
  },
});
