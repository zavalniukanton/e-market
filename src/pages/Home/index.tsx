import React from "react";
import Head from "next/head";
import { Container, Grid, Text } from "@nextui-org/react";

import { useIntl } from "../../hooks/useIntl";
import Layout from "../../components/Layout";
import SidebarMenu from "../../components/SidebarMenu";

const Home = () => {
  const { intl } = useIntl();

  return (
    <>
      <Head>
        <title>
          {intl("app.name")} - {intl("app.home")}
        </title>
        <meta name="description" content="project description" />
      </Head>

      <Layout>
        <Container fluid css={{ maxWidth: "100%", pt: 100, px: 32, m: 0 }}>
          <Grid.Container>
            <SidebarMenu />

            <Grid xs={10} css={{ px: 10, py: 20 }}>
              <Text>MAIN CONTENT</Text>
            </Grid>
          </Grid.Container>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
