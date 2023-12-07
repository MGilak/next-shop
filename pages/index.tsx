import Slider from "@/components/main-slider";
import Suggestion from "@/components/suggestion";
import Header from "../components/header";
import Grouping from "@/components/grouping";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout title="خانه">
        <Slider />
        <Suggestion />
        <Grouping />

        <div className="h-[800px]"></div>
      </Layout>
    </>
  );
}
