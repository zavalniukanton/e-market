import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Text } from "@nextui-org/react";
import { FaMapMarkedAlt } from "react-icons/fa";

import { useIntl } from "../../hooks/useIntl";
import { styles } from "./styles";

const PickupBanner = () => {
  const { intl } = useIntl();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={styles.banner(scrolled)}>
      <Link href="/pickup-points">
        <a>
          <Text color="#ffffff" size={24}>
            {intl("app.banner")}
          </Text>
        </a>
      </Link>

      <FaMapMarkedAlt size={30} color="#05bc52" style={{ marginLeft: 16 }} />
    </div>
  );
};

export default PickupBanner;
