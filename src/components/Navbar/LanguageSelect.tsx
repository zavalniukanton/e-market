import { BsFillCaretDownFill } from "react-icons/bs";
import ReactSelect, { components } from "react-select";

import usaFlag from "../../../public/icons/us.svg";
import uaFlag from "../../../public/icons/ua.svg";
import ruFlag from "../../../public/icons/ru.svg";

import { LOCALE_OPTIONS } from "../../constant/localeOptions";
import { useLanguageSelect } from "../../hooks/useLanguageSelect";
import { SelectOptionsType } from "../../models/models";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: "130px",
    backgroundColor: "#eaeaea",
    borderRadius: "4px",
    height: "40px",
    border: "none",
    marginRight: "20px",
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

  const handleChange = (option: SelectOptionsType | null) => {
    selectLanguage(option?.value);
  };

  const getLabel = () => {
    switch (locale) {
      case "en":
        return "English";

      case "ru":
        return "Russian";

      default:
        return "Ukrainian";
    }
  };

  const getFlag = (value: string) => {
    switch (value) {
      case "en":
        return usaFlag;

      case "ru":
        return ruFlag;

      default:
        return uaFlag;
    }
  };

  return (
    <ReactSelect
      id="select-language"
      instanceId="select-language"
      defaultValue={{
        label: getLabel(),
        value: locale || "ua",
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
