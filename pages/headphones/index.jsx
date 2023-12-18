import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
// import Breadcrumb from "../../components/breadcrumb";
import HeadphoneItem from "../../components/headphoneItem";
``
import { MdOutlineSort } from "react-icons/md";
import path from "path";
import fs from "fs";

const headphones = ({ parsedData }) => {
  const [product, setProduct] = useState([]);

  const [category, setGategory] = useState("all");

  useEffect(() => {
    switch (category) {
      case "popular": {
        const filtered = parsedData.filter((item) => item.star > 3);
        setProduct(filtered);
        break;
      }

      case "best": {
        const filtered = parsedData.filter((item) => item.bestSeller);
        setProduct(filtered);
        break;
      }

      default:
        setProduct(parsedData);
        break;
    }
  }, [category]);

  return (
    <>
      <Layout title="هدفن‌ها">
        {/* <Breadcrumb /> */}

        <div className="container mx-auto mt-10 border-b-2 pb-2 flex items-center gap-5">
          <div className="flex gap-1 items-center">
            <MdOutlineSort className="text-xl" />
            <span className="font-bold">مرتب‌سازی:</span>
          </div>

          <div className="flex items-center gap-4 text-sm">
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
