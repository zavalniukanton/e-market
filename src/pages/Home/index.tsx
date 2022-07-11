import React from "react";
import Head from "next/head";
import { Card, Text } from "@nextui-org/react";

import { useIntl } from "../../hooks/useIntl";
import Layout from "../../components/Layout";

const Home = () => {
  const { intl } = useIntl();

  return (
    <div>
      <Head>
        <title>{intl("app.home")}</title>
        <meta name="description" content="project description" />
      </Head>

      <Layout>
        <Card isPressable variant="bordered" css={{ mw: "400px" }}>
          <Card.Body>
            <Text>{intl("app.main")}</Text>
          </Card.Body>
        </Card>
      </Layout>
    </div>
  );
};

export default Home;
