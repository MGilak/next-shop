import Layout from "@/components/Layout";
import useStore from "../store/cart";
import Link from "next/link";
import { finalPrice, toFarsiNumber, replace } from "@/utils";
import { toast } from "react-toastify";

const Cart = () => {
  const carts = useStore((state) => state.carts);
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);
  const removeItem = useStore((state) => state.removeItem);

  const decreaseItem = (item) => {
    const product = carts.find((cart) => cart.id === item.id);
    if (product.qnt === 1) {
      removeItem(item);
      toast.error("محصول از سبد خرید حذف شد.");
    } else {
      decrease(item);
    }
  };

  const totalPay = () => {
    const totalPrice = carts.reduce(
      (acc, cart) => acc + finalPrice(cart.price, cart.off) * cart.qnt,
      0
    );

    return totalPrice;
  };

  return (
    <>
      <Layout>
        {carts.length > 0 ? (
          <section className="mt-10 container mx-auto flex items-start gap-2">
            {/* right */}
            <div
              className={`w-[75%]  flex flex-col gap-2 rounded-lg ${
                carts.length > 0 && "border-[1px] "
              }`}
            >
              {carts.map((item) => (
                <div className="flex justify-around items-center">
                  <div>
                    <img className="w-44" src={item.path} alt="" />
                  </div>

                  <div>
                    <h2 className="text-[15px] font-bold">{item.name}</h2>
                  </div>

                  <div className="flex gap-2 items-center">
                    <span
                      onClick={() => increase(item)}
                      className="text-2xl select-none cursor-pointer border-[1px] border-green-500 w-8 justify_center rounded-lg hover:bg-white bg-green-600 text-white hover:text-black my_transition"
                    >
                      +
                    </span>
                    <span
                      className="w-12 h-10 border-0 outline-none ring-0 text-center justify_center pt-1 font-bold"
                      type="number"
                    >
                      {item.qnt}
                    </span>
                    <span
                      onClick={() => decreaseItem(item)}
                      className="text-2xl select-none cursor-pointer border-[1px] border-red-400 w-8 justify_center rounded-lg hover:bg-white bg-red-600 text-white hover:text-black my_transition"
                    >
                      -
                    </span>
                  </div>

                  <div>
                    {item.off !== 0 && (
                      <div className="flex items-center gap-1 text-sm mb-2 line-through">
                        <span>{replace(toFarsiNumber(item.price))}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <span className="font-bold">
                        {replace(
                          toFarsiNumber(finalPrice(item.price, item.off))
                        )}
                      </span>
                      <span className="text-xs">تومان</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* left */}
            <div className="border-[1px] rounded-lg w-[25%] py-5 px-6 bg-slate-50 dark:bg-[#0f172a] gap-6">
              <div className="flex items-center justify-between mb-6">
                <span>تعداد کالاها</span>
                <span className="font-bold">
                  {replace(toFarsiNumber(carts.length))}
                </span>
              </div>

              <div className="flex justify-between mb-10">
                <span>جمع سبد خرید</span>
                <span className="font-bold">
                  {replace(toFarsiNumber(totalPay()))}
                </span>
              </div>

              <div className="w-full flex justify-center">
                <button className="w-[80%] bg-[#ef4056] rounded-lg text-white py-3">
                  <Link href="/">ثبت سفارش</Link>
                </button>
              </div>
            </div>
          </section>
        ) : (
          <section className="mt-10 container mx-auto w-full flex sm:justify-start justify-center px-3 sm:px-0">
            <div className="bg-[#ed1c35] text-white rounded-lg p-3 w-full sm:w-[600px] flex sm:flex-row flex-col gap-3 items-center justify-between">
              <h1 className="font-bold text-md sm:text-xl whitespace-nowrap">
                محصولی در سبد خرید نیست.
              </h1>

              <Link href="/headphones">
                <p className="text-[11px] whitespace-nowrap cursor-pointer bg-[#3c4b6d] text-white rounded-lg px-2 py-1">
                  بازگشت به صفحه محصولات
                </p>
              </Link>
            </div>
          </section>
        )}
      </Layout>
    </>
  );
};

export default Cart;
