import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1b2330",
    },
    secondary: {
      main: "rgb(255, 91, 97)",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "orange",
        },
      },
      defaultProps: {
        // The props to change the default for.
        disableripple: "true", // No more ripple!
      },
    },
  },
});

export default theme;
