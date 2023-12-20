import Layout from "../components/Layout";
import useStore from "../store/cart";
import Link from "next/link";
import { finalPrice, toFarsiNumber, replace } from "../utils";
import { toast } from "react-toastify";
import { RiDeleteBinLine } from "react-icons/ri";

// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

const Cart = () => {
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("api/auth/signin?callbackUrl=/cart");
  //   },
  // });

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
        <div className="mb-20">
          {carts.length > 0 ? (
            <section className="mt-10 container mx-auto flex md:flex-row flex-col items-start gap-2 sm:px-0 px-4">
              {/* right */}
              <div
                className={`md:w-[75%] w-[100%] flex flex-col gap-2 rounded-lg ${
                  carts.length > 0 && "border-[1px] "
                }`}
              >
                {carts.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-around items-center lg:gap-0 gap-2 px-3 lg:px-0 py-3 sm:py-0"
                  >
                    <div>
                      <img className="w-44" src={item.path} alt={item.name} />
                    </div>

                    <div>
                      <h2 className="text-[13px] lg:text-[15px] font-bold">
                        {item.name}
                      </h2>
                    </div>

                    <div className="flex sm:gap-7 sm:flex-row flex-col">
                      <div className="flex lg:gap-2 items-center">
                        <span
                          onClick={() => increase(item)}
                          className="text-2xl dark:text-white select-none cursor-pointer border-2 hover:border-green-500 w-7 h-7 lg:w-8 lg:h-8 justify_center rounded-lg hover:text-black my_transition"
                        >
                          +
                        </span>

                        <span
                          className="w-12 h-10 border-0 outline-none ring-0 text-center justify_center pt-1 font-bold"
                          type="number"
                        >
                          {item.qnt}
                        </span>

                        <span>
                          {item.qnt === 1 ? (
                            <RiDeleteBinLine
                              onClick={() => decreaseItem(item)}
                              className="text-2xl text-red-400 cursor-pointer"
                            />
                          ) : (
                            <span
                              onClick={() => decreaseItem(item)}
                              className="text-2xl dark:text-white select-none cursor-pointer border-2 hover:border-red-400  w-7 h-7 lg:w-8 lg:h-8 justify_center rounded-lg my_transition"
                            >
                              -
                            </span>
                          )}
                        </span>
                      </div>

                      <div>
                        {item.off !== 0 && (
                          <div className="flex  items-center gap-1 text-sm mb-2 line-through">
                            <span className=" w-full sm:text-right text-center">
                              {replace(toFarsiNumber(item.price))}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-center sm:justify-start items-center gap-1">
                          <span className="font-bold sm:text-[16px] text-[13px]">
                            {replace(
                              toFarsiNumber(finalPrice(item.price, item.off))
                            )}
                          </span>
                          <span className="text-xs">تومان</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* left */}
              <div className="border-[1px] rounded-lg md:w-[25%] w-[100%]  py-5 px-6 bg-slate-50 dark:bg-[#0f172a] gap-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[13px] lg:text-[16px]">
                    تعداد کالاها
                  </span>
                  <span className="font-bold text-[14px] lg:text-[16px]">
                    {replace(toFarsiNumber(carts.length))}
                  </span>
                </div>

                <div className="flex justify-between mb-10">
                  <span className="text-[13px] lg:text-[16px]">
                    جمع سبد خرید
                  </span>
                  <span className="font-bold text-[15px] lg:text-[16px]">
                    {replace(toFarsiNumber(totalPay()))}
                  </span>
                </div>

                <div className="w-full flex justify-center">
                  <button className="w-[80%] bg-[#ef4056] rounded-lg text-white py-2 lg:py-3 text-[15px] lg:-[text-16px]">
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

                <Link href="/headphones/all">
                  <p className="text-[11px] whitespace-nowrap cursor-pointer bg-[#3c4b6d] text-white rounded-lg px-2 py-1">
                    بازگشت به صفحه محصولات
                  </p>
                </Link>
              </div>
            </section>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Cart;
