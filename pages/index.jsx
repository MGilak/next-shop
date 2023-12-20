import Slider from "../components/main-slider";
import Suggestion from "../components/suggestion";
import Grouping from "../components/grouping";
import Layout from "../components/Layout";
import path from "path";
import fs from "fs";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Home({ parsedData }) {
  return (
    <>
      <Layout title="خانه">
        <div className="mb-20">
          <div className="px-4 sm:px-0">
            <Slider data={parsedData.bannersHeader} />
          </div>

          <div className="container mx-auto mt-12 px-4 sm:px-0">
            <div className=" suggestSlider  flex">
              <div className="w-56 p-6 flex flex-col items-center">
                <div>
                  <img
                    className="w-20"
                    src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    src="https://www.digikala.com/statics/img/png/specialCarousel/box.webp"
                    alt=""
                  />
                </div>

                <div>
                  <Link
                    href="/"
                    className="text-white text-sm font-bold flex items-center"
                  >
                    <span> مشاهده همه</span>
                    <span>
                      <MdOutlineKeyboardArrowLeft className=" text-lg font-bold" />
                    </span>
                  </Link>
                </div>
              </div>
              <Suggestion data={parsedData.headphones} />
            </div>
          </div>

          <Grouping data={parsedData.grouping} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const dbPath = path.join(process.cwd(), "data", "db.json");

  const data = fs.readFileSync(dbPath);

  const parsedData = JSON.parse(data);

  return {
    props: {
      parsedData,
    },
    revalidate: 60 * 60 * 12,
  };
}
