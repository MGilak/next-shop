"use client";

import Link from "next/link";
import Image from "next/image";
import Layout from "../../../components/Layout";

import { useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const username = useRef("");
  const password = useRef("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("log from login page", username.current, password.current);

    try {
      const result = await signIn("credentials", {
        username: username.current,
        password: password.current,
        redirect: false,
        callbackUrl,
      });

      console.log("result", result);

      if (!result?.error) {
        router.push(callbackUrl);
      } else {
        setError("نام کاربری یا کلمه عبور اشتباه است.");
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <Layout>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-12">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  وارد اکانت خود شوید
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                  {error && (
                    <p className="text-center bg-red-300 py-4 mb-6 rounded">
                      {error}
                    </p>
                  )}
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
                      onChange={(e) => (username.current = e.target.value)}
                      required
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
                      onChange={(e) => (password.current = e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-7 py-2 text-sm rounded shadow bg-gray-600 hover:bg-gray-400 text-gray-200 w-full cursor-pointer"
                  >
                    ورود
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    اکانت نداری ؟{" "}
                    <Link
                      href="/auth/register"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      ثبت نام کن
                    </Link>
                  </p>
                </form>
                <button
                  type="button"
                  className="px-7 py-2 text-white text-sm rounded bg-gray-600 shadow-md hover:shadow-lg w-full flex justify-center items-center"
                  onClick={() => signIn("github", { callbackUrl: "/" })}
                >
                  ورود با گیت هاب{" "}
                  <span>
                    <svg
                      height="32"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="32"
                      data-view-component="true"
                      class="octicon octicon-mark-github v-align-middle color-fg-default"
                    >
                      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
