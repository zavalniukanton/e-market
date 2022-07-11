import "../styles/globals.css";

import type { AppProps } from "next/app";

import { IntlProvider } from "../context/intlContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
