import { useState } from "react";
import Layout from "../../components/Layout";
import useStore from "../../store/cart";
import { useParams } from "next/navigation";
import { toFarsiNumber, replace } from "../../utils";
import { toast } from "react-toastify";

const Headphone = ({ data }) => {
  const carts = useStore((state) => state.carts);
  const add = useStore((state) => state.addCart);
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);
  const removeItem = useStore((state) => state.removeItem);

  const [color, setColor] = useState(null);

  const colors = [
    { name: "مشکی", color: "bg-black" },
    { name: "قرمز", color: "bg-red-500" },
    { name: "سبز", color: "bg-green-500" },
    { name: "زرد", color: "bg-yellow-500" },
    { name: "بنفش", color: "bg-purple-500" },
    { name: "سفید", color: "bg-white" },
  ];

  const decreaseItem = (item) => {
    const product = carts.find((cart) => cart.id === item.id);
    if (product) {
      if (product.qnt === 1) {
        removeItem(item);
        toast.error("محصول از سبد خرید حذف شد.");
      } else if (product.qnt > 1) {
        decrease(item);
      }
    }
  };

  const addToCart = (item) => {
    if (!color) {
      toast.warning("لطفاً رنگ محصول را انتخاب کنید.");
    } else {
      toast.success("محصول با موفقیت به سبد خرید اضافه شد.");
      add(item);
    }
  };

  const params = useParams();
  const cart = carts.find((item) => item.id === Number(params?.slug));

  return (
    <>
      <Layout title="محصول">
        <section className="flex flex-col gap-6 lg:gap-0 lg:flex-row my-20 container mx-auto">
          {/* right */}
          <div className="flex sm:flex-row flex-col w-full lg:w-[50%] xl:w-[70%] px-5 sm:px-0">
            <div className="w-full flex justify-center sm:block sm:w-1/2 lg:w-[40%]">
              <img className="" src={data.path} alt="image" />
            </div>

            <div className="w-full flex  flex-col items-center sm:block sm:w-1/2 lg:w-[60%]">
              <div>
                <h1 className="font-bold mb-5">هدفون بلوتوثی مدل inPods 12</h1>
                <div className="flex gap-1 items-center">
                  <span className="sm:whitespace-nowrap text-xs text-slate-300">
                    inPods 12 Bluetooth Headphone
                  </span>
                  <div className="w-full h-[1px] bg-slate-300 lg:block hidden"></div>
                </div>
              </div>

              {/* colors */}
              <div className="mt-8">
                <div className="flex gap-1 mb-3 font-bold">
                  <h1>رنگ:</h1>
                  <h1>{color}</h1>
                </div>

                <div className="flex  flex-wrap gap-5">
                  {colors.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setColor(item.name)}
                      className={`w-6 h-6 cursor-pointer rounded-lg ${item.color}`}
                    ></div>
                  ))}
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
          <div className="flex flex-col items-center w-full lg:w-[50%]  xl:w-[30%] lg:px-0 px-6">
            <div className="lg:w-[70%] w-full h-full dark:bg-[#0f172a] bg-[#f0f0f080] flex flex-col gap-6 lg:gap-0 justify-around items-center border-2 border-[#d4d3d380] rounded-lg py-3">
              <div className="flex justify-between  gap-2 mb-2 w-[90%]">
                <div>
                  <span className="text-sm">قیمت محصول:</span>
                </div>

                <div className="font-bold">
                  <span>{replace(toFarsiNumber(data?.price))}</span>
                  <span>تومان</span>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <span
                  onClick={() => increase(data)}
                  className="text-2xl select-none cursor-pointer border-[1px] border-green-500 w-8 justify_center rounded-lg bg-white hover:bg-green-600 hover:text-white text-black my_transition"
                >
                  +
                </span>
                <span className="w-12 h-10 border-0 outline-none ring-0 text-center justify_center font-bold">
                  {cart ? cart.qnt : 0}
                </span>
                <span
                  onClick={() => decreaseItem(data)}
                  className="text-2xl select-none cursor-pointer border-[1px] border-red-400 w-8 justify_center rounded-lg bg-white hover:bg-red-600 hover:text-white text-black my_transition"
                >
                  -
                </span>
              </div>

              <button
                onClick={() => addToCart(data)}
                className="hover:bg-[#ed1c35] dark:border-[1px] border-2 border-[#ed1c35] my_transition w-[90%] hover:text-white rounded-lg  text-sm  py-2"
              >
                افزودن به سبد
              </button>
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

export async function getStaticProps(context) {
  const slug = context.params.slug;

  const res = await fetch(`http://localhost:4000/headphones/${slug}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 12,
  };
}
