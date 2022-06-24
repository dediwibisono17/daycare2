import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import "../styles/globals.scss";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
