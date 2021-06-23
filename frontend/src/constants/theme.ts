import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        ".MuiAlert-root .MuiAlert-message": {
          paddingTop: 9,
        },

        '.MuiAccordionSummary-root.Mui-expanded': {
          minHeight: 48,
        },

        '.MuiAccordionSummary-content.Mui-expanded': {
          margin: '12px 0',
        }
      },
    },
  },
});
