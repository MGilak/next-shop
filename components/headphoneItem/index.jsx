import { useRouter } from "next/navigation";
import { finalPrice, toFarsiNumber, replace } from "../../utils";

const HeadphoneItem = ({ data }) => {
  const router = useRouter();

  const goToDetailsPage = () => {
    router.push(`/headphones/${data.brand}/${data.id}`);
  };

  // const finalPrice = (price) => {
  //   return price - (price * data.off) / 100;
  // };

  return (
    <section
      onClick={goToDetailsPage}
      className="dark:shadow-[0px_0px_7px_1px_rgba(255,255,255,0.3)] flex items-center justify-between flex-col hover:shadow-xl my_transition shadow-md h-[380px] py-3 cursor-pointer"
    >
      <img className="sm:w-2/3 w-[220px]" src={data.path} alt="" />
      <h3 className="text-[13px] font-600">{data.name}</h3>

      {/* details */}
      <div className="sm:w-full w-[250px] px-3 flex flex-col gap-4">
        {/* rate */}
        <div className="flex items-center justify-between w-full">
          <span className="text-xs">ارسال فردا</span>

          <div className="flex gap-1 items-center">
            <span>
              <label
                className="dv-star-rating-star dv-star-rating-full-star"
                htmlFor="product_rate_xiaomi-redmi-note-11-128-gb-graphite-gray_3"
                style={{
                  float: "right",
                  cursor: "pointer",
                  color: "rgb(255, 180, 0)",
                }}
              >
                <i style={{ fontStyle: "normal" }}>★</i>
              </label>
            </span>
            <span>{toFarsiNumber(data.star)}</span>
          </div>
        </div>

        {/* price */}
        <div className="flex flex-col">
          <div className="flex  justify-between flex-row-reverse">
            <span className="flex gap-1 ">
              <span>
                {replace(toFarsiNumber(finalPrice(data.price, data.off)))}
              </span>
              <span className="text-xs font-bold translate-y-[2px]">تومان</span>
            </span>

            <span
              className={`justify_center bg-red-700 rounded-lg text-[11px] text-white pl-1 pr-1 ${
                data.off === 0 && "invisible"
              }`}
            >
              <span className="translate-y-[2px]">
                {toFarsiNumber(data.off)}%
              </span>
            </span>
          </div>

          <div
            className={`line-through text-xs text-slate-400 text-left px-2 mt-1 ${
              data.off === 0 && "invisible"
            } `}
          >
            {replace(toFarsiNumber(data.price))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadphoneItem;
