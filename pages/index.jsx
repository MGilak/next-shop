import Slider from "../components/main-slider";
import Suggestion from "../components/suggestion";
import Grouping from "../components/grouping";
import Layout from "../components/Layout";
import { banner, grouping, suggestions } from "../lib/fetchData";

export default function Home({ data, headphonesData, groupingData }) {
  return (
    <>
      <Layout title="خانه">
        <div className="mb-20">
          <div className="px-4 sm:px-0">
            <Slider data={data} />
          </div>

          <div className="px-4 sm:px-0">
            <Suggestion data={headphonesData} />
          </div>

          <Grouping data={groupingData} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await banner();

  const headphonesData = await suggestions();

  const groupingData = await grouping();

  return {
    props: {
      data,
      headphonesData,
      groupingData,
    },
    revalidate: 60 * 60 * 12,
  };
}
