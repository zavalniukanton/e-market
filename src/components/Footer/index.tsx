import { Container, Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import { BiCopyright } from "react-icons/bi";

import { useIntl } from "../../hooks/useIntl";
import { ROUTES } from "../../constant/routes";
import FooterLinkList from "./FooterLinkList";

import googleStore from "../../../public/images/google-play.png";
import appStore from "../../../public/images/appstore.png";
import mastercard from "../../../public/images/mastercard-logo.png";
import visa from "../../../public/images/visa-logo.png";

const Footer = () => {
  const { intl } = useIntl();

  const NAVIGATION_LIST = {
    companyInfo: [
      { path: ROUTES.about, name: intl("app.about") },
      { path: ROUTES.regulations, name: intl("app.regulations") },
      { path: ROUTES.contacts, name: intl("app.contacts") },
    ],
    help: [
      { path: ROUTES.delivery, name: intl("app.delivery") },
      { path: ROUTES.credit, name: intl("app.credit") },
      { path: ROUTES.warranty, name: intl("app.warranty") },
      { path: ROUTES.goodsReturn, name: intl("app.goods-return") },
      { path: ROUTES.serviceCenters, name: intl("app.service-centers") },
    ],
    services: [
      { path: ROUTES.bonusAccount, name: intl("app.bonus-account") },
      { path: ROUTES.rozetkaPremium, name: intl("app.rozetka-premium") },
      { path: ROUTES.giftCertificates, name: intl("app.gift-certificates") },
      { path: ROUTES.rozetkaExchange, name: intl("app.rozetka-exchange") },
      { path: ROUTES.tours, name: intl("app.tours-vacations") },
    ],
    partners: [
      { path: ROUTES.sales, name: intl("app.sales") },
      { path: ROUTES.partnership, name: intl("app.partnership") },
      { path: ROUTES.franchising, name: intl("app.franchising") },
      { path: ROUTES.rental, name: intl("app.rental") },
    ],
  };

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
            {intl("app.footer.search-apps")}
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
      >
        <Grid.Container>
          <Grid xs={3} direction="column">
            <FooterLinkList
              listTitle={intl("app.footer.company-info")}
              data={NAVIGATION_LIST.companyInfo}
            />
          </Grid>
          <Grid xs={3} direction="column">
            <FooterLinkList
              listTitle={intl("app.footer.help")}
              data={NAVIGATION_LIST.help}
            />
          </Grid>
          <Grid xs={3} direction="column">
            <FooterLinkList
              listTitle={intl("app.footer.services")}
              data={NAVIGATION_LIST.services}
            />
          </Grid>
          <Grid xs={3} direction="column">
            <FooterLinkList
              listTitle={intl("app.footer.partners")}
              data={NAVIGATION_LIST.partners}
            />
          </Grid>
        </Grid.Container>
      </Container>

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
        <Text>{intl("app.footer.copyrights")}</Text>
      </Container>
    </footer>
  );
};

export default Footer;
