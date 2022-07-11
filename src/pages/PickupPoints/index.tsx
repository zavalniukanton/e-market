import { Text } from "@nextui-org/react";
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
        <Text>Pickup Points</Text>
      </Layout>
    </div>
  );
};

export default PickupPoints;
