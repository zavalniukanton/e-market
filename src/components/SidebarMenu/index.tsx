import { Grid } from "@nextui-org/react";
import Link from "next/link";
import {
  TbDeviceGamepad2,
  TbArmchair,
  TbBath,
  TbShirt,
  TbDiscount2,
  TbGlassFull,
  TbBrandTelegram,
  TbPlant,
} from "react-icons/tb";
import { CgLaptop, CgSmartphone, CgSmartHomeWashMachine } from "react-icons/cg";
import { MdSportsTennis, MdOutlineCleanHands } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import {
  RiBearSmileLine,
  RiQuestionLine,
  RiBaiduLine,
  RiStore2Line,
} from "react-icons/ri";
import { FaBarcode } from "react-icons/fa";

import { useIntl } from "../../hooks/useIntl";
import { ROUTES } from "../../constant/routes";

const SidebarMenu = () => {
  const { intl } = useIntl();

  const MAIN_NAVIGATION_LIST = [
    {
      path: ROUTES.laptops,
      name: intl("sidebar.laptops-computers"),
      icon: <CgLaptop size={24} color="#adb8c8" style={{ marginRight: 8 }} />,
    },
    {
      path: ROUTES.smartphones,
      name: intl("sidebar.smartphones-tv"),
      icon: (
        <CgSmartphone size={24} color="#adb8c8" style={{ marginRight: 8 }} />
      ),
    },
    {
      path: ROUTES.gamers,
      name: intl("sidebar.products-for-gamers"),
      icon: (
        <TbDeviceGamepad2
          size={24}
          color="#adb8c8"
          style={{ marginRight: 8 }}
        />
      ),
    },
    {
      path: ROUTES.homeAppliances,
      name: intl("sidebar.home-appliances"),
      icon: (
        <CgSmartHomeWashMachine
          size={24}
          color="#adb8c8"
          style={{ marginRight: 8 }}
        />
      ),
    },
    {
      path: ROUTES.householdHoods,
      name: intl("sidebar.household-goods"),
      icon: <TbArmchair size={24} color="#adb8c8" style={{ marginRight: 8 }} />,
    },
    {
      path: ROUTES.tools,
      name: intl("sidebar.tools"),
      icon: <VscTools size={24} color="#adb8c8" style={{ marginRight: 8 }} />,
    },
    {
      path: ROUTES.plumbing,
      name: intl("sidebar.plumbing-repair"),
      icon: <TbBath size={24} color="#adb8c8" style={{ marginRight: 8 }} />,
    },
    {
      path: ROUTES.garden,
      name: intl("sidebar.garden"),
      icon: <TbPlant size={24} color="#adb8c8" style={{ marginRight: 8 }} />,
    },
    {
      path: ROUTES.sport,
      name: intl("sidebar.sport"),
      icon: (
        <MdSportsTennis size={24} color="#adb8c8" style={{ marginRight: 8 }} />
      ),
    },
    {
      path: ROUTES.fashion,
      name: intl("sidebar.fasion"),
      icon: <TbShirt size={24} color="#adb8c8" style={{ marginRight: 8 }} />,
    },
    {
      path: ROUTES.beauty,
      name: intl("sidebar.beauty"),
      icon: (
        <MdOutlineCleanHands
          size={24}
          color="#adb8c8"
          style={{ marginRight: 8 }}
        />
      ),
    },
    {
      path: ROUTES.childrenGoods,
      name: intl("sidebar.products-for-children"),
      icon: (
        <RiBearSmileLine size={24} color="#adb8c8" style={{ marginRight: 8 }} />
      ),
    },
    {
      path: ROUTES.petSupplies,
      name: intl("sidebar.pet-supplies"),
      icon: (
        <RiBaiduLine size={24} color="#adb8c8" style={{ marginRight: 8 }} />
      ),
    },
    {
      path: ROUTES.discountedProducts,
      name: intl("sidebar.discounted-products"),
      icon: (
        <TbDiscount2 size={24} color="#adb8c8" style={{ marginRight: 8 }} />
      ),
    },
    {
      path: ROUTES.alcoholAndProducts,
      name: intl("sidebar.alcohol-and-products"),
      icon: (
        <TbGlassFull size={24} color="#adb8c8" style={{ marginRight: 8 }} />
      ),
    },
    {
      path: ROUTES.business,
      name: intl("sidebar.business-goods"),
      icon: <FaBarcode size={24} color="#adb8c8" style={{ marginRight: 8 }} />,
    },
  ];

  return (
    <Grid
      xs={2}
      css={{
        px: 10,
        py: 20,
        borderRightWidth: 1,
        borderRightColor: "$accents3",
        borderRightStyle: "solid",
      }}
    >
      <ul>
        {MAIN_NAVIGATION_LIST.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>
              <a className="nav-link">
                {link.icon}
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Grid>
  );
};

export default SidebarMenu;
