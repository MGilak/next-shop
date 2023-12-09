import Link from "next/link";

const digi = [
  { title: "اتاق خبر دیجی‌کالا", link: "/" },
  { title: "فروش در دیجی‌کالا", link: "/" },
  { title: "فرصت‌های شغلی", link: "/" },
  { title: "گزارش تخلف در دیجی‌کالا", link: "/" },
  { title: "تماس با دیجی‌کالا", link: "/" },
  { title: "درباره دیجی‌کالا", link: "/" },
];

const Footer = () => {
  return (
    <footer className="mt-20 p-6 pb-4 bg-blue-50 dark:bg-[#0f172a] dark:border-t-[01px]">
      <div className=" container mx-auto">
        {/* up */}
        <div className="flex justify-between">
          {/* right */}
          <div className="flex justify-between w-[70%]">
            <div>
              <h1 className="font-bold text-[]17px mb-3">با دیجی‌کالا</h1>
              <ul className="flex flex-col gap-3 text-[14px] font-300">
                {digi.map((item) => (
                  <li
                    className="my_transition hover:text-[#ed1c35]"
                    key={item.title}
                  >
                    <Link href="/">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="font-bold text-[]17px mb-3">خدمات مشتریان</h1>
              <ul className="flex flex-col gap-3 text-[14px] font-300">
                {digi.map((item) => (
                  <li
                    className="my_transition hover:text-[#ed1c35]"
                    key={item.title}
                  >
                    <Link href="/">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="font-bold text-[]17px mb-3">
                راهنمای خرید از دیجی‌کالا
              </h1>
              <ul className="flex flex-col gap-3 text-[14px] font-300">
                {digi.map((item) => (
                  <li
                    className="my_transition hover:text-[#ed1c35]"
                    key={item.title}
                  >
                    <Link href="/">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* left */}
          <div className="w-[30%] flex flex-col items-end">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1 className="font-bold text-[17px]">همراه ما باشید!</h1>
              </div>

              <div className="flex gap-6">
                <span className="cursor-pointer">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    class="w-6 h-6 hover:text-red-600 "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                  </svg>
                </span>

                <span className="cursor-pointer">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    class="w-6 h-6 hover:text-blue-600 "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </span>

                <span className="cursor-pointer">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    class="w-6 h-6 hover:text-blue-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
                  </svg>
                </span>

                <span className="cursor-pointer">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    class="w-6 h-6 hover:text-red-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                  </svg>
                </span>
              </div>

              <p>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید.</p>

              <div className="flex gap-3">
                <input
                  className="bg-slate-100 rounded-lg px-4 py-3 ring-0 border-none outline-none w-full"
                  type="text"
                  placeholder="ایمیل شما"
                />

                <button className="bg-slate-100 rounded-lg px-4 py-3 ">
                  ثبت
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* down */}
        <div className="mt-10 ">
          <div className="bg-[#3c4b6d] rounded-lg p-4 flex justify-between">
            <div className=" flex items-center gap-5">
              <img
                className="w-12"
                src="https://www.digikala.com/statics/img/png/footerlogo2.webp"
                alt=""
              />
              <h1 className="text-white text-xl font-700">
                دانلود اپلیکیشن دیجی‌کالا
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <a href="/">
                <img
                  className="h-[44px]"
                  src="https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="h-[44px]"
                  src="https://www.digikala.com/statics/img/svg/appStores/myket.svg"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="h-[44px]"
                  src="https://www.digikala.com/statics/img/svg/appStores/sib-app.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
