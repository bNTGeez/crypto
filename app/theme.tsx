import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#2d2d2d",
    },
    secondary: {
      main: "#FFFFF0",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
};

const theme = createTheme(themeOptions);

export default theme;
