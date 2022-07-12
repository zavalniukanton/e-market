import { Text } from "@nextui-org/react";
import { ImFacebook, ImGoogle } from "react-icons/im";

import { useIntl } from "../../hooks/useIntl";
import Button from "../Button";

const AuthWithSocials = () => {
  const { intl } = useIntl();

  return (
    <>
      <Text size={14} color="$accents6" css={{ mb: 16 }}>
        {intl("auth-modal.social-block-title")}
      </Text>

      <Button
        icon={<ImFacebook size={18} />}
        onClick={() => {}}
        wrapperStyles={{
          width: "100%",
          height: 48,
          borderRadius: 4,
          mb: 16,
          backgroundColor: "$gray300",
        }}
      >
        <Text size={18} color="$primary" weight="medium">
          Facebook
        </Text>
      </Button>

      <Button
        icon={<ImGoogle size={18} />}
        onClick={() => {}}
        wrapperStyles={{
          width: "100%",
          height: 48,
          borderRadius: 4,
          backgroundColor: "$gray300",
        }}
      >
        <Text size={18} color="$primary" weight="medium">
          Google
        </Text>
      </Button>
    </>
  );
};

export default AuthWithSocials;
