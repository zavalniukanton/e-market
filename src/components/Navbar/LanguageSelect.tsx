import { BsFillCaretDownFill } from "react-icons/bs";
import ReactSelect, { components } from "react-select";

import usaFlag from "../../../public/icons/us.svg";
import uaFlag from "../../../public/icons/ua.svg";
import ruFlag from "../../../public/icons/ru.svg";

import { LOCALE_OPTIONS } from "../../constant/localeOptions";
import { useLanguageSelect } from "../../hooks/useLanguageSelect";

type OptionType = {
  value: string;
  label: string;
};

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: "120px",
    backgroundColor: "#eaeaea",
    borderRadius: "5px",
    height: "25px",
    border: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "teal",
  }),
};

const LanguageSelect = () => {
  const { selectLanguage, locale } = useLanguageSelect();

  const handleChange = (option: OptionType | null) => {
    selectLanguage(option?.value);
  };

  const getLabel = () => {
    switch (locale) {
      case "ua":
        return "Ukrainian";

      case "ru":
        return "Russian";

      default:
        return "English";
    }
  };

  const getFlag = (value: string) => {
    switch (value) {
      case "ua":
        return uaFlag;

      case "ru":
        return ruFlag;

      default:
        return usaFlag;
    }
  };

  return (
    <ReactSelect
      id="select-language"
      instanceId="select-language"
      defaultValue={{
        label: getLabel(),
        value: locale || "en",
      }}
      onChange={handleChange}
      options={LOCALE_OPTIONS}
      menuPlacement="top"
      isSearchable={false}
      components={{ DropdownIndicator }}
      styles={customStyles}
    />
  );
};

export default LanguageSelect;

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <BsFillCaretDownFill />
    </components.DropdownIndicator>
  );
};
