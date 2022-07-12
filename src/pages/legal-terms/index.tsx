import { Container, Text } from "@nextui-org/react";
import Head from "next/head";
import React from "react";

import Layout from "../../components/Layout";

const LagalTerms = () => {
  return (
    <div>
      <Head>
        <title>Legal terms</title>
        <meta name="description" content="project description" />
      </Head>

      <Layout>
        <Container fluid css={{ pt: 100 }}>
          <Text css={{}}>Legal terms page</Text>
        </Container>
      </Layout>
    </div>
  );
};

export default LagalTerms;
