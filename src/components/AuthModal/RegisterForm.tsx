import { Input, Spacer, Text } from "@nextui-org/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useIntl } from "../../hooks/useIntl";
import Button from "../Button";

type Props = {
  onRegister: () => void;
  toggleRegisterForm: () => void;
};

const RegisterForm = ({ onRegister, toggleRegisterForm }: Props) => {
  const { intl } = useIntl();

  return (
    <>
      <Input
        label={intl("auth-modal.register-form-name")}
        bordered
        fullWidth
        css={{
          "& .nextui-input-block-label": {
            fontSize: 12,
            color: "$accents6",
          },
          "& .nextui-input-wrapper": {
            borderRadius: 4,
          },
        }}
      />

      <Spacer />

      <Input
        label={intl("auth-modal.register-form-surname")}
        bordered
        fullWidth
        css={{
          "& .nextui-input-block-label": {
            fontSize: 12,
            color: "$accents6",
          },
          "& .nextui-input-wrapper": {
            borderRadius: 4,
          },
        }}
      />

      <Spacer />

      <Input
        label={intl("auth-modal.register-form-phome")}
        bordered
        fullWidth
        css={{
          "& .nextui-input-block-label": {
            fontSize: 12,
            color: "$accents6",
          },
          "& .nextui-input-wrapper": {
            borderRadius: 4,
          },
        }}
      />

      <Spacer />

      <Input
        label={intl("auth-modal.register-form-email")}
        bordered
        fullWidth
        css={{
          "& .nextui-input-block-label": {
            fontSize: 12,
            color: "$accents6",
          },
          "& .nextui-input-wrapper": {
            borderRadius: 4,
          },
        }}
      />

      <Spacer />

      <Input.Password
        label={intl("auth-modal.register-form-password")}
        bordered
        fullWidth
        visibleIcon={<FaEye />}
        hiddenIcon={<FaEyeSlash />}
        css={{
          "& .nextui-input-block-label": {
            fontSize: 12,
            color: "$accents6",
          },
          "& .nextui-input-wrapper": {
            borderRadius: 4,
          },
        }}
      />

      <Spacer />

      <Text size={12}>
        {intl("auth-modal.registration-condition")}{" "}
        <Text span color="$primary">
          {intl("auth-modal.personal-data-link")}{" "}
          <Text span>
            {intl("auth-modal.registration-condition-and")}{" "}
            <Text span color="$primary">
              {intl("auth-modal.user-regulations-link")}
            </Text>
          </Text>
        </Text>
      </Text>

      <Spacer />

      <Button
        onClick={onRegister}
        wrapperStyles={{
          height: 48,
          width: "100%",
          borderRadius: 4,
          backgroundColor: "#05bc52",
          fontSize: 18,
        }}
      >
        {intl("auth-modal.form-register")}
      </Button>

      <Button
        light
        animated={false}
        onClick={toggleRegisterForm}
        wrapperStyles={{
          height: 48,
          width: "100%",
          fontSize: 16,
          "&:hover": { color: "#ff7878" },
        }}
      >
        {intl("auth-modal.form-already-registered")}
      </Button>
    </>
  );
};

export default RegisterForm;
