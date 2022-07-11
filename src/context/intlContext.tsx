import { useRouter } from "next/router";
import React from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";

const languages = {
  en: require("../locale/en.json"),
  ua: require("../locale/ua.json"),
  ru: require("../locale/ru.json"),
};

type Props = {
  children: React.ReactNode;
};

export function IntlProvider({ children }: Props) {
  const { locale = "en", defaultLocale } = useRouter();

  // @ts-ignore
  const messages = languages[locale];

  return (
    <ReactIntlProvider
      messages={messages}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      {children}
    </ReactIntlProvider>
  );
}
