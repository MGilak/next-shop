import Layout from "@/components/Layout";
import useStore from "../../store/cart";
import { useParams } from "next/navigation";

const Headphone = ({ data }) => {
  // const carts = useStore((state) => state.carts);
  const add = useStore((state) => state.addCart);

  const addToCart = (item) => {
    add(item);
  };

  const params = useParams();
  const headphone = data.find((item) => item.id === Number(params?.slug));

  return (
    <>
      <Layout title="محصول">
        <section className="flex mt-20 container mx-auto">
          {/* right */}
          <div className="flex  w-[75%] ">
            <div className="w-1/2 ">
              <img className="w-[30%]" src={headphone?.path} alt="image" />
            </div>

            <div className="w-1/2">
              <div>
                <h1 className="font-bold mb-5">هدفون بلوتوثی مدل inPods 12</h1>
                <div className="flex gap-1 items-center">
                  <span className="whitespace-nowrap text-xs text-slate-300">
                    inPods 12 Bluetooth Headphone
                  </span>
                  <div className="w-full h-[1px] bg-slate-300"></div>
                </div>
              </div>

              {/* colors */}
              <div className="mt-8">
                <div className="flex gap-1 mb-3 font-bold">
                  <h1>رنگ:</h1>
                  <h1>مشکی</h1>
                </div>

                <div className="flex gap-5">
                  <div className="w-6 h-6 bg-black cursor-pointer rounded-full"></div>
                  <div className="w-6 h-6 bg-black cursor-pointer rounded-full"></div>
                  <div className="w-6 h-6 bg-black cursor-pointer rounded-full"></div>
                  <div className="w-6 h-6 bg-black cursor-pointer rounded-full"></div>
                  <div className="w-6 h-6 bg-black cursor-pointer rounded-full"></div>
                  <div className="w-6 h-6 bg-black cursor-pointer rounded-full"></div>
                </div>
              </div>

              {/*  */}
              <div className="mt-8">
                <div className="flex gap-1 mb-3 font-bold">
                  <h1>ویژگی‌ها:</h1>
                </div>

                <ul className="text-sm">
                  <li className="flex gap-2">
                    <span>نوع گوشی:</span>
                    <span>دو گوشی</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* left */}
          <div className="flex flex-col items-center w-[25%]">
            <div className="w-[70%] h-full bg-[#f0f0f080] flex flex-col items-center border-2 border-[#d4d3d380] rounded-lg py-3">
              <div className="flex justify-end font-bold gap-2 mb-2 w-[90%]">
                <span>۱۲۷,۸۰۰</span>
                <span>تومان</span>
              </div>

              <button
                onClick={() => add(headphone)}
                className="bg-[#ed1c35] w-[90%] text-white rounded-lg  text-sm  py-2"
              >
                افزودن به سبد
              </button>

              {/* <button
                onClick={() => update(headphone)}
                className="bg-[#ed1c35] w-[90%] text-white rounded-lg  text-sm  py-2 mt-2"
              >
                به روز کردن
              </button> */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Headphone;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/headphones");
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 12,
  };
}
