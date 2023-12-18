import Slider from "../components/main-slider";
import Suggestion from "../components/suggestion";
import Grouping from "../components/grouping";
import Layout from "../components/Layout";
import path from "path";
import fs from "fs";

export default function Home({ parsedData }) {
  console.log(parsedData);
  return (
    <>
      <Layout title="خانه">
        <div className="mb-20">
          <div className="px-4 sm:px-0">
            <Slider data={parsedData.bannersHeader} />
          </div>

          <div className="px-4 sm:px-0">
            <Suggestion data={parsedData.suggestions} />
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
