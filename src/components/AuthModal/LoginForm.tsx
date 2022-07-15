import { Input, Spacer } from "@nextui-org/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useIntl } from "../../hooks/useIntl";
import { LoginFormProps } from "../../models/models";
import Button from "../Button";

const LoginForm = ({ onLogin, toggleRegisterForm }: LoginFormProps) => {
  const { intl } = useIntl();

  return (
    <>
      <Input
        label={intl("auth-modal.login-form-email")}
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
        label={intl("auth-modal.login-form-password")}
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

      <Button
        onClick={onLogin}
        wrapperStyles={{
          height: 48,
          width: "100%",
          borderRadius: 4,
          backgroundColor: "#05bc52",
          fontSize: 18,
        }}
      >
        {intl("auth-modal.form-login")}
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
        {intl("auth-modal.form-register")}
      </Button>
    </>
  );
};

export default LoginForm;
