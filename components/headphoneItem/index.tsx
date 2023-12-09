const HeadphoneItem = () => {
  return (
    <section className="flex items-center justify-between flex-col hover:shadow-xl my_transition shadow-md h-[380px] py-3 cursor-pointer">
      <img
        className="w-2/3"
        src="https://dkstatics-public.digikala.com/digikala-products/24f2b572f9f1a75e4ad77d2ad37cf7096bfa9927_1683459327.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        alt=""
      />
      <h3 className="text-[13px] font-600">
        هدفون بلوتوثی کیو سی وای مدل T13 ANC
      </h3>

      {/* details */}
      <div className="w-full px-3 flex flex-col gap-4">
        {/* rate */}
        <div className="flex items-center justify-between w-full">
          <span className="text-xs">ارسال فردا</span>

          <div className="flex items-center">
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
            <span>4.4</span>
          </div>
        </div>

        {/* price */}
        <div className="flex flex-col">
          <div className="flex  justify-between flex-row-reverse">
            <span>
              <span>87200</span>
              <span className="text-xs font-bold">تومان</span>
            </span>

            <span className="justify_center bg-red-700 rounded-lg text-[11px] text-white pl-1 pr-1">
              <span className="translate-y-[2px]">28%</span>
            </span>
          </div>

          <div className="line-through text-xs text-slate-400 text-left px-2 mt-1">
            221000
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadphoneItem;
