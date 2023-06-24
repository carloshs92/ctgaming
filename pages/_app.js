import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/muiTheme";
import "./styles.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Static palmsbet" />
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes, viewport-fit=cover"
        />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta
          name="description"
          content="SPA Prototype of a static website using next.js"
        />
        <meta name="apple-mobile-web-app-title" content="Palms Next" />
        <meta name="application-name" content="Palms Next" />
        <meta name="theme-color" content="#1c212b" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
