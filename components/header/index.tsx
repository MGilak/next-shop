import Image from "next/image";

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between p-5 ">
      {/* right */}
      <div className="flex gap-10 items-center w-[60%]">
        <div>
          <Image
            src="./images/header/logo.svg"
            width={100}
            height={100}
            alt="logo-header"
          />
        </div>

        {/* search */}
        <div className="flex items-center gap-5 bg-slate-200 px-4 py-4  w-full rounded-lg">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              style={{ color: "rgb(156 163 175)" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
              ></path>
            </svg>
          </div>

          <input
            className="bg-transparent text-[15px] w-full text-gray-400 ring-0 border-none outline-none"
            type="text"
            placeholder="جست‌وجو..."
          />
        </div>
      </div>

      {/* left */}
      <div className="flex items-center gap-5 ">
        {/* login */}
        <div className="flex items-center gap-2 border-[1px] border-gray-200 rounded-lg px-2 py-1 cursor-pointer">
          <span>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fontSize: "1.6rem" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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

        {/* line */}
        <div className="w-[2px] h-6 bg-gray-200"></div>

        {/* cart */}
        <div className="relative cursor-pointer">
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              style={{ fontSize: "1.6rem" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
            </svg>
          </span>

          <span className="absolute -top-2 -right-2 text-xs bg-green-700 text-white w-4 h-4 rounded-full flex items-center justify-center pt-1">
           0
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
