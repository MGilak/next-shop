import Layout from "@/components/Layout";
import useStore from "../store/cart";

const Cart = () => {
  const carts = useStore((state) => state.carts);

  console.log(carts);

  return (
    <>
      <Layout>
        <section className="mt-10 container mx-auto flex items-start gap-2">
          {/* right */}
          <div className="w-[75%]  flex flex-col gap-2 border-[1px] rounded-lg">
            {carts.map((item) => (
              <div className="flex justify-around items-center">
                <div>
                  <img className="w-44" src={item.path} alt="" />
                </div>

                <div>
                  <h2>هدفون بلوتوثی مدل inPods 12</h2>
                </div>

                <div className="flex gap-2 items-center">
                  <span className="text-2xl cursor-pointer">+</span>
                  <input
                    className="w-12 h-10 border-0 outline-none ring-0 text-center pr-4 pt-1"
                    type="number"
                  />
                  <span className="text-2xl cursor-pointer">-</span>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-sm mb-2">
                    <span>31000</span>
                    <span>تومان</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>31000</span>
                    <span>تومان</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* left */}
          <div className="border-[1px] rounded-lg w-[25%] py-5 px-6 bg-slate-50 dark:bg-[#0f172a] gap-6">
            <div className="flex items-center justify-between mb-6">
              <span>تعداد کالاها</span>
              <span>2</span>
            </div>

            <div className="flex justify-between mb-10">
              <span>جمع سبد خرید</span>
              <span>320000</span>
            </div>

            <div className="w-full flex justify-center">
              <button className="w-[80%] bg-[#ef4056] rounded-lg text-white py-3">
                ثبت سفارش
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Cart;
