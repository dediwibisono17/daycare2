import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red, teal } from "@mui/material/colors";

// import Baloo from "../styles/Baloo.woff2";

//buat override si material
const base = createTheme({
  palette: {
    primary: {
      main: "#ff6f96", //pink
      light: "#00A3FF",
      dark: "#000000",
    },
    secondary: {
      main: "#32355d", //biru
    },
    error: {
      main: red[400],
    },
    info: {
      main: teal[400],
    },
  },
  typography: {
    fontFamily: "Baloo 2, Arial",
    fontSize: 16,
  },
  //   components: {
  //     MuiCssBaseline: {
  //       styleOverrides: `
  //             @font-face {
  //               font-family: 'Baloo';
  //               font-style: normal;
  //               font-display: swap;
  //               font-weight: 400;
  //               src: local('Baloo'), local('Baloo'), url(${Baloo}) format('woff2');
  //             }
  //           `,
  //     },
  //   },
});

const theme = responsiveFontSizes(base);

export default theme;
