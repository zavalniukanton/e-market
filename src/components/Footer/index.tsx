import React from "react";

import { useIntl } from "../../hooks/useIntl";

const Footer = () => {
  const { intl } = useIntl();

  return <div>{intl("app.footer")}</div>;
};

export default Footer;
