import { Input } from "@nextui-org/react";
import { BiSearch } from "react-icons/bi";

import { useIntl } from "../../hooks/useIntl";

const SearchInput = () => {
  const { intl } = useIntl();

  return (
    <Input
      animated={false}
      placeholder={intl("app.header.search-placeholder")}
      labelRight={intl("app.header.search-button")}
      labelLeft={<BiSearch size={24} />}
      css={{
        mx: 20,
        flexGrow: 1,
        "& .nextui-input-wrapper": {
          borderRadius: 4,
        },
        "& .nextui-input-label--right": {
          display: "flex",
          justifyContent: "center",
          width: 90,
          textAlign: "center",
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
          color: "#ffffff",
          backgroundColor: "#05bc52",
        },
        "& .nextui-input-label--left": {
          backgroundColor: "transparent",
        },
      }}
    />
  );
};

export default SearchInput;
