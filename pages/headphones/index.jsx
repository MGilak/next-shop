import { useState } from "react";
import Layout from "../../components/Layout";
// import Breadcrumb from "../../components/breadcrumb";
import HeadphoneItem from "../../components/headphoneItem";

const headphones = ({ data }) => {
  const [product, setProduct] = useState([]);

  return (
    <>
      <Layout title="هدفن‌ها">
        {/* <Breadcrumb /> */}

        <div>{product.length > 0 && product.map((item) => <h1>daly</h1>)}</div>

        <section className="container mx-auto mt-14 grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-4 sm:px-0 gap-4">
          {data.map((item) => (
            <HeadphoneItem data={item} key={item.id} />
          ))}
        </section>
      </Layout>
    </>
  );
};

export default headphones;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/headphones");
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 12,
  };
}
