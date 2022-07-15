import { useRouter } from "next/router";
import { IntlProvider as ReactIntlProvider } from "react-intl";

import { IntlProviderProps } from "../models/models";

const languages = {
  en: require("../locale/en.json"),
  ua: require("../locale/ua.json"),
  ru: require("../locale/ru.json"),
};

export function IntlProvider({ children }: IntlProviderProps) {
  const { locale = "ua", defaultLocale } = useRouter();

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
