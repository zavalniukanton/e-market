import { Grid, Modal, Text } from "@nextui-org/react";
import { useState } from "react";

import { useIntl } from "../../hooks/useIntl";
import AuthWithSocials from "./AuthWithSocials";
import Divider from "./Divider";
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
            <Divider />
          </Grid>

          <Grid xs={4.5} direction="column" alignItems="center">
            <AuthWithSocials />
          </Grid>
        </Grid.Container>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
