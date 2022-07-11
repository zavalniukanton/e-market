import React from "react";
import Head from "next/head";
import { Text } from "@nextui-org/react";

import { useIntl } from "../../hooks/useIntl";
import Layout from "../../components/Layout";

const Home = () => {
  const { intl } = useIntl();

  return (
    <div>
      <Head>
        <title>
          {intl("app.name")} - {intl("app.home")}
        </title>
        <meta name="description" content="project description" />
      </Head>

      <Layout>
        <Text css={{ height: "100vh" }}>{intl("app.main")}</Text>
      </Layout>
    </div>
  );
};

export default Home;
