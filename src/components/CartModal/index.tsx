import { Modal, Text } from "@nextui-org/react";
import Image from "next/image";

import { useIntl } from "../../hooks/useIntl";
import { ModalProps } from "../../models/models";

import cart from "../../../public/images/cart.png";

const CartModal = ({ open, onClose }: ModalProps) => {
  const { intl } = useIntl();

  return (
    <Modal open={open} onClose={onClose} width="50%">
      <Modal.Header
        css={{
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          borderColor: "$gray300",
        }}
      >
        <Text h3 size={24} weight="normal">
          {intl("cart-modal.title")}
        </Text>
      </Modal.Header>

      <Modal.Body css={{ pb: 48 }}>
        <Image
          width={240}
          height={240}
          src={cart}
          alt="cart image"
          objectFit="contain"
        />

        <Text
          h4
          size={24}
          weight="normal"
          css={{ mt: 48, textAlign: "center" }}
        >
          {intl("cart-modal.empty-cart")}
        </Text>

        <Text size={14} color="$gray600" css={{ mt: 8, textAlign: "center" }}>
          {intl("cart-modal.empty-cart-caption")}
        </Text>
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
