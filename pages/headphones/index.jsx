import { useState } from "react";
import Layout from "@/components/Layout";
// import Breadcrumb from "@/components/breadcrumb";
import HeadphoneItem from "@/components/headphoneItem";

const headphones = ({ data }) => {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();

    setProduct(data);
    console.log("head", data);
    console.log("head", product);
  };
  // fetchData();

  return (
    <>
      <Layout title="هدفن‌ها">
        {/* <Breadcrumb /> */}
        <button
          className="bg-blue-400 rounded-lg text-white p-2 "
          onClick={fetchData}
        >
          fetch
        </button>

        <div>{product.length > 0 && product.map((item) => <h1>daly</h1>)}</div>

        <section className="container mx-auto mt-14 grid grid-cols-5 gap-4">
          {data.map((item) => (
            <HeadphoneItem data={item} />
          ))}
        </section>

        <div className="h-[400px]"> </div>
      </Layout>
    </>
  );
};

export default headphones;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/headphones");
  const data = await res.json();

  // console.log("salam", data);

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 12,
  };
}
