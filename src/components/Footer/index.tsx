import { Container, Text } from "@nextui-org/react";
import Image from "next/image";
import { BiCopyright } from "react-icons/bi";

import { useIntl } from "../../hooks/useIntl";

import googleStore from "../../../public/images/google-play.png";
import appStore from "../../../public/images/appstore.png";
import mastercard from "../../../public/images/mastercard-logo.png";
import visa from "../../../public/images/visa-logo.png";

const Footer = () => {
  const { intl } = useIntl();

  return (
    <footer>
      <div style={{ backgroundColor: "#05bc52" }}>
        <Container
          fluid
          display="flex"
          alignItems="center"
          css={{ px: 32, py: 16, maxWidth: "100%" }}
        >
          <Text h3 size={20} weight="normal" color="#ffffff">
            Завантажуйте наші додатки
          </Text>

          <Image
            width={128}
            height={40}
            src={googleStore}
            alt="google play logo"
            objectFit="contain"
          />

          <Image
            width={128}
            height={40}
            src={appStore}
            alt="apple store logo"
            objectFit="contain"
          />
        </Container>
      </div>

      <Container
        fluid
        display="flex"
        alignItems="center"
        css={{
          px: 32,
          py: 16,
          m: 0,
          maxWidth: "100%",
        }}
      ></Container>

      <Container
        fluid
        display="flex"
        alignItems="center"
        css={{
          px: 32,
          py: 16,
          m: 0,
          maxWidth: "100%",
          borderTopWidth: 1,
          borderTopStyle: "solid",
          borderColor: "$gray300",
        }}
      >
        <Image
          width={72}
          height={32}
          src={mastercard}
          alt="mastercard logo"
          objectFit="contain"
        />

        <Image
          width={72}
          height={32}
          src={visa}
          alt="visa logo"
          objectFit="contain"
        />

        <BiCopyright style={{ marginLeft: "auto", marginRight: 4 }} />
        <Text>Інтернет-магазин E-market, 2022</Text>
      </Container>
    </footer>
  );
};

export default Footer;
