import { Container, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaSmileWink } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { BiUser, BiCart } from "react-icons/bi";

import { useIntl } from "../../hooks/useIntl";
import LanguageSelect from "./LanguageSelect";
import PickupBanner from "../PickupBanner";
import SearchInput from "./SearchInput";
import ThemeToggler from "./ThemeToggler";
import IconButton from "../IconButton";
import Button from "../Button";
import CartModal from "../CartModal";

const Navbar = () => {
  const { intl } = useIntl();
  const router = useRouter();
  const [isAuthModalopen, setIsAuthModalOpen] = useState(false);
  const [isCartModalopen, setIsCartModalOpen] = useState(false);

  const onLogoClick = () => {
    router.push("/");
  };

  const onCatalogClick = () => {
    alert("Catalog opened");
  };

  const onToggleAuthModal = () => {
    setIsAuthModalOpen((prevState) => !prevState);
  };

  const onToggleCartModal = () => {
    setIsCartModalOpen((prevState) => !prevState);
  };

  const onMenuClick = () => {
    alert("Side menu opened");
  };

  return (
    <>
      <div style={{ position: "fixed", width: "100%" }}>
        <PickupBanner />

        <header style={{ height: 70, backgroundColor: "#221f1f" }}>
          <Container
            fluid
            display="flex"
            alignItems="center"
            css={{ height: "100%", m: 0, px: 32, maxWidth: "100%" }}
          >
            <IconButton
              icon={<HiMenu size={32} />}
              styles={{ mr: 20 }}
              onClick={onMenuClick}
            />

            <Button
              auto
              light
              animated={false}
              icon={<FaSmileWink size={40} color="#05bc52" />}
              wrapperStyles={{ px: 0, mr: 20 }}
              onClick={onLogoClick}
            >
              <Text color="#ffffff" size={22} transform="uppercase">
                {intl("app.name")}
              </Text>
            </Button>

            <Button
              auto
              icon={<FiGrid size={32} />}
              wrapperStyles={{ borderRadius: 4, backgroundColor: "#7a7979" }}
              onClick={onCatalogClick}
            >
              <Text color="#ffffff">{intl("app.header.catalog")}</Text>
            </Button>

            <SearchInput />

            <ThemeToggler />

            <LanguageSelect />

            <IconButton
              icon={<BiUser size={32} />}
              styles={{ mr: 20 }}
              onClick={onToggleAuthModal}
            />

            <IconButton
              icon={<BiCart size={32} />}
              onClick={onToggleCartModal}
            />
          </Container>
        </header>
      </div>

      <CartModal open={isCartModalopen} onClose={onToggleCartModal} />
    </>
  );
};

export default Navbar;
