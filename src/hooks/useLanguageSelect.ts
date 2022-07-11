import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export const useLanguageSelect = () => {
  const [cookie, setCookie] = useCookies(["NEXT_LOCALE"]);
  const router = useRouter();

  const selectLanguageHandler = (locale: string | undefined) => {
    if (!locale) return;

    router.push(router.pathname, router.pathname, { locale });

    if (cookie.NEXT_LOCALE !== locale) {
      setCookie("NEXT_LOCALE", locale, { path: "/" });
      document.querySelector("html")?.setAttribute("dir", "ltr");
    }
  };

  return {
    selectLanguage: selectLanguageHandler,
    locale: router.locale,
  };
};
