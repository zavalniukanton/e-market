import React from "react";
import Head from "next/head";

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
        <p>{intl("app.main")}</p>
      </Layout>
    </div>
  );
};

export default Home;
