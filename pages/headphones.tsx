import Layout from "@/components/Layout";
import Breadcrumb from "@/components/breadcrumb";
import Header from "@/components/header";
import HeadphoneItem from "@/components/headphoneItem";

const headphones = () => {
  return (
    <>
      <Layout title="هدفن‌ها">
        {/* <Breadcrumb /> */}

        <section className="container mx-auto mt-14 grid grid-cols-5 gap-4">
          <HeadphoneItem />
          <HeadphoneItem />
          <HeadphoneItem />
          <HeadphoneItem />
          <HeadphoneItem />
          <HeadphoneItem />
          <HeadphoneItem />
        </section>

        <div className="h-[400px]"> </div>
      </Layout>
    </>
  );
};

export default headphones;
