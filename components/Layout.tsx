import Head from "next/head";
import Header from "./header";

interface PropsType {
  children: React.ReactNode;
  title: String;
}

const Layout = ({ children, title }: PropsType) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div>
        <Header />
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
};

export default Layout;
