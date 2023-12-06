const SuggestItem = () => {
  return (
    <div className="bg-white h-full ">
      <div className="">
        <img
          className="w-full h-full"
          src="https://dkstatics-public.digikala.com/digikala-products/efe2ac731d1107dbbcc87168b22f06b65d853310_1697030626.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          alt=""
        />

        <div className="bg-white mt-2">
          <div className="flex gap-3 flex-row-reverse">
            <span className="flex items-center justify-between px-2">
              <span className="text-[14px]">199000</span>
              <span className="text-xs">تومان</span>
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
    </div>
  );
};

export default SuggestItem;
