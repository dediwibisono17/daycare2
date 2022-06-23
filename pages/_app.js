import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import "../styles/globals.scss";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>Daycare Indonesia - Rumah Kedua untuk Buah Hati Tercinta</title>

        <meta
          property="og:title"
          content="Daycare Indonesia - Rumah Kedua untuk Buah Hati Tercinta"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://daycare2.vercel.app/" />
        <meta
          property="og:image"
          content="https://daycare2.vercel.app/logo.png"
        />
        <meta
          property="og:description"
          content="Daycare Indonesia - Rumah Kedua untuk Buah Hati Tercinta"
        />
        <meta property="og:site_name" content="Daycare" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="200" />
        <meta property="fb:app_id" content="966242223397117" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
