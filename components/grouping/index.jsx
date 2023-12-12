const Grouping = ({ data }) => {
  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="justify_center font-800 text-[22px]">
          <h1 className="text-lg sm:text-xl md:text-2xl">خرید بر اساس دسته‌بندی</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-[10px] mt-10">
          {data.map((item) => (
            <div className="lg:w-[190px] sm:w-[150px] w-[120px] justify_center flex-col gap-4 cursor-pointer">
              <img className="w-[80%]" src={item.url} alt={item.name} />
              <span className="text-sm font-700">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Grouping;
