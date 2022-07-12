import { Grid, Input, Modal, Spacer, Text } from "@nextui-org/react";
import { useState } from "react";
import { ImFacebook, ImGoogle } from "react-icons/im";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useIntl } from "../../hooks/useIntl";
import Button from "../Button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type Props = {
  open: boolean;
  onClose: () => void;
};

const AuthModal = ({ open, onClose }: Props) => {
  const { intl } = useIntl();
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const onLogin = () => {
    console.log("Login");
  };

  const onRegister = () => {
    console.log("Register");
  };

  const toggleRegisterForm = () => {
    setIsRegisterForm((prevState) => !prevState);
  };

  return (
    <Modal open={open} onClose={onClose} width="40%">
      <Modal.Header
        css={{
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          borderColor: "$gray300",
        }}
      >
        <Text h3 size={24} weight="normal">
          {intl("auth-modal.title")}
        </Text>
      </Modal.Header>

      <Modal.Body css={{ py: 24 }}>
        <Grid.Container>
          <Grid xs={6.5} direction="column" alignItems="center" as="form">
            {isRegisterForm ? (
              <RegisterForm
                onRegister={onRegister}
                toggleRegisterForm={toggleRegisterForm}
              />
            ) : (
              <LoginForm
                onLogin={onLogin}
                toggleRegisterForm={toggleRegisterForm}
              />
            )}
          </Grid>

          <Grid xs={1} direction="column" alignItems="center">
            <div
              style={{ width: 1, height: "45%", backgroundColor: "#dfe3e6" }}
            />
            <Text size={14} color="$accents6">
              {intl("auth-modal.divider-text")}
            </Text>
            <div
              style={{ width: 1, height: "45%", backgroundColor: "#dfe3e6" }}
            />
          </Grid>

          <Grid xs={4.5} direction="column" alignItems="center">
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
          </Grid>
        </Grid.Container>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
