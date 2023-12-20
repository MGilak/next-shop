import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import HeadphoneItem from "../../../components/headphoneItem";

import { MdOutlineSort } from "react-icons/md";
import path from "path";
import fs from "fs";
import { useRouter } from "next/router";

const headphones = ({ parsedData }) => {
  const [product, setProduct] = useState([]);
  const [category, setGategory] = useState(null);

  const route = useRouter();

  const filterByBrand = () => {
    if (route.query.brand === "all") {
      return parsedData;
      // setProduct(parsedData);
    } else {
      const filteredProducts = parsedData.filter(
        (p) => p.brand === route.query.brand
      );
      return filteredProducts;
    }
  };

  useEffect(() => {
    setProduct(filterByBrand());
  }, [route.query]);

  useEffect(() => {
    if (category === "popular") {
      const data = filterByBrand();
      const filtered = data.filter((item) => item.star > 3);
      setProduct(filtered);
    }

    if (category === "best") {
      const data = filterByBrand();
      const filtered = data.filter((item) => item.bestSeller);
      setProduct(filtered);
    }

    if (category === "all") {
      setProduct(filterByBrand());
    }
  }, [category]);

  return (
    <>
      <Layout title="هدفن‌ها">
        <div className="container mx-auto mt-10 border-b-2 pb-2 flex items-center justify-center sm:justify-start gap-1 sm:gap-5 sm:px-0 px-2">
          <div className="gap-1 items-center sm:flex hidden">
            <MdOutlineSort className="text-xl" />
            <span className="font-bold sm:text-lg text-sm ">مرتب‌سازی:</span>
          </div>

          <div className="flex items-center gap-4 text-sm ">
            <span onClick={() => setGategory("all")} className="cursor-pointer">
              همه محصولات
            </span>
            <span
              onClick={() => setGategory("best")}
              className="cursor-pointer"
            >
              پرفروش‌ترین‌ها
            </span>
            <span
              onClick={() => setGategory("popular")}
              className="cursor-pointer"
            >
              محبوب‌ترین‌ها
            </span>
          </div>
        </div>

        <section className="container mx-auto mt-14 mb-20 grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-4 sm:px-0 gap-4">
          {product.map((item) => (
            <HeadphoneItem data={item} key={item.id} />
          ))}
        </section>
      </Layout>
    </>
  );
};

export default headphones;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export async function getStaticProps() {
  const dbPath = path.join(process.cwd(), "data", "db.json");

  const data = fs.readFileSync(dbPath);

  const parsedData = JSON.parse(data).headphones;

  return {
    props: {
      parsedData,
    },
    revalidate: 60 * 60 * 12,
  };
}
