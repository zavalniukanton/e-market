import { ReactNode } from "react";
import { useRouter } from "next/router";

import Navbar from "../Navbar";
import Footer from "../Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      {children}
      {router.route !== "/" && <Footer />}
    </>
  );
};

export default Layout;
