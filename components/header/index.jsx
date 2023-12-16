import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { IoMdArrowDropdown, IoIosArrowBack } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";

import useStore from "../../store/cart";
import useDarkMode from "../../store/dark";
import MegaMenu from "./megaMenu";

import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

const Header = () => {
  const { data: session } = useSession({
    // required: true,
    // onUnauthenticated() {
    //   redirect("api/auth/signin?callbackUrl=/");
    // },
  });

  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showPannel, setShowPannel] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const carts = useStore((state) => state.carts);
  const mode = useDarkMode((state) => state.mode);
  const changeModeHandler = useDarkMode((state) => state.changeMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode);
  }, [mode]);

  // const sideMenuHandler = () => {
  //   setShowSideMenu
  // }

  const closeSideMenu = (e) => {
    setShowSideMenu(false);
  };

  const preventClick = (e) => {
    e.stopPropagation();
  };

  // const goToHeadphones = (e) => {
  //   e.stopPropagation();
  // };

  return (
    <div>
      <header className="flex items-center justify-between py-5 mx-16 z-500">
        {/* right */}
        <div className="flex gap-10 items-center w-full md:w-[60%]">
          <div>
            <Link
              href="/
            "
            >
              <Image
                src="/images/header/logo.svg"
                width={100}
                height={100}
                alt="logo-header"
              />
            </Link>
          </div>

          {/* search */}
          <div className="flex items-center gap-5 bg-slate-200 px-4 py-4  w-full rounded-lg">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                style={{ color: "rgb(156 163 175)" }}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
                ></path>
              </svg>
            </div>

            <input
              className="bg-transparent text-[15px] w-full text-gray-400 ring-0 border-none outline-none"
              type="text"
              placeholder="دنبال چی هستی؟"
            />
          </div>
        </div>

        {/* left */}
        <div className="md:flex hidden items-center gap-5 ">
          {/* login */}
          {session?.user ? (
            <div className="relative">
              <div
                onClick={() => setShowPannel(!showPannel)}
                className="flex items-center"
              >
                <span className="cursor-pointer">
                  <IoPersonOutline className="text-2xl" />
                </span>

                <span>
                  <IoMdArrowDropdown />
                </span>
              </div>

              {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh */}
              <div
                className={`absolute bg-white z-10 shadow-lg rounded-lg w-[200px] left-0 mt-3 py-3 block ${
                  !showPannel && "hidden"
                }`}
              >
                <div className="flex items-center w-full justify-between hover:bg-slate-100 mb-1 p-3 cursor-pointer">
                  <span className="text-sm">محمود گیلک</span>
                  <span>
                    <IoIosArrowBack />
                  </span>
                </div>

                <Link href="http://localhost:3000/api/auth/signout">
                  <div className="flex items-center w-full justify-between hover:bg-slate-100 p-3 cursor-pointer">
                    <span>
                      <FaArrowRightFromBracket className="text-lg" />
                    </span>
                    <span className="text-sm">خروج از حساب کاربری</span>
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <Link href="auth/login/page">
              <div className="flex items-center gap-2 border-[1px] border-gray-200 rounded-lg px-2 py-1 cursor-pointer">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fontSize: "1.6rem" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </span>

                <div className="flex items-center gap-2 font-light text-xs ">
                  <span>ورود</span>
                  <div className="w-[1.2px] h-3 bg-black"></div>
                  <span>ثبت‌نام</span>
                </div>
              </div>
            </Link>
          )}

          {/* line */}
          <div className="w-[2px] h-6 bg-gray-200"></div>

          {/* cart */}
          <div className="relative cursor-pointer">
            <Link href="/cart">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  style={{ fontSize: "1.6rem" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                </svg>
              </span>
            </Link>

            <span
              className={`absolute -top-2 -right-2 text-xs bg-green-700 text-white w-4 h-4 rounded-full flex items-center justify-center pt-1 ${
                carts.length === 0 && "bg-red-700"
              }`}
            >
              {carts.length}
            </span>
          </div>

          <span onClick={changeModeHandler} className="cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fontSize: " 1.3rem",
                filter: "drop-shadow(rgba(0, 0, 0, 0.3) 0px 0px 5px)",
              }}
            >
              <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
            </svg>
          </span>
        </div>
      </header>

      <div className="flex justify-between mx-16">
        {/* menu icon responsive */}
        <div
          onClick={() => setShowSideMenu(true)}
          className="md:hidden block cursor-pointer"
        >
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 8 16"
              style={{ fontSize: "2rem" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"
              ></path>
            </svg>
          </span>
        </div>

        {/* menu in responsive */}
        <div
          onClick={() => setShowSideMenu(false)}
          className={` ${
            showSideMenu ? "translate-x-0" : "translate-x-[850px]"
          }  my_transition backdrop-blur-sm fixed top-0 bottom-0 right-0 w-[300px] h-screen z-40 block md:hidden`}
        >
          <div
            onClick={closeSideMenu}
            className="w-screen fixed h-screen flex items-center"
          >
            <div
              onClick={preventClick}
              className="w-[40%] h-[80%] bg-white flex items-center"
            >
              <ul className="flex flex-col gap-5 text-sm font-500 whitespace-nowrap dark:text-black">
                <li className="relative my_transition hover:bg-white w-full px-3 py-3">
                  <Link href="/">موبایل</Link>
                </li>
                <li className="my_transition hover:bg-white w-full px-3 py-3">
                  <Link href="/headphones" className="text-red-600">
                    کالای دیجیتال
                  </Link>
                </li>
                <li className="my_transition hover:bg-white w-full px-3 py-3">
                  <Link href="/">خودرو و موتورسیکلت</Link>
                </li>
                <li className="my_transition hover:bg-white w-full px-3 py-3">
                  <Link href="/">کالای دیجیتال</Link>
                </li>
                <li className="my_transition hover:bg-white w-full px-3 py-3">
                  <Link href="/">مد و پوشاک</Link>
                </li>
                <li className="my_transition hover:bg-white w-full px-3 py-3">
                  <Link href="/">زیبایی و سلامت</Link>
                </li>
                <li className="my_transition hover:bg-white w-full px-3 py-3">
                  <Link href="/">ورزش و سفر</Link>
                </li>
                <li className="my_transition hover:bg-white w-full px-3 py-3">
                  <Link href="/">کالاهای سوپرمارکتی</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* end of menu in responsive */}

        <div className="md:flex hidden items-center gap-4 mt-2 z-20">
          <div
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
            className="flex items-center cursor-pointer relative"
          >
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 8 16"
                style={{ fontSize: "2rem" }}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"
                ></path>
              </svg>
            </span>
            <div className="items_center text-[15px] font-600 group">
              <span>دسته‌بندی کالاها</span>
              <div
                className={`absolute top-6 block z-20 ${!showMenu && "hidden"}`}
              >
                <MegaMenu />
              </div>
            </div>
          </div>

          <nav>
            <ul className="flex items-center gap-3 text-[13px] text-slate-400/90">
              <li>
                <Link href="/">شگفت‌انگیزها</Link>
              </li>
              <li>
                <Link href="/">پرفروش‌ترین‌ها</Link>
              </li>
              <li>
                <Link href="/">تخفیف‌ها و پیشنهادها</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-5 md:hidden">
          {/* login */}
          <div>
            <span className="cursor-pointer">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fontSize: "1.6rem" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                ></path>
              </svg>
            </span>
          </div>

          {/* line */}
          <div className="w-[2px] h-6 bg-gray-200"></div>

          {/* cart */}
          <div className="relative cursor-pointer">
            <Link href="/cart">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  style={{ fontSize: "1.6rem" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                </svg>
              </span>
            </Link>

            <span
              className={`absolute -top-2 -right-2 text-xs bg-green-700 text-white w-4 h-4 rounded-full flex items-center justify-center pt-1 ${
                carts.length === 0 && "bg-red-700"
              }`}
            >
              {carts.length}
            </span>
          </div>

          <span onClick={changeModeHandler} className="cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fontSize: " 1.3rem",
                filter: "drop-shadow(rgba(0, 0, 0, 0.3) 0px 0px 5px)",
              }}
            >
              <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
            </svg>
          </span>
        </div>
      </div>

      <div
        className={`w-screen h-screen fixed bottom-0 left-0 top-28 z-[5] backdrop-blur-sm ${
          !showMenu && "hidden"
        }`}
      ></div>
    </div>
  );
};

export default Header;

// import React from 'react';

// const ParentComponent = () => {
//   const handleClick = (e) => {
//     e.stopPropagation();
//     // این قسمت برای کد کلیک روی تگ والد اضافه کنید
//   }

//   return (
//     <div onClick={handleClick}>
//       <ChildComponent />
//     </div>
//   );
// }

// const ChildComponent = () => {
//   const handleChildClick = () => {
//     // این قسمت برای کد کلیک روی تگ فرزند اضافه کنید
//   }

//   return (
//     <div onClick={handleChildClick}>
//       Click me
//     </div>
//   );
// }

// export default ParentComponent;
