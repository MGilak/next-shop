import { toFarsiNumber, replace } from "../../utils/index";
import { useRouter } from "next/navigation";

const SuggestItem = ({ data }) => {
  const router = useRouter();
  const goToDetailsPage = () => {
    router.push(`/headphones/${data.brand}/${data.id}`);
  };

  return (
    <div onClick={goToDetailsPage} className="bg-white h-full cursor-pointer">
      <div className="h-full flex flex-col justify-around">
        <div className="w-full justify_center ">
          <img className="w-[135px] object-cover" src={data.path} alt="" />
        </div>

        <div className="bg-white mt-2 px-2">
          <div className="flex flex-row-reverse justify-between">
            <span className="flex items-center justify-between px-2 gap-1">
              <span className="text-[14px]">
                {replace(toFarsiNumber(data.price))}
              </span>
              <span className="text-xs -translate-y-[3px]">تومان</span>
            </span>

            <span className="justify_center w-6 h-5 bg-red-600 rounded-lg text-[11px] text-white pl-1 pr-1">
              <span className="translate-y-[2px]">
                {replace(toFarsiNumber(data.off))}٪
              </span>
            </span>
          </div>

          <div className="line-through text-xs text-slate-400 text-left px-2 mt-1">
            {replace(toFarsiNumber(221000))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestItem;
