import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";

const Layout = ({ children, title }) => {
  const [isHydrated, setIsHydrated] = useState();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {isHydrated && (
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
