import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const MegaMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menu, setMenu] = useState([]);
  const [menuKey, setMenuKey] = useState(null);

  const showMenuHandler = (type, item) => {
    setMenuKey(item.id);

    if (type === "onMouseEnter") {
      setShowMenu(true);
    }
    if (type === "onMouseLeave") {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    axios.get("/api/data").then((data) => {
      setMenu(data.data.megamenu);
      console.log(menu);
    });
  }, []);

  return (
    <>
      <div className="absolute -right-6">
        <div className="container mx-auto mt-6 h-[500px]">
          {/* right */}
          <div className="w-[250px]">
            <ul className="flex flex-col text-sm font-500 whitespace-nowrap dark:text-black ">
              {menu &&
                menu.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => showMenuHandler("onMouseEnter", item)}
                    onMouseLeave={() => showMenuHandler("onMouseLeave", item)}
                    className="bg-slate-100 relative afterLi my_transition hover:bg-white w-full px-3 py-3"
                  >
                    <Link href="/">{item.name}</Link>

                    {item.item === null && item.id === menuKey && (
                      <div
                        className={`absolute h-[250px] w-[670px] bg-slate-100 right-[251px] top-0 md:columns-2  lg:columns-3 xl:columns-4 px-10 py-3 flex items-center justify-center ${
                          !showMenu && "hidden"
                        }`}
                      >
                        <div className="">
                          <h1 className="font-bold text-[17px] text-[#ef4056] ">
                            محصولات اضافه خواهند شد.
                          </h1>
                        </div>
                      </div>
                    )}

                    {item.item !== null && item.id === menuKey && (
                      <div
                        className={`absolute bg-slate-100 right-[251px] top-0 md:columns-2  lg:columns-3 xl:columns-4 px-10 py-3 block ${
                          !showMenu && "hidden"
                        }`}
                      >
                        <div>
                          {item.item.map((m) => (
                            <ul className="">
                              <h1 className="mt-2 font-bold border-r-2 text-red-600">
                                <Link href={m.url}>{m.name}</Link>
                              </h1>
                              {m.items.map((item, index) => (
                                <li
                                  key={index}
                                  className="py-3 text-[13px] hover:text-red-600"
                                >
                                  <Link href={item.url}>{item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* )} */}
                  </li>
                ))}
            </ul>
          </div>

          {/* left */}
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
