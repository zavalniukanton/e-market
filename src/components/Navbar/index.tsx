import { useIntl } from "../../hooks/useIntl";
import LanguageSelect from "./LanguageSelect";

const Navbar = () => {
  const { intl } = useIntl();

  return (
    <header style={{ height: "80px", width: "100%" }}>
      <p>{intl("app.banner")}</p>
      <nav>{intl("app.header")}</nav>
      <LanguageSelect />
    </header>
  );
};

export default Navbar;
