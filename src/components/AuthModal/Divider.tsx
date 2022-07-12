import { Text } from "@nextui-org/react";

import { useIntl } from "../../hooks/useIntl";

const Divider = () => {
  const { intl } = useIntl();

  return (
    <>
      <div style={{ width: 1, height: "45%", backgroundColor: "#dfe3e6" }} />
      <Text size={14} color="$accents6">
        {intl("auth-modal.divider-text")}
      </Text>
      <div style={{ width: 1, height: "45%", backgroundColor: "#dfe3e6" }} />
    </>
  );
};

export default Divider;
