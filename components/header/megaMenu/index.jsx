import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const MegaMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menu, setMenu] = useState();

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  useEffect(() => {
    const response = axios
      .get("http://localhost:4000/megamenu")
      .then((data) => {
        setMenu(data.data);
      });
  }, []);

  return (
    <>
      <div className="absolute -right-6">
        <div className="container mx-auto mt-6 h-[500px]">
          {/* right */}
          <div className="w-[250px]">
            <ul className="flex flex-col text-sm font-500 whitespace-nowrap dark:text-black">
              <li className="bg-slate-100 relative my_transition hover:bg-white w-full px-3 py-3">
                <Link href="/">موبایل</Link>
              </li>
              <li
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
                className="bg-slate-100 my_transition hover:bg-white w-full px-3 py-3"
              >
                <Link href="/headphones" className="text-red-600 ">
                  <div className="hand_shaking">کالای دیجیتال</div>
                </Link>

                <div
                  className={`absolute bg-slate-100 right-[252px] top-[66px] md:columns-2  lg:columns-3 xl:columns-4 px-10 py-3 block ${
                    !showMenu && "hidden"
                  }`}
                >
                  <div className="">
                    <ul className="">
                      <h1 className="mt-2 font-bold border-r-2 text-red-600">
                        لپ‌تاپ
                      </h1>
                      {menu &&
                        menu[0].map((item, index) => (
                          <li
                            key={index}
                            className="py-3 text-[13px] hover:text-red-600"
                          >
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <ul className="">
                      <h1 className="mt-2 font-bold text-red-600">هدفون</h1>
                      {menu &&
                        menu[1].map((item, index) => (
                          <li
                            key={index}
                            className="py-3 text-[13px] hover:text-red-600"
                          >
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <ul className="">
                      <h1 className="mt-2 font-bold text-red-600">
                        ساعت و مچ‌بند هوشمند
                      </h1>
                      {menu &&
                        menu[2].map((item, index) => (
                          <li
                            key={index}
                            className="py-3 text-[13px] hover:text-red-600"
                          >
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="bg-slate-100 my_transition hover:bg-white w-full px-3 py-3">
                <Link href="/">خودرو و موتورسیکلت</Link>
              </li>
              <li className="bg-slate-100 my_transition hover:bg-white w-full px-3 py-3">
                <Link href="/">کالای دیجیتال</Link>
              </li>
              <li className="bg-slate-100 my_transition hover:bg-white w-full px-3 py-3">
                <Link href="/">مد و پوشاک</Link>
              </li>
              <li className="bg-slate-100 my_transition hover:bg-white w-full px-3 py-3">
                <Link href="/">زیبایی و سلامت</Link>
              </li>
              <li className="bg-slate-100 my_transition hover:bg-white w-full px-3 py-3">
                <Link href="/">ورزش و سفر</Link>
              </li>
              <li className="bg-slate-100 my_transition hover:bg-white w-full px-3 py-3">
                <Link href="/">کالاهای سوپرمارکتی</Link>
              </li>
            </ul>
          </div>

          {/* left */}
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
{
  /* <div class="w-screen h-screen bg-[rgba(255,255,255, 0.5)] fixed top-0 left-0 z-10 blur-sm"></div> */
}
