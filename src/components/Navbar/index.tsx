import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

import { useIntl } from "../../hooks/useIntl";
import LanguageSelect from "./LanguageSelect";

const Navbar = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const { intl } = useIntl();

  return (
    <header style={{ width: "100%", background: "teal" }}>
      <p>{intl("app.banner")}</p>
      <nav>{intl("app.header")}</nav>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
      <LanguageSelect />
    </header>
  );
};

export default Navbar;
