import { Switch, SwitchEvent, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

const ThemeToggler = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const onToggleTheme = (e: SwitchEvent) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return <Switch checked={isDark} onChange={onToggleTheme} css={{ mr: 20 }} />;
};

export default ThemeToggler;
