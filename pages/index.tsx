import Slider from "@/components/main-slider";
import Suggestion from "@/components/suggestion";
import Header from "../components/header";
import Grouping from "@/components/grouping";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Suggestion />
      <Grouping />

      <div className="h-[800px]"></div>
    </>
  );
}
