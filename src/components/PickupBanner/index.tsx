import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Text } from "@nextui-org/react";

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
          <Text color="success" size={24}>
            {intl("app.banner")}
          </Text>
        </a>
      </Link>
    </div>
  );
};

export default PickupBanner;
