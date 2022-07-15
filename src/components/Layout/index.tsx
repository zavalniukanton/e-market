import { useRouter } from "next/router";

import { LayoutProps } from "../../models/models";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }: LayoutProps) => {
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
