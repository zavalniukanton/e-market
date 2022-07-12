import { Container, Text } from "@nextui-org/react";
import Head from "next/head";
import React from "react";

import Layout from "../../components/Layout";

const Privacy = () => {
  return (
    <div>
      <Head>
        <title>Privacy</title>
        <meta name="description" content="project description" />
      </Head>

      <Layout>
        <Container fluid css={{ pt: 100 }}>
          <Text css={{}}>Privacy page</Text>
        </Container>
      </Layout>
    </div>
  );
};

export default Privacy;
