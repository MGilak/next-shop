import Link from "next/link";

const MegaMenu = () => {
  return (
    <>
      <div className="container mx-auto mt-6 w-[50vw]">
        {/* right */}
        <div className="w-[25%]">
          <ul className="flex flex-col text-sm font-500 whitespace-nowrap dark:text-black">
            <li className="bg-slate-100 my_transition hover:bg-white w-full px-3 py-3">
              <Link href="/">موبایل</Link>
            </li>
            <li className="bg-slate-100 my_transition hover:bg-white w-full px-3 py-3">
              <Link href="/">کالای دیجیتال</Link>
            </li>
            <li className="bg-slate-100 my_transition hover:bg-white w-full px-3 py-3">
              <Link href="/">خودرو و موتورسیکلت</Link>
            </li>
            <li className="bg-slate-100 my_transition hover:bg-white w-full px-3 py-3">
              <Link href="/">کالای دیجیتال</Link>
            </li>
            <li className="bg-slate-100 my_transition hover:bg-white w-full px-3 py-3">
              <Link href="/">کالای دیجیتال</Link>
            </li>
          </ul>
        </div>

        {/* left */}
      </div>
    </>
  );
};

export default MegaMenu;
