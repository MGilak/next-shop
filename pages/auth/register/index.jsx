"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [error, setError] = useState("");

  const fullname = useRef("");
  const username = useRef("");
  const password = useRef("");

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(
      `Fullname: ${fullname.current}, Username: ${username.current}, Password: ${password.current}`
    );

    alert(
      `Fullname: ${fullname.current}, Username: ${username.current}, Password: ${password.current}`
    );

    // try {
    //   const res = await fetch("https://domain.com/api/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       fullname: fullname.current,
    //       username: username.current,
    //       password: password.current,
    //     }),
    //   });
    //
    //   if (!res.ok) {
    //     setError((await res.json()).message);
    //     return;
    //   }
    //
    //   router.push("/api/auth/signin");
    // } catch (err) {
    //   setError(err);
    // }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              ثبت نام کنید
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
              {error && (
                <p className="text-center bg-red-300 py-4 mb-6 rounded">
                  {error}
                </p>
              )}
              <div>
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  نام و نام خانوادکی
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="نام و نام خانوادگی"
                  required
                  onChange={(e) => (fullname.current = e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  نام کاربری
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="نام کاربری"
                  required
                  onChange={(e) => (username.current = e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  کلمه عبور
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="کلمه عبور"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(e) => (password.current = e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="mx-2 my-5 px-6 py-2 text-sm rounded shadow bg-gray-600 hover:bg-gray-400 text-gray-200 w-full cursor-pointer"
              >
                ثبت نام
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                اکانت داری ؟{" "}
                <Link
                  href="/auth/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  وارد شو
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
