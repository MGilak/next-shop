import Layout from "@/components/Layout";

const Cart = () => {
  return (
    <>
      <Layout>
        <section className="mt-10 container mx-auto">
          {/* right */}
          <div className="w-[75%]  flex flex-col gap-2 border-2 rounded-lg">
            <div className="flex justify-around items-center">
              <div>
                <img className="w-44" src="./images/headphones/1.webp" alt="" />
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

            <div className="flex justify-around items-center border-t-2">
              <div>
                <img className="w-44" src="./images/headphones/1.webp" alt="" />
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
          </div>

          {/* left */}
          <div></div>
        </section>
      </Layout>
    </>
  );
};

export default Cart;
