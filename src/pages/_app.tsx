import "../styles/globals.css";

import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import { IntlProvider } from "../context/intlContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <IntlProvider>
        <Component {...pageProps} />
      </IntlProvider>
    </NextUIProvider>
  );
}

export default MyApp;
