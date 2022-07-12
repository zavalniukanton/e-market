import { Grid, Input, Modal, Spacer, Text } from "@nextui-org/react";
import { useState } from "react";
import { ImFacebook, ImGoogle } from "react-icons/im";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useIntl } from "../../hooks/useIntl";
import Button from "../Button";

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
          <Grid xs={6.5} direction="column" alignItems="center">
            <Input
              label={intl("auth-modal.form-email")}
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
            <Spacer y={1} />
            <Input.Password
              label={intl("auth-modal.form-password")}
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

            <Button
              onClick={onLogin}
              wrapperStyles={{
                height: 48,
                width: "100%",
                mt: 32,
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
                mt: 16,
                fontSize: 16,
                "&:hover": { color: "#ff7878" },
              }}
            >
              {intl("auth-modal.form-register")}
            </Button>
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
