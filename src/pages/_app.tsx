import "../styles/globals.css";

import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { IntlProvider } from "../context/intlContext";
import { darkTheme, lightTheme } from "../styles/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <IntlProvider>
          <Component {...pageProps} />
        </IntlProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
