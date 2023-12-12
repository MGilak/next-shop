import Slider from "@/components/main-slider";
import Suggestion from "@/components/suggestion";
import Grouping from "@/components/grouping";
import Layout from "@/components/Layout";

export default function Home({ data, headphonesData, groupingData }) {
  return (
    <>
      <Layout title="خانه">
        <div className="px-4 sm:px-0">
          <Slider data={data} />
        </div>

        <div className="px-4 sm:px-0">
          <Suggestion data={headphonesData} />
        </div>

        <Grouping data={groupingData} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/bannersHeader");
  const data = await res.json();

  const headphonesRes = await fetch("http://localhost:4000/suggestions");
  const headphonesData = await headphonesRes.json();

  const groupingRes = await fetch("http://localhost:4000/grouping");
  const groupingData = await groupingRes.json();

  // console.log("sabannersHeaderlam", data);

  return {
    props: {
      data,
      headphonesData,
      groupingData,
    },
    revalidate: 60 * 60 * 12,
  };
}
