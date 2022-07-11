import { Container, Text } from "@nextui-org/react";
import Head from "next/head";
import React from "react";

import Layout from "../../components/Layout";

const PickupPoints = () => {
  return (
    <div>
      <Head>
        <title>Pickup Points</title>
        <meta name="description" content="project description" />
      </Head>

      <Layout>
        <Container fluid css={{ pt: 100 }}>
          <Text css={{}}>Pickup Points</Text>
        </Container>
      </Layout>
    </div>
  );
};

export default PickupPoints;
