import { Input, Spacer, Text } from "@nextui-org/react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useIntl } from "../../hooks/useIntl";
import { ROUTES } from "../../constant/routes";
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
        <Link href={ROUTES.privacy}>
          <a>
            <Text
              span
              color="$primary"
              css={{ "&:hover": { color: "#ff7878" } }}
            >
              {intl("auth-modal.privacy-link")}
            </Text>
          </a>
        </Link>{" "}
        <Text span>{intl("auth-modal.registration-condition-and")}</Text>{" "}
        <Link href={ROUTES.legalTerms}>
          <a>
            <Text
              span
              color="$primary"
              css={{ "&:hover": { color: "#ff7878" } }}
            >
              {intl("auth-modal.legal-terms-link")}
            </Text>
          </a>
        </Link>
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
